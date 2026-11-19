// Contrôle documentaire local des maquettes uniquement ; aucun test de l'application.
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const { spawn } = require('child_process');
const { pathToFileURL } = require('url');
const yaml = require(path.resolve(process.cwd(), 'node_modules/js-yaml'));
const root = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const frontmatter = s => yaml.load(s.match(/^---\r?\n([\s\S]*?)\r?\n---/)[1]);
const design = read('DESIGN.md'), experience = read('EXPERIENCE.md');
const tokens = frontmatter(design);
const failures = [];
const refs = [...new Set([...`${design}\n${experience}`.matchAll(/\{([a-z][a-z0-9-]*(?:\.[a-z0-9-]+)+)\}/gi)].map(m => m[1]))];
function getToken(key) { return key.split('.').reduce((v,k)=>v?.[k],tokens); }
for (const key of refs) if (getToken(key) === undefined) failures.push(`Token absent : ${key}`);
for (const [key,value] of Object.entries(tokens.colors)) if (!/^#[0-9A-F]{6}$/i.test(value)) failures.push(`Couleur invalide : ${key}`);
const components = Object.keys(tokens.components);
for (const c of components) for (const [name,doc] of [['DESIGN',design],['EXPERIENCE',experience]]) if (!doc.includes(`| \`${c}\` |`)) failures.push(`Composant ${c} absent de ${name}`);
function luminance(hex) { const a=hex.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*a[0]+.7152*a[1]+.0722*a[2]; }
function contrast(a,b) { const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05); }
const pairs=[['ink','surface',4.5],['ink-muted','surface',4.5],['ink-muted','background',4.5],['on-primary','primary',4.5],['on-primary','primary-hover',4.5],['new-ink','new-bg',4.5],['progress-ink','progress-bg',4.5],['done-ink','done-bg',4.5],['error-ink','error-bg',4.5],['input-border','surface',3],['focus','surface',3],['focus-inverse','primary',3]];
const contrasts=pairs.map(([a,b,minimum])=>{const ratio=contrast(tokens.colors[a],tokens.colors[b]);if(ratio<minimum)failures.push(`Contraste insuffisant ${a}/${b}`);return {foreground:a,background:b,ratio:+ratio.toFixed(2),minimum};});
const files=fs.readdirSync(path.join(root,'mockups')).filter(x=>x.endsWith('.html'));
const htmlChecks=[];
for (const f of files) {
  const html=read('mockups/'+f),ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  const duplicates=[...new Set(ids.filter((id,i)=>ids.indexOf(id)!==i))];
  if(duplicates.length)failures.push(`ID dupliqué ${f} : ${duplicates.join(', ')}`);
  const links=[...html.matchAll(/\bhref="([^"]+)"/g)].map(m=>m[1]);
  for(const link of links) {
    const [file,anchor]=link.split('#');
    if(!file&&anchor&&!ids.includes(anchor))failures.push(`Ancre absente ${f}#${anchor}`);
    if(file&&!fs.existsSync(path.resolve(root,'mockups',file)))failures.push(`Lien absent ${f} -> ${file}`);
  }
  for(const m of html.matchAll(/<label[^>]*\bfor="([^"]+)"/g))if(!ids.includes(m[1]))failures.push(`Libellé sans champ ${f}/${m[1]}`);
  if(/<script\b|<link\b|<iframe\b|\b(?:src|action)="https?:|@import|url\(\s*https?:/i.test(html))failures.push(`Dépendance ou script externe ${f}`);
  if(/<form\b/i.test(html))failures.push(`Formulaire pouvant soumettre dans la maquette ${f}`);
  const states=[...html.matchAll(/<section class="state(?: default)?" id="([^"]+)"/g)].map(m=>m[1]);
  for(const id of ['complet','vide','chargement','erreur'])if(!states.includes(id))failures.push(`État ${id} absent de ${f}`);
  htmlChecks.push({file:f,states,offline:true,scripts:0,duplicateIds:duplicates});
}
for(const doc of ['DESIGN.md','EXPERIENCE.md'])for(const m of read(doc).matchAll(/\]\(([^)]+)\)/g)){const p=m[1].split('#')[0];if(!/^https?:/.test(p)&&p&&!fs.existsSync(path.resolve(root,p)))failures.push(`Lien documentaire absent ${doc} -> ${p}`);}
const prd=path.resolve(root,frontmatter(design).sources[0]);
const report={checkedAt:new Date().toISOString(),scope:'Contrôle local direct des documents et maquettes ; aucune relecture par sous-agents, aucun test de l’application.',prdSha256:crypto.createHash('sha256').update(fs.readFileSync(prd)).digest('hex'),tokenReferences:refs.length,components:components.length,contrasts,html:htmlChecks,browser:[],failures};
const pause=ms=>new Promise(r=>setTimeout(r,ms));
async function inspectBrowser(){
  const profile=fs.mkdtempSync(path.join(os.tmpdir(),'nova-ux-cdp-'));
  const edge='C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
  const child=spawn(edge,['--headless','--disable-gpu','--disable-background-networking','--disable-sync','--disable-extensions','--no-first-run','--no-default-browser-check','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{windowsHide:true,stdio:'ignore'});
  child.on('error',e=>{throw e;});
  let socket,port;
  try {
    for(let i=0;i<100;i++){if(fs.existsSync(path.join(profile,'DevToolsActivePort')))break;await pause(100);}
    const active=fs.readFileSync(path.join(profile,'DevToolsActivePort'),'utf8').split('\n');port=active[0];
    let pages=[];for(let i=0;i<30;i++){pages=await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();if(pages.some(x=>x.type==='page'))break;await pause(100);}
    socket=new WebSocket(pages.find(x=>x.type==='page').webSocketDebuggerUrl);
    await new Promise((resolve,reject)=>{socket.addEventListener('open',resolve,{once:true});socket.addEventListener('error',reject,{once:true});});
    let seq=0;const pending=new Map(),events=new Map();
    socket.addEventListener('message',event=>{const d=JSON.parse(event.data);if(d.id&&pending.has(d.id)){const p=pending.get(d.id);pending.delete(d.id);d.error?p.reject(Error(d.error.message)):p.resolve(d.result)}else if(d.method&&events.has(d.method)){const cb=events.get(d.method);events.delete(d.method);cb(d.params)}});
    const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});socket.send(JSON.stringify({id,method,params}));});
    const waitEvent=name=>new Promise(resolve=>{const timer=setTimeout(()=>{events.delete(name);resolve(null)},4000);events.set(name,data=>{clearTimeout(timer);resolve(data)})});
    await send('Page.enable');await send('Runtime.enable');
    const cases=[];
    for(const width of [1440,1280,360])for(const file of files)cases.push({file,width,state:'complet',capture:width!==1280});
    cases.push({file:'formulaire-public.html',width:1280,state:'email-echec',capture:true},{file:'formulaire-public.html',width:360,state:'erreur'},{file:'liste-demandes.html',width:360,state:'vide'},{file:'liste-demandes.html',width:1280,state:'sans-resultat'},{file:'detail-demande.html',width:360,state:'erreur',capture:true},{file:'detail-demande.html',width:1280,state:'conflit'},{file:'detail-demande.html',width:1440,state:'administrateur',capture:true},{file:'detail-demande.html',width:360,state:'acces-refuse'});
    for(const c of cases){
      const height=c.width===360?1000:1100;
      await send('Emulation.setDeviceMetricsOverride',{width:c.width,height,deviceScaleFactor:1,mobile:false});
      const loaded=waitEvent('Page.loadEventFired');await send('Page.navigate',{url:pathToFileURL(path.join(root,'mockups',c.file)).href+'#'+c.state});await loaded;
      const evaluated=await send('Runtime.evaluate',{expression:`JSON.stringify({width:innerWidth,clientWidth:document.documentElement.clientWidth,scrollWidth:Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),visibleStates:[...document.querySelectorAll('.state')].filter(x=>getComputedStyle(x).display!=='none').map(x=>x.id),rowCount:document.querySelector('#complet tbody')?.rows.length||0,cardsVisible:document.querySelector('#complet .request-cards')?getComputedStyle(document.querySelector('#complet .request-cards')).display:null})`,returnByValue:true});
      const observed=JSON.parse(evaluated.result.value);const result={file:c.file,width:c.width,state:c.state,...observed};
      if(observed.scrollWidth>observed.clientWidth+1)failures.push(`Débordement ${c.file} ${c.width}px #${c.state}`);
      if(observed.visibleStates.length!==1||observed.visibleStates[0]!==c.state)failures.push(`État affiché incorrect ${c.file}#${c.state}`);
      if(c.file==='liste-demandes.html'&&c.state==='complet'&&observed.rowCount!==25)failures.push('La page de liste ne contient pas 25 lignes');
      if(c.capture){const name=c.file.replace('.html','')+'-'+c.width+'-'+c.state+'.png';const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(path.join(root,'.working',name),Buffer.from(shot.data,'base64'));result.capture='.working/'+name;}
      report.browser.push(result);console.log(`${c.file} ${c.width}px #${c.state}: ${observed.scrollWidth<=observed.clientWidth+1?'OK':'DÉBORDEMENT'}`);
    }
    const browserSocket=new WebSocket(`ws://127.0.0.1:${port}${active[1]}`);await new Promise(resolve=>browserSocket.addEventListener('open',resolve,{once:true}));browserSocket.send(JSON.stringify({id:1,method:'Browser.close'}));browserSocket.close();
  } finally { if(socket)socket.close(); if(!child.killed)child.kill(); }
}
(async()=>{try{await inspectBrowser()}catch(e){failures.push('Inspection navigateur non terminée : '+e.message);console.error(e.message)}fs.writeFileSync(path.join(root,'controle-local.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({tokens:refs.length,components:components.length,contrastPairs:contrasts.length,browserCases:report.browser.length,failures},null,2));process.exitCode=failures.length?1:0;})();

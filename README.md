# Projet IA

Projet Next.js avec React, TypeScript, Tailwind CSS, ESLint et App Router.

## BMAD Method

BMAD Method 6.12.4 est installé pour Codex, avec les modules Core et BMad Method et 29 compétences dans `.agents/skills/`.

- Configuration et workflows : `_bmad/`.
- Documents générés : `_bmad-output/`.
- Langue des échanges et des documents : français.
- Prérequis des scripts BMAD : `uv` (qui gère également Python).

Pour commencer, demandez à Codex d’utiliser `bmad-help`. Pour une fonctionnalité ou un correctif, demandez d’utiliser `bmad-build` en décrivant le changement.

Installation ou mise à jour depuis ce dossier :

```powershell
npx.cmd bmad-method@latest install
```

## Démarrer en local

### Configurer Supabase

Les SDK `@supabase/supabase-js` et `@supabase/ssr` sont installés. Pour connecter votre projet Supabase, récupérez son URL et sa clé publique **publishable** dans le panneau **Connect** du dashboard Supabase, puis créez votre configuration locale :

```powershell
Copy-Item .env.example .env.local
```

Complétez les deux variables dans `.env.local` :

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

`.env.local` est ignoré par Git. Utilisez uniquement la clé publique ici, jamais une clé secrète ou `service_role`. Redémarrez le serveur après modification ; en production, reconstruisez l’application car les variables `NEXT_PUBLIC_*` sont intégrées au bundle.

Depuis un Client Component, utilisez `createClient` de `@/lib/supabase/client`. Depuis une Server Action, un Route Handler ou un Server Component, utilisez la factory asynchrone `createClient` de `@/lib/supabase/server` :

```ts
import { createClient } from "@/lib/supabase/server";

// Dans une fonction serveur asynchrone :
const supabase = await createClient();
const { data, error } = await supabase.auth.getClaims();
```

Le proxy `src/proxy.ts` rafraîchit les sessions par cookies sans imposer d’authentification sur l’accueil. Sans configuration, l’accueil fonctionne et les factories Supabase expliquent quelles variables renseigner. La vérification de droits reste obligatoire dans chaque future action ou route privée. Les accès aux tables avec la clé publique doivent être autorisés par vos politiques Row Level Security (RLS).

Les futurs Route Handlers qui modifient une session doivent renvoyer une réponse privée non mise en cache (`Cache-Control: private, no-store`) et ne doivent pas être configurés en rendu statique. Le proxy applique les en-têtes anti-cache du SDK lors de son propre rafraîchissement.

Avec Cache Components, placez les Server Components utilisant ce client sous une limite `<Suspense>` et gardez les lectures de session hors des blocs `use cache`. Aucune table ni interface de connexion n’est créée par cette installation. La connexion distante ne peut être vérifiée qu’après saisie des paramètres réels.

Référence : [guide Supabase pour Next.js](https://supabase.com/docs/guides/auth/server-side/creating-a-client?framework=nextjs).

### Lancer Next.js

Node.js **22 ou plus récent** et npm doivent être installés (prérequis des SDK Supabase). Après une première installation de Node.js, ouvrez un nouveau terminal pour actualiser le PATH.

Depuis ce dossier :

```powershell
npm.cmd run dev
```

Ouvrez http://localhost:3000. La page principale se trouve dans `src/app/page.tsx` ; les modifications sont rechargées automatiquement.

Les dépendances sont déjà installées. Pour les réinstaller à partir du fichier de verrouillage :

```powershell
npm.cmd ci
```

## Vérifier et compiler

```powershell
npm.cmd run lint
npm.cmd test
npm.cmd run build
npm.cmd start
```

`start` lance la version de production après une compilation réussie. Le modèle utilise Google Fonts ; la compilation initiale nécessite un accès Internet pour télécharger les polices.

`test` vérifie la configuration et la gestion des cookies/en-têtes de session Supabase avec un SDK simulé ; il ne teste pas la connexion à un projet distant.

Sous PowerShell, `npm.cmd` évite les restrictions éventuelles sur les scripts `npm.ps1`. Les commandes `npm` habituelles fonctionnent également lorsque la politique d’exécution les autorise.

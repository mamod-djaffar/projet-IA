---
title: 'Intégration Supabase dans Next.js'
type: 'feature'
created: '2026-11-15'
status: 'done'
route: 'oneshot'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problème :** Le projet Next.js doit pouvoir utiliser Supabase depuis le navigateur et le serveur. Il ne possède encore ni dépendances ni configuration de connexion.

**Approche :** Installer les SDK officiels, exposer des factories navigateur et serveur avec sessions par cookies, et préparer les variables d’environnement et la documentation. Le proxy Next.js rafraîchit les sessions sans imposer de connexion sur l’accueil. La configuration distante reste à compléter avec l’URL et la clé publique du projet de l’utilisateur ; aucune création de ressource distante, migration ou interface de connexion n’est requise par cette intégration.

</frozen-after-approval>

## Implementation Notes

- Investigation : Next.js 16.4.6, App Router dans `src/app`, alias `@/*`, TypeScript strict, Cache Components activé. Projet sans Git disponible ; contrôle VCS inapplicable.
- Choix techniques : `@supabase/supabase-js` et `@supabase/ssr`, factories dans `src/lib/supabase/`, entrée `src/proxy.ts`, variables explicites `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. `await cookies()` côté serveur ; client propre à chaque requête. Conserver les cookies et en-têtes anti-cache du rafraîchissement.
- Périmètre limité et réversible : bibliothèques, fichiers utilitaires, exemple de configuration, README. Aucun changement de données, de produit ou d’infrastructure distante. Les clients signalent clairement une configuration manquante ; le proxy laisse fonctionner l’accueil tant que Supabase n’est pas configuré.
- Vérifications prévues : lint, typage, compilation et accueil HTTP sans configuration ; vérifier le transfert des cookies et en-têtes par un contrôle ciblé. La connexion distante ne pourra être confirmée qu’avec les paramètres réels.
- Implémentation : SDK installés (`@supabase/ssr` 0.12.7, `@supabase/supabase-js` 2.119.0), helpers `config.ts`, `client.ts`, `server.ts`, `proxy.ts`, entrée `src/proxy.ts`, `.env.example`, README et exception Git pour l’exemple public. Aucune variable réelle présente ou ajoutée.
- Incident d’environnement : les snapshots BMAD protégés bloquaient ESLint et l’analyse Tailwind. ESLint ignore maintenant les dossiers BMAD ; Tailwind limite la recherche des classes à `src`. La compilation a été relancée avec succès dans le bac à sable après correction.
- Vérifications obtenues : 4 tests Node réussis (configuration absente/partielle, proxy sans configuration, requête anonyme configurée, plusieurs écritures conservant cookies et en-têtes anti-cache), ESLint réussi, compilation Next.js/TypeScript réussie, accueil HTTP 200. Les tests n’utilisent aucune ressource distante.
- L’audit npm retrouve les 7 alertes modérées préexistantes des outils de développement ; pas de nouvelle vulnérabilité signalée pendant l’ajout des SDK.
- Après revue : prérequis Node >=22 déclaré dans `package.json` et le lockfile, README précisé pour les futurs handlers de session, 2 tests ajoutés pour le client serveur. Résultat final : 6 tests et lint réussis ; compilation/TypeScript et accueil HTTP 200 déjà vérifiés après les dernières modifications du code applicatif.
- Revue indépendante terminée ; aucun point bloquant restant. Connexion distante toujours non vérifiée faute de paramètres utilisateur. Pas de commit : Git indisponible dans cet environnement.

## Review Triage Log

| Observation | Verdict et traitement | Preuve |
| --- | --- | --- |
| Node minimal non déclaré | medium, corrigé | `@supabase/supabase-js/package.json` exige >=22 ; `engines.node` et README alignés, machine sous Node 26. |
| En-têtes du callback serveur non transmis | low, documentation complétée | Aucun Route Handler de session n’existe encore ; Next.js impose `no-store` sur les Server Actions (`action-handler.js`). Le proxy transmet les en-têtes. README précise l’obligation pour les futurs handlers. |
| Le catch serveur masquerait une erreur réelle | false | Aucune autre erreur atteignable démontrée dans les appels du SDK actuel ; comportement conforme au guide SSR officiel, nécessaire aux Server Components. Deux tests couvrent écriture et lecture seule. |
| URL invalide sans validation personnalisée | low, rejeté | Le SDK valide HTTP(S) et le format dans `src/lib/helpers.ts` avec une erreur explicite. Dupliquer ce contrôle ne résout aucun défaut ; mauvaise configuration volontairement bloquante à l’usage. |
| Ajouter des tests du vrai SDK avec HTTP simulé | low, rejeté | Les adaptateurs applicatifs sont testés ; pas de défaut établi du SDK. Ajouter une simulation du protocole d’authentification dépasse le besoin et doublerait les tests amont. |
| Client serveur non testé | low, corrigé | Deux tests ajoutés : lecture/écriture et cookies en lecture seule. |
| Factory navigateur non testée | low, rejeté | Wrapper de trois lignes sans logique de session propre ; test suggéré miroir de l’implémentation, pas de défaut concret. |
| Matcher non testé directement | low, rejeté | Matcher constant selon la convention Next.js ; le build reconnaît le proxy et l’accueil réel répond en HTTP 200. Aucun défaut observé ; ajout d’un environnement de test Next non justifié. |
| Pas de session expirée réelle dans les tests | low, rejeté | Le test multi-écriture couvre renouvellement et suppression (`maxAge: 0`), le scénario anonyme couvre `data: null`. La validation de rotation réelle exige un projet Supabase ; limite documentée. |
| README omettrait npm test | false | `npm.cmd test` était déjà ajouté avant réception de la revue, avec sa portée explicitée. |

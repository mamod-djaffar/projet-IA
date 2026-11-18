# Compléments de préparation — Nova Services

Date : 2026-11-18. Ce document complète `prd.md`. Il ne vaut ni architecture validée, ni procédure de production déjà opérationnelle. Aucune implémentation n'est réalisée dans cette phase.

## Contexte du dépôt à respecter

Le projet contient déjà une base Next.js, TypeScript et des fichiers d'intégration Supabase, ainsi qu'une spécification technique antérieure dans `_bmad-output/implementation-artifacts/spec-integration-supabase.md`. Ce contexte pourra être réutilisé après examen ; il ne doit pas réduire les exigences du PRD ni imposer un prestataire email.

Les fichiers d'environnement et leurs valeurs ne sont pas des sources du besoin métier. Aucune valeur sensible n'est copiée dans ce dossier. Une vérification des secrets réalisée précédemment portait sur un état antérieur du dépôt : elle ne certifie pas les futurs changements.

La lecture du README, de `package.json` et de la spécification Supabase atteste un socle et des tests d'intégration simulés, mais aucune fonction Nova Services livrée. Le README précise l'absence de tables et d'interface de connexion. Ni le déploiement de l'application métier, ni l'email, ni les sauvegardes ne sont attestés. Les observations historiques de la spécification ne constituent pas un contrôle de l'état actuel de ces services.

**Vérification conditionnelle confirmée en H8/S14 :** si Supabase est retenu, examiner et tester les politiques RLS et les protections d'authentification effectivement disponibles dans la configuration choisie. Les politiques RLS sont des règles appliquées par la base pour limiter l'accès aux données. Les tests doivent inclure les accès anonymes, les rôles internes, les comptes désactivés et les appels directs aux API. Ce travail reste à réaliser : aucune protection ni offre fournisseur n'est présumée vérifiée par ce PRD. Les seuils anti-abus sont des paramètres initiaux provisoires, pas une garantie de sécurité.

## Livrables à préparer après validation du besoin

| Livrable futur | Contenu attendu et preuve utile |
|---|---|
| Conception des écrans | Formulaire, confirmation, connexion, liste/détail/historique, comptes et catégories ; états vides, erreurs et droits |
| Architecture | Choix argumentés pour données, authentification, droits, email et reprise après échec, hébergement, séparation des environnements et budgets |
| Plan de recette | Cas de réussite et d'échec des FR/NFR ; données fictives, utilisateurs de chaque rôle et traces des résultats |
| Guide de déploiement | Préparation de l'environnement, paramètres sans valeurs secrètes, version livrée, contrôle après publication et responsable |
| Guide de retour de version | Déclenchement, ancienne version connue, compatibilité avec les données, retour effectif et vérifications ; procédure si données incompatibles |
| Guide de sauvegarde/restauration | Périmètre complet, fréquence, accès, conservation, exercice isolé et résultats ; prise en compte des données supprimées |
| Guide d'incident et support | Contact, symptômes, premier diagnostic sans secret, escalade, panne, suspicion de fuite, communication et vérification du rétablissement |
| Notice de sécurité et données | Qui voit quoi, gestion des comptes, secrets, logs, prestataires, conservation et demandes relatives aux données personnelles |
| Note d'utilisation de l'IA | Rôle de l'IA, personne responsable, changements relus et vérifications ; aucun prompt contenant de secrets ou de vraies données clients |

Les commandes exactes d'exploitation seront rédigées après le choix des services et testées sur l'environnement retenu. Les inventer maintenant donnerait une fausse assurance de restauration ou de retour arrière.

## Repères documentaires consultés

Recherche courte réalisée le 2026-11-18, pour éclairer les cas d'erreur et la protection des données. Ces références ne sont ni des exigences du cahier des charges, ni des choix de fournisseurs.

- Zendesk montre un accusé de réception contenant l'identifiant d'une demande : [documentation officielle](https://support.zendesk.com/hc/en-us/articles/4408831473562-How-do-I-edit-the-automatic-response-sent-to-someone-who-submits-a-ticket). Ce repère confirme un usage courant ; l'obligation d'email dans ce projet vient de la réponse utilisateur.
- Resend distingue les situations où un email n'arrive pas à son destinataire : [guide officiel](https://resend.com/guides/email/users-never-got-login-code). Ce repère éclaire la séparation entre réception de la demande et acheminement de l'email, sans imposer Resend. La conservation de la demande malgré un échec email a été confirmée par l'utilisateur (S5) ; les modalités de suivi et de relance de H4 sont désormais validées avec précisions (S10). Le choix du prestataire reste ouvert.
- La CNIL présente le principe de limitation des données collectées : [guide officiel](https://www.cnil.fr/fr/minimiser-les-donnees-collectees). Les règles de collecte et de traces limitées sont validées en H11/S17. Cette source n'impose pas les durées proposées et ne permet pas de certifier la conformité de l'application.
- Pour H11, les repères CNIL sur les [durées adaptées aux finalités](https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees) et la [traçabilité des opérations](https://www.cnil.fr/fr/securite-tracer-les-operations) éclairent la distinction diagnostic/sécurité. Les durées provisoires validées comme propositions en S17 sont à justifier avec les obligations applicables avant production ; elles ne sont pas des durées légales universelles.

## Arbitrages assumés pour le MVP

- L'email de référence est obligatoire depuis la réponse utilisateur ; son service d'envoi et son coût sont à étudier. La conservation de la demande et de sa référence malgré un échec de cet email est confirmée par l'utilisateur (S5).
- L'accès de tous les collaborateurs à toutes les demandes, y compris leurs coordonnées et descriptions, est confirmé. Ses implications sur la protection des données doivent être prises en compte avant utilisation réelle. Le MVP ne prévoit pas de cloisonnement entre services [CONFIRMÉ, S2 et S6/V-3].
- Le MVP traite le risque de doublon lié à un envoi répété, sans promettre de reconnaître des demandes similaires.
- Le formulaire centralise les nouveaux dépôts. La centralisation des appels et emails suppose une organisation de transition, à décider par Nova Services ; l'import automatique n'a pas été demandé.
- La priorité est une première version exploitable, avec preuve de restauration et contrôle des droits, avant les extensions comme affectation, statistiques ou messagerie.

## Validation attendue

H1 à H12 ont été examinées et validées avec leurs réserves, selon S7 à S18. L'approbation définitive explicite est enregistrée en S19 le 2026-11-18 : l'étape PRD est clôturée. Les choix indéterminés et les preuves nécessaires avant production restent regroupés en section 9 du PRD. L'utilisateur demande de sauvegarder la version validée dans Git/GitHub avant la suite et réserve le démarrage UX à une nouvelle confirmation. Aucun développement ni travail UX n'est commencé. L'approbation ne vaut pas autorisation de mise en production ni preuve de conformité d'une application réalisée.

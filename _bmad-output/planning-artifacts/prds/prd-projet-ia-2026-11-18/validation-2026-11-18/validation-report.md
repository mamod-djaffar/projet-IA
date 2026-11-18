# Rapport de validation — Nova Services

**Suivi après accord utilisateur : les cinq corrections V-1 à V-5 sont appliquées.** Voir [le suivi des corrections](corrections-appliquees.md). Le rapport ci-dessous conserve l'état de la passe de validation avant application ; les autres hypothèses restent à examiner une par une et le PRD n'est pas encore approuvé globalement.

- **PRD :** [prd.md](../prd.md)
- **Compléments :** [addendum.md](../addendum.md)
- **Grille de qualité :** `.agents/skills/bmad-prd/assets/prd-validation-checklist.md`
- **Date de la passe :** 2026-11-18T21:41:48+01:00, Europe/Paris.
- **Appréciation de la grille :** Excellent — qualité documentaire, avec précisions à apporter. Cette appréciation ne vaut pas approbation du contenu.
- **Constats distincts :** 0 critique, 0 élevé, 2 moyens et 3 faibles. Un constat commun aux relecteurs a été regroupé.
- **État :** propositions soumises à l'utilisateur ; PRD, addendum et sources non modifiés. Aucun développement autorisé.

## Verdict général

Le PRD est solide pour examiner et valider le besoin : périmètre, droits, erreurs, exploitation et hypothèses sont explicites, avec des conséquences vérifiables pour chaque fonctionnalité. Deux précisions proposées rendraient la recette et le bilan du pilote plus déterminés ; aucun constat critique ou élevé ne justifie de remettre le périmètre en cause. Cette appréciation ne vaut ni accord utilisateur, ni autorisation de développement : les corrections ci-dessous sont proposées et attendent son accord.

Les contrôles de fidélité et de cohérence confirment la couverture des exigences du cahier des charges et des décisions utilisateur. Ils ajoutent une ambiguïté mineure sur le décompte des tentatives email et une omission dans la reformulation source, sans omission correspondante du PRD. Une incohérence de rédaction dans l'addendum doit aussi être harmonisée avec l'accès commun déjà accepté.

La note Excellent découle de la règle de la compétence : sept dimensions solides ou adéquates, sans constat critique ou élevé. Elle ne signifie ni « prêt à développer sans décision supplémentaire », ni conformité juridique, ni validation d'une application déjà construite.

## Appréciations par dimension

- **Préparation à la décision — strong (solide).** Choix confirmés, hypothèses et échéances distincts ; approbation utilisateur explicitement attendue.
- **Contenu utile — strong (solide).** Les rôles, parcours et exigences répondent aux risques réels de Nova Services.
- **Cohérence de l'objectif — adequate (adéquate).** Le produit sert la centralisation ; la mesure des oublis reste à définir précisément.
- **Clarté de ce qui doit être vérifié — adequate (adéquate).** Critères présents pour tous les FR ; préciser les emplacements du contact de support et le décompte des essais email.
- **Honnêteté du périmètre — strong (solide).** Limites et hypothèses affichées ; pas de fonctionnalité obligatoire retirée en silence.
- **Utilisation pour les travaux suivants — adequate (adéquate).** Identifiants et glossaire exploitables ; harmoniser une formulation de l'addendum.
- **Format adapté au projet — strong (solide).** Le document couvre le dépôt public, le traitement interne et l'exploitation, sans imposer les choix de programmation.

## Constats par importance

### Critiques — 0

Aucun constat identifié.

### Élevés — 0

Aucun constat identifié.

### Moyens — 2

#### V-1 — Définir ce qui compte comme un oubli

**Origine :** grille qualité, cohérence. **Localisation :** PRD §2 et §8, SM-5, bilan du pilote.

Le PRD propose de « comparer les oublis signalés à un état initial », sans définir l'oubli ni expliquer comment comparer deux périodes recevant des volumes différents. Deux équipes pourraient tirer des conclusions différentes du même pilote.

**Correction proposée, à valider :** compter comme oubli une sollicitation reçue mais absente du suivi prévu lors de la revue quotidienne, sans décision tracée expliquant son exclusion. Avant le pilote, relever les sollicitations et les oublis sur une période de comparaison ; pendant le pilote, utiliser le même périmètre de canaux et rapporter les oublis au nombre de sollicitations. Préciser comment les emails et appels sont redirigés ou retranscrits selon Q-5. Présenter les nombres et proportions à la direction, qui motive sa décision de généralisation.

**Limite :** ne pas inventer un pourcentage de baisse déjà approuvé. Si aucune mesure initiale fiable n'existe, le premier pilote établit une mesure de départ ; il ne prouve pas encore une réduction des oublis. Ces précisions restent proposées sous H10/H12.

#### V-2 — Dire où le contact de support apparaît

**Origine :** grille qualité. **Localisation :** PRD FR-11/H7, et FR-3 pour le contact de secours.

Le contact doit apparaître sur les « surfaces concernées », mais ces emplacements ne sont pas nommés. Il est donc difficile de vérifier que sa modification s'affiche partout où elle est attendue.

**Correction proposée, à valider :** utiliser le même contact de support destiné aux utilisateurs sur le formulaire public, la confirmation à l'écran, la page de connexion, l'espace interne et l'email de confirmation. Une modification du paramètre doit être visible sur ces emplacements pour les affichages et envois suivants. Cela ne crée ni messagerie intégrée ni nouveau canal de support. Ce contact public reste distinct des coordonnées techniques privées utilisées pour les alertes.

**Statut :** choix proposé sous H7, non encore accepté.

### Faibles — 3

#### V-3 — Harmoniser l'accès commun déjà confirmé

**Origine :** grille qualité. **Localisation :** addendum, « Arbitrages assumés pour le MVP », comparé au PRD §2, FR-5 et grille des droits.

Le PRD indique correctement que tous les collaborateurs consultent toutes les demandes. L'addendum écrit encore que cela « exige que Nova Services confirme » l'accès aux coordonnées et descriptions : cette phrase semble rouvrir une décision déjà acceptée dans S2.

**Correction proposée :** remplacer cette phrase par « L'accès de tous les collaborateurs à toutes les demandes, y compris leurs coordonnées et descriptions, est confirmé. Ses implications sur la protection des données doivent être prises en compte avant utilisation réelle. » Les responsabilités et contrôles restent à préparer ; aucun nouveau rôle ni cloisonnement n'est ajouté.

#### V-4 — Compter explicitement les essais d'email

**Origine :** cohérence. **Localisation :** PRD FR-3/H4.

« Trois tentatives automatiques au maximum sur 24 heures » peut signifier trois essais en tout, ou un premier envoi puis trois nouveaux essais.

**Défaut proposé, à valider :** trois tentatives au total, premier envoi compris, sur les 24 heures suivant l'enregistrement, soit au maximum deux nouveaux essais. En cas d'échec persistant après le dernier essai ou à l'échéance des 24 heures, une alerte interne est produite. Le calendrier précis des essais est laissé à la conception ; la relance manuelle reste une possibilité administrateur proposée sous H4.

La demande et sa référence restent conservées dans tous les cas : ce dernier point est confirmé par S5 et n'est pas remis en discussion.

#### V-5 — Compléter la reformulation du cahier des charges

**Origine :** fidélité des sources. **Localisation :** source-besoin.md, S1, consultation des erreurs.

Le cahier des charges original demande de « détecter rapidement les principaux problèmes techniques ». Cette expression a été condensée dans S1 ; NFR-4 la conserve correctement. Il s'agit d'un manque dans la reformulation source, pas d'un oubli du PRD ni d'une exigence inventée.

**Correction proposée :** compléter S1 : « Dispositif simple permettant de consulter les erreurs et événements importants et de détecter rapidement les principaux problèmes techniques après déploiement. » Le seuil de 15 minutes et le canal d'alerte restent des propositions H9.

## Hypothèses non confirmées

Les obligations du cahier des charges restent obligatoires. Le tableau ci-dessous ne remet pas en question l'existence des fonctions ; il relève leurs modalités proposées qui n'ont pas encore reçu d'accord global.

| Hypothèse | Contenu encore proposé |
|---|---|
| H1 | Longueurs maximales des champs ; le téléphone obligatoire est déjà confirmé |
| H2 | Comptes nominatifs email/mot de passe, activation et réinitialisation, opérations détaillées sur les comptes, protection du dernier administrateur, pas de rôle distinct pour la direction |
| H3 | Référence unique et comportement des envois répétés, statut initial Nouvelle, absence de détection automatique de contenus similaires ; le besoin d'une référence est déjà confirmé |
| H4 | Contenu minimal de l'email, états d'envoi, nombre d'essais, alerte et relance administrateur ; email avec référence et conservation malgré son échec déjà confirmés |
| H5 | Colonnes, tri, pages de 25, recherche par référence/objet et filtres statut/catégorie, pas de réécriture du dépôt ni de suppression métier |
| H6 | Définition précise de Traitée, transitions autorisées, réouverture, conflits entre modifications, contenu de l'historique non modifiable en usage normal |
| H7 | Paramètres limités aux catégories et au contact de support, cinq catégories initiales, au moins une active, statuts fixes et emplacements proposés du contact |
| H8 | Contrôles techniques détaillés et seuils contre les dépôts abusifs et les connexions répétées ; le besoin général de sécurité est acquis |
| H9 | Responsabilités d'exploitation, alerte sous 15 minutes, sauvegarde quotidienne conservée 30 jours, perte visée de 24 heures et reprise sous un jour ouvré, modalités des exercices et du support |
| H10 | Français, usage sur téléphone/ordinateur, accessibilité de base, objectifs de performance à 10 000 demandes/20 utilisateurs simultanés, méthode et objectifs de recette, pilote de deux semaines |
| H11 | Information et traitement des données personnelles, conservation proposée de 12 mois après traitement et logs 30 jours, revue des demandes ouvertes inactives 90 jours ; durées maximales des demandes ouvertes et comptes désactivés encore à décider |
| H12 | Scènes illustratives et exclusions supplémentaires du MVP : espace client, suivi public, messagerie, import automatique, pièces jointes, priorités, etc. L'affectation individuelle hors MVP est déjà acceptée |

### Décisions déjà confirmées à conserver

- Tous les collaborateurs utilisent l'application et consultent/traitent toutes les demandes.
- Formulaire sans compte : nom, email, téléphone, objet, catégorie et description obligatoires.
- Confirmation avec référence affichée et email contenant cette référence.
- Demande et référence conservées même en cas d'échec d'email.
- L'administrateur gère comptes et catégories ; l'affectation individuelle est hors MVP.

### Décisions restantes et échéances

- **Avant de figer la conception :** accepter ou corriger H1–H7/H12 et préciser effectif, volume, budget et calendrier ; ajuster H10.
- **En conception technique :** choisir hébergement, services de données, authentification, email et mécanismes de sécurité, sans considérer le socle existant comme un choix validé de production.
- **Avant toute utilisation de vraies données, y compris le pilote :** nommer responsables et secours, fixer conservation et traitement des données, valider objectifs d'exploitation et procédures, vérifier les droits et démontrer sauvegarde/restauration et retour de version. Décider aussi comment les emails et appels entrent dans le suivi.
- **Avant généralisation :** examiner les résultats du pilote et documenter la décision de la direction.

Ces échéances concernent les choix détaillés ; elles ne permettent pas de reporter une protection nécessaire à une phase où des données réelles seraient déjà exposées.

## Vérifications mécaniques et portée

- Identifiants FR-1 à FR-11, NFR-1 à NFR-7, UJ-1 à UJ-3 et SM-1 à SM-6 présents, uniques et sans renvoi manquant détecté.
- Hypothèses H1 à H12 présentes dans le corps et dans l'index ; aucun lien local manquant.
- Statut de rédaction `final`, mais statut d'approbation `awaiting_user_validation` : la rédaction est terminée, l'utilisateur n'a pas approuvé globalement le besoin.
- Aucun test d'application, contrôle juridique, déploiement ou choix de prestataire n'est certifié par cette validation documentaire.
- Les rapports de création antérieurs restent conservés dans le dossier parent. Les présents constats concernent uniquement cette nouvelle passe.
- Les empreintes des documents examinés sont dans [mechanical-check.json](mechanical-check.json) ; elles servent à vérifier qu'ils restent inchangés pendant cette validation.

## Validation demandée avant modification

**Proposition par défaut :** appliquer les cinq corrections V-1 à V-5, conserver comme non confirmées toutes les autres hypothèses et garder l'approbation globale du PRD en attente. Une réponse peut accepter l'ensemble de ce lot ou corriger les numéros concernés.

V-1, V-2 et V-4 précisent des choix encore proposés ; V-3 et V-5 harmonisent les documents avec des décisions ou sources déjà acquises. Aucun changement du PRD, de l'addendum ou du fichier source ne sera fait avant accord. L'acceptation de ce lot n'autorise ni développement ni déploiement.

## Rapports des relecteurs

- [Grille qualité](review-rubric.md)
- [Cohérence des comportements](review-coherence.md)
- [Fidélité aux sources et hypothèses](review-sources.md)

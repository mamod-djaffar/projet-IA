# Audit de fidélité aux sources — Nova Services

Date : 2026-11-18. Périmètre : `source-besoin.md` S1–S5 et `.memlog.md`, comparés à `prd.md` et `addendum.md`. Audit documentaire indépendant, sans vérification des services ni du code. Le journal décrit les décisions antérieures ; ses conclusions de relecture ne remplacent pas les sources utilisateur. Une citation du cahier des charges original, transmise par l'agent principal pendant l'audit, complète le contrôle de NFR-4.

## Résultat

Aucune exigence métier ou d'exploitation de S1–S5 n'est omise du PRD. Aucun choix non approuvé n'est présenté comme une décision utilisateur. Une omission mineure de la reformulation source est relevée ci-dessous ; le PRD conserve bien le besoin original correspondant. L'approbation globale reste attendue et aucune autorisation de développement n'est acquise.

Le téléphone obligatoire et la conservation de la demande avec sa référence malgré un échec email sont correctement traités comme confirmés, respectivement dans FR-1 et FR-3. Les modalités de suivi et de relance email restent H4. L'accès commun, la gestion des comptes/catégories par l'administrateur et l'affectation individuelle hors MVP proviennent bien de l'accord S2 ; ils n'ont pas à être considérés comme des décisions encore inconnues.

## Couverture des exigences confirmées

| Source | Exigences vérifiées | Couverture dans les livrables |
|---|---|---|
| S1, besoin métier | Centralisation ; dépôt client/prospect ; contenu et coordonnées ; enregistrement en base et confirmation | PRD §2, FR-1 à FR-3 |
| S1, traitement | Espace sécurisé ; liste/détail ; recherche ou filtres ; trois statuts minimaux ; historique | FR-4 à FR-9, §6 et NFR-1. Fournir recherche **et** filtres est identifié comme H5 |
| S1, administration | Gestion des comptes, rôles et principaux paramètres | FR-10, FR-11, §6 ; limitation des paramètres et opérations détaillées sous H2/H7 |
| S1, livraison | Application en ligne, sécurité, séparation développement/production, absence de secrets dans le code | NFR-1 et NFR-3 ; addendum, livrables futurs |
| S1, exploitation | Versionnement, versions identifiables, retour arrière, consultation des erreurs, sauvegarde/restauration, indisponibilité | NFR-3 à NFR-5 et NFR-7 ; guides prévus dans l'addendum |
| S1, responsabilité | Support premier niveau/technique ; documentation d'exploitation, accès et protection des données ; productions IA comprises, vérifiées et testées | NFR-6, NFR-7 et addendum |
| S2 | Tous les collaborateurs ; formulaire sans compte ; champs obligatoires ; confirmation à l'écran et email avec référence | PRD §2–3 et FR-1 à FR-3 |
| S2 | Consultation et traitement communs ; administration comptes/catégories ; affectation individuelle hors MVP | PRD §2–3, FR-5, FR-10–11 et §6 |
| S3 | Français accessible, séparation sources/hypothèses, utilisateurs/besoins/fonctions/règles/MVP/réussite ; documents proposés à validation sans développement | PRD §1–9, statut `awaiting_user_validation`, addendum « Validation attendue ». Le respect historique du nombre de questions n'est pas certifiable par les seuls documents |
| S4 | Téléphone obligatoire | FR-1, y compris refus du vide et contrôle hors écran ; H1 ne le remet pas en hypothèse |
| S5 | Demande et référence conservées après échec email | FR-3, règle explicite et scénario d'échec simulé ; addendum |

S1 autorise des ajouts utiles sans les imposer : les exclusions MVP signalées H12 ne constituent donc pas, à elles seules, des omissions. Le contexte pédagogique, l'effectif, les volumes, le budget et le calendrier ne sont pas présentés comme confirmés. Le socle Next.js/Supabase est distingué d'une fonction métier livrée ou d'une architecture approuvée.

## Constat à corriger

### SRC-1 — Faible — Reformulation source incomplète, sans omission du PRD

- **Section précise :** `source-besoin.md`, S1, « Livraison et exploitation demandées », puce sur la consultation des erreurs ; comparaison avec `prd.md`, §7, NFR-4.
- **Citation de la reformulation :** « Dispositif simple de consultation des erreurs et événements importants. »
- **Source originale complémentaire communiquée par l'agent principal :** le cahier des charges exprime aussi le souhait de « détecter rapidement les principaux problèmes techniques » une fois l'application déployée.
- **Effet :** ce souhait a disparu de la condensation S1, ce qui peut donner à tort l'impression que NFR-4 ajoute une exigence confirmée. Le PRD est fidèle au besoin original : son attribution [CDC] de la détection rapide est correcte. Le seuil de 15 minutes et les modalités de notification restent des propositions H9.
- **Correction simple :** compléter la puce S1 : « Dispositif simple permettant de consulter les erreurs et événements importants et de détecter rapidement les principaux problèmes techniques après déploiement. » Aucune modification de NFR-4 n'est nécessaire pour cette provenance.

## Inventaire groupé des propositions non approuvées

Cet inventaire reprend H1–H12 sans leur attribuer une approbation par silence. Les obligations générales de S1 restent acquises ; seules leurs modalités proposées attendent validation.

| Groupe | Hypothèses et choix encore proposés |
|---|---|
| Formulaire et réception | **H1 :** longueurs des champs. **H3 :** unicité et comportement de la référence, statut initial Nouvelle, protection contre la répétition du même envoi, absence de détection de contenus similaires. **H4 :** contenu minimal de l'email, états techniques séparés, trois tentatives sur 24 h, alerte et relance administrateur. L'obligation d'email et la conservation malgré son échec sont déjà confirmées |
| Comptes et droits détaillés | **H2 :** comptes nominatifs email/mot de passe, activation/réinitialisation, opérations d'administration, protection du dernier administrateur, absence de rôle distinct pour la direction. L'accès commun et l'administration comptes/catégories sont déjà acceptés |
| Traitement et paramètres | **H5 :** colonnes, tri, pages de 25, champs de recherche et filtres, absence de réécriture/suppression métier. **H6 :** définition de Traitée, transitions et réouverture, prévention des conflits, contenu et immutabilité d'usage de l'historique. **H7 :** paramètres limités aux catégories/contact de support, cinq catégories initiales, minimum d'une active, statuts fixes |
| Sécurité et exploitation | **H8 :** contrôles techniques et seuils anti-abus. **H9 :** responsabilités et modalités de support, alerte 15 minutes, sauvegarde quotidienne et conservation 30 jours, perte visée 24 h, reprise sous un jour ouvré, exercices d'exploitation et modalités détaillées de retour arrière |
| Usage, dimensionnement et recette | **H10 :** français, adaptation téléphone/ordinateur, accessibilité de base, cibles 10 000 demandes/20 utilisateurs, performances et objectifs de recette, pilote deux semaines. Ces chiffres ne décrivent pas les volumes réels |
| Données personnelles | **H11 :** modalités de minimisation/information, conservation 12 mois après traitement, logs 30 jours, revue mensuelle des demandes ouvertes inactives depuis 90 jours, procédure sur les données. Durée maximale des demandes ouvertes, comptes désactivés, exceptions et règles applicables restent à arrêter |
| Limites et parcours | **H12 :** parcours illustratifs et exclusions supplémentaires : espace client, suivi public, messagerie, imports, pièces jointes, priorités, intégrations, etc. L'affectation individuelle hors MVP est déjà confirmée |

## Quand les choix doivent être arrêtés

- **Avant de figer la conception :** faire accepter/corriger le périmètre et les comportements H1–H7/H12 ; relever effectif, volumes, budget et calendrier (Q-1) pour ajuster H10 ; arrêter en architecture les prestataires et les mécanismes de sécurité/exploitation (Q-2, H8/H9). Un examen ou une exploration réversible peut être préparé à partir des propositions, sans les déclarer validées. Les choix de conservation H11 peuvent encore attendre leur approbation finale, mais leurs effets sur la purge, l'historique et les sauvegardes doivent être pris en compte dans la conception.
- **Avant intégration de l'email :** confirmer les modalités H4, le prestataire et l'expéditeur ; l'échec email ne doit jamais remettre en cause la règle confirmée S5.
- **Avant le pilote utilisant de vraies données :** nommer responsables et secours (Q-3), décider la transition email/téléphone (Q-5), vérifier sécurité et protection des données. Le pilote est déjà une utilisation réelle ; il ne dispense pas des conditions d'ouverture.
- **Avant toute ouverture réelle, donc au plus tard avant production/pilote réel :** valider règles et durées de conservation, traitement des demandes sur les données, accès des prestataires et information des demandeurs (H11/Q-4) ; confirmer les objectifs d'exploitation financés et les procédures H8/H9 ; fournir les preuves de recette, restauration et retour arrière exigées par le PRD. Les chiffres proposés ne deviennent pas des engagements sans accord.
- **Avant généralisation :** bilan du pilote, exercice de chaque collaborateur et décision de bascule de la direction selon §8, sous réserve d'acceptation des modalités H10.

L'addendum précise correctement que les repères externes ne sont pas des exigences utilisateur et qu'aucun prestataire n'est imposé. Sa phrase demandant de confirmer que tous les collaborateurs peuvent voir les coordonnées et descriptions doit se lire comme une vérification d'adéquation des accès avant usage réel : l'accord produit d'accès commun existe déjà en S2. Elle ne retire pas cette décision confirmée.

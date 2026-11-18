# Relecture finale de cohérence — 2026-11-18

Verdict : aucun blocage documentaire identifié dans le périmètre examiné. Zéro contradiction ou trou substantiel retenu. Le PRD peut être présenté pour approbation explicite ; cette relecture ne l'approuve pas et ne certifie aucune application livrée.

Sources examinées : `prd.md`, `addendum.md` et `source-besoin.md` (S1 à S18). Aucun code, service ou dispositif d'exploitation n'a été testé. Les preuves ci-dessous sont des preuves **à produire**, déjà demandées par le PRD ; leur présence dans une spécification ne signifie pas leur réalisation.

## Interactions contrôlées

| Interaction | Conclusion et références |
|---|---|
| Champs, serveur, idempotence, quotas | FR-1 impose présence/format/longueur des deux côtés ; FR-2 distingue répétition du même envoi et nouveau dépôt volontaire. NFR-1 compte des « nouveaux dépôts » : retrouver un enregistrement existant n'est pas un nouveau dépôt. P-1 exige leur vérification commune. L'ordre technique des contrôles relève de la conception. |
| Email et traitement | FR-3 sépare les états d'envoi du statut métier et l'acceptation du prestataire de la réception réelle ; trois essais automatiques au maximum, premier compris, sur 24 heures, alerte, relance administrateur tracée et protégée contre répétitions/concurrence, compteur automatique non réinitialisé. Aucun échec n'annule la demande. Conforme à S6/S10. |
| Désactivation et conservation | FR-4/FR-10 retirent les accès à la requête suivante ; FR-9 conserve les événements mais renvoie explicitement à NFR-6 pour les durées et l'identification des anciens collaborateurs. La désactivation ne vaut pas purge et l'historique n'est pas déclaré perpétuel. |
| Commentaire et dépôt immuable | FR-8 exige un commentaire non blanc côté serveur vers Traitée, y compris depuis Nouvelle, avec statut/événement/commentaire atomiques. FR-6 protège le dépôt, FR-9 protège les événements en usage normal ; NFR-6 prévoit les interventions exceptionnelles autorisées sur les données. Les commentaires autonomes et la messagerie restent exclus (§3, S12/S18). |
| Catégories | FR-11 prévoit réactivation, refus du doublon actif après normalisation, maintien du rattachement historique et au moins une catégorie active ; FR-1 refuse la catégorie inactive ou inconnue côté serveur. |
| Recherche et pagination | FR-7 couvre nom, objet, référence, dates inclusives, période invalide, combinaison avec statuts/catégorie et conservation sur pages de 25 ; FR-5 fournit tri et états vides. |
| RPO et retour de version | NFR-3 exige un retour compatible sans perte des demandes récentes ; NFR-5 traite séparément une restauration après incident et sa perte potentielle mesurée. Les deux situations ne constituent pas une promesse contradictoire. |
| Journaux | NFR-4 limite le contenu et les accès ; NFR-6 distingue diagnostic proposé à 30 jours et sécurité proposée à six mois. Q-4 exige finalités, durées et exceptions justifiées avant usage réel. |
| H10 et ouverture | NFR-2 mesure séparément chaque type d'opération, au moins 100 fois, avec conditions documentées ; SM-2 distingue les trois étapes de l'email. §8 impose les contrôles avant pilote, puis le bilan et la correction des anomalies bloquantes avant généralisation. |

## Couverture des preuves d'acceptation

Pour chaque exigence, les résultats attendus sont observables ; le plan de recette futur de l'addendum doit conserver les cas et résultats. Il n'est pas nécessaire de produire des tests de code pendant cette phase documentaire.

| Exigence | Preuve vérifiable prévue |
|---|---|
| FR-1 | Essais champs vides/blancs, formats, catégorie et limites exactes/dépassées, interface et appels serveur, saisie conservée. |
| FR-2 | Demande retrouvée après redémarrage ; double-clic, appels simultanés et reprise réseau sans doublon ; nouveau dépôt volontaire distinct ; échec sans faux succès. |
| FR-3 | Boîte maîtrisée et référence concordante ; panne avec demande intacte ; états, compteurs et alerte ; relances répétées/concurrentes et traces date/auteur/résultat. |
| FR-4 | Connexion autorisée/refusée, liens expirés/réutilisés refusés, déconnexion et blocage de session désactivée par appels protégés. |
| FR-5 | Dépôt présent, liste vide explicite, ordre récent, pagination de 25 et vue Nouvelle/En cours. |
| FR-6 | Correspondance des champs et texte multiligne ; référence inconnue ; texte malveillant non exécuté ; absence de modification métier libre. |
| FR-7 | Jeux de résultats attendus pour nom/objet/référence, combinaison des filtres, bornes incluses, dates inversées, pagination et remise à zéro. |
| FR-8 | Quatre transitions, commentaire obligatoire refusé si absent/blanc, appel direct, conflit et échec atomique sans trace partielle. |
| FR-9 | Chronologie création/traitement/réouverture, auteur réel et commentaire conservé ; absence de modification courante ; historique après désactivation et politique NFR-6. |
| FR-10 | Cycle compte/rôle/activation, refus des actions collaborateur, email unique, dernier administrateur protégé, bootstrap documenté, désactivation immédiatement effective. La réactivation fait partie des opérations déclarées à vérifier dans les cas de réussite/échec du plan de recette. |
| FR-11 | Ajout/renommage/désactivation/réactivation, doublon refusé, dernière catégorie protégée, historique préservé, mêmes contacts après modification sur les cinq emplacements. |
| NFR-1 | Grille des droits avec appels API/base directs ; vérification HTTPS, hachage et secrets ; limites temporaires, réseaux partagés et tentatives distribuées ; RLS conditionnelle. |
| NFR-2 | Parcours français au clavier, téléphone/ordinateur, largeurs 360/1 280 ; mesures séparées des quatre types d'opération sur charge représentative avec au moins 100 observations/type. |
| NFR-3 | Version reliée au déploiement, environnements séparés, vérification après déploiement et exercice de retour compatible préservant les demandes récentes. |
| NFR-4 | Erreur contrôlée retrouvée/versionnée, alerte horodatée de l'injection à sa réception, inspection des traces sans secrets ni coordonnées ; email en échec visible. |
| NFR-5 | Restauration isolée d'une sauvegarde datée, inventaire complet et accès vérifiés, emails neutralisés, point récupéré et durées consignés, comparaison aux RPO/RTO. |
| NFR-6 | Décisions documentées ; essais fictifs de correction/purge/anonymisation, revue des ouvertes inactives, traitement d'information sensible et suppressions réappliquées après restauration. |
| NFR-7 | Exercice d'incident et escalade consignés, responsables/remplaçants, guides et explication humaine des changements/tests pour chaque version. |

## Réserves et classement

Aucun constat correctif bloquant le PRD n'est retenu. Les décisions et preuves Q-1 à Q-5/P-1 à P-4 sont explicitement ouvertes : services, effectifs/volumes, responsables, support, décisions de protection des données, durées/purge, transition des canaux et exercices sécurité/exploitation/capacité. Leur absence actuelle est une réserve **avant production ou pilote réel**, pas une contradiction du PRD ni un défaut démontré d'une application. Les seuils H8, objectifs H9/H10 et durées H11 conservent leur caractère provisoire.

L'addendum décrit les livrables futurs et conserve les réserves ; les sources historiques décrivent les accords successifs sans remplacer l'approbation globale encore attendue. Aucun développement ni travail UX n'est autorisé par cette relecture.

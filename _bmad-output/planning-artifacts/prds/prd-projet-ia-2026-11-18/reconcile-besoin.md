# Rapprochement du besoin — Nova Services

Date : 2026-11-18. Documents comparés : `source-besoin.md` (S1 et S2), `prd.md` et `addendum.md`.

## Verdict

Aucune exigence explicite du cahier des charges ou des réponses utilisateur n'a été identifiée comme oubliée. Aucun ajout significatif n'est présenté à tort comme une décision confirmée : les modalités proposées portent des marqueurs d'hypothèse et figurent dans l'index H1–H12. Le document reste proposé à validation, sans démarrer le développement.

## Couverture constatée

- Le dépôt public couvre les cinq groupes de champs, l'enregistrement en base, la confirmation et la référence. L'email de référence ajouté par S2 figure obligatoirement au MVP, avec critères de réussite et de panne (FR-1 à FR-3).
- L'accès de tous les collaborateurs, l'espace sécurisé, la liste commune, le détail, les moyens de retrouver les demandes, les trois statuts et l'historique sont présents (FR-4 à FR-9). L'affectation individuelle hors MVP correspond au choix accepté dans S2.
- La gestion des comptes, la distinction collaborateur/administrateur et les paramètres principaux sont couverts (FR-10, FR-11 et grille des droits). Les opérations précises et le périmètre des paramètres sont indiqués comme hypothèses.
- La livraison en ligne, la séparation développement/production, les secrets hors du code, le versionnement et le retour à une version précédente sont traités (NFR-1 et NFR-3).
- Les logs, la détection des incidents, les sauvegardes, la restauration, l'indisponibilité, les deux niveaux de support et la documentation de sécurité/données sont couverts par NFR-4 à NFR-7. Les objectifs chiffrés sont explicitement proposés, pas attribués au cahier des charges.
- L'utilisation responsable de l'IA apparaît dans NFR-7 et dans les livrables futurs de l'addendum. L'absence d'IA intégrée au produit n'écarte pas l'obligation d'assistance à la réalisation définie par S1.
- Les besoins et utilisateurs, les limites MVP et les critères observables figurent dans les sections dédiées ; un vocabulaire explique les termes principaux à un débutant.

## Deux points de vigilance à présenter à la validation

1. **Sens de « coordonnées obligatoires » — FR-1, H1 : résolu par S4.** Le contrôle initial relevait l'hypothèse de téléphone facultatif. L'utilisateur a ensuite confirmé que le téléphone est obligatoire. FR-1 exige désormais email et téléphone, avec refus d'un téléphone absent ou composé seulement d'espaces ; H1 ne propose plus que les limites de longueur des champs.
2. **Centralisation des canaux existants — section 7, Q-5 et addendum.** Le contexte S1 mentionne des demandes reçues par téléphone et email, sans exiger leur import automatique. Leur exclusion technique du MVP ne retire donc pas une fonctionnalité demandée. La direction devra néanmoins décider comment ces sollicitations sont dirigées vers le formulaire ou retranscrites ; sans cette organisation, la promesse de centralisation resterait partielle. Le PRD signale déjà cette décision avant le pilote.

## Portée du contrôle

Précision utilisateur S5 intégrée après le contrôle initial : la conservation d'une demande enregistrée avec sa référence, même si l'email échoue, est désormais confirmée dans FR-3. Un critère prévoit de simuler cet échec puis de retrouver la demande, sa référence et ses champs dans l'espace interne. Les modalités de relance restent des hypothèses H4.

Ce rapprochement vérifie la fidélité aux sources ; il ne valide ni les hypothèses au nom de l'utilisateur, ni les choix de prestataire, ni la conformité juridique, ni l'existence d'une application livrée. Aucun développement, test de l'application, déploiement ou commit n'a été effectué dans ce contrôle.

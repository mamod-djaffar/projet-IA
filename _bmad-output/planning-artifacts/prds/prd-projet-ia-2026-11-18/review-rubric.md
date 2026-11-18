# PRD Quality Review — Nova Services

Date : 2026-11-18. Périmètre relu : `prd.md` et `addendum.md`, avant validation utilisateur. Relecture fondée sur les sept dimensions de la grille `bmad-prd/assets/prd-validation-checklist.md`. Ce rapport évalue le document, pas une application livrée.

## Overall verdict

Le PRD est suffisamment précis pour être présenté à l'utilisateur et préparer ensuite la conception : les besoins majeurs, les droits et les cas d'échec sont identifiés, et les hypothèses ne sont pas présentées comme déjà acceptées. Aucun défaut critique ou élevé n'a été relevé dans ce périmètre. Trois précisions renforceraient la préparation de la production et la mesure de l'utilité : conservation des demandes jamais traitées, définition de « Traitée » et objectif métier du pilote.

## Decision-readiness — adequate

Les sections 1 et 9 séparent correctement cahier des charges, confirmations utilisateur et propositions. Les questions ouvertes ont un responsable et une échéance de décision ; l'ouverture réelle reste conditionnée aux décisions de sécurité, de données et d'exploitation. Les coûts et prestataires ne sont pas engagés. L'addendum donne une utilité concrète aux futurs livrables sans prétendre fournir des procédures déjà testées.

La quantité de propositions H1–H12 reste importante, mais cohérente avec la demande d'un parcours rapide avec hypothèses. Ce document est prêt à discuter ; il ne constitue pas encore un feu vert à développer.

## Substance over theater — strong

Le problème de dispersion des demandes est directement relié au formulaire, à la liste commune, aux statuts et à l'historique. Les trois parcours nommés servent effectivement à vérifier dépôt, traitement et administration. Les exigences d'exploitation portent sur des exercices observables plutôt que sur une promesse générale d'application « fiable » ou « sécurisée ».

Les seuils proposés sont signalés comme tels. Il n'y a ni revendication de nouveauté, ni persona décorative, ni conformité juridique supposée.

## Strategic coherence — adequate

Le pari produit est explicite en section 2 et le périmètre exclut honnêtement les fonctionnalités voisines. La centralisation email/téléphone est traitée comme une question de transition, et non comme un import automatique déjà acquis. Les contre-mesures empêchent de confondre demandes closes et problèmes résolus, ou emails acceptés et reçus.

### Findings

- **medium — Objectif métier du pilote insuffisamment borné** (§8, SM-5). La comparaison des « oublis signalés » à un état initial est pertinente, mais aucun critère ne permet de conclure si l'usage apporte assez de valeur pour généraliser. *Fix:* proposer, sous H10, une définition simple d'un oubli et un seuil de décision observable, ou nommer explicitement la personne qui appréciera les résultats et sur quelles preuves. Ne pas inventer une amélioration chiffrée sans base de départ.

## Done-ness clarity — adequate

Chaque FR possède plusieurs conséquences vérifiables, notamment pour l'enregistrement durable, la double soumission, le conflit entre collaborateurs et la désactivation d'une session déjà ouverte. Les tests de sauvegarde et de retour arrière sont distingués et la compatibilité des données est prise en compte. Les NFR proposent des bornes temporelles et un protocole de mesure.

### Findings

- **medium — Sens métier de « Traitée » encore implicite** (glossaire, FR-8, contre-mesures §8). Les transitions sont précises, mais le moment où une demande peut être considérée Traitée ne l'est pas : résolution effective, réponse envoyée, rendez-vous organisé ou simple prise de connaissance. La contre-mesure « ne pas clôturer des cas non résolus » aide sans couvrir toutes les catégories. *Fix:* ajouter sous H6 une définition proposée, par exemple « intervention terminée ou réponse apportée selon la catégorie, sans action interne restante », et préciser que la clôture ne prouve pas un email de réponse envoyé par l'application, hors MVP.

## Scope honesty — strong

Les fonctionnalités ajoutées par inférence sont repérées : recherche et filtres ensemble, réouverture, limites de champs, mécanisme d'envoi email et règles de comptes. Les exclusions ne suppriment aucune obligation explicite du cahier des charges. L'accès commun, la gestion des comptes et des catégories et l'affectation hors MVP correspondent aux confirmations utilisateur.

Les durées de conservation ne sont pas présentées comme légales. Lors de cette relecture, le téléphone facultatif était une hypothèse à confirmer malgré l'expression utilisateur « coordonnées obligatoires ». **Mise à jour après présentation :** l'utilisateur a confirmé le téléphone obligatoire (S4), intégré dans FR-1 ; ce point est résolu. Les statuts de document et d'approbation indiquent correctement que la validation utilisateur est en attente.

## Downstream usability — adequate

Le glossaire, les FR groupés et les mesures fournissent des entrées utilisables pour les écrans, l'architecture et les histoires de développement. Les références FR-1–FR-11, UJ-1–UJ-3, SM-1–SM-6 et NFR-1–NFR-7 sont cohérentes ; H1–H12 ont chacun une occurrence de détail et une entrée d'index. Les trois parcours portent un prénom et un contexte utiles.

### Findings

- **medium — Conservation des demandes jamais traitées non définie** (NFR-6, H11). La durée proposée court 12 mois après le dernier passage à Traitée. Une demande demeurant Nouvelle ou En cours n'a donc pas encore de règle de fin de conservation, tandis que seules les règles des comptes désactivés sont explicitement ouvertes. *Fix:* inclure les demandes non clôturées parmi les règles que le responsable des données doit fixer avant production ; prévoir une revue périodique ou une durée à valider sans inventer de délai légal. Cela évite qu'une implémentation applique la règle uniquement aux demandes Traitée et conserve le reste indéfiniment.

## Shape fit — strong

Le format correspond à un outil interne avec un formulaire public et deux rôles. Les parcours sont brefs et les questions d'exploitation méritent leur place puisque la mission comprend une mise en production réelle. L'état existant Next.js/Supabase est mentionné sans être assimilé à des fonctions métier livrées. Le PRD demeure un document de comportement et renvoie la réalisation et les commandes d'exploitation à des travaux ultérieurs.

## Mechanical notes

- Aucun identifiant manquant, dupliqué ou renvoi FR/UJ/SM/NFR non résolu constaté dans les sections relues.
- H1–H12 sont indexées ; le format `[ASSUMPTION Hn]` est annoncé en section 1 et utilisé de manière compréhensible.
- Les termes PRD, MVP, authentification, autorisation et logs sont expliqués ; les sigles FR et NFR sont contextualisés par leur usage, mais leur expansion en français pourrait être ajoutée pour un débutant.
- Aucun document n'est déclaré testé, déployé ou juridiquement conforme. Les durées et volumes ne sont pas attribués à tort au cahier des charges.
- Les constats ci-dessus sont des améliorations de la proposition ; ils ne remplacent pas la validation des hypothèses par Nova Services.

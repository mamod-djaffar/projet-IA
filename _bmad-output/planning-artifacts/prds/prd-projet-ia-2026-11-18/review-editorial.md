# Relecture et corrections intégrées

Date : 2026-11-18. Périmètre : `prd.md` et `addendum.md`. Ce contrôle porte sur des documents, pas sur une application implémentée. L'approbation utilisateur reste en attente.

## Synthèse des contrôles

- Rapprochement S1/S2 : aucune exigence explicite manquante identifiée ; détail dans `reconcile-besoin.md`.
- Rubrique qualité : aucun constat critique ou élevé. Les trois précisions proposées ont été intégrées ci-dessous. Le rapport `review-rubric.md` conserve les constats avant correction ; ses anciens numéros de sections reflètent cet état.
- Structure puis prose : recommandations appliquées. Le périmètre passe avant les critères détaillés ; glossaire et index des hypothèses conservés pour le lecteur débutant.
- Contrôle mécanique : identifiants FR-1 à FR-11, NFR-1 à NFR-7 et hypothèses H1 à H12 présents sans rupture ; liens locaux vérifiés.

## Traitement des remarques de fond

| Remarque | Correction dans le PRD | État |
|---|---|---|
| Définir ce qui permet de passer à Traitée | FR-8/H6 : réponse ou intervention terminée, aucune action interne restante ; accusé de réception insuffisant ; réouverture possible | Intégrée comme hypothèse |
| Ne pas oublier la conservation des demandes ouvertes | NFR-6/H11 : revue mensuelle des demandes inactives depuis 90 jours ; durée maximale à arrêter avant production, aucune conservation illimitée justifiée par le statut seul | Intégrée ; choix de durée encore ouvert et attribué |
| Rendre la généralisation observable | Section 8 : bilan des dépôts du pilote, écarts expliqués, compte actif et exercice réussi par chaque collaborateur ; décision de direction consignée | Intégrée sous H10 |
| Expliquer FR/NFR au débutant | Définitions françaises ajoutées aux sections concernées | Intégrée |

## Relecture éditoriale — structure puis prose

Ces documents aident Nova Services et un lecteur débutant à valider le besoin avant la conception. Modèle de lecture retenu : objectif et périmètre d'abord, critères détaillés ensuite. Comptage exact avant corrections par `word_metrics.py` : PRD 5 444 mots ; addendum 779 mots. Aucun objectif de réduction de longueur ; les ajustements visent la compréhension, sans suppression d'exigence.

| Pass | Original Text | Revised Text | Changes |
|---|---|---|---|
| structure | Périmètre MVP après les exigences détaillées | MOVE après utilisateurs, avant glossaire et exigences | Donne d'abord les limites au lecteur ; renumérotation appliquée |
| structure | Plusieurs vérifications NFR regroupées dans de longs paragraphes | CONDENSE la présentation en listes de critères observables | Présentation clarifiée, fond conservé |
| structure | Glossaire et index des hypothèses | PRESERVE | Supports de compréhension et de validation maintenus |
| prose | « 20 demandes distinctes retrouvées avec la même référence » | « 20 demandes distinctes retrouvées, chacune avec la référence affichée lors de son dépôt » | Évite de suggérer une référence identique pour toutes les demandes |
| prose | « Aucun résultat produit un message explicite » | « Une recherche sans résultat affiche un message explicite » | Ambiguïté grammaticale supprimée |
| prose | « si un email possède un compte » | « si un compte existe pour cette adresse email » | Formulation précise |
| prose | « recette » non défini | Définition ajoutée au vocabulaire | Terme expliqué au débutant |
| prose | « responsive » et « détection sémantique » | « interface adaptée au téléphone et à l'ordinateur » et « détection automatique de demandes au contenu similaire » | Termes techniques remplacés par leur sens |
| prose | « identifiant technique de corrélation » | « identifiant technique permettant de relier les traces d'une même opération » | Fonction expliquée simplement |

Toutes ces remarques sont traitées. Les hypothèses H1 à H12 restent des propositions : une relecture ne les approuve pas au nom de Nova Services. Après présentation, l'utilisateur a confirmé le téléphone obligatoire (S4) ; FR-1 et son critère de refus d'un téléphone vide ont été mis à jour, et H1 se limite désormais aux longueurs des champs. Durées, exploitation, volumes et transition email/téléphone restent à examiner selon les responsables et échéances du PRD.

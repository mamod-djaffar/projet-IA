# UX Nova Services — livrables à valider

Création commencée le 18 novembre 2026, livraison le 19 novembre 2026. Parcours rapide BMAD UX, à partir du PRD approuvé. Aucune application n'est développée.

## Documents

- [DESIGN.md](DESIGN.md) : l'apparence — couleurs, typographie, espacements et composants.
- [EXPERIENCE.md](EXPERIENCE.md) : le fonctionnement attendu — parcours, contenu des écrans, états et accessibilité.

Les exigences héritées portent `[PRD]`. Les cinq choix par défaut acceptés portent `[CHOIX ACCEPTÉ]`. Les autres détails sont regroupés en **A-1 à A-8, hypothèses UX**, à la fin d'EXPERIENCE.md. Le PRD validé n'est pas modifié.

## Ouvrir les trois maquettes

Ouvrir les fichiers HTML dans un navigateur, par double-clic ou par les liens suivants. Aucun serveur ni installation de dépendances n'est nécessaire.

1. [Formulaire public](mockups/formulaire-public.html) — formulaire complet/vierge, chargement, erreur, confirmation, email en échec et résultat incertain.
2. [Liste des demandes](mockups/liste-demandes.html) — recherche et filtres, tableau ordinateur/fiches téléphone, 25 demandes fictives dans une page, vide, aucun résultat, chargement et erreur.
3. [Détail, traitement et historique](mockups/detail-demande.html) — lecture seule du dépôt, commentaire de résolution, historique, erreur, conflit, traitement enregistré, vue administrateur et relance en cours.

La barre de consultation en haut est extérieure au produit ; ses liens permettent de changer de maquette et d'état. Les fichiers montrent des **instantanés** : pas de script, de requête réseau, d'envoi d'email, de connexion, de recherche effective ou de sauvegarde. Les contrôles de saisie sont illustratifs ; les champs d'exemple sont en lecture seule pour ne pas recueillir de vraies coordonnées. Seule la première demande de la liste mène au dossier fictif représenté ; les autres lignes et les boutons de pagination sont des références visuelles fixes, pas d'autres dossiers développés.

Réduire la fenêtre du navigateur permet de comparer l'ordinateur et le téléphone. Les états « confirmation » et « email en échec » doivent toujours conserver la même référence fictive. Dans le détail « commentaire manquant » ou « conflit », aucun événement de réussite n'est ajouté à l'historique.

## Couverture et limites

Les écrans de connexion, d'activation/réinitialisation, de gestion des utilisateurs et de paramètres sont décrits dans EXPERIENCE.md. Ils n'ajoutent pas de quatrième maquette. Le menu de l'administrateur est illustré dans la variante correspondante du détail ; ses autres destinations ne sont pas implémentées.

La notice de données et le contact de support sont illustratifs et utilisent `.example`. Avant tout usage réel, les informations et décisions restant dans la section 9 du PRD devront être finalisées. La limite du commentaire d'intervention reste à préciser : elle n'est pas automatiquement celle de la description.

Contrôle direct local, sans relecture par sous-agents : [résultats techniques](controle-local.json). Le dossier `.working/` contient uniquement les outils de rendu/contrôle documentaire et leurs captures, sans code de l'application. Les profils temporaires de navigateur sont hors du projet. Aucun test de sécurité ou de fonctionnement du futur produit n'est certifié par ces contrôles.

**Statut : proposition UX en attente de votre validation.** Aucun passage à l'architecture, aux stories ou au développement ne démarre automatiquement.

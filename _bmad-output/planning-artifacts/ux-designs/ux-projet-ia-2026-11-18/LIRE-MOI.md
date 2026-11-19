# UX Nova Services — livrables validés

Création commencée le 18 novembre 2026, livraison le 19 novembre 2026. Parcours rapide BMAD UX, à partir du PRD approuvé. Aucune application n'est développée.

## Documents

- [DESIGN.md](DESIGN.md) : l'apparence — couleurs, typographie, espacements et composants.
- [EXPERIENCE.md](EXPERIENCE.md) : le fonctionnement attendu — parcours, contenu des écrans, états et accessibilité.

Les exigences héritées portent `[PRD]`. Les cinq choix par défaut acceptés portent `[CHOIX ACCEPTÉ]`. Le [registre des décisions UX](EXPERIENCE.md#registre-des-décisions-ux) consigne les conventions validées et la limite provisoire A-7.

## Ouvrir les cinq maquettes

Ouvrir les fichiers HTML dans un navigateur, par double-clic ou par les liens suivants. Aucun serveur ni installation de dépendances n'est nécessaire.

1. [Formulaire public](mockups/formulaire-public.html) — formulaire complet/vierge, chargement, erreur, confirmation, email en échec et résultat incertain.
2. [Liste des demandes](mockups/liste-demandes.html) — recherche et filtres, tableau ordinateur/fiches téléphone, 25 demandes fictives dans une page, vide, aucun résultat, chargement et erreur.
3. [Détail, traitement et historique](mockups/detail-demande.html) — transitions, réouverture, historique, conflit et résultats d’une relance.
4. [Utilisateurs](mockups/utilisateurs.html) — invitation, état du compte, rôles, réinitialisation et dernier administrateur.
5. [Paramètres](mockups/parametres.html) — gestion des catégories, contact de support et restrictions.

La barre de consultation en haut est extérieure au produit ; ses liens permettent de changer de maquette et d'état. Les fichiers montrent des **instantanés** : pas de script, de requête réseau, d'envoi d'email, de connexion, de recherche effective ou de sauvegarde. Les contrôles de saisie sont illustratifs ; les champs d'exemple sont en lecture seule pour ne pas recueillir de vraies coordonnées. Seule la première demande de la liste mène au dossier fictif représenté ; les autres lignes et les boutons de pagination sont des références visuelles fixes, pas d'autres dossiers développés.

Réduire la fenêtre du navigateur permet de comparer l'ordinateur et le téléphone. Les états « confirmation » et « email en échec » doivent toujours conserver la même référence fictive. Dans le détail « commentaire manquant » ou « conflit », aucun événement de réussite n'est ajouté à l'historique.

## Couverture et limites

La connexion, la déconnexion et la récupération sont des variantes de la maquette Liste. Depuis la [liste administrateur](mockups/liste-demandes.html#administrateur), le menu permet d’ouvrir Utilisateurs et Paramètres. La liste collaborateur présente l’entrée Demandes. La barre supérieure permet de comparer les cinq pages quel que soit le rôle illustré.

La notice de données et le contact de support sont illustratifs et utilisent `.example`. Avant tout usage réel, les informations et décisions restant dans la section 9 du PRD devront être finalisées. A-7 retient provisoirement 1 000 caractères pour le commentaire d’intervention.

Les [résultats techniques](controle-local.json) consignent les contrôles de liens, d’états, de contraste, de navigation et de clavier sur les maquettes corrigées. Le dossier `.working/` contient les outils de rendu et de contrôle documentaire, ainsi que les captures de la remise initiale. Les profils temporaires de navigateur sont hors du projet. Aucun test de sécurité ou de fonctionnement du futur produit n'est certifié par ces contrôles.

**Statut UX : validé le 19 novembre 2026.** Le lot de corrections et les conventions A-1 à A-6 et A-8 à A-11 sont approuvés. A-7 reste provisoire.

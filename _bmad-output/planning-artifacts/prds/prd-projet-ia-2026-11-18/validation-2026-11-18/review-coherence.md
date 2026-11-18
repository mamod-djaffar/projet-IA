# Relecture indépendante — cohérence des comportements

Date : 2026-11-18. Documents examinés : `prd.md`, `addendum.md`, `source-besoin.md`. Aucun document source modifié.

**Verdict : cohérence générale satisfaisante ; aucun conflit bloquant identifié. Deux précisions de recette sont proposées avant validation.** Une hypothèse explicitement signalée n'est pas considérée comme un défaut du seul fait qu'elle reste à approuver. Les corrections ci-dessous sont des propositions à faire valider par l'utilisateur, sans autorisation de développement.

## C1 — Le nombre total d'essais d'envoi peut être compris de deux façons

- **Sévérité : mineure — ambiguïté du résultat à vérifier.**
- **Localisation :** `prd.md`, FR-3, critère des relances ; rappel H4.
- **Extrait exact :** « Trois tentatives automatiques au maximum sont proposées sur 24 heures, puis une alerte interne » ; H4 : « trois tentatives sur 24 h ».
- **Conséquence concrète :** une personne peut compter l'envoi initial parmi ces trois tentatives, une autre prévoir l'envoi initial puis trois nouveaux essais. Les deux peuvent alors annoncer une recette réussie avec un nombre différent d'emails tentés et un moment différent pour l'alerte. La conservation de la demande malgré l'échec, elle, est claire et confirmée.
- **Correction proposée à valider :** préciser « trois tentatives au total, envoi initial compris, pendant les 24 heures suivant l'enregistrement ; après le troisième échec, alerte interne ». Si Nova Services souhaite trois nouvelles tentatives après l'envoi initial, annoncer explicitement quatre tentatives au total. Ce choix ne prescrit aucun outil.

## C2 — La comparaison des oublis ne permet pas de conclure sur leur diminution

- **Sévérité : modérée — mesure de réussite métier insuffisamment définie.**
- **Localisation :** `prd.md`, section 2, résultat attendu ; section 8, SM-5 et décision de généralisation.
- **Extraits exacts :** « La diminution réelle des oublis devra être mesurée pendant un pilote » ; « Comparer les oublis signalés à un état initial relevé avant pilote » ; « La direction consigne sa décision et les écarts restants. »
- **Conséquence concrète :** SM-5 vérifie correctement que les demandes déposées restent retrouvables, mais ne définit ni ce qui compte comme oubli, ni la période de comparaison, ni le résultat permettant d'affirmer une diminution. Par exemple, deux oublis sur vingt sollicitations avant et deux sur deux cents pendant le pilote donnent un nombre identique mais une proportion différente. Le bilan peut donc être interprété dans les deux sens. Cela n'empêche pas de vérifier les fonctions ; cela empêche de vérifier l'effet métier annoncé.
- **Correction proposée à valider :** avant le pilote, convenir d'une définition simple d'un oubli, relever le nombre de sollicitations et d'oublis sur des périodes comparables, puis comparer leur proportion. Faire approuver la cible par Nova Services avant le pilote, ou indiquer explicitement que ce premier pilote établit seulement une mesure de départ et qu'aucune baisse minimale n'est encore exigée pour la généralisation. Ne pas inventer ici un pourcentage présenté comme accepté.

## Points contrôlés sans autre constat

- **Formulaire et référence :** email et téléphone sont obligatoires ; validation en cas de contournement de l'écran ; confirmation après enregistrement durable ; absence de fausse confirmation en cas d'échec ; référence unique et protection contre le même envoi répété. Le mécanisme technique de reconnaissance d'un envoi reste à concevoir, ce qui ne constitue pas en soi une contradiction du besoin.
- **Échec email :** la demande et sa référence sont conservées, l'écran ne promet pas une réception effective, l'état d'envoi est distinct du statut métier et une relance n'ajoute aucune demande. S5 est correctement repris. Le suivi proposé sous H4 ne rend pas cette conservation facultative.
- **Statuts et historique :** création Nouvelle ; transitions explicites ; réouverture En cours ; absence de retour à Nouvelle ; définition du traitement terminé ; contrôle des modifications concurrentes et enregistrement commun du statut et de sa trace.
- **Catégories :** catégories actives au dépôt, conservation du rattachement des anciennes demandes, renommage, désactivation et garde d'au moins une catégorie active. Les statuts restent fixes.
- **Droits et comptes :** droits communs collaborateurs/administrateurs, gestion réservée à l'administrateur, retrait effectif des droits dès la requête suivante, protection du dernier administrateur et initialisation du premier. Le rôle technique d'exploitation est explicitement distinct du rôle administrateur métier.
- **Sauvegarde et restauration :** périmètre couvrant les données, comptes et droits ; services externes pris en compte ; exercice isolé avec résultats consignés ; absence de réexpédition des emails pendant le test ; précautions sur les données supprimées et distinction entre retour de version et restauration. Les objectifs H9 et les choix d'exploitation restent à approuver, avec une échéance indiquée avant production.
- **Autres mesures de réussite :** SM-1 à SM-4 et SM-6 comportent des résultats observables ; les contre-mesures évitent de compter comme réussite des clôtures artificielles ou une simple acceptation de l'email par le prestataire.

Les durées de conservation, fournisseurs, responsables nommés et modalités de transition des emails/appels sont explicitement reportés à des décisions identifiées avant utilisation réelle. Ces reports annoncés ne sont pas signalés comme des omissions cachées.

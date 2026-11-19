---
name: Nova Services
description: Parcours et états de l'application de gestion des demandes, fondés sur le PRD approuvé.
status: pending_validation
created: 2026-11-18
updated: 2026-11-19
sources:
  - ../../prds/prd-projet-ia-2026-11-18/prd.md
  - DESIGN.md
---

# Nova Services — EXPERIENCE

Proposition à validation utilisateur, sans développement de l'application. **[PRD]** désigne une règle héritée ; **[CHOIX ACCEPTÉ]** un défaut UX accepté ; **[HYPOTHÈSE UX A-n]** une décision de présentation encore à valider. Les hypothèses sont regroupées à la fin et ne modifient pas les règles déjà approuvées.

## Foundation

**[PRD]** Application web en français : dépôt sans compte, deux rôles internes, utilisation au clavier, sur téléphone et ordinateur. Le PRD approuvé est référencé dans `sources` ; ses FR/NFR gardent leurs identifiants. [DESIGN.md](DESIGN.md) possède les couleurs, dimensions, typographie et composants ; les références comme `{colors.primary}` désignent ses tokens. Aucun système UI, framework ou service d'envoi n'est choisi ici.

**[CHOIX ACCEPTÉ]** Trois maquettes HTML locales : formulaire, liste, détail. Elles utilisent CSS et police système, sans script ni réseau, sans compte réel, envoi, stockage ou connexion à Supabase. Les liens d'état sélectionnent des instantanés fictifs ; les champs et boutons du produit illustrent une composition, pas une application opérationnelle.

Les états demandés sont : **vide** (aucune donnée ou formulaire neuf), **chargement** (attente d'une réponse), **erreur** (validation ou opération échouée), **complet** (contenu entièrement disponible). « Complet » ne signifie pas automatiquement que la demande est Traitée. La confirmation de dépôt et le statut Traitée ont leurs propres représentations.

## Information Architecture

**[CHOIX ACCEPTÉ]** Public : en-tête Nova Services, formulaire centré et contact de support. Interne : menu « Demandes », puis « Utilisateurs » et « Paramètres » pour l'administrateur uniquement. L'accès interne nécessite une connexion ; masquer un lien ne remplace jamais le contrôle serveur. Les catégories et le contact se gèrent dans « Paramètres ».

Les identifiants d'écran ci-dessous ne fixent pas des routes techniques. Chaque écran est relié à un parcours ; les variantes d'erreur transversales ne créent pas de rôle supplémentaire.

| Écran | Accès et contenu attendu | Parcours et référence visuelle |
|---|---|---|
| **E01 — Déposer une demande** | Public. Nom, email, téléphone, objet, catégorie active, description ; tous obligatoires ; aides/limites ; consigne de ne pas transmettre de secret ; information relative aux données et support | UJ-1, FR-1/2 ; [maquette](mockups/formulaire-public.html) |
| **E02 — Confirmation** | Résultat du dépôt seulement après enregistrement durable. Référence persistante, résultat de l'envoi connu sans promettre réception, support ; aucun accès public par référence | UJ-1, FR-2/3 ; [confirmation](mockups/formulaire-public.html#confirmation) et [échec email](mockups/formulaire-public.html#email-echec) dans le même fichier |
| **E03 — Connexion** | Public. Email/mot de passe, afficher/masquer le mot de passe avec libellé, connexion, lien de réinitialisation, retour formulaire et support ; aucune inscription publique | Entrée de UJ-2/3, FR-4 ; décrit ici, sans quatrième maquette |
| **E04 — Activation et récupération** | Demande d'email de réinitialisation, confirmation générique ; formulaire de nouveau mot de passe par lien temporaire à usage unique ; état lien expiré/réutilisé et demande d'un nouveau lien | UJ-3 et récupération de UJ-2, FR-4/10 ; décrit ici |
| **E05 — Demandes** | Collaborateur/admin actifs. Recherche référence/objet/nom, sélection des statuts et raccourci Nouvelle + En cours, catégorie, période début/fin, résultats récents, 25/page, accès au détail, déconnexion et support | UJ-2, FR-5/7 ; [maquette](mockups/liste-demandes.html) |
| **E06 — Détail et traitement** | Collaborateur/admin actifs. Référence/statut/dates, coordonnées et dépôt original en lecture seule, traitement avec commentaire, historique. Administrateur seulement : suivi email et relance explicite vérifiée | UJ-2, FR-3/6/8/9 ; [maquette](mockups/detail-demande.html), [variante administrateur](mockups/detail-demande.html#administrateur) |
| **E07 — Utilisateurs** | Administrateur. Liste nom/email/rôle/état actif ou désactivé ; création/invitation, changement de rôle, désactivation/réactivation et déclenchement de réinitialisation ; dernier admin protégé | UJ-3, FR-10 ; liste et panneau d'édition décrits ici |
| **E08 — Paramètres** | Administrateur. Section Catégories avec cinq valeurs initiales, ajout/renommage/désactivation/réactivation et état ; section Contact de support avec valeur affichée et enregistrement ; aucun secret ni éditeur de statut | UJ-3, FR-11 ; décrit ici |
| **E09 — Accès indisponible** | État transversal : session expirée/désactivée, accès interdit ou référence introuvable. Ne jamais y afficher de contenu privé ; connexion ou retour vers une liste autorisée selon le cas | UJ-2/3, FR-4/6/10 ; [variante du détail](mockups/detail-demande.html#acces-refuse), règles ici |

**Couverture acceptée :** seuls E01/E05/E06 sont les trois maquettes ; E02 est un état du formulaire. E03/E04/E07/E08/E09 sont des spécifications de contenu et de comportement, pas des maquettes manquantes à produire automatiquement. Les consoles techniques de logs, sauvegardes et déploiement restent hors navigation métier ; le support de premier niveau n'est pas un troisième rôle.

## Voice and Tone

**[HYPOTHÈSE UX A-4]** Vouvoiement, phrases courtes, messages factuels et sans jargon technique pour le demandeur. Un message d'erreur indique quoi faire et conserve le travail ; il ne blâme pas la personne. Les termes Nouvelle, En cours et Traitée sont identiques au PRD.

| Situation | Texte de référence |
|---|---|
| Avant dépôt | « Déposer une demande » ; « Tous les champs sont obligatoires. » |
| Champs invalides | « Vérifiez les champs indiqués. Votre saisie est conservée. » puis erreur près du champ |
| Limite de description | « La description dépasse 5 000 caractères. Raccourcissez-la pour envoyer votre demande. » Sans troncature |
| Dépôt confirmé | « Votre demande a bien été enregistrée. » puis « Votre référence : NS-2026-0142 » |
| Email accepté | « Le service d'envoi a accepté l'email de confirmation. Sa réception n'est pas encore vérifiée. » |
| Email en échec | « Votre demande est enregistrée. L'email de confirmation n'a pas pu être envoyé. Conservez votre référence ; vous n'avez pas à déposer une nouvelle demande. » |
| Résultat du dépôt incertain | « Nous n'avons pas pu vérifier le résultat de l'envoi. Votre saisie est conservée. Réessayez pour retrouver la même demande si elle a été enregistrée. » Aucune fausse référence |
| Commentaire requis | « Décrivez l'intervention effectuée pour passer la demande à Traitée. » |
| Traitement enregistré | « Le statut et le commentaire ont été enregistrés dans l'historique. » |
| Conflit | « Cette demande a été modifiée entre-temps. Rechargez sa version actuelle avant de réessayer. Votre commentaire reste disponible dans ce formulaire. » |
| Accès refusé | « Vous ne pouvez pas accéder à cet espace. » Aucun objet, nom ou contenu de demande |
| Limitation temporaire | « Trop de tentatives rapprochées. Réessayez après le délai indiqué. » Le délai vient du serveur, pas d'un nombre inventé dans l'écran |

Le contact et les données d'exemple des maquettes utilisent des domaines `.example` et ne sont pas des coordonnées réelles à contacter. Les mentions d'information sont illustratives : **responsable du traitement, base juridique, durées finales et notice complète restent à finaliser avant usage réel**, selon Q-4 du PRD. Aucune case de consentement obligatoire n'est ajoutée par défaut.

## Component Patterns

| Composant de DESIGN | Comportement attendu |
|---|---|
| `brand` | Retour au formulaire dans le public, à la liste dans l'interne ; aucune confusion entre ouverture du public et déconnexion |
| `navigation` | Entrée active annoncée ; éléments admin non présentés aux collaborateurs ; déconnexion explicite ; états serveur de refus restent applicables |
| `panel` | Titre associé à une région ; l'ordre de lecture suit le contenu, pas un déplacement purement visuel |
| `button-primary` | Action nommée (« Envoyer ma demande », « Enregistrer le traitement ») ; pendant l'opération, libellé d'attente et prévention du double déclenchement ; garanties serveur H3/H4 toujours requises |
| `button-secondary` | Retour, recharger, réinitialiser les filtres ou annuler ; annuler une édition ne doit pas supprimer une demande existante |
| `field` | Libellé et aide permanents ; conserver toute saisie en erreur ; aucune troncature par `maxlength` ; valider côté interface et serveur ; erreurs liées au champ et récapitulatif focalisable après soumission |
| `filters` | Critères combinables, bouton « Rechercher » explicite ; sélection multiple des trois statuts avec raccourci « À traiter » = Nouvelle + En cours. Conserver recherche, catégorie, statuts et deux dates en pagination ; remise à zéro revient à la liste complète |
| `request-list` | Objet/référence ouvrent le détail avec un lien explicite ; tableau sémantique sur ordinateur et mêmes valeurs en fiches sur mobile ; pas d'édition en ligne ni de suppression ; ordre récent et 25 résultats/page |
| `pagination` | Première/dernière page indisponibles au bon moment ; compteur exact ; nouveau filtre repart en page 1 **[A-5]** ; retour du détail conserve les critères et la page **[A-5]** |
| `badge` | Statut en texte, forme et couleur ; aucune icône seule ; ne pas utiliser le même badge pour l'email |
| `notice` | Annoncer réussite/erreur avec région adaptée ; référence et erreur persistantes ; rechargement conservant contexte après un conflit, sans écraser le serveur |
| `treatment` | Montrer statut actuel et cible autorisée ; commentaire facultatif vers En cours, obligatoire vers Traitée, Nouvelle → Traitée compris ; un texte blanc ne vaut pas commentaire. Ne proposer aucun retour à Nouvelle ni bouton d'ajout autonome de commentaire |
| `history` | Événements datés/attribués, ancien → nouveau statut et commentaire ; création attribuée au dépôt public ; aucune édition/réponse ; compte désactivé n'efface pas les événements. Les procédures exceptionnelles de données restent distinctes |
| `email-status` | Administrateur uniquement. Afficher état exact, tentatives automatiques sur trois/24 h, adresse initiale en lecture seule, derniers résultats. Vérifier adresse/état puis confirmer explicitement la relance. Empêcher les relances concurrentes ; tracer date/auteur/résultat, sans réinitialiser le compteur automatique |
| `empty-state` | Distinguer première liste vide, aucun résultat après filtres et référence introuvable ; proposer réinitialisation seulement si des critères sont appliqués |
| `skeleton` | Structure statique, texte « Chargement… » ; contenu privé non anticipé avant autorisation ; ne pas annoncer un chargement terminé avant réponse |
| `dialog` | Pour désactivation/rôle/relance selon A-6 : effet et cible nommés, confirmation explicite, Annuler, focus contenu dans la fenêtre et restitué au déclencheur. Pas de dialogue pour chaque saisie |
| `support` | Même contact sur formulaire, confirmation, connexion, espace interne et email ; les changements concernent les affichages/envois suivants ; ne pas exposer les coordonnées privées d'alerte technique |

### Données du formulaire — FR-1

| Champ obligatoire | Contenu et aide | Limite PRD |
|---|---|---|
| Nom | Nom du demandeur ; aucune société supplémentaire obligatoire | 120 caractères |
| Email | Adresse recevant la référence ; erreur si format manifestement invalide | 254 |
| Téléphone | Champ de téléphone acceptant une saisie textuelle avec indicatif/espaces ; aucune région imposée par cette UX | 30 |
| Objet | Résumé de la demande | 150 |
| Catégorie | Une des catégories actives ; liste initiale : Informations, Problème technique, Rendez-vous, Administratif, Autre | Liste administrée, pas de valeur libre |
| Description | Texte multiligne ; consigne de ne pas inclure de secret | 5 000 |

Les limites H1 ne s'appliquent pas automatiquement au commentaire d'intervention, ajouté ensuite au PRD : **[HYPOTHÈSE UX A-7]** sa limite technique reste à préciser à la conception, sans inventer ici une nouvelle valeur approuvée. Afficher une aide stable et le caractère obligatoire selon la cible. Pour les champs H1, compteur discret de caractères proposé ; autoriser de corriger une saisie trop longue sans la tronquer.

## State Patterns

Chaque écran possède les états ci-dessous. Une erreur de réseau n'est jamais représentée comme une liste vide. La palette renvoie à `{colors.error-ink}`, `{colors.error-bg}`, `{colors.done-ink}` et `{colors.done-bg}` ; les panneaux utilisent `{components.panel.background}`.

| Écran | Vide / initial | Chargement | Erreur / accès | Complet / réussite |
|---|---|---|---|---|
| E01 Dépôt | Champs vierges et catégorie à choisir, consignes visibles ; pas d'erreurs avant interaction | « Enregistrement… », action bloquée, saisie gardée en mémoire du formulaire courant | Champs invalides avec messages ; trop de tentatives ; panne ou résultat incertain conservant la saisie et le même envoi | Données remplies prêtes à envoyer ; la réussite mène à E02 après persistance seulement |
| E02 Confirmation | Sans référence confirmée, rester dans l'état incertain d'E01 | Vérification du résultat du même envoi, sans nouveau dépôt | Email échoué = demande enregistrée et référence conservée ; pas d'échec global ni nouvelle demande imposée | Référence durable + résultat connu de l'email, support ; aucun lien public vers le détail |
| E03 Connexion | Email/mot de passe vides ; pas d'inscription | « Connexion… », pas de double soumission | Erreur générique sans révéler l'existence du compte ; restriction temporaire ; panne | Accès à E05 selon autorisation ; compte désactivé refusé même si un jeton existe |
| E04 Liens | Email demandé ou nouveaux mots de passe selon le lien | « Envoi… » / « Enregistrement… » | Lien expiré/réutilisé, erreur explicite ; message générique pour la demande d'email | Nouveau mot de passe défini puis connexion ; lien consommé une seule fois |
| E05 Liste | Aucune demande reçue, ou aucun résultat avec critères affichés et action de remise à zéro | En-tête/filtres gardés, squelette, actions dépendantes indisponibles | Message de chargement impossible + Réessayer ; session invalide => E09 sans données | Résultats, critères, compteur et 25/page ; page inchangée au retour du détail |
| E06 Détail | Référence introuvable => message sans inventer une demande ; une demande valide conserve au minimum son événement de création | Squelette lecture/traitement/historique ; pas de donnée privée avant contrôle d'accès | Commentaire manquant, panne d'écriture, conflit, perte de droits ; rien de partiel n'est enregistré. Saisie locale conservée en erreur réseau/conflit, sans fuite après perte d'accès | Contenu complet ; changement atomique visible dans l'historique, statut et commentaire cohérents ; admin : relance en attente/acceptée/échec distincte |
| E07 Comptes | Un seul compte au départ : premier administrateur initialisé hors inscription publique, invitation d'autres collaborateurs proposée | Liste ou opération en cours avec boutons protégés | Email déjà utilisé, lien d'invitation échoué, perte de droits, dernier admin protégé ; aucune fuite de mot de passe | Compte créé/invité, rôle actualisé ou état changé ; le serveur retire les accès dès la requête suivante |
| E08 Paramètres | Nouveau nom de catégorie vide ; ne pas autoriser zéro catégorie active | Enregistrement du paramètre, formulaire conservé | Nom actif dupliqué, désactivation de la dernière active, réactivation en conflit ou erreur serveur ; aucune fausse réussite | Catégorie ajoutée/renommée/désactivée/réactivée, historique préservé ; contact mis à jour aux emplacements prévus |
| E09 Accès | Aucun contenu privé | Vérification sans afficher un ancien cache privé | Pas d'autorisation => message générique ; session expirée => connexion ; compte désactivé => support, sans boucle automatique | Retour à une surface autorisée après nouvelle connexion effective |

**États sensibles :**

- Un changement refusé ne doit pas être présenté comme enregistré ; le commentaire ne crée pas seul un événement.
- Si le compte est désactivé, ne pas continuer à montrer une demande par une navigation locale ou une réponse en cache. La gestion serveur reste une exigence, pas un effet de maquette.
- Le serveur doit retrouver le même dépôt après interruption réseau ; le navigateur ne crée pas un nouvel envoi volontaire pour « réessayer ». Le mécanisme et sa durée de validité relèvent de la conception.
- Une catégorie désactivée entre ouverture et envoi du formulaire produit une erreur explicite, conserve les autres champs et propose la liste active actualisée.
- Accepter un email ne permet jamais d'afficher « reçu » ; les dix emails de recette seront suivis aux trois étapes prévues en H10.

## Interaction Primitives

**[HYPOTHÈSE UX A-5]** Les filtres sont appliqués par « Rechercher », pour éviter de recharger à chaque caractère. Les dates sont inclusives ; début après fin provoque une erreur près des deux dates. Le fuseau d'affichage proposé est Europe/Paris, avec dates françaises et heures sur 24 h ; cette convention est à confirmer avec la conception. Trier par date de réception décroissante, puis un ordre stable en cas d'égalité, sans inventer un tri métier supplémentaire.

**[PRD]** Interface et serveur valident ; ne pas remplacer ces garanties par un bouton désactivé. Les données de dépôt sont en lecture seule dans le détail. Enregistrer le traitement est une action explicite, non un enregistrement au changement du sélecteur. Vers Traitée, une aide devient « Commentaire obligatoire » avant l'action ; vers En cours, « Commentaire facultatif ». Le commentaire et la cible restent disponibles si un conflit demande de recharger **[HYPOTHÈSE UX A-6]**, mais ne sont pas envoyés automatiquement après rechargement.

**[HYPOTHÈSE UX A-6]** Les actions de rôle, désactivation et relance email utilisent une confirmation nommant la personne/adresse et la conséquence. La maquette admin montre une vérification explicite de l'adresse initiale et de l'état ; le mécanisme exact de confirmation reste une convention UX, sans nouvelle règle d'éligibilité à l'envoi. Les catégories se modifient dans un panneau simple avec Annuler/Enregistrer. Aucun compte ni nouvelle demande n'est supprimé par un Annuler.

**[HYPOTHÈSE UX A-8]** Aucune persistance de brouillon dans le navigateur et aucun mode hors ligne ne sont ajoutés. « Saisie conservée » signifie dans le formulaire courant pendant une erreur/reprise ; un rechargement complet ou la fermeture ne garantit pas un brouillon. Prévenir d'une navigation volontaire si une saisie non envoyée risque d'être perdue ; ne pas afficher cette confirmation à chaque action ordinaire. Ne pas conserver de contenu privé sur le poste après déconnexion.

## Accessibility Floor

**[PRD NFR-2]** Clavier, téléphone/ordinateur, libellés, erreurs et statuts lisibles. **[HYPOTHÈSE UX A-2]** Socle proposé : titres dans l'ordre, zones de navigation et contenu nommées, lien d'évitement, cibles de 44 px, focus visible `{colors.focus}` sur fond clair et `{colors.focus-inverse}` sur le menu marine, zoom à 200 % sans perte d'action. Vérifier contraste et lecture à 360 px ; aucune conformité complète n'est certifiée par les maquettes.

- Associer chaque champ à son libellé et son aide ; l'erreur utilise `aria-describedby`/`aria-invalid` dans la réalisation future. Après tentative invalide, déplacer le focus vers le récapitulatif puis permettre d'atteindre les champs.
- Texte d'erreur annoncé ; réussite non intrusive annoncée ; référence toujours visible et sélectionnable, sans notification temporaire seule.
- Tableau avec en-têtes ; fiches mobiles avec mêmes libellés. Lien de détail nommé par référence/objet, pas 25 liens « Voir » indifférenciés.
- Cible de statut et commentaire accessibles au clavier ; obligation annoncée sans se fier à une couleur ou un astérisque seul.
- Aucune animation nécessaire ; squelette statique. Les états de chargement sont aussi des textes, pas un simple indicateur tournant.
- Modalité de confirmation : focus cadré, retour possible par Annuler/Échap et restitution du focus ; ne pas rendre inaccessible l'arrière-plan sans contrepartie.

## Responsive & Platform

**[CHOIX ACCEPTÉ]** Maquettes adaptées ordinateur/téléphone, liste en fiches sous 768 px. **[HYPOTHÈSE UX A-3]** Les points de bascule 768/1 024 px sont des conventions de mise en page. Leurs valeurs peuvent être ajustées sans modifier le métier.

Le formulaire passe de deux colonnes pour nom/email à une seule ; téléphone et catégorie restent simples. Les filtres se déroulent dans l'ordre recherche, statuts, catégorie, début, fin, actions. Le détail passe à résumé/contenu, traitement, historique ; coordonnées et commentaires longs se coupent visuellement aux limites de mot, sans changer leur contenu. Le menu ne cache ni bouton de traitement ni erreur. Les tests de référence du PRD à 360 et 1 280 px restent nécessaires dans l'application réalisée.

## Key Flows

### UJ-1 — Déposer une demande

**Camille**, prospect sans compte, veut signaler un problème et conserver une preuve de réception.

1. Elle ouvre E01, lit les consignes et remplit les six champs obligatoires avec les limites H1.
2. Elle choisit une catégorie active puis « Envoyer ma demande ». Erreur => récapitulatif, champs indiqués et saisie intégralement conservée, sans troncature.
3. L'enregistrement est vérifié côté serveur. Double-clic/reprise réseau retrouvent la même demande par idempotence, sans nouvelle référence.
4. **Moment utile :** E02 confirme que la demande est conservée et affiche sa référence. L'état de l'email est expliqué séparément.
5. Elle conserve la référence et utilise le contact de support si besoin ; la référence n'ouvre aucun dossier public.

Échec essentiel : si l'email échoue, même demande et même référence, sans invitation à recommencer. Si le résultat de l'enregistrement est incertain, E01 ne fabrique pas une confirmation et propose de retrouver le même envoi. Références : FR-1/2/3, maquettes [complet](mockups/formulaire-public.html#complet), [erreur](mockups/formulaire-public.html#erreur), [confirmation](mockups/formulaire-public.html#confirmation), [email en échec](mockups/formulaire-public.html#email-echec).

### UJ-2 — Traiter une demande avec commentaire et historique

**Malik**, collaborateur, doit retrouver une demande ouverte et expliquer sa résolution.

1. Il passe par E03 si nécessaire, puis E05. Il retrouve les demandes Nouvelle et En cours, recherche un nom/objet/référence ou combine catégorie/période ; les critères restent en pagination.
2. Il ouvre E06, lit le dépôt original et l'historique sans les réécrire.
3. Il choisit une transition autorisée. Commentaire facultatif vers En cours ; obligatoire et non blanc vers Traitée, y compris depuis Nouvelle.
4. Il enregistre explicitement. **Moment utile :** statut, événement et commentaire apparaissent ensemble dans l'historique avec date/heure et identité réelle de Malik.
5. Il retourne à la liste avec ses critères/page ; si nécessaire, une réouverture passe Traitée → En cours et ajoute un événement.

Échecs : commentaire manquant => rien enregistré ; conflit => version actuelle à recharger et aucune écriture silencieuse ; perte d'accès => plus de lecture/action protégée. Aucun retour à Nouvelle ni commentaire autonome. Références : FR-4 à FR-9, [liste](mockups/liste-demandes.html), [détail](mockups/detail-demande.html), [erreur](mockups/detail-demande.html#erreur), [conflit](mockups/detail-demande.html#conflit), [traitement enregistré](mockups/detail-demande.html#traitee).

### UJ-3 — Administrer les accès

**Léa**, administratrice, prépare les accès et les catégories sans créer un troisième rôle.

1. Elle se connecte par E03 puis ouvre E07 via « Utilisateurs ». Elle invite un collaborateur par email unique ; la personne définit son mot de passe via E04, sans mot de passe partagé ni inscription publique.
2. Elle change un rôle, désactive ou réactive un compte avec confirmation utile ; le dernier administrateur actif ne peut être retiré. Les anciens événements restent tracés selon la politique de conservation à finaliser.
3. Elle ouvre E08, ajoute/renomme/désactive/réactive une catégorie. Un doublon actif ou la dernière catégorie active empêche l'action avec une explication ; les demandes historiques gardent leur rattachement.
4. Elle met à jour le contact de support. **Moment utile :** la catégorie active et le contact sont disponibles pour les futurs affichages/envois, sans intervention sur le code ni exposition de secrets.
5. Si un email de confirmation a échoué, elle ouvre E06 en administratrice, vérifie adresse initiale et état, puis déclenche une relance explicite. Date/auteur/résultat sont tracés ; la demande et son statut métier restent inchangés.

Échecs : lien expiré, invitation échouée, email de compte dupliqué, perte des droits, catégorie en conflit ou relance en cours sont expliqués sans résultat trompeur. Références : FR-3/4/10/11 ; E07/E08 décrits dans ce document et [variante email administrateur](mockups/detail-demande.html#administrateur). Les consoles de logs/restauration et l'initialisation du premier admin relèvent de procédures techniques, pas d'un rôle UI supplémentaire.

## Hypothèses UX distinctes du PRD

Les cinq réponses par défaut sont acceptées. Les détails ci-dessous restent proposés à validation de ces livrables, sans nouvelle série de questions :

| ID | Hypothèse | Effet / validation attendue |
|---|---|---|
| A-1 | Palette exacte, police système, rayons, espacement, ombre et mode clair seul | Valider l'apparence de DESIGN et des trois maquettes |
| A-2 | Cibles 44 px, focus 3 px, objectifs de contraste et gestion de focus détaillée | Valider le socle UX ; vérification réelle à la réalisation |
| A-3 | Points de bascule 768/1 024 px, formulaire 760 px, menu 224 px et ordre mobile | Valider les compositions ordinateur/téléphone |
| A-4 | Vouvoiement, textes de référence et contacts d'exemple | Valider le ton ; contacts réels et notice complète avant production, conformément au PRD |
| A-5 | Recherche déclenchée par bouton, retour conservant contexte, dates Europe/Paris, filtre changé => page 1 | Valider ces conventions sans modifier la combinabilité imposée |
| A-6 | Confirmations ciblées, vérification explicite avant relance et saisie de commentaire conservée en conflit | Valider le comportement ; garanties serveur inchangées |
| A-7 | Limite du commentaire non fixée dans le PRD | À préciser à la conception, sans appliquer par défaut les 5 000 caractères de la description |
| A-8 | Pas de brouillon persistant/offline ; avertissement en quittant une saisie non envoyée | Valider cette limite de l'expérience, compatible avec la saisie conservée dans le formulaire courant |

Les valeurs des maquettes (références, noms, dates, contacts, volumes) sont fictives. Les seuils anti-abus, RPO/RTO, durées et performances restent ceux du PRD, avec leurs réserves ; le design n'en crée pas de nouveaux. Les réserves avant production de sa section 9 restent obligatoires.

## Contrôle de couverture et remise pour validation

Contrôle local réalisé directement, sans relecture par sous-agents et sans exercice créatif. E01–E09 disposent de contenu et d'états ; les trois UJ ont étapes, résultat utile et chemins d'échec. Tous les composants renvoient à un même nom dans DESIGN ; les tokens doivent être vérifiés localement. Les trois références visuelles sont accessibles depuis les sections concernées.

La validation demandée porte sur DESIGN, EXPERIENCE et les trois maquettes, y compris A-1 à A-8. L'UX n'est pas encore approuvée ; aucune architecture, story ou implémentation n'est démarrée automatiquement. Les réserves juridiques/techniques et les décisions non fixées du PRD ne sont pas inventées par la maquette.

---
title: "Nova Services — Gestion des demandes clients"
status: final
validation_status: approved
consolidation_status: complete
approved: 2026-11-18
approval_source: S19
next_phase_status: awaiting_user_confirmation
created: 2026-11-18
updated: 2026-11-18
language: fr
sources:
  - source-besoin.md
---

# PRD — Nova Services

**PRD définitivement approuvé par l'utilisateur le 2026-11-18 (S19), avec les réserves avant production de la section 9. L'étape PRD est clôturée.** Les réserves doivent être levées avant toute mise en production ou pilote réel. La sauvegarde Git/GitHub précède la suite ; aucun travail UX ne commence sans une nouvelle confirmation de l'utilisateur. Aucun développement ni travail UX n'est commencé dans cette clôture. L'approbation du document ne prouve pas que l'application est réalisée et n'autorise pas une mise en production.

## 1. Rôle du document et origine des décisions

Ce PRD décrit le besoin, les comportements attendus et les vérifications à réaliser. Il sert à Nova Services, au développeur et aux futurs travaux de conception des écrans et de l'architecture. Il ne choisit pas encore les prestataires ni la manière de programmer chaque fonction.

**PRD** signifie « document des exigences du produit ». **MVP** signifie « première version utilisable » : ici, elle doit permettre un usage réel, donc inclure sécurité, déploiement, sauvegardes et support.

Les sources sont conservées dans [source-besoin.md](source-besoin.md). Les origines sont distinguées ainsi :

- **[CDC]** : exigence explicite du cahier des charges (S1).
- **[CONFIRMÉ]** : précision ou choix accepté par l'utilisateur (S2 et S4 à S18).
- **H1 à H12** : groupes de décisions initialement proposées comme hypothèses, désormais tous examinés et validés avec les réserves indiquées. Une validation de principe ne transforme pas un seuil provisoire en garantie démontrée.
- **À finaliser avant production** : choix encore indéterminé ou justification/preuve requise avant tout usage réel, y compris le pilote ; ces réserves sont regroupées en section 9.

Les décisions validées servent de référence à la suite du projet ; l'approbation globale est enregistrée en S19. Les obligations du cahier des charges restent obligatoires ; les décisions techniques non prises et les conditions d'exploitation ne sont pas considérées comme acquises par défaut.

## 2. Problème, objectif et utilisateurs

### Problème et résultat attendu

**[CDC]** Les demandes reçues par email ou téléphone sont dispersées dans des fichiers. Nova Services perd du temps et risque des oublis ou des doublons. Le produit doit fournir un lieu commun où chaque demande est conservée, retrouvée et suivie jusqu'à son traitement.

Le pari du MVP est simple : un dépôt confirmé et une liste partagée avec statuts et historique doivent rendre les demandes visibles et leur progression vérifiable. La diminution réelle des oublis devra être mesurée pendant un pilote ; elle n'est pas acquise par la seule présence de ces fonctions.

### Utilisateurs et besoins

| Utilisateur | Besoin concret | Accès attendu |
|---|---|---|
| Client ou prospect [CDC] | Transmettre sa demande et être certain qu'elle est enregistrée | Formulaire public sans compte et confirmation avec référence [CONFIRMÉ] |
| Collaborateur Nova Services [CDC] | Retrouver les demandes, reconnaître celles à traiter et suivre leur évolution | Tous les collaborateurs utilisent l'application et peuvent consulter et traiter toutes les demandes [CONFIRMÉ] |
| Administrateur [CDC] | Maintenir les accès et les paramètres de fonctionnement | Droits du collaborateur, plus comptes et catégories [CONFIRMÉ] |
| Direction [CDC] | Obtenir de la visibilité sur les demandes | [CONFIRMÉ, H2/S8] Utilise un compte collaborateur ou administrateur selon ses responsabilités ; aucun rôle supplémentaire |

**[CONFIRMÉ, H9/S15]** Un référent Nova Services assure le support de premier niveau ; un responsable technique traite les incidents avancés. Ces responsables et leurs remplaçants doivent être identifiés avant la mise en production et toute utilisation de vraies données. Ce sont des responsabilités d'exploitation, pas deux nouveaux types de comptes.

### Trois parcours de référence validés

Ces trois parcours sont confirmés en H12/S18. Les prénoms servent uniquement à illustrer les acteurs ; ils ne créent aucun rôle ni écran supplémentaire.

- **UJ-1 — Déposer une demande.** Camille, prospect sans compte, remplit le formulaire. Si un champ obligatoire manque, elle reçoit une indication précise et corrige sa saisie. Une fois l'enregistrement réussi, elle voit sa référence et reçoit un email avec cette même référence. Si l'email échoue, sa demande reste enregistrée ; elle conserve la référence affichée.
- **UJ-2 — Traiter une demande avec commentaire et historique.** Malik, collaborateur connecté, ouvre la liste filtrée sur Nouvelle et En cours, consulte une demande et la passe En cours, avec commentaire facultatif. Quand l'intervention est terminée, il saisit un commentaire de résolution obligatoire puis la passe Traitée. Il retrouve chaque changement et son commentaire éventuel avec date, heure et auteur dans l'historique ; un autre collaborateur autorisé voit la même évolution. Si une suite est nécessaire, la demande peut être rouverte En cours selon H6.
- **UJ-3 — Administrer les accès.** Léa, administratrice, crée l'accès d'un collaborateur et désactive un ancien compte. Elle ajoute une catégorie de demandes. Les demandes anciennes conservent leur historique et leur catégorie, même si cette catégorie n'est plus proposée au dépôt.

## 3. Périmètre et limites du MVP

### Inclus et obligatoire

- Dépôt sans compte, enregistrement durable, référence, confirmation à l'écran et email.
- Connexion interne pour tous les collaborateurs, liste commune par pages de 25, détail, recherche référence/objet/nom, filtres statut/catégorie/période, statuts, commentaires d'intervention et historique.
- Administration des comptes, des catégories et du contact de support ; contrôle des deux rôles.
- Sécurité, protection des données, production, versionnement, suivi des erreurs, sauvegardes testées, restauration, retour arrière et support documenté.

### Hors MVP

**[CONFIRMÉ]** Affectation individuelle des demandes.

**[CONFIRMÉ, H12/S18]** Les exclusions suivantes limitent le travail sans retirer une exigence du challenge :

- Compte client, consultation publique par référence et suivi client en ligne : seule la réception est confirmée.
- Réponses aux clients depuis l'application, notifications à chaque changement de statut et messagerie : les échanges se poursuivent par les canaux habituels.
- Import automatique des emails, téléphonie et reprise automatique des anciens fichiers : le MVP centralise les dépôts. Une procédure de redirection ou de retranscription des demandes reçues par email/téléphone doit être définie avant le pilote, avec recueil des coordonnées obligatoires ; elle n'ajoute aucune importation automatique.
- Pièces jointes, commentaires internes autonomes hors changement de statut, priorités, délais contractuels de résolution, statuts personnalisés, détection de demandes similaires. Les commentaires d'intervention liés aux changements de statut sont inclus [CONFIRMÉ, H6/S12] ; ils ne constituent pas une messagerie.
- Calendrier de rendez-vous, application mobile à installer, plusieurs langues, tableaux de bord avancés, exports et intégrations externes métier.
- IA dans le produit : l'IA assiste la réalisation du projet ; elle ne trie pas et ne répond pas automatiquement aux demandes.

Les noms des prestataires, l'hébergement et les choix d'architecture restent ouverts. Le socle Next.js/Supabase déjà présent est un contexte existant, pas la preuve qu'une fonction métier ou une mesure d'exploitation est livrée.

## 4. Vocabulaire

| Terme | Définition simple |
|---|---|
| Demande | Enregistrement contenant le nom du demandeur, ses coordonnées, l'objet, la catégorie, la description, une référence, un statut et des dates |
| Demandeur | Client ou prospect qui dépose une demande ; il ne possède pas de compte dans le MVP |
| Référence | Identifiant unique communiqué au demandeur ; ce n'est pas une autorisation de consulter des données privées |
| Catégorie | Type de demande choisi dans une liste gérée par l'administrateur |
| Statut | Étape de traitement : Nouvelle, En cours ou Traitée |
| Historique | Liste datée des événements de traitement, avec l'auteur lorsque l'action est humaine |
| Commentaire d'intervention | Texte interne décrivant l'intervention, conservé dans l'événement d'un changement de statut ; facultatif vers En cours et obligatoire vers Traitée, sans fil de discussion |
| Compte interne | Accès nominatif d'un collaborateur ou d'un administrateur |
| Authentification | Vérification de l'identité lors de la connexion |
| Autorisation | Vérification de ce que la personne a le droit de faire, même lorsqu'elle est déjà connectée |
| Hachage sécurisé du mot de passe | Protection permettant de vérifier un mot de passe à partir d'une empreinte, sans conserver le mot de passe en clair ; mécanisme à choisir et vérifier en conception |
| Journal technique ou log | Trace utile pour comprendre un événement ou une erreur ; distincte de l'historique métier |
| Production | Environnement en ligne utilisé avec les vraies demandes |
| Recette | Ensemble des vérifications permettant de décider si l'application répond aux exigences attendues |
| Sauvegarde / restauration | Copie de données / opération permettant de récupérer ces données après un problème |
| RPO | Objectif de perte de données maximale exprimée en durée ; ici, écart entre le début de l'incident causant la perte et le dernier point cohérent de données effectivement récupérable |
| RTO | Objectif de délai de rétablissement ; ici, mesuré à partir de la prise en charge technique jusqu'au rétablissement vérifié des fonctions essentielles |
| Retour à une version précédente | Remise en service d'une ancienne version de l'application ; ce n'est pas automatiquement une restauration de données |

## 5. Fonctionnalités obligatoires et critères d'acceptation

Une fonctionnalité est acceptée lorsque ses résultats ci-dessous sont observés lors d'une vérification. Les identifiants **FR** désignent les exigences fonctionnelles : ce que l'application permet de faire. Ils servent à retrouver ces exigences dans les futurs travaux. Tous les FR de cette section appartiennent au MVP. Les détails H1 à H12 et le PRD global ont été validés avec leurs réserves (S19) ; les critères restent à vérifier lors de la réalisation.

### 5.1 Dépôt public et accusé de réception — UJ-1

#### FR-1 — Remplir et valider une demande

**Origine : [CDC], champs obligatoires et absence de compte [CONFIRMÉ], téléphone obligatoire confirmé dans S4. Limites et validations de H1 [CONFIRMÉ, S7].**

Le formulaire exige nom, email, téléphone, objet, catégorie et description. L'email est nécessaire à l'envoi de la référence ; le téléphone est également obligatoire, conformément à la précision de l'utilisateur. La catégorie doit être choisie parmi les catégories actives.

Critères observables :

- Un visiteur sans compte peut ouvrir et envoyer le formulaire.
- Chaque champ obligatoire vide, y compris un texte composé seulement d'espaces, empêche l'enregistrement et affiche une explication près du champ.
- Un téléphone absent ou composé seulement d'espaces empêche l'enregistrement, y compris si l'envoi contourne les contrôles de l'écran.
- Un email manifestement mal formé et une catégorie inactive ou inconnue sont refusés, même en contournant l'écran.
- Limites confirmées : nom 120 caractères, email 254, téléphone 30, objet 150, description 5 000. Chaque valeur à la limite est acceptée si les autres règles sont respectées ; au-delà, un message explicite indique le champ et la limite concernés, sans troncature automatique.
- Tous les champs restent obligatoires. Les contrôles de présence, de format déjà défini et de longueur s'appliquent dans l'interface et sur le serveur ; un envoi direct qui contourne l'interface est également refusé s'il ne respecte pas ces règles [CONFIRMÉ, S7].
- Une erreur de validation conserve intégralement les valeurs saisies dans le formulaire courant, y compris le texte dépassant une limite, pour permettre leur correction. Un échec d'enregistrement ne produit aucune confirmation de succès.

#### FR-2 — Enregistrer une demande et fournir sa référence

**Origine : base de données [CDC] ; référence, enregistrement, confidentialité et prévention des doublons côté serveur [CONFIRMÉ, H3/S9].**

Chaque demande validée reçoit une référence unique, stable pendant tout son traitement, la date de création et le statut Nouvelle. La confirmation n'est présentée qu'après l'enregistrement durable. La prévention des doublons est garantie côté serveur par un mécanisme d'idempotence : répéter le même envoi retrouve la demande déjà enregistrée et sa référence au lieu d'en créer une autre. Les détails de réalisation de ce mécanisme seront définis en conception.

Critères observables :

- Après un dépôt réussi, la demande est retrouvée dans l'espace interne avec les mêmes champs et la même référence ; elle subsiste après un redémarrage.
- Deux dépôts volontaires distincts créent deux demandes avec des références différentes, même si leur contenu est identique ; la référence d'une demande reste stable pendant son traitement.
- Un double-clic, deux appels simultanés correspondant au même envoi ou la répétition de cet envoi après une interruption réseau ne créent qu'une demande. Le serveur retrouve la demande et sa référence déjà enregistrées, même si la première réponse de confirmation n'est pas parvenue au demandeur ; un simple blocage du bouton dans l'interface ne suffit pas.
- Si l'enregistrement échoue, le visiteur voit un message d'échec et peut réessayer sans fausse référence de succès.
- Posséder une référence ne permet jamais, à elle seule, d'accéder aux informations d'une demande : toute consultation interne exige une connexion active et les droits vérifiés côté serveur selon H2.
- Un échec de l'email de confirmation ne supprime pas la demande et ne fait pas perdre sa référence ; la demande reste retrouvable par un collaborateur autorisé, conformément à la règle déjà validée de FR-3.

#### FR-3 — Afficher la confirmation et envoyer l'email de référence

**Origine : confirmation [CDC], email avec référence et conservation de la demande en cas d'échec de cet email [CONFIRMÉ, S2 et S5], décompte des tentatives et déclenchement de l'alerte [CONFIRMÉ, S6/V-4] ; contenu, suivi et relances [CONFIRMÉ, H4/S10].**

La confirmation à l'écran confirme l'enregistrement et affiche la référence, avec une information exacte sur l'envoi de l'email. L'email contient la même référence et une mention de réception de la demande, identifie Nova Services comme expéditeur et donne le contact de support, sans promettre de délai de résolution. Une acceptation par le service d'envoi n'est jamais présentée comme une preuve de réception effective par le destinataire.

**Règle confirmée (S5) :** dès que la demande est enregistrée et possède sa référence de confirmation, elle est conservée même si l'email de confirmation échoue. L'enregistrement de la demande ne dépend pas de la réussite de l'email.

Critères observables :

- Sur une adresse de test maîtrisée, le message est reçu avec la référence affichée. L'expéditeur et le canal de contact de secours sont identifiables.
- L'email ne recopie pas la description ni les autres coordonnées ; la référence ne donne pas accès à un espace public de consultation.
- Si le prestataire email est indisponible, la demande reste enregistrée et la référence demeure affichée ; le message à l'écran ne prétend pas que l'email a été reçu et n'invite pas à recréer la demande.
- Après un échec d'email simulé, un collaborateur retrouve la demande avec la référence affichée au demandeur et l'intégralité des champs enregistrés ; l'échec de l'email n'annule ni la demande ni sa référence.
- Un état interne distinct du statut métier distingue « à envoyer », « accepté par le service d'envoi » et « échec ». Une acceptation technique ne prouve pas la réception en boîte de messagerie.
- Trois tentatives automatiques au maximum sont effectuées au total sur les 24 heures suivant l'enregistrement, premier envoi compris, soit au maximum deux nouveaux essais. En cas d'échec persistant après le dernier essai ou à l'échéance des 24 heures, une alerte interne est produite [CONFIRMÉ, S6/V-4 et H4/S10]. Le calendrier précis des essais est laissé à la conception. Une relance manuelle ne réinitialise pas le compteur des tentatives automatiques.
- Toute relance manuelle est déclenchée explicitement par un administrateur après vérification de l'adresse initialement renseignée et de l'état d'envoi courant. Elle utilise cette adresse, conserve la référence et n'ajoute aucune demande ; les droits sont vérifiés côté serveur selon H2.
- Un double-clic, la répétition de la même commande de relance après une interruption réseau ou des commandes concurrentes ne déclenchent pas plusieurs relances accidentelles. Le serveur reconnaît la même opération et empêche une relance supplémentaire tant qu'un envoi est en cours ; une nouvelle relance volontaire exige une nouvelle action explicite et une nouvelle vérification de l'état.
- Chaque relance manuelle est tracée avec sa date, son auteur et son résultat, actualisé à l'issue de l'opération. Un résultat « accepté par le service d'envoi » ne signifie jamais « reçu par le destinataire ».
- Chaque échec et tentative est consultable par l'administrateur sans exposer le contenu complet du message ni les secrets du prestataire. Les états d'envoi restent séparés du statut de traitement ; un échec d'email ne supprime jamais la demande ni ne modifie sa référence.

### 5.2 Espace interne et traitement — UJ-2

#### FR-4 — Se connecter et se déconnecter

**Origine : espace sécurisé [CDC] ; modalités de connexion et contrôle des accès [CONFIRMÉ, H2/S8].**

Les comptes internes sont nominatifs, avec une adresse email unique et un mot de passe. Il n'y a pas d'inscription publique. Après création ou invitation par l'administrateur, la personne définit son mot de passe via un lien temporaire à usage unique. Le parcours de réinitialisation permet également de ne pas partager de mot de passe en clair.

Critères observables :

- Un compte actif se connecte ; un visiteur et un compte désactivé ne peuvent consulter ni liste, ni détail, ni historique.
- Un mauvais identifiant ou mot de passe affiche une erreur sans révéler si un compte existe pour cette adresse email.
- La déconnexion interdit l'accès aux données privées lors des requêtes suivantes. L'activation et la réinitialisation utilisent des liens temporaires à usage unique ; un lien expiré ou réutilisé échoue.
- À chaque requête protégée, le serveur vérifie l'identité, l'état actif du compte et les droits nécessaires. Toute nouvelle consultation ou action d'un compte désactivé est refusée, y compris depuis une session déjà ouverte et par accès direct aux données ; masquer un bouton ou une page ne suffit pas.

#### FR-5 — Afficher la liste et identifier le travail restant

**Origine : liste et visibilité du traitement [CDC] ; accès commun [CONFIRMÉ] ; présentation [CONFIRMÉ, H5/S11].**

Tous les collaborateurs et administrateurs retrouvent toutes les demandes. La liste présente référence, objet, nom, catégorie, statut et date de réception. Nouvelle et En cours représentent les demandes qui nécessitent encore une intervention.

Critères observables :

- Un dépôt apparaît avec le statut Nouvelle et des données exactes ; une liste vide affiche un état explicite.
- Le tri initial présente les demandes les plus récentes en premier, par pages de 25 éléments, avec possibilité d'atteindre les pages suivantes.
- Une vue ou un filtre permet de retrouver ensemble Nouvelle et En cours. Les statuts sont lisibles sans dépendre uniquement de la couleur.

#### FR-6 — Consulter le détail

**Origine : [CDC] ; contenu du détail et protection du dépôt original [CONFIRMÉ, H5/S11].**

Le détail affiche tous les champs déposés, référence, statut, dates et historique. Le collaborateur peut utiliser les coordonnées pour répondre par les moyens habituels de Nova Services.

Critères observables :

- Les champs affichés correspondent au dépôt, y compris une description sur plusieurs lignes.
- Une référence inexistante affiche « demande introuvable » dans l'espace interne.
- Un texte contenant du code ou des balises est affiché comme du texte, sans exécuter de script.
- Le MVP ne permet pas de réécrire le texte ou les coordonnées du dépôt ni de supprimer manuellement une demande ; une correction nécessaire passe par le support selon NFR-6.

#### FR-7 — Rechercher et filtrer

**Origine : rechercher ou filtrer [CDC] ; recherche et filtres combinables, recherche par nom et période de réception [CONFIRMÉ, H5/S11].**

La recherche porte sur la référence, l'objet et le nom du demandeur. Les filtres portent sur le statut, la catégorie et la période de réception, avec une date de début et une date de fin. Tous ces critères peuvent être combinés et restent appliqués pendant la pagination.

Critères observables :

- Une référence exacte, un fragment d'objet ou un nom de demandeur, sans distinction de majuscules, retrouve les demandes correspondantes uniquement.
- Un filtre Nouvelle exclut En cours et Traitée ; sélectionner ensemble Nouvelle et En cours retrouve les deux statuts et exclut Traitée. Les filtres de catégorie et de période réduisent les résultats de cette sélection et de la recherche textuelle.
- Le filtre de période retrouve les demandes reçues entre la date de début et la date de fin, dates incluses. Une période dont la date de début est postérieure à la date de fin est refusée avec un message explicite.
- La recherche, les statuts sélectionnés, la catégorie et les dates de début/fin restent appliqués en changeant de page ; les résultats sont présentés du plus récent au plus ancien, par pages de 25. Leur remise à zéro rétablit la liste complète.
- Une recherche sans résultat affiche un message explicite, sans erreur technique.

#### FR-8 — Modifier le statut et éviter les écrasements

**Origine : statuts Nouvelle, En cours, Traitée [CDC] ; transitions, commentaires d'intervention, cohérence des écritures et conflits [CONFIRMÉ, H6/S12].**

Les collaborateurs et administrateurs peuvent changer le statut. Le parcours normal est Nouvelle → En cours → Traitée. Nouvelle → Traitée est aussi permis pour une résolution immédiate ; Traitée → En cours permet une réouverture. Aucun retour à Nouvelle n'est proposé.

Selon H6 validée, Nouvelle signifie qu'aucune prise en charge n'est encore enregistrée ; En cours indique qu'une intervention reste à mener ; Traitée signifie que la réponse ou l'intervention attendue a été réalisée et qu'aucune action interne ne reste attendue à cet instant. L'email automatique de réception ne suffit pas à considérer une demande comme Traitée. Si le problème persiste ou qu'une action redevient nécessaire, la demande est rouverte En cours.

Lors d'un changement de statut, le collaborateur ou l'administrateur peut saisir un commentaire d'intervention. Il est facultatif pour tout passage à En cours, y compris une réouverture, et obligatoire pour tout passage à Traitée, y compris depuis Nouvelle. Le commentaire est rattaché à cet événement d'historique ; aucun commentaire autonome, réponse ou fil de messagerie entre collaborateurs ou avec les clients n'est ajouté.

Critères observables :

- Chaque transition autorisée est conservée et visible par un second collaborateur après actualisation.
- Une transition interdite ou la répétition du statut courant ne crée pas de faux événement de traitement.
- Nouvelle → En cours et Traitée → En cours réussissent avec ou sans commentaire. Nouvelle → Traitée et En cours → Traitée sont refusés si le commentaire est absent ou constitué seulement d'espaces, avec un message explicite ; le statut et l'historique restent alors inchangés. La présence du commentaire est contrôlée côté serveur, même si l'interface est contournée.
- Pendant la recette, une demande non résolue reste Nouvelle ou En cours ; une demande dont l'intervention est terminée peut devenir Traitée et être rouverte si une suite est nécessaire.
- Si deux personnes modifient une même ancienne version de la demande, la seconde écriture ne remplace pas silencieusement la première : un message demande de recharger l'état courant.
- Le statut, son événement d'historique et le commentaire associé sont enregistrés de manière atomique : soit l'ensemble réussit, soit rien n'est appliqué. Un échec ou un conflit ne laisse ni changement sans trace, ni commentaire isolé, ni événement partiel.

#### FR-9 — Conserver l'historique simple

**Origine : historique du traitement [CDC] ; contenu, commentaires et caractère non modifiable en usage normal [CONFIRMÉ, H6/S12].**

L'historique contient la création et chaque changement de statut, avec date et heure, ancien et nouveau statuts, identité de l'auteur interne et commentaire d'intervention lorsqu'il est renseigné. L'auteur est celui du compte authentifié ayant réalisé l'action. L'événement de création est attribué au dépôt public, sans inventer de compte client.

Critères observables :

- Une demande créée, prise en charge puis traitée présente les trois événements dans leur ordre chronologique.
- Une réouverture ajoute un événement ; elle ne remplace pas les événements passés.
- Après un passage à Traitée, un collaborateur autorisé retrouve le commentaire de résolution avec la date, l'heure et l'identité de son auteur dans l'historique. Les commentaires saisis vers En cours sont conservés de la même manière ; ils sont affichés comme du texte sans exécuter de balise ou de script.
- Les commentaires d'intervention font partie de l'historique non modifiable en usage normal ; ils ne sont ni des messages adressés à un client ni un fil de discussion interne.
- Un compte désactivé reste identifiable dans ses anciens événements ; les utilisateurs ne peuvent ni modifier ni supprimer les événements par une action courante ou un accès direct non autorisé.
- La désactivation d'un compte ne supprime pas l'historique des actions qu'il a réalisées [CONFIRMÉ, H2/S8]. Cette conservation reste soumise à NFR-6 et à la durée appropriée d'identification des anciens collaborateurs à finaliser avant production selon H11/S17.
- Les événements restent soumis à la politique de protection et de conservation NFR-6 ; « historique non modifiable » ne signifie pas « données personnelles conservées indéfiniment ».

### 5.3 Administration — UJ-3

#### FR-10 — Gérer les comptes internes

**Origine : comptes et distinction des droits [CDC], gestion réservée à l'administrateur [CONFIRMÉ] ; opérations et garanties d'accès [CONFIRMÉ, H2/S8].**

Un administrateur peut inviter ou créer un compte, choisir ou changer son rôle, le désactiver, le réactiver et déclencher une réinitialisation du mot de passe sans connaître ce mot de passe. Chaque compte correspond à une personne. Les seuls rôles internes sont collaborateur et administrateur. L'initialisation sécurisée du premier administrateur doit être documentée.

Critères observables :

- Un compte créé puis activé accède aux fonctions de son rôle ; un email déjà utilisé ne crée pas un second compte.
- Un collaborateur ne peut créer de compte, changer de rôle ni gérer les paramètres, y compris en tentant une action directe.
- La désactivation interdit les nouvelles connexions et bloque les accès privés d'une session déjà ouverte dès la requête suivante ; les changements de rôle sont aussi pris en compte dès la requête suivante.
- Pour un compte connecté puis désactivé, les essais de nouvelle lecture de la liste, du détail et de l'historique, de changement de statut et d'administration sont tous refusés côté serveur. Les actions antérieures restent consultables dans l'historique par un compte actif autorisé.
- La désactivation ou rétrogradation du dernier administrateur actif est refusée.
- Le premier administrateur est initialisé sans inscription publique privilégiée ni mot de passe ajouté au dépôt Git.

#### FR-11 — Gérer les catégories et paramètres principaux

**Origine : paramètres nécessaires [CDC], catégories administrées [CONFIRMÉ], emplacements du contact de support [CONFIRMÉ, S6/V-2] ; périmètre et règles des catégories [CONFIRMÉ, H7/S13].**

Les paramètres métier du MVP sont les catégories et le contact de support affiché aux utilisateurs. Les paramètres techniques et secrets sont configurés par le responsable technique, hors des écrans métier.

Critères observables :

- L'administrateur ajoute, renomme, désactive et réactive une catégorie ; deux catégories actives ne portent pas le même nom, indépendamment des majuscules et des espaces superflus. Une réactivation qui créerait un doublon de nom actif est refusée tant que le nom n'est pas corrigé.
- Le formulaire propose uniquement les catégories actives ; une catégorie désactivée reste visible et rattachée aux demandes existantes. Un renommage conserve leur rattachement. Une réactivation rend la catégorie à nouveau disponible pour les nouveaux dépôts sans recréer ni perdre les demandes historiques.
- Il doit rester au moins une catégorie active ; les modifications sont contrôlées et tracées.
- Le même contact de support destiné aux utilisateurs apparaît sur le formulaire public, la confirmation à l'écran, la page de connexion, l'espace interne et l'email de confirmation [CONFIRMÉ, S6/V-2]. Une modification du paramètre est visible à ces emplacements pour les affichages et envois suivants, sans modifier le code. Ce contact public est distinct des coordonnées techniques privées des alertes ; il ne crée ni messagerie intégrée ni nouveau canal de support.
- Catégories initiales confirmées : Informations, Problème technique, Rendez-vous, Administratif, Autre. Les trois statuts Nouvelle, En cours et Traitée restent fixes dans le MVP, avec les transitions validées en H6 ; aucun éditeur de statuts personnalisés n'est ajouté.

## 6. Droits et règles métier transversales

| Action | Visiteur sans compte | Collaborateur actif | Administrateur actif |
|---|---|---|---|
| Déposer une demande | Oui | Oui, via le formulaire public | Oui, via le formulaire public |
| Voir une confirmation | Son envoi courant seulement | Son envoi courant seulement | Son envoi courant seulement |
| Voir liste, détail, historique ; rechercher et filtrer | Non | Toutes les demandes | Toutes les demandes |
| Modifier un statut autorisé | Non | Oui | Oui |
| Gérer comptes, catégories, contact de support | Non | Non | Oui |
| Consulter les échecs email et relancer | Non | Non | Oui [CONFIRMÉ, H4/S10] |
| Consulter logs techniques et restaurer les données | Non | Non | Aucun droit automatique ; responsabilité technique distincte [CONFIRMÉ, H9/S15] |

Les droits communs et l'administration comptes/catégories sont **[CONFIRMÉ]** ; les modalités de H2 sont validées en S8, dont le contrôle côté serveur à chaque requête protégée et le blocage de tout nouvel accès interne d'un compte désactivé. Aucun troisième rôle n'est créé. Il n'existe ni affectation individuelle, ni visibilité par service, ni espace client dans le MVP. La catégorie Rendez-vous classe une demande ; elle ne réserve pas un créneau.

Les règles FR-2, FR-8 et FR-9 évitent les doublons liés au même envoi et les modifications concurrentes silencieuses. **[CONFIRMÉ, H3/S9]** La répétition du même envoi est traitée côté serveur par idempotence ; un nouveau dépôt volontaire reste distinct. Le MVP ne détecte pas automatiquement deux demandes semblables déposées volontairement ou reçues par des canaux différents.

## 7. Qualité, sécurité et exploitation obligatoires

Les **NFR** désignent les exigences de qualité et de fonctionnement communes à toute l'application. Elles sont nécessaires à la mise en production, au même titre que les fonctions métier.

### NFR-1 — Accès et protection des secrets

**[CDC]** Espace sécurisé, contrôle des droits, documentation des accès et absence de secrets dans le code. **[CONFIRMÉ, H2/S8 et H8/S14]** Vérification côté serveur à chaque requête protégée, blocage des comptes désactivés et protections détaillées ci-dessous. Les seuils anti-abus sont des paramètres initiaux provisoires à confirmer par les tests, pas des garanties de sécurité.

**Critères observables :**

- Tous les échanges en production utilisent HTTPS ; aucun accès anonyme aux données internes n'est possible.
- Les droits et l'état actif du compte sont contrôlés côté serveur à chaque requête protégée, lecture comme modification, même avec une session déjà ouverte [CONFIRMÉ, H2/S8]. La protection couvre aussi les accès directs à la base.
- Le mécanisme d'authentification utilise un hachage sécurisé des mots de passe et ne les stocke jamais en clair. Les mots de passe ne sont pas affichés dans l'administration ni inscrits dans les journaux.
- Aucune clé privée, aucun secret ni jeton sensible n'apparaît dans le code source, Git, le navigateur, les captures de documentation ou les logs.
- Les clés publiques explicitement destinées au navigateur ne donnent aucun privilège d'administration.
- Les vérifications couvrent visiteur, collaborateur, administrateur et compte désactivé, y compris par des appels directs aux API, sans passer par les écrans. Chaque rôle est testé sur des lectures et des modifications autorisées ou interdites.
- Si Supabase est retenu en conception, vérifier les politiques RLS (règles d'accès aux données appliquées par la base) et les protections d'authentification réellement disponibles dans la configuration choisie. Tester les accès anonymes et authentifiés, ainsi que les contournements par accès direct ; la présence d'un SDK ne prouve pas que ces protections sont actives ou suffisantes. Cette vérification est à réaliser avant l'usage réel, sans considérer le fournisseur comme déjà choisi ni les protections comme déjà vérifiées.

**[CONFIRMÉ, H8/S14]** Une protection côté serveur contre les envois abusifs et les tentatives de connexion répétées est requise. Paramètres initiaux provisoires : 5 nouveaux dépôts par 10 minutes et par adresse IP, et 10 échecs de connexion par 15 minutes avec une restriction temporaire, sans blocage définitif automatique. Le refus affiche un message et un délai de réessai. Les protections de connexion tiennent compte des abus ciblant un compte et des tentatives réparties sur plusieurs adresses IP ; compter uniquement par adresse IP ne suffit pas.

Les seuils sont ajustables techniquement et testés, notamment sur des réseaux partagés. Les tests doivent également simuler des tentatives distribuées visant le même compte et vérifier le caractère temporaire de la restriction. Les valeurs finales et les moyens techniques sont à confirmer après ces tests ; ni ces nombres ni l'utilisation d'un prestataire ne constituent à eux seuls une garantie de sécurité.

### NFR-2 — Simplicité, accessibilité et performances

**[CDC]** Application web simple. **[CONFIRMÉ, H10/S16]** Interface en français, claire, utilisable au clavier et sur téléphone comme sur ordinateur. Les volumes et performances ci-dessous sont des objectifs à vérifier, pas des résultats déjà obtenus.

**Critères observables :**

- Les champs ont des libellés, les erreurs sont compréhensibles et les états ne reposent pas uniquement sur les couleurs.
- Les trois parcours sont vérifiés manuellement sur un navigateur actuel, à 360 et 1 280 pixels de largeur, sans défilement horizontal nécessaire pour le formulaire.

Objectifs validés à vérifier sur un environnement représentatif [H10/S16] : scénario provisoire de 10 000 demandes et 20 utilisateurs internes simultanés, à ajuster selon les besoins réels de Nova Services. Viser 95 % des opérations de liste, de recherche et de détail en moins de 2 secondes, et 95 % des confirmations de dépôt en moins de 3 secondes, sans attendre l'email. Chaque type d'opération est mesuré séparément, de bout en bout, avec au moins 100 opérations par type, un réseau stable et des conditions de test documentées et conservées. Un résultat global ne peut pas masquer l'échec d'un type d'opération. Les écarts sont consignés ; ces chiffres ne sont ni des volumes réels déclarés ni des performances acquises.

### NFR-3 — Déploiement, version et retour arrière

**[CDC]** Production accessible en ligne, séparation développement/production, projet versionné, versions déployées identifiables, procédure de retour à une version précédente.

**Critères observables :**

- Les données et paramètres de test ne sont pas ceux de production ; les secrets sont fournis hors du code.
- Chaque déploiement est relié à une version précise du projet.
- Une vérification après déploiement couvre dépôt, email, connexion et lecture d'une demande.
- La procédure de retour arrière décrit déclencheur, responsable, version à restaurer, vérifications et communication.

**[CONFIRMÉ, H9/S15]** Un exercice hors production vérifie le retour à une version fonctionnelle compatible avec la base de données. La procédure ne supprime pas les demandes enregistrées après le déploiement et n'annule pas aveuglément une modification de base. Si une ancienne version ne peut pas fonctionner sans perte de ces demandes, elle ne constitue pas un retour de version acceptable ; une autre procédure de rétablissement compatible doit être prévue. Une restauration de données rendue nécessaire par un incident est une opération distincte, soumise à NFR-5 et à une perte potentielle explicitée avant exécution.

### NFR-4 — Logs et détection des erreurs

**[CDC]** Consultation simple des erreurs et événements importants et détection rapide des problèmes. **[CONFIRMÉ, H9/S15]** Journaux réservés au responsable technique, avec date, environnement, version et identifiant technique permettant de relier les traces d'une même opération ; pas de description de demande, de commentaire d'intervention, de mot de passe, de jeton ni de coordonnées complètes.

Événements à couvrir : erreurs de dépôt et de lecture, refus d'accès, échecs d'email, changements de comptes et catégories, déploiements et échecs de sauvegarde. Le refus d'accès ne doit pas révéler de données du compte visé. L'historique FR-9 reste l'outil métier pour suivre les statuts.

**Critères observables :**

- Provoquer une erreur contrôlée permet de retrouver sa trace et sa version.
- Une indisponibilité simulée ou un échec de sauvegarde sert à mesurer l'objectif provisoire de notification en moins de 15 minutes. Le délai commence à l'heure connue de survenue du problème injecté et se termine à la réception de l'alerte sur le canal du responsable désigné ; les deux horaires et l'écart sont conservés. Ce délai ne constitue ni un délai de résolution ni une garantie avant démonstration par les outils et les tests.
- Les coordonnées et secrets ne sont pas présents dans les traces de cet exercice.
- Un test d'email en échec est visible pour l'administrateur selon FR-3.

### NFR-5 — Sauvegarde et restauration

**[CDC]** Les données nécessaires sont sauvegardées, avec une procédure de restauration. **[CONFIRMÉ, H9/S15]** Sauvegardes quotidiennes conservées 30 jours, protégées et restaurables. Les objectifs initiaux de RPO de 24 heures et de RTO d'un jour ouvré après prise en charge technique restent provisoires jusqu'à vérification de leur faisabilité avec l'infrastructure retenue ; ils ne constituent pas un engagement contractuel ni des résultats déjà démontrés.

**Points de mesure confirmés dans le cadre de H9 :**

- **RPO :** comparer l'heure de début de l'incident causant la perte avec le dernier point cohérent de données effectivement récupérable. Viser un écart maximal de 24 heures ; la seule heure de fin d'une tâche de sauvegarde ne prouve pas la fraîcheur des données restaurables.
- **RTO :** consigner l'heure de prise en charge explicite de l'incident par le responsable technique ; arrêter le délai lorsque dépôt, authentification, consultation et suivi des demandes sont rétablis et vérifiés. Viser un jour ouvré selon un calendrier et des horaires de support à documenter avant production. Le temps entre le début de panne et la prise en charge est consigné séparément, sans être masqué par ce RTO.
- Les exercices consignent début de panne, prise en charge, point récupéré et rétablissement vérifié, ainsi que les écarts aux objectifs. Ces mesures doivent confirmer les cibles ou conduire à une révision explicitement approuvée avant production.

**Critères observables :**

- Le périmètre vérifié couvre toutes les données nécessaires au rétablissement : demandes, références, historique et commentaires d'intervention, catégories, paramètres métier, comptes, droits et éléments nécessaires au rétablissement de l'authentification. L'inventaire de récupération documente aussi les configurations et secrets nécessaires, sans les exposer dans les documents ni les journaux.
- Si un service externe gère une partie de ces données, sa récupération ou leur reconstruction est explicitée et testée.
- Les accès aux sauvegardes sont limités et elles sont protégées contre la lecture non autorisée.

Avant mise en production, un exercice dans un environnement isolé restaure une sauvegarde datée, vérifie l'ensemble du périmètre et les accès, puis consigne durée réelle, point de données récupéré, données manquantes et écarts au RPO/RTO. Tout envoi automatique d'emails aux clients est neutralisé dans cet environnement, y compris les confirmations, relances et messages liés aux comptes. Une sauvegarde sans restauration vérifiée ne suffit pas à accepter cette exigence.

### NFR-6 — Données personnelles

**[CDC]** Documenter la protection des données personnelles. **[CONFIRMÉ, H11/S17]** Conserver uniquement les données nécessaires aux finalités documentées et les champs déjà validés. Afficher une consigne de ne communiquer aucun mot de passe, secret ou donnée sensible dans les descriptions et commentaires. Informer les demandeurs sur le responsable du traitement, la finalité, la base juridique, les destinataires et prestataires concernés, les durées de conservation et le contact pour exercer leurs droits. Ces informations et leur justification doivent être finalisées avant tout usage réel.

**Durées provisoires validées comme propositions à justifier [H11/S17] :** demandes et historique, commentaires compris, conservés 12 mois après le dernier passage à Traitée ; en cas de réouverture, le délai repart du nouveau passage à Traitée. Distinguer les journaux de diagnostic, proposés à 30 jours, des traces de sécurité, proposées à 6 mois ; documenter pour chaque ensemble sa finalité et sa durée. Vérifier les éventuelles obligations légales et les exceptions avant production. Ces durées ne sont pas des obligations légales universelles. À échéance, appliquer suppression ou anonymisation selon la politique approuvée, sauf exception justifiée et documentée.

Les sauvegardes sont conservées 30 jours, conformément à H9/S15 et H11/S17. Les actions des comptes désactivés restent traçables ; la durée appropriée de conservation des informations identifiant les anciens collaborateurs, ainsi que leur traitement à échéance, restent des décisions explicites à finaliser avant production. Un historique conservé ne justifie pas à lui seul une identification permanente des anciens collaborateurs.

Selon H11 validée, les demandes encore Nouvelle ou En cours sans changement depuis 90 jours sont revues chaque mois par un référent Nova Services : poursuivre une action, actualiser le statut ou engager la procédure encadrée sur les données. Elles ne sont pas clôturées artificiellement ou supprimées automatiquement pour améliorer les indicateurs. Leur durée maximale de conservation et sa justification, ainsi que les éventuelles exceptions, restent à finaliser avant production ; un statut ouvert ne justifie pas une conservation illimitée.

**Réception d'informations sensibles malgré la consigne [CONFIRMÉ, H11/S17] :** prévoir une procédure de signalement et de prise en charge sécurisée par les responsables habilités. Ne pas recopier ces informations dans les emails, logs ou échanges de support ; limiter leur exposition et appliquer, selon le cas, suppression, masquage ou autre mesure appropriée via une intervention exceptionnelle autorisée et tracée. Si un secret d'accès est divulgué, faire évaluer sa révocation ou son remplacement par son responsable. Conserver une trace minimale de l'opération sans y reproduire l'information sensible. Ce traitement ne crée ni un éditeur libre du dépôt original ni une messagerie ; l'historique reste non modifiable en usage normal.

**Critères observables :**

- Avant tout usage réel, le responsable du traitement, la base juridique, les finalités, les prestataires concernés et les informations destinées aux demandeurs sont identifiés et documentés. Les durées des demandes traitées/ouvertes, journaux et informations d'anciens collaborateurs sont justifiées et validées, avec leurs éventuelles exceptions légales.
- Un essai avec des données fictives démontre la recherche, la correction ou la suppression/anonymisation autorisée et la purge à échéance. Une demande ouverte inactive depuis 90 jours apparaît dans la revue mensuelle.
- Une procédure encadrée d'exercice des droits permet de traiter les demandes d'accès, rectification et suppression après vérification adaptée de l'identité et examen des règles applicables. Aucun compte client ni modification libre du dépôt initial n'est ajouté ; la référence seule ne prouve pas l'identité ni un droit d'accès.
- La procédure tient compte des sauvegardes conservées 30 jours ; un test de restauration réapplique les suppressions nécessaires avant remise à disposition des données et empêche leur réintroduction durable. Une trace minimale de l'opération est conservée sans recopier les données supprimées.
- Un exercice avec des données fictives simule la réception d'un secret ou d'une information sensible et vérifie sa prise en charge sécurisée, l'absence de rediffusion et la trace minimale de l'intervention. Ce mécanisme encadré ne crée pas de bouton de suppression métier pour les collaborateurs.

### NFR-7 — Support et responsabilité des productions IA

**[CDC]** Organiser un premier niveau d'assistance et une intervention technique avancée ; comprendre, vérifier et tester les productions de l'IA avant intégration ; fournir la documentation synthétique d'exploitation.

**[CONFIRMÉ, H9/S15]** Le premier niveau aide sur l'utilisation, recueille référence, heure et symptôme, et transmet les blocages, pannes et suspicions de fuite au responsable technique. Il ne demande jamais de mot de passe. Le niveau technique analyse les logs, rétablit le service, traite les problèmes d'accès, sauvegardes et déploiements. Les responsables et leurs remplaçants sont identifiés avant production et toute ouverture réelle ; aucun support permanent 24 h/24 n'est promis.

**Critères observables :**

- Avant production, un exercice d'incident fictif de service indisponible suit une procédure documentée comportant qualification, limitation de l'impact, escalade, contact de secours, rétablissement et vérification ; les résultats et actions correctives sont consignés.
- Une suspicion de fuite est transmise immédiatement au responsable désigné sans inventer de délai légal.
- Les guides expliquent déploiement, maintenance, support, sécurité, sauvegarde/restauration et retour arrière.
- Pour chaque version livrée, une personne peut expliquer les changements, les tests effectués et leurs résultats ; le contenu produit avec l'IA est relu avant intégration.

Les documents de ce PRD spécifient ces livrables futurs : ils ne prétendent pas qu'ils existent déjà.

## 8. Réussite mesurable et validation

**[CONFIRMÉ, H10/S16]** Pilote de deux semaines avec les collaborateurs, uniquement après validation des contrôles nécessaires à un usage réel : sécurité, protection des données et exploitation. Le nombre réel de collaborateurs doit être relevé avant le test de charge et l'ouverture générale. Le bilan documente résultats, incidents et écarts ; les anomalies bloquantes doivent être corrigées avant la décision de généralisation.

| Mesure | Résultat attendu et méthode | Exigences concernées |
|---|---|---|
| SM-1 — Aucune confirmation perdue | Sur 20 dépôts de test acceptés, 20 demandes distinctes retrouvées, chacune avec la référence affichée lors de son dépôt ; essais de double-clic sans duplication | FR-1 à FR-3 |
| SM-2 — Email vérifié | Sur 10 dépôts vers une boîte de test maîtrisée, suivre séparément l'enregistrement de la demande, l'acceptation de l'email par le service d'envoi et sa réception effective dans la boîte. Viser 10 emails contenant la bonne référence reçus en moins de 5 minutes après l'enregistrement en fonctionnement normal, avec les horaires et écarts documentés ; ce délai est un objectif de vérification, pas une garantie de livraison. Tester aussi la panne sans perte de demande ni de référence | FR-3 |
| SM-3 — Traitement traçable | Dix parcours création → traitement, dont une réouverture et un conflit entre deux collaborateurs, présentent l'état et l'historique attendus | FR-5 à FR-9 |
| SM-4 — Droits respectés | Tous les essais autorisés réussissent et tous les essais interdits de la grille de droits sont refusés, y compris en accès direct et après désactivation | FR-4, FR-10, FR-11, NFR-1 |
| SM-5 — Visibilité utile | Pendant le pilote, revue quotidienne de la liste Nouvelle/En cours ; toutes les demandes déposées via le formulaire restent retrouvables et leur avancement peut être expliqué. Comparer les nombres et proportions d'oublis avant et pendant le pilote selon la méthode confirmée ci-dessous (S6/V-1) | FR-5 à FR-9 |
| SM-6 — Exploitation démontrée | Une restauration, un retour de version et un incident simulé sont exécutés et consignés ; la surveillance détecte l'incident dans la cible proposée | NFR-3 à NFR-7 |

**Méthode de mesure des oublis [CONFIRMÉ, S6/V-1] :** un oubli est une sollicitation reçue mais absente du suivi prévu lors de la revue quotidienne, sans décision tracée expliquant son exclusion. Avant le pilote, relever les sollicitations et les oublis sur une période de comparaison ; pendant le pilote, utiliser le même périmètre de canaux et rapporter les oublis au nombre de sollicitations. Préciser selon Q-5 comment les emails et appels sont redirigés ou retranscrits. Présenter les nombres et proportions à la direction, qui motive sa décision de généralisation. Aucun pourcentage minimal de baisse n'est considéré comme déjà approuvé. Sans mesure initiale fiable, le premier pilote établit une mesure de départ et ne prouve pas encore une diminution des oublis.

**Contre-mesures**, pour éviter une réussite trompeuse : ne pas améliorer le nombre de demandes Traitée en clôturant des cas non résolus ; examiner les réouvertures et des exemples de demandes clôturées. Ne pas diminuer les erreurs de dépôt en refusant des demandes valides : suivre aussi les abandons signalés et les blocages dus aux limites anti-abus. Ne pas confondre email accepté par le prestataire et email effectivement reçu.

### Conditions d'acceptation et étapes

1. **Approbation du PRD acquise (S19)** : H1 à H12 ont été examinées et l'utilisateur a approuvé définitivement le document avec ses réserves. L'étape PRD est clôturée ; la version approuvée doit être sauvegardée dans Git et GitHub.
2. **Suite sur nouvelle confirmation** : l'utilisateur demande une confirmation distincte avant de commencer l'UX. Les travaux UX, de conception et de développement restent à organiser ; relever effectif, volumes, budget et calendrier. La clôture et la sauvegarde du PRD ne commencent pas ces travaux.
3. **Avant ouverture réelle** : tous les critères FR/NFR nécessaires sont vérifiés ; aucun défaut bloquant de sécurité, perte de données, droit d'accès ou dépôt n'est ouvert ; les responsables, durées de conservation, prestataires et procédures sont validés. Les preuves de recette et versions sont conservées.
4. **Pilote puis généralisation** : vérifier les mesures ci-dessus, former les collaborateurs et décider la bascule des canaux existants. Le bilan conserve les résultats, incidents, dépôts de référence du pilote, demandes retrouvées et écarts expliqués ; chaque collaborateur dispose d'un compte actif et réussit un exercice de connexion, recherche et suivi sur une demande de test. Les anomalies bloquantes sont corrigées avant la décision de généralisation ; la correction est vérifiée et son résultat consigné. La direction consigne sa décision et les écarts restants. Un défaut non bloquant ne peut être reporté qu'avec responsable, effet connu et accord explicite de Nova Services.

## 9. Décisions H1 à H12 et conditions restant à finaliser

Les douze groupes ont été examinés et validés, avec les précisions conservées en S7 à S18. Les seuils de H8, les objectifs d'exploitation de H9 et les objectifs de volume/performance de H10 restent à vérifier par les outils et les tests. Les durées et décisions indéterminées de H11 restent à justifier et finaliser avant production. L'approbation définitive globale du PRD et de ces réserves est enregistrée en S19 ; elle ne lève pas les conditions de production ci-dessous.

| ID | Décision validée et réserves | Application et suites à donner |
|---|---|---|
| H1 | **Validée (S7)** : nom 120, email 254, téléphone 30, objet 150, description 5 000 caractères ; tous les champs obligatoires ; message explicite et conservation intégrale de la saisie sans troncature en cas de dépassement ; validation interface et serveur | Accord utilisateur enregistré ; critères dans FR-1 |
| H2 | **Validée (S8)** : compte personnel email unique/mot de passe, création ou invitation administrateur, liens temporaires à usage unique, gestion des comptes et deux rôles seulement, protection du dernier administrateur et initialisation sécurisée du premier ; droits et compte actif vérifiés côté serveur à chaque requête protégée ; désactivation bloquant sessions existantes et nouveaux accès ; historique conservé après désactivation, avec identification des anciens collaborateurs selon H11/S17 à finaliser avant production | Accord utilisateur enregistré ; critères dans FR-4, FR-9, FR-10 et NFR-1 |
| H3 | **Validée (S9)** : référence unique et stable, statut initial Nouvelle, confirmation après enregistrement durable ; idempotence côté serveur pour retrouver le même envoi après double-clic ou interruption réseau ; nouveau dépôt volontaire créant une demande et une référence distinctes ; pas de détection automatique de contenus similaires ; référence seule sans droit d'accès ; demande et référence conservées malgré échec email | Accord utilisateur enregistré ; critères dans FR-2 et rappel de FR-3 |
| H4 | **Validée (S10)** : email minimal avec référence et support ; état d'envoi distinct du statut métier ; trois essais automatiques au total sur 24 h premier compris et alerte en échec persistant ; relance explicite administrateur après vérification de l'adresse initiale et de l'état, prévention des répétitions accidentelles côté serveur, date/auteur/résultat tracés ; acceptation technique sans preuve de réception ; demande et référence inchangées malgré échec | Accord utilisateur enregistré ; critères dans FR-3 ; choix du prestataire et configuration de l'expéditeur en conception |
| H5 | **Validée (S11)** : colonnes et détail complets, plus récent d'abord par pages de 25 ; recherche référence/objet/nom, filtres combinables statut/catégorie/période de réception (début/fin) conservés pendant la pagination ; vue Nouvelle et En cours ensemble ; dépôt original non modifiable, pas de suppression métier ; message explicite sans résultat | Accord utilisateur enregistré ; critères dans FR-5 à FR-7 |
| H6 | **Validée (S12)** : définition des statuts, quatre transitions, aucun retour à Nouvelle, historique daté et attribué non modifiable en usage normal, écriture atomique et protection contre les conflits ; commentaire d'intervention facultatif vers En cours et obligatoire vers Traitée, conservé avec date/heure/auteur dans le même événement ; aucune messagerie | Accord utilisateur enregistré ; critères dans FR-8 et FR-9 |
| H7 | **Validée (S13)** : cinq catégories initiales Informations/Problème technique/Rendez-vous/Administratif/Autre ; ajout, renommage, désactivation et réactivation ; conservation du rattachement historique ; noms actifs uniques sans distinction de majuscules ou d'espaces superflus ; au moins une catégorie active ; paramètres métier limités aux catégories et au support ; trois statuts fixes selon H6. Emplacements du support et distinction du contact technique confirmés en S6/V-2 | Accord utilisateur enregistré ; critères dans FR-11 |
| H8 | **Validée avec seuils provisoires (S14)** : HTTPS pour tous les échanges production, hachage sécurisé, secrets non exposés, autorisations serveur et données internes sans accès anonyme ; 5 nouveaux dépôts/10 min/IP et 10 échecs de connexion/15 min avec restriction temporaire, protection ciblée par compte et contre les tentatives distribuées ; tests des quatre types d'accès et appels API directs ; si Supabase retenu, vérification effective RLS/authentification | Accord utilisateur enregistré ; paramètres à ajuster par tests et protections à démontrer avant production ; critères NFR-1 |
| H9 | **Validée avec objectifs provisoires (S15)** : responsables fonctionnel/technique et remplaçants avant production, logs sans contenu sensible, notification visée sous 15 min mesurée et distincte de la résolution ; sauvegarde quotidienne protégée/restaurable conservée 30 jours avec périmètre complet ; RPO 24 h et RTO un jour ouvré après prise en charge technique, points de mesure explicités ; restauration isolée sans emails clients, retour de version compatible sans perte de demandes récentes, procédures et exercice avant production | Accord utilisateur enregistré ; faisabilité, calendrier de support et résultats à confirmer avant production ; critères NFR-3 à NFR-7 |
| H10 | **Validée avec objectifs à vérifier (S16)** : français, clavier/téléphone/ordinateur et vérifications 360/1 280 px ; scénario provisoire 10 000 demandes/20 utilisateurs à ajuster ; 95 % liste/recherche/détail sous 2 s et confirmation dépôt sous 3 s, mesures séparées avec au moins 100 opérations/type ; 20 dépôts, 10 emails avec trois étapes distinguées et cible 5 min sans garantie, 10 parcours de traitement ; pilote deux semaines après contrôles d'usage réel et bilan documenté avec correction des anomalies bloquantes avant généralisation. Méthode des oublis confirmée en S6/V-1 | Accord utilisateur enregistré ; preuves et faisabilité à vérifier avant pilote/généralisation ; critères NFR-2 et §8 |
| H11 | **Validée avec durées provisoires et décisions avant production (S17)** : collecte limitée et consigne, procédure sécurisée des informations sensibles reçues, information/exercice des droits encadrés sans compte client ni modification libre ; demandes/historique proposés 12 mois après dernier Traitée, diagnostic 30 jours/sécurité 6 mois à justifier ; revue mensuelle des ouvertes inactives 90 jours ; traçabilité des anciens comptes et durée d'identification à fixer ; sauvegardes 30 jours et suppressions réappliquées après restauration | Accord utilisateur enregistré ; responsable du traitement, base juridique, prestataires, information, durées maximales/justifications et exceptions légales à finaliser avant production ; critères NFR-6 |
| H12 | **Validée (S18)** : limites MVP et trois parcours dépôt/traitement avec commentaire et historique/administration ; commentaires d'intervention inclus, pas de messagerie ; procédure email/téléphone avant pilote sans import automatique ; sécurité, déploiement, sauvegarde, restauration et support obligatoires | Accord utilisateur enregistré ; périmètre et parcours en sections 2 et 3 |

### Décisions et preuves préalables à l'usage réel

- **Q-1 — Effectif, volume réel, budget et calendrier :** direction, à préciser avant engagement de coût ou dimensionnement final ; les cibles H10 sont provisoires.
- **Q-2 — Hébergement, base, authentification et email :** responsable technique avec Nova Services, à choisir en architecture ; vérifier coût, récupération et localisation des données, sans engager de prestataire dans ce PRD.
- **Q-3 — Responsables nommés et contact de secours :** direction, avant pilote ; aucune ouverture réelle sans eux.
- **Q-4 — Décisions H11 bloquantes avant production et tout usage réel :** direction et responsable du traitement à identifier ; finaliser la base juridique et les finalités, les prestataires et leurs accès, les informations aux demandeurs, la justification des durées provisoires et les éventuelles obligations ou exceptions légales, la durée maximale des demandes ouvertes, la durée d'identification des anciens collaborateurs et les modalités de purge/anonymisation. Documenter et tester les procédures d'exercice des droits, de traitement des informations sensibles et de réapplication des suppressions après restauration. Ces éléments restent indéterminés tant que leurs décisions et preuves ne sont pas enregistrées ; ce PRD ne certifie pas une conformité juridique.
- **Q-5 — Transition email/téléphone vers le formulaire :** direction, avant pilote ; décider comment les collaborateurs redirigent ou retranscrivent les sollicitations existantes, sans promettre leur import automatique.

Les décisions Q-1 à Q-5 ont des responsables et des échéances ; elles ne sont pas considérées comme résolues par la validation de H1 à H12. Avant tout usage réel, conserver aussi les preuves suivantes :

- **P-1 — Sécurité et accès :** vérifier les contrôles H1 à H8 sur les quatre types d'accès, les appels directs, la désactivation, l'idempotence et les relances concurrentes ; confirmer les seuils après tests, dont réseaux partagés et attaques distribuées. Si Supabase est retenu, prouver l'efficacité des politiques RLS et des protections disponibles dans l'offre/configuration choisie. Responsable : technique, avant ouverture réelle.
- **P-2 — Exploitation :** fixer le calendrier de support, le canal d'alerte, les points de mesure, les mécanismes et le périmètre de récupération ; exécuter les exercices d'alerte, de restauration, d'incident et de retour de version. Confirmer ou réviser explicitement RPO/RTO et cibles selon les résultats, sans perdre les demandes récentes lors d'un retour de version. Responsables : direction et technique, avant production.
- **P-3 — Capacité et recette :** ajuster le scénario de charge aux besoins réels, mesurer séparément les performances, distinguer dépôt/acceptation/réception des emails et consigner les cas de réussite et d'échec. Corriger les anomalies bloquantes. Responsable : technique avec Nova Services, avant pilote puis avant généralisation.
- **P-4 — Ouverture du pilote :** documenter la procédure de retranscription téléphone/email, identifier les responsables et contacts, finaliser les informations aux demandeurs et décisions Q-4, disposer de comptes et d'une version déployée identifiables ; n'utiliser de vraies données qu'après ces contrôles. Responsables : direction, référent fonctionnel et technique, avant pilote.

Ces réserves ne créent pas de nouveau périmètre : elles rendent explicites les choix et preuves déjà exigés par H8 à H12. Elles sont bloquantes pour la production ou le pilote réel tant qu'elles ne sont pas levées ; elles ne signifient pas qu'une application ou des procédures existent déjà. L'approbation globale du PRD ne vaut ni choix implicite de prestataire, ni validation juridique, ni autorisation de mise en production.

## 10. Documents liés

- [Sources du besoin](source-besoin.md) : cahier des charges reformulé et précisions utilisateur.
- [Compléments de préparation](addendum.md) : contexte du dépôt et livrables à produire après validation, sans instructions de développement.
- [Contrôle de couverture](reconcile-besoin.md) : comparaison avec le cahier des charges et les réponses utilisateur.
- [Relecture qualité](review-rubric.md) et [corrections intégrées](review-editorial.md) : constats, relecture de clarté et traitement des remarques.
- [Rapport final de la consolidation après H12](validation-finale-2026-11-18/validation-report.md) : conformité au challenge, cohérence des décisions, critères et réserves avant production. Les rapports de création et de première validation décrivent leurs versions historiques.

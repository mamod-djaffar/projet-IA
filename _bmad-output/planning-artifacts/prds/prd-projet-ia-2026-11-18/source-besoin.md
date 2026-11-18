# Sources du besoin — Nova Services

Date de collecte : 2026-11-18. Ce fichier conserve le contenu métier du cahier des charges fourni dans la conversation, en reformulant sa présentation et en supprimant les puces vides. Il ne contient aucune exigence inventée. Les hypothèses sont dans `prd.md`.

## S1 — Cahier des charges fourni par l'utilisateur

Nova Services accompagne des professionnels et fournit des services numériques. L'entreprise reçoit chaque semaine de nombreuses demandes de clients et prospects : informations, problèmes techniques, rendez-vous, questions administratives ou intervention d'un collaborateur. Elles arrivent principalement par email ou téléphone et sont retranscrites dans différents fichiers. Cela provoque oublis, doublons et manque de visibilité.

La direction souhaite une application web simple pour centraliser les demandes et suivre leur traitement. Les clients doivent pouvoir transmettre une demande et savoir qu'elle est enregistrée. Les collaborateurs doivent retrouver les demandes, consulter leur contenu, identifier les interventions nécessaires et suivre leur évolution.

Fonctionnalités demandées :

- Dépôt d'une demande par un client ou prospect ; nom, coordonnées, objet, catégorie et description.
- Enregistrement dans une base de données et confirmation après envoi.
- Connexion des collaborateurs à un espace sécurisé.
- Liste, détail, recherche ou filtres des demandes.
- Modification du statut, avec au minimum Nouvelle, En cours et Traitée.
- Historique simple du traitement.
- Gestion des comptes et distinction des droits collaborateur / administrateur.
- Gestion par l'administrateur des principaux paramètres nécessaires au fonctionnement.
- Possibilité d'ajouter des fonctionnalités utiles, sans obligation d'élargir le périmètre.

La mission globale comprend conception, développement et mise en production en utilisant une approche assistée par l'IA. L'IA peut aider à concevoir la structure, préparer les interfaces, générer du code, créer des fonctionnalités, corriger des erreurs, améliorer le code et produire de la documentation. Ses productions doivent être comprises, vérifiées et testées avant intégration. Le développeur reste responsable du résultat.

Livraison et exploitation demandées :

- Application fonctionnelle, sécurisée, accessible en ligne et utilisable en conditions réelles.
- Environnements et paramètres de développement et de production séparés.
- Aucun identifiant, mot de passe, clé ou secret enregistré directement dans le code source.
- Projet versionné, historique conservé et versions déployées identifiables.
- Procédure pour revenir à une version précédente après une mise à jour défectueuse.
- Dispositif simple permettant de consulter les erreurs et événements importants et de détecter rapidement les principaux problèmes techniques après déploiement.
- Sauvegardes des données et procédure de restauration.
- Actions principales à réaliser en cas d'indisponibilité.
- Support distinguant premier niveau d'assistance et intervention technique avancée.
- Documentation synthétique du déploiement, de la maintenance, du support, des accès, de la sécurité et de la protection des données personnelles.

## S2 — Réponses utilisateur au premier tour

1. « tous les collaborateurs doivent de Nova services doivent utiliser l'application »
2. « un formulaire sans compte avec nom, coordonnées, l’objet, la catégorie et la description de la demande sont obligatoires. Après enregistrement, une confirmation affichant une référence avec un email envoyant la référence. »
3. « d'accord » à la proposition suivante : tous les collaborateurs consultent et traitent toutes les demandes ; l'administrateur dispose des mêmes possibilités et gère les comptes et catégories ; l'affectation individuelle est hors MVP.

Le contexte pédagogique, l'effectif, les volumes, le budget et le calendrier n'ont pas été confirmés. L'obligation du téléphone, initialement non précisée, a été confirmée ensuite dans S4.

## S3 — Consignes de travail utilisateur

- Utiliser `bmad-prd` ; expliquer simplement les termes à un débutant.
- Trois questions maximum par tour, trois tours maximum ; proposer un défaut par question.
- Faire des hypothèses raisonnables sur les points restants et les signaler.
- Identifier utilisateurs, besoins, fonctions obligatoires, règles métier, limites du MVP et critères de réussite observables.
- Distinguer cahier des charges et hypothèses, enregistrer les documents et présenter le PRD pour validation.
- Ne pas commencer le développement. La création du PRD ne vaut pas autorisation de développer.

## S4 — Correction utilisateur après présentation du PRD

« le telephone est obligatoire »

Le champ téléphone est obligatoire au dépôt, en plus de l'email nécessaire à l'envoi de la référence. Cette précision remplace l'hypothèse initiale de téléphone facultatif ; elle ne constitue pas une validation globale du PRD ni une autorisation de développer.

## S5 — Conservation de la demande malgré un échec email

« oui s'il ya une référence de confirmation même si lemail de confirmation échoue, la demande doit-être conservée »

Une demande enregistrée avec une référence de confirmation doit être conservée même si l'email de confirmation échoue. Cette règle devient une exigence confirmée ; les modalités proposées de suivi des échecs et de relance restent des hypothèses. Cette précision ne constitue pas une validation globale du PRD ni une autorisation de développer.

## S6 — Validation des cinq corrections et examen progressif des hypothèses

« Je valide les cinq corrections proposées. Applique-les au PRD sans modifier les autres exigences déjà validées. Ensuite, présente-moi les hypothèses H1 à H12 une par une, avec tes recommandations, afin que je puisse les valider avant de finaliser le PRD. »

Le lot approuvé correspond aux corrections V-1 à V-5 du rapport `validation-2026-11-18/validation-report.md` :

- V-1 : définition d'un oubli, comparaison des nombres et proportions sur un même périmètre de canaux avant/pendant le pilote, décision motivée de la direction, sans pourcentage minimal de baisse déjà approuvé ; à défaut de mesure initiale fiable, le pilote établit seulement une mesure de départ.
- V-2 : même contact de support sur formulaire, confirmation à l'écran, connexion, espace interne et email ; modification appliquée aux affichages/envois suivants ; distinction du contact technique privé, sans nouvelle messagerie ni nouveau canal.
- V-3 : harmonisation de l'addendum avec l'accès commun déjà confirmé, y compris coordonnées et descriptions ; prise en compte de la protection des données avant usage réel.
- V-4 : trois tentatives d'email au total sur 24 heures, premier envoi compris ; alerte en cas d'échec persistant après le dernier essai ou à l'échéance ; calendrier précis laissé à la conception, relance manuelle encore proposée sous H4 ; demande et référence conservées.
- V-5 : restitution dans S1 de l'objectif original de détection rapide des problèmes techniques ; le délai de 15 minutes reste une proposition H9.

Les autres exigences acquises sont conservées. Ce lot ne confirme pas globalement H1–H12 : chaque groupe sera présenté séparément et les parties déjà approuvées ne seront pas redemandées. Cette nouvelle consigne remplace, pour cette phase, le rythme initial de questions groupées limitées à trois tours. Aucun développement ni déploiement n'est autorisé.

## S7 — Validation de H1

« Je valide H1 avec les cinq limites proposées : nom 120, email 254, téléphone 30, objet 150 et description 5 000 caractères. Tous les champs restent obligatoires. En cas de dépassement, afficher un message explicite et conserver intégralement la saisie, sans troncature automatique. Prévoir une validation côté interface et côté serveur. Passons à H2. »

H1 est validée avec ces règles. Les autres groupes ne sont pas validés par cet accord ; H2 est présenté ensuite. La validation globale du PRD reste en attente, sans démarrage du développement.

## S8 — Validation de H2 avec précisions sur les accès et l'historique

L'utilisateur valide les six recommandations de H2 : compte personnel avec email unique et mot de passe ; création/invitation par administrateur sans inscription publique et définition du mot de passe via lien temporaire à usage unique ; deux rôles seulement, direction utilisant l'un de ces rôles ; gestion des rôles, désactivation/réactivation et réinitialisation sans connaissance du mot de passe ; retrait des accès dès la requête suivante, même en session ouverte ; protection du dernier administrateur et création sécurisée documentée du premier.

Il précise :

- « Les droits d'accès doivent être vérifiés côté serveur à chaque requête protégée. »
- « La désactivation d'un compte doit empêcher toute nouvelle action ou consultation, y compris depuis une session déjà ouverte. »
- « L'historique des actions réalisées par un utilisateur doit rester conservé après la désactivation de son compte. »

Ces précisions ne créent aucun troisième rôle ni fonctionnalité supplémentaire inutile au MVP. L'utilisateur demande d'intégrer H2 et de passer à H3. Cet accord ne valide pas les autres hypothèses, notamment les durées de conservation H11, et n'autorise pas le développement.

## S9 — Validation de H3 et idempotence côté serveur

L'utilisateur valide les six recommandations de H3 : référence unique et stable, statut initial Nouvelle, confirmation seulement après enregistrement durable, prévention de la répétition du même envoi, nouveau dépôt volontaire possible, absence de détection automatique des demandes similaires, et absence d'accès aux informations par la seule référence.

Il précise : « la prévention des doublons doit être garantie côté serveur, notamment grâce à un mécanisme d'idempotence permettant de retrouver une demande déjà enregistrée après un double-clic ou une interruption réseau ».

Un nouvel envoi volontaire crée une nouvelle demande avec une référence distincte. La référence seule ne donne jamais accès aux informations. L'échec de l'email ne supprime ni la demande ni sa référence, conformément à la règle déjà validée. H3 est intégrée ; H4 est présentée ensuite. Aucun autre groupe n'est validé par cet accord et aucun développement n'est autorisé.

## S10 — Validation de H4 et sécurisation des relances manuelles

L'utilisateur valide les cinq recommandations de H4 : email minimal avec référence, réception de la demande, expéditeur et support sans description ni coordonnées ; suivi d'envoi distinct du traitement ; consultation des échecs et tentatives réservée à l'administrateur ; relance manuelle vers l'adresse initiale après vérification, sans nouvelle demande ni nouvelle référence ; confirmation d'enregistrement même si l'email échoue, sans annoncer une livraison certaine ni inviter à déposer à nouveau.

Il précise :

- Maintenir la distinction entre statut de traitement et état d'envoi.
- Maximum de trois tentatives automatiques au total sur 24 heures, premier envoi compris.
- Relance manuelle déclenchée explicitement par un administrateur après vérification de l'adresse initiale et de l'état d'envoi.
- Éviter les relances manuelles multiples accidentelles.
- Tracer chaque relance manuelle avec sa date, son auteur et son résultat.
- Ne jamais présenter l'acceptation par le service d'envoi comme une preuve de réception effective.
- Aucun échec d'email ne supprime la demande ni ne modifie sa référence.

L'utilisateur demande d'intégrer H4 et de passer à H5. Les autres groupes ne sont pas approuvés par cet accord ; aucun développement n'est autorisé.

## S11 — Validation de H5 avec recherche par nom et filtre de période

L'utilisateur valide les sept recommandations de H5 : colonnes de la liste, tri récent et pages de 25, vue des demandes Nouvelle/En cours ensemble, recherche et filtres combinables conservés pendant la pagination avec remise à zéro, détail complet avec historique et texte non exécutable, protection du dépôt original sans modification/suppression métier directe, messages explicites pour les listes ou résultats vides.

Il ajoute :

1. Recherche par nom du demandeur, en complément de la référence et de l'objet.
2. Filtre par période de réception avec date de début et date de fin.

Ces critères se combinent aux filtres existants et sont conservés pendant la pagination. L'utilisateur confirme explicitement les 25 demandes les plus récentes par page, la vue Nouvelle et En cours ensemble, l'accès au détail et à l'historique par les collaborateurs autorisés, l'interdiction de modifier directement le dépôt original et le message sans résultat. Il demande d'intégrer H5 puis de passer à H6 ; cet accord ne valide pas les autres groupes et n'autorise pas le développement.

## S12 — Validation de H6 et commentaires d'intervention

L'utilisateur valide les six recommandations de H6 : sens des statuts, quatre transitions autorisées, aucun retour à Nouvelle ni faux événement pour le statut inchangé, historique simple non réécrit, enregistrement atomique et protection contre les modifications simultanées.

Il ajoute un commentaire décrivant l'intervention lors d'un changement de statut : facultatif vers En cours, obligatoire vers Traitée afin de conserver une trace de la résolution, et conservé dans l'historique avec la date, l'heure et l'identité de l'auteur. Cette fonctionnalité ne doit devenir ni une messagerie interne ni une messagerie client.

Les commentaires liés aux changements de statut sont donc inclus dans le MVP ; seuls les commentaires autonomes et les fils de discussion restent exclus. L'utilisateur demande d'intégrer H6 et de passer à H7. Les autres groupes ne sont pas validés par cet accord ; aucun développement n'est autorisé.

## S13 — Validation de H7 et réactivation des catégories

L'utilisateur valide les six recommandations de H7 sans modification : cinq catégories initiales Informations, Problème technique, Rendez-vous, Administratif et Autre ; gestion des catégories par l'administrateur avec conservation historique ; noms actifs distincts ; au moins une catégorie active ; paramètres métier limités aux catégories et au contact de support, secrets/réglages techniques hors écrans métier ; trois statuts fixes avec transitions H6.

Il confirme explicitement la possibilité d'ajouter, renommer, désactiver et réactiver les catégories, leur conservation dans les demandes existantes et l'unicité des noms actifs indépendamment des majuscules et des espaces superflus. L'utilisateur demande d'intégrer H7 et de passer à H8. Les autres groupes restent non approuvés ; aucun développement n'est autorisé.

## S14 — Validation de H8 avec seuils provisoires et vérification conditionnelle Supabase

L'utilisateur valide les sept recommandations de H8 avec les précisions suivantes :

1. HTTPS pour tous les échanges en production.
2. Aucun stockage de mot de passe en clair ; mécanisme d'authentification avec hachage sécurisé.
3. Aucune exposition de clé privée, secret ou jeton sensible dans le code source, Git, le navigateur ou les journaux.
4. Autorisations systématiquement contrôlées côté serveur et données internes protégées contre les accès anonymes.
5. Provisoirement cinq nouveaux dépôts par dix minutes et par adresse IP, tests sur réseaux partagés et seuil ajustable.
6. Provisoirement dix échecs de connexion en quinze minutes, restriction temporaire sans blocage définitif automatique ; protection contre les abus ciblant un compte et les tentatives réparties sur plusieurs adresses IP.
7. Tests des droits visiteur, collaborateur, administrateur et compte désactivé, y compris par appels directs aux API.

Si Supabase est retenu, vérifier notamment les politiques RLS et les protections d'authentification réellement disponibles. Les seuils sont des paramètres initiaux à confirmer par les tests, pas des garanties de sécurité. L'utilisateur demande d'intégrer H8 puis de passer à H9 ; cet accord ne valide pas les autres groupes, ne choisit pas de prestataire et n'autorise pas le développement.

## S15 — Validation de H9 avec objectifs d'exploitation provisoires

L'utilisateur valide les huit recommandations de H9 : responsables, journaux techniques, alertes, sauvegardes, objectifs de récupération, restauration vérifiée, retour de version et procédures/support.

Précisions confirmées :

1. Responsables fonctionnel/technique et remplaçants identifiés avant production.
2. Notification visée en moins de 15 minutes, mesurée lors d'un test, sans garantie de résolution dans ce délai.
3. Sauvegardes quotidiennes conservées 30 jours, protégées et restaurables ; périmètre couvrant toutes les données nécessaires, comptes, droits et historique compris.
4. RPO provisoire de 24 heures et RTO provisoire d'un jour ouvré après prise en charge technique ; points de départ précisément définis et faisabilité vérifiée sur l'infrastructure retenue.
5. Restauration testée en environnement isolé sans envoi automatique d'emails aux clients.
6. Retour de version compatible avec la base, sans suppression des demandes enregistrées après déploiement.
7. Procédures d'incident, maintenance, restauration et escalade documentées ; exercice avant production.

Ces objectifs restent provisoires tant que les outils et les tests ne les confirment pas. L'utilisateur demande d'intégrer H9 et de passer à H10. Les autres groupes ne sont pas validés par cet accord ; aucun développement n'est autorisé.

## S16 — Validation de H10 avec objectifs de test à vérifier

L'utilisateur valide les sept recommandations de H10 avec les précisions suivantes : interface française claire, clavier/téléphone/ordinateur ; scénario provisoire 10 000 demandes et 20 utilisateurs simultanés à ajuster selon les besoins réels ; objectifs de 95 % des listes/recherches/détails sous 2 secondes et 95 % des confirmations de dépôt sous 3 secondes sans attendre l'email, mesures séparées avec au moins 100 opérations de chaque type et conditions documentées.

Pour les dix emails de test, distinguer enregistrement de la demande, acceptation par le service et réception réelle dans la boîte de test. Cinq minutes est un objectif de vérification, pas une garantie de livraison. Conserver les tests de dépôt, suivi, réouverture et modifications simultanées. Pilote de deux semaines seulement après validation des contrôles d'usage réel ; bilan documentant résultats, incidents, écarts et décision de généralisation, avec correction préalable des anomalies bloquantes.

Performances et volumes sont des objectifs à vérifier, pas des résultats obtenus. L'utilisateur demande d'intégrer H10 et de passer à H11 ; les autres groupes restent non approuvés et aucun développement n'est autorisé.

## S17 — Validation de H11 avec décisions à finaliser avant production

L'utilisateur valide les huit recommandations H11 et précise : collecte nécessaire seulement et consigne de ne pas transmettre mots de passe, secrets ou données sensibles ; procédure sécurisée si ces informations sont malgré tout transmises ; conservation provisoire de 12 mois après le dernier passage à Traitée, à justifier avec vérification des obligations légales ; revue mensuelle des demandes ouvertes inactives depuis 90 jours, sans clôture artificielle, et durée maximale à définir/justifier avant production.

La traçabilité des comptes désactivés est préservée avec une durée appropriée d'identification des anciens collaborateurs à définir. Distinguer diagnostic proposé à 30 jours et sécurité proposée à 6 mois, avec finalités/durées documentées. Prévoir l'exercice encadré des droits sans compte client ni modification libre du dépôt, les sauvegardes de 30 jours et la réapplication des suppressions après restauration.

Avant tout usage réel, identifier le responsable du traitement, la base juridique, les prestataires et les informations à communiquer aux demandeurs. Les durées ne sont pas des obligations légales universelles ; les points indéterminés doivent être explicitement conservés dans le PRD comme décisions avant production. L'utilisateur demande d'intégrer H11 et de passer à H12. Aucun développement n'est autorisé.

## S18 — Validation de H12 et demande de consolidation finale sous approbation

L'utilisateur valide les huit recommandations H12 sans modification : pas de compte client/suivi public, pas de messagerie ou notification à chaque statut, pas d'import automatique des emails/appels/anciens fichiers, pas de pièces jointes/commentaires autonomes/priorités/délais contractuels, pas de calendrier de réservation, pas d'application native/langues supplémentaires/tableaux de bord avancés/exports/intégrations métier, pas d'IA dans le produit, trois parcours de référence.

Il confirme ces trois parcours : déposer une demande ; traiter une demande avec commentaire et historique ; administrer les comptes et catégories. Les commentaires d'intervention liés aux changements de statut restent inclus. La procédure de retranscription des demandes par téléphone/email doit être définie avant le pilote sans importation automatique. Sécurité, déploiement, sauvegarde, restauration et support restent obligatoires.

Les douze hypothèses ont été examinées. L'utilisateur demande : consolider les décisions validées ; vérifier la conformité documentaire au challenge Nova Services ; vérifier la cohérence H1–H12 et identifier les contradictions ; identifier les décisions restant avant production ; vérifier les critères d'acceptation importants ; produire un rapport final.

**Consigne explicite de clôture :** présenter les éventuels blocages et demander l'approbation explicite avant de considérer le PRD définitivement validé. Ne commencer aucun développement ni travail UX avant cette approbation. Les statuts du PRD doivent conserver cette attente ; la consolidation n'est pas une approbation acquise.

## S19 — Approbation définitive et sauvegarde avant UX

« J'approuve définitivement le PRD consolidé de Nova Services, avec les réserves avant production indiquées en section 9. Cette approbation clôture l'étape PRD. Les réserves devront être levées avant toute mise en production. »

L'utilisateur demande ensuite un accompagnement étape par étape pour vérifier les fichiers et l'absence de secrets, effectuer un commit de validation du PRD, l'envoyer sur GitHub et vérifier sa présence distante. Il précise : « Ne commence pas l'étape UX avant ma confirmation. »

L'approbation globale est acquise avec les réserves maintenues. L'UX reste soumise à une nouvelle confirmation, distincte de la clôture du PRD. La sauvegarde ne constitue ni un travail UX ni un développement.

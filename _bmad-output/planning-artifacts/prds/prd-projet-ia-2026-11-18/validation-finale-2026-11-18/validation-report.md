# Rapport final de validation documentaire — Nova Services

**Suivi de clôture : PRD définitivement approuvé par l'utilisateur le 2026-11-18, avec les réserves de la section 9 (S19). Étape PRD clôturée ; UX en attente d'une nouvelle confirmation.** Le rapport ci-dessous conserve les résultats de la relecture ayant précédé cet accord ; l'approbation ne lève pas les conditions de production.

- **Version examinée :** [PRD consolidé](../prd.md), [addendum](../addendum.md) et [sources S1 à S18](../source-besoin.md).
- **Date :** 2026-11-18, Europe/Paris.
- **Méthode :** compétence `bmad-prd`, rapprochement des sources, relecture de cohérence et de critères, grille qualité en sept dimensions, relecture éditoriale structure puis prose et vérifications mécaniques.
- **Grille :** `.agents/skills/bmad-prd/assets/prd-validation-checklist.md`.
- **Statut actuel du PRD :** `final` / `approved` (S19) ; prochaine phase en attente de confirmation.
- **Appréciation de la grille :** Excellent — sept dimensions solides, aucun constat correctif ouvert. Cette note mesure la qualité documentaire, pas une application ou une conformité juridique.

## 1. Verdict et portée

Le PRD est suffisamment solide pour une décision explicite d'approbation documentaire : le besoin, les arbitrages, les résultats observables et les conditions d'ouverture réelle sont identifiables sans choix de fournisseur implicite. Les validations H1 à H12 et leurs réserves sont cohérentes ; les décisions et preuves restant avant production sont assumées et attribuées, sans être présentées comme déjà réalisées. Aucun défaut documentaire ouvert n'est relevé dans le périmètre examiné.

La couverture du challenge Nova Services est complète au niveau des exigences documentées. H1 à H12 ont été examinées et leurs accords sont consolidés, y compris les réserves sur les paramètres initiaux, les performances et les durées. Les contrôles de fidélité et de cohérence ne relèvent aucun écart substantiel ni contradiction bloquante.

Ce rapport vérifie un document de besoins. Il ne certifie ni une application fonctionnelle, ni une conformité juridique, ni une configuration de sécurité, ni une restauration réussie. Les critères décrivent les preuves **à produire pendant la réalisation**. Aucun développement, travail UX, déploiement ni commit n'a été effectué dans cette consolidation.

L'approbation définitive explicite a été donnée après cette relecture et enregistrée en S19. Elle ne découle pas des seuls accords partiels H1–H12 ou de la relecture ; elle ne constitue pas une autorisation de mise en production. Le démarrage UX attend une nouvelle confirmation.

## 2. Consolidation des décisions validées

- **H1 à H4 :** champs obligatoires et limites, validation interface/serveur sans troncature, comptes personnels et deux rôles seulement, droits serveur et désactivation effective, références uniques et idempotence serveur, confirmation et suivi email distinct du traitement, relances contrôlées et tracées sans perte de demande.
- **H5 à H7 :** liste partagée par pages de 25, recherche référence/objet/nom, filtres combinables dont période, détail complet, dépôt original protégé ; quatre transitions, commentaires d'intervention et historique atomiques, protection contre les conflits ; catégories initiales et réactivation, noms actifs uniques, catégorie active restante et support cohérent.
- **H8 à H10 :** sécurité et tests d'accès direct, seuils anti-abus initiaux à confirmer ; organisation d'exploitation, sauvegardes et exercices, objectifs d'alerte/RPO/RTO à démontrer ; français et utilisation au clavier/téléphone/ordinateur, volumes et performances à vérifier, trois étapes de l'email distinguées, pilote encadré et bilan avant généralisation.
- **H11 à H12 :** collecte limitée, traitement encadré des informations sensibles et des droits, durées provisoires à justifier, suppressions réappliquées après restauration ; limites MVP, absence de messagerie/import automatique, trois parcours de référence, retranscription téléphone/email à organiser avant pilote et obligations d'exploitation maintenues.

Les trois parcours sont : **déposer une demande**, **traiter une demande avec commentaire et historique**, **administrer comptes et catégories**. Les commentaires d'intervention restent inclus ; leur ajout n'a pas été annulé par l'exclusion des commentaires autonomes et de la messagerie.

## 3. Couverture du challenge Nova Services

Le rapprochement avec S1 et les précisions utilisateur couvre :

- **Collecte et centralisation :** formulaire public client/prospect, nom et coordonnées, objet/catégorie/description, base de données, confirmation ; référence, téléphone obligatoire et email ajoutés par les accords.
- **Traitement interne :** connexion sécurisée, ensemble des demandes, liste/détail/recherche/filtres, trois statuts, évolution et historique.
- **Administration :** gestion des comptes, distinction collaborateur/administrateur et paramètres principaux.
- **Livraison :** application web en ligne, environnements séparés, secrets hors code, versionnement et identification des versions déployées, procédure de retour arrière.
- **Exploitation :** erreurs et événements importants consultables, détection rapide, sauvegardes et restauration, indisponibilité, support fonctionnel/technique, documentation de maintenance et sécurité/données.
- **Réalisation assistée par IA :** contenus compris, relus, vérifiés et testés, responsabilité humaine conservée. L'absence d'IA dans le produit ne retire pas cette obligation de méthode.

Aucune exigence obligatoire du challenge n'est retirée par les limites du MVP. L'import automatique, le suivi public et la messagerie ne sont pas des obligations du cahier des charges. L'objectif de centralisation des appels/emails suppose toutefois la procédure humaine confirmée en H12 ; elle reste une condition avant pilote.

Détail : [rapprochement du challenge et des accords](reconcile-challenge.md).

## 4. Cohérence de H1 à H12

Les points de friction suivants ont été examinés sans contradiction substantielle retenue :

| Interaction | Conclusion |
|---|---|
| Validation, idempotence et quotas | Retrouver le même envoi n'est pas créer un nouveau dépôt ; les tests doivent vérifier ensemble H1, H3 et H8. |
| Référence et confidentialité | La référence confirme un enregistrement ; elle ne remplace ni connexion ni autorisation d'accès. |
| Statut et email | L'état d'envoi reste indépendant du statut ; l'acceptation technique ne prouve pas la réception. L'échec ne supprime pas la demande. |
| Désactivation et historique | Retirer un accès ne supprime pas ses actions passées ; les durées d'identification sont une décision H11, pas une conservation illimitée implicite. |
| Dépôt protégé et commentaire | Le dépôt original reste protégé ; le commentaire est ajouté à un changement de statut. Vers Traitée, il est obligatoire et atomique avec l'événement. |
| Historique et droits sur les données | L'historique n'est pas modifiable en usage normal ; une intervention exceptionnelle sur des données personnelles est autorisée, encadrée et tracée selon H11. |
| Catégories réactivées | Le rattachement historique est conservé ; la réactivation ne peut créer de doublon actif et le formulaire garde au moins une catégorie disponible. |
| Retour de version et RPO | Un retour applicatif doit préserver les demandes récentes ; une restauration après perte de données est une opération distincte avec un RPO mesuré. |
| Production et pilote | Le pilote avec de vraies données est déjà un usage réel : il ne dispense pas des contrôles et décisions préalables. |

Détail : [cohérence et preuves d'acceptation](review-coherence.md).

## 5. Critères d'acceptation vérifiables

Les **11 exigences fonctionnelles FR-1 à FR-11** et les **7 exigences de qualité/exploitation NFR-1 à NFR-7** possèdent chacune une section de critères observables. La relecture vérifie leur sens ; le contrôle mécanique vérifie leur présence, leurs identifiants et les renvois.

Les vérifications importantes comprennent :

- Champs vides/blancs, limites exactes et dépassements, appels directs au serveur et saisie conservée.
- Double-clic, concurrence et reprise après coupure sans doublon ; nouveau dépôt volontaire distinct ; confirmation uniquement après enregistrement.
- Email reçu dans une boîte maîtrisée, acceptation distinguée de la réception, panne et relances répétées/concurrentes, compteur et traces.
- Droits des quatre types d'accès, activation/liens expirés, retrait d'accès, changement de rôle et protection du dernier administrateur.
- Recherche par nom/objet/référence, filtres et période, changement de page, aucun résultat et dépôt non réécrit.
- Quatre transitions, commentaire requis vers Traitée contrôlé côté serveur, historique attribué et écritures atomiques même en cas de conflit.
- Cycle des catégories, normalisation des noms, réactivation et maintien de la dernière catégorie active.
- Sécurité, mesures de performance séparées, alerte chronométrée, restauration isolée sans emails, retour compatible, purge et restauration, exercice d'incident et contrôle humain des productions IA.

Les preuves détaillées pour chaque FR/NFR sont recensées dans [review-coherence.md](review-coherence.md). Les décisions de paramètres et les essais techniques correspondants doivent être inscrits dans le futur plan de recette. **Aucun test de l'application n'est présenté comme exécuté par cette passe documentaire.**

## 6. Décisions et preuves restant avant production

Ces réserves sont visibles en section 9 du PRD. Elles restent bloquantes pour la production ou le pilote réel tant qu'elles ne sont pas levées ; elles n'empêchent pas à elles seules d'approuver le périmètre documenté avec ses conditions.

| Sujet | Responsable | Décision ou preuve attendue | Échéance |
|---|---|---|---|
| Besoins réels et moyens — Q-1 | Direction | Effectif, volume, budget et calendrier ; ajustement du scénario 10 000 demandes/20 utilisateurs | Avant engagement de coût et dimensionnement final |
| Services et environnement — Q-2 | Direction et technique | Hébergement, base/authentification, email et expéditeur, coûts et conditions de récupération/localisation ; Supabase n'est pas acquis par défaut | Choix en conception, vérifications avant usage réel |
| Responsables — Q-3/P-2 | Direction | Noms fonctionnel/technique et remplaçants, contact de secours, canal d'alerte, calendrier et horaires du support | Avant production et pilote réel |
| Données personnelles — Q-4 | Direction et responsable du traitement à identifier | Base juridique, finalités, prestataires/accès, information aux personnes, durées justifiées et obligations applicables ; maximum des demandes ouvertes et durée d'identification des anciens collaborateurs ; procédures de droits, informations sensibles et purge | Avant tout usage réel |
| Appels et emails — Q-5 | Direction et référent fonctionnel | Procédure de redirection/retranscription via formulaire avec coordonnées obligatoires, sans import automatique | Avant pilote |
| Protections — P-1 | Technique | Tests des rôles/API, désactivation, idempotence, relances, quotas réseau partagé/distribué ; si Supabase retenu, preuves RLS/authentification effective | Avant ouverture réelle |
| Exploitation — P-2 | Technique et direction | Périmètre restaurable complet, sauvegardes, mesure des alertes/RPO/RTO, restauration sans emails, retour de version sans perte des demandes récentes et exercice d'incident | Avant production |
| Capacité et recette — P-3 | Technique et Nova Services | Mesures séparées et résultats documentés, paramètres ajustés, anomalies bloquantes corrigées et correction vérifiée | Avant pilote, puis avant généralisation |

Les paramètres provisoires ne sont pas transformés en garanties : cinq nouveaux dépôts/10 min/IP ; dix échecs de connexion/15 min ; alerte sous 15 min distincte de la résolution ; RPO 24 h et RTO un jour ouvré après prise en charge ; charge et rapidité H10 ; conservation H11 à justifier. Les sauvegardes restent prévues quotidiennement avec conservation 30 jours.

## 7. Constats par importance et corrections effectuées

**Constats ouverts après consolidation : critique 0 ; élevé 0 ; moyen 0 ; faible 0.** Aucun blocage de contenu du PRD n'est identifié par les relectures. L'approbation définitive du PRD est maintenant acquise (S19) ; le démarrage UX reste soumis à une confirmation distincte.

Les décisions et preuves de la section 6 restent en revanche bloquantes pour la production ou le pilote réel. Elles sont des réserves explicites du besoin validé, pas des défauts cachés ni des décisions réputées prises.

Les anciennes contradictions de rédaction ont été supprimées : H12 n'est plus « à examiner », les commentaires d'intervention sont explicitement inclus et le statut de rédaction ne laisse plus entendre une approbation définitive. Les deux dernières corrections éditoriales retirent « sous réserve de validation des détails proposés » et renomment les colonnes de l'index H1–H12. Aucun engagement validé n'a été supprimé.

Le rapprochement a initialement relevé un manque de journalisation pendant que la nouvelle entrée S18 était en cours d'enregistrement. La revérification du journal confirme sa présence et celle de la consigne d'attente d'approbation : ce point est résolu, sans modification des décisions.

### Résultat des sept dimensions de la grille

- **Préparation à la décision — strong (solide) :** approbation et conditions d'usage réel distinctes, arbitrages et responsables identifiables.
- **Contenu utile — strong (solide) :** exigences rattachées aux besoins et risques réels, sans fonctionnalité décorative.
- **Cohérence de l'objectif — strong (solide) :** centralisation, visibilité et mesure des oublis reliées aux fonctions et au pilote.
- **Clarté de l'acceptation — strong (solide) :** résultats observables pour chaque FR et NFR important.
- **Honnêteté du périmètre — strong (solide) :** inclusions, exclusions et réserves explicites, aucun objectif présenté comme déjà démontré.
- **Utilisation pour la suite — strong (solide) :** glossaire, identifiants et décisions permettent la conception et la recette après approbation.
- **Format adapté — strong (solide) :** trois parcours, deux rôles et exploitation décrits sans imposer d'architecture ni engager d'UX.

## 8. Vérifications mécaniques et limites du contrôle

- FR-1–FR-11, NFR-1–NFR-7, UJ-1–UJ-3, SM-1–SM-6 et H1–H12 sont présents et cohérents dans la version finale contrôlée.
- H1–H12 portent leurs accords et réserves ; aucun ancien marqueur `[ASSUMPTION]` ne les présente comme non examinées.
- Les liens locaux et les statuts d'attente d'approbation ont été vérifiés lors de la passe précédant S19 ; ces empreintes historiques et résultats sont conservés dans [checks.json](checks.json). La mise à jour de clôture enregistre ensuite l'approbation sans modifier les exigences FR/NFR.
- Les rapports antérieurs sont historiques. Le présent rapport concerne la consolidation après S18 ; aucune réalisation d'interface ou de logiciel n'est déduite d'un document.

## 9. Approbation définitive enregistrée et prochaine phase

**L'utilisateur a approuvé définitivement le PRD consolidé avec ses réserves avant production, le 2026-11-18 (S19).** Le statut est `final` / `approved`. Cet accord explicite clôture l'étape PRD ; il n'est inféré ni du silence ni du contrôle qualité.

L'utilisateur demande une sauvegarde Git/GitHub avant la suite. **Aucun travail UX ne commence sans sa nouvelle confirmation.** Aucun développement ni travail UX n'est réalisé par cette clôture. L'approbation ne lève pas les conditions d'usage réel et ne choisit pas un prestataire.

## Rapports et pièces de contrôle

- [Rapprochement challenge et décisions](reconcile-challenge.md)
- [Grille qualité en sept dimensions](review-rubric.md)
- [Cohérence et critères d'acceptation](review-coherence.md)
- [Relecture de structure et de clarté](review-editorial.md)
- [Contrôles mécaniques et empreintes](checks.json)

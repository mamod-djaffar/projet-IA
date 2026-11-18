# Rapprochement final — challenge Nova Services et décisions utilisateur

Date : 2026-11-18. Périmètre : comparaison de `source-besoin.md` S1–S18 et audit de `.memlog.md` avec `prd.md` et `addendum.md`. Aucun document source modifié ; aucune recherche externe, activité UX ou implémentation réalisée.

## Verdict

**Conforme au besoin documentaire examiné, sous approbation globale explicite encore attendue. Aucun écart substantiel du PRD ou de l'addendum avec S1–S18 détecté ; aucun écart ouvert après revérification du journal.** Les décisions indéterminées et preuves futures restent des conditions de production/pilote, pas des résultats obtenus. Le point faible de traçabilité initialement constaté est résolu, comme vérifié ci-dessous.

Le frontmatter `pending_approval` / `awaiting_explicit_user_approval`, l'introduction, §8, §9 et la fin de l'addendum concordent : aucun accord partiel H1–H12 ne remplace l'approbation définitive ; aucun développement ni travail UX ne doit commencer avant cet accord. Les anciennes lignes de journal contenant « finalized » décrivent explicitement une finalisation de rédaction sans approbation acquise ; elles ne prévalent pas sur S18.

## Groupes couverts

- **Challenge original S1 et premiers accords S2–S6 :** dépôt public et champs, base et confirmation, espace sécurisé, liste/détail/recherche/filtres, trois statuts, historique, comptes/droits et paramètres ; téléphone obligatoire, accès commun, conservation malgré échec email. FR-1–FR-11 et §6 les conservent. La mission assistée par IA et la responsabilité de compréhension, relecture et tests demeurent dans NFR-7 et l'addendum. Production, environnements séparés, absence de secrets, versionnement, retour arrière, sauvegarde/restauration, indisponibilité, support à deux niveaux et documentation sont conservés dans NFR-1 et NFR-3–NFR-7. **La détection rapide des principaux problèmes techniques, explicitement exigée dans S1, apparaît dans NFR-4** ; l'objectif provisoire de notification sous 15 minutes n'est pas assimilé à une garantie de résolution.
- **H1–H4 / S7–S10 :** cinq longueurs et tous les champs obligatoires ; conservation intégrale de saisie et validation interface/serveur ; comptes personnels, deux rôles, liens temporaires, révocation dès la prochaine requête serveur, protection des administrateurs et historique après désactivation ; référence durable et idempotence serveur ; email minimal, trois essais automatiques au total sur 24 heures, alerte, relance manuelle administrative vérifiée et tracée, prévention des répétitions, séparation acceptation/réception et conservation de la demande. Critères présents dans FR-1–FR-4, FR-9–FR-10 et NFR-1.
- **H5–H7 / S11–S13 :** pages de 25 et ordre récent, recherche référence/objet/nom, filtres statut/catégorie/période combinés conservés en pagination, détail protégé, absence de modification métier libre ; quatre transitions, commentaire facultatif vers En cours et obligatoire vers Traitée, date/heure/auteur, atomicité et conflits ; catégories initiales et réactivation, unicité des noms actifs, catégorie active restante, contact de support cohérent et paramètres techniques séparés. FR-5–FR-11 les conservent. La protection du dépôt original demeure compatible avec les interventions exceptionnelles encadrées sur les données de NFR-6.
- **H8–H10 / S14–S16 :** HTTPS, hachage, secrets, contrôle serveur, tests des rôles et accès directs, seuils anti-abus provisoires avec réseaux partagés et attaques distribuées ; Supabase conditionnel, sans choix fournisseur acquis ; responsabilités, alertes, sauvegardes complètes, RPO/RTO et mesures définies, restauration isolée sans emails, retour compatible sans perte des demandes récentes, exercices et procédures ; interface française/clavier/mobile, charge et performances mesurées séparément, réception réelle des emails distinguée, pilote de deux semaines et bilan. NFR-1–NFR-7 et §8 conservent les réserves : objectifs à démontrer, aucune performance ou capacité prétendument obtenue.
- **H11–H12 / S17–S18 :** durées provisoires justifiables, revue mensuelle des ouvertes inactives depuis 90 jours sans clôture artificielle, durée maximale ouverte et identification des anciens collaborateurs à décider, droits encadrés, informations sensibles et suppressions réappliquées après restauration ; trois parcours et exclusions MVP sans retirer commentaires d'intervention, sécurité ni exploitation. NFR-6, §2–§3 et §9 couvrent ces accords. L'addendum n'introduit ni prestataire imposé, ni contrôle déjà réussi, ni durée légale universelle.
- **Corrections V-1–V-5 / S6 :** mesure comparable des oublis et absence de preuve de diminution sans référence initiale fiable (§8), support aux cinq emplacements et effet sur affichages/envois suivants (FR-11), accès commun y compris données détaillées (addendum), décompte des essais et alerte (FR-3), détection rapide rétablie (S1/NFR-4). Aucun pourcentage minimal de baisse n'est inventé.

## Écarts réels et observations de traçabilité

**Écarts substantiels PRD/addendum : 0. Aucun blocage de contenu détecté pour soumettre le PRD à approbation.**

Un écart administratif avait été constaté dans la première lecture du journal ; il est **résolu** dans l'état revérifié :

- **Section :** `.memlog.md`, dernière entrée S17.
- **Extrait :** « H12 à présenter, aucun développement. » Aucune entrée S18 ne suit dans l'état examiné.
- **Effet :** le journal canonique s'arrête avant la validation H12 et la consigne de consolidation sous approbation. Les accords sont conservés dans S18, le PRD et l'addendum ; aucune perte de contenu dans les livrables n'est constatée, mais une reprise limitée au journal serait incomplète.
- **Correction :** ajouter via le script `memlog.py` une entrée append-only pour S18/H12, puis une entrée de consolidation qui rappelle l'attente d'approbation et l'interdiction de commencer UX/développement. Conserver les entrées historiques intactes.
- **Sévérité :** faible, traçabilité ; à régulariser pour clôturer proprement le dossier, sans modifier les exigences ni présenter le PRD comme définitivement approuvé.
- **Vérification de résolution :** les dernières lignes du journal contiennent désormais une entrée `decision by user` pour S18/H12 et une entrée `override` conservant les statuts `pending_approval` / `awaiting_explicit_user_approval`. Elles reprennent les trois parcours, les exclusions, les obligations d'exploitation, la consolidation demandée et l'interdiction d'UX/développement avant approbation explicite. Le journal ne s'arrête donc plus à S17 ; aucune correction supplémentaire n'est nécessaire pour ce constat. Les sources n'ont pas été modifiées par cette relecture.

## Décisions encore nécessaires et échéances

Les échéances ci-dessous sont des jalons, aucune date calendaire de projet n'ayant été confirmée. « Avant production » comprend tout pilote utilisant de vraies données (§1 et §9).

| Décision ou preuve attendue | Responsable | Échéance / effet bloquant |
|---|---|---|
| Approbation définitive explicite du PRD consolidé et de ses réserves | Utilisateur | Avant tout UX ou développement ; seul verrou d'approbation globale restant identifié |
| S18 et consolidation inscrites au journal — **résolu, vérifié** | Agent chargé de la consolidation | Entrées S18 et override présentes lors de la revérification ; aucune action restante sur ce point |
| Q-1 : effectif, volumes réels, budget et calendrier | Direction | Avant engagement de coût ou dimensionnement final ; adapter H10 |
| Q-2 : hébergement, base, authentification, email ; coûts, localisation et récupération | Responsable technique avec Nova Services | En architecture après approbation ; choix et faisabilité à établir avant ouverture réelle |
| Q-3 : noms des responsables fonctionnel/technique, remplaçants et contacts de secours | Direction | Avant pilote ; aucune ouverture réelle sans eux |
| Q-4 : responsable du traitement, finalités, base juridique, prestataires/accès et information des demandeurs | Direction et responsable du traitement à identifier | Avant tout usage réel ; bloquant production et pilote réel |
| Q-4 : justifier les durées proposées et exceptions ; fixer durée maximale des demandes ouvertes, durée d'identification des anciens collaborateurs et modalités de purge/anonymisation | Direction et responsable du traitement à identifier | Avant tout usage réel ; les valeurs provisoires ne lèvent pas cette condition |
| Q-4 : procédures des droits, traitement des informations sensibles, purge et réapplication des suppressions après restauration | Direction et responsable du traitement, avec technique pour les preuves | Documentées et testées avant tout usage réel |
| Q-5 : procédure de redirection/retranscription téléphone/email avec coordonnées obligatoires, sans import automatique | Direction | Avant pilote ; même périmètre de canaux pour mesurer les oublis |
| P-1 : droits et désactivation, idempotence, relances concurrentes, abus ciblés/distribués et réseaux partagés ; fixer les seuils après tests ; RLS/auth réelles si Supabase retenu | Technique | Avant ouverture réelle ; preuves de sécurité nécessaires |
| P-2 : calendrier de support, canal d'alerte, récupération complète, exercices d'incident/restauration/retour de version ; confirmer ou réviser explicitement les cibles et RPO/RTO | Direction et technique | Avant production, donc avant pilote réel ; absence de preuve interdit de prétendre l'exploitation acceptée |
| P-3 : charge représentative, performances séparées, recette fonctionnelle et emails en trois étapes, correction des anomalies bloquantes | Technique avec Nova Services | Avant pilote, puis bilan avant généralisation |
| P-4 : dossier d'ouverture pilote : transition canaux, contacts, information et Q-4, comptes et version identifiable | Direction, référent fonctionnel et technique | Avant pilote avec de vraies données |
| Mesure initiale des oublis, bilan deux semaines, formation/exercice par collaborateur, décision motivée de généralisation et accord sur reports non bloquants | Direction avec référent fonctionnel et technique selon §8 | Référence avant pilote si disponible ; décision après bilan et correction vérifiée des anomalies bloquantes. Sans référence fiable, le pilote établit seulement un point de départ |

Les Q/P non résolus sont des conditions futures explicites et attribuées : ils ne constituent pas une contradiction documentaire ou une raison de prétendre que H1–H12 restent globalement non examinées. Ils empêchent l'ouverture réelle tant que décisions et preuves correspondantes manquent. Une approbation du PRD n'autorise pas implicitement une mise en production.

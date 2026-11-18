# Suivi des corrections approuvées

Les cinq corrections V-1 à V-5 ont été approuvées par l'utilisateur et appliquées. La décision est conservée dans `../source-besoin.md`, S6. Les rapports de relecture conservent leurs observations sur la version antérieure.

| Correction | Application | État |
|---|---|---|
| V-1 | PRD §8 : définition de l'oubli, comparaison à périmètre commun, nombres et proportions, absence de baisse prouvée sans mesure initiale fiable | Appliquée et confirmée |
| V-2 | FR-11 : emplacements du même contact de support, prise en compte des modifications et séparation du contact technique privé | Appliquée et confirmée |
| V-3 | Addendum : accès commun, coordonnées et descriptions déjà confirmés ; protection des données à préparer | Appliquée et confirmée |
| V-4 | FR-3 : trois essais au total, premier compris, sur 24 h et alerte en cas d'échec persistant ; aucune perte de demande | Appliquée et confirmée |
| V-5 | Source S1 : objectif de détection rapide rétabli ; aucun nouveau délai imposé | Appliquée et confirmée |

H4, H7 et H10 distinguent maintenant leurs parties confirmées de leurs propositions restantes. Aucune autre hypothèse n'est déclarée approuvée par ce lot. Le PRD reste en attente de validation globale, sans autorisation de développement.

## Validation progressive après le lot de corrections

- **H1 validée (S7)** : nom 120, email 254, téléphone 30, objet 150 et description 5 000 caractères ; tous les champs obligatoires ; dépassement expliqué et saisie intégralement conservée sans troncature ; contrôles dans l'interface et sur le serveur. FR-1 et l'index H1 sont à jour.
- **H2 validée (S8)** : six recommandations acceptées ; contrôle serveur à chaque requête protégée, désactivation bloquant toute nouvelle action/consultation même en session ouverte, historique conservé après désactivation ; deux rôles seulement. FR-4, FR-9, FR-10, NFR-1 et l'index H2 sont à jour. Les durées de conservation H11 restent à examiner.
- **H3 validée (S9)** : six recommandations acceptées ; idempotence côté serveur après double-clic ou interruption réseau, nouveau dépôt volontaire avec référence distincte, aucun accès par la référence seule et aucune perte de demande/référence sur échec email. FR-2 et l'index H3 sont à jour.
- **H4 validée (S10)** : cinq recommandations et précisions acceptées ; statut métier distinct de l'état email, trois tentatives automatiques au total sur 24 h, relance manuelle explicite après vérification, prévention des répétitions accidentelles et trace date/auteur/résultat, aucune confusion acceptation/réception, demande et référence conservées. FR-3, grille des droits et index H4 sont à jour.
- **H5 validée (S11)** : sept recommandations acceptées, avec recherche par nom et filtre de période début/fin ; critères combinables et conservés pendant la pagination. FR-5 à FR-7 et l'index H5 sont à jour.
- **H6 validée (S12)** : six recommandations acceptées et commentaire d'intervention ajouté, facultatif vers En cours, obligatoire vers Traitée, conservé avec date/heure/auteur ; atomicité couvrant le commentaire, historique non modifiable et absence de messagerie. FR-8/FR-9, glossaire, limites MVP et index H6 sont à jour.
- **H7 validée (S13)** : six recommandations acceptées, avec réactivation des catégories, conservation historique, unicité des noms actifs et minimum d'une catégorie active ; paramètres limités et trois statuts fixes. FR-11 et l'index H7 sont à jour.
- **H8 validée avec seuils provisoires (S14)** : sept recommandations précisées, hachage sécurisé, HTTPS, secrets non exposés, contrôles serveur, tests API directs et protection contre les tentatives distribuées ; seuils à confirmer par tests, vérification RLS/authentification si Supabase retenu. NFR-1, addendum et index H8 sont à jour.
- **H9 validée avec objectifs provisoires (S15)** : huit recommandations précisées ; responsables avant production, notification mesurée sans promesse de résolution, sauvegardes complètes quotidiennes conservées 30 jours, RPO/RTO avec points de mesure, restauration isolée sans emails et retour de version sans perte des demandes récentes ; procédures et exercices avant production. NFR-3 à NFR-7, glossaire et index sont à jour. Faisabilité à démontrer, H11 non validée globalement.
- **H10 validée avec objectifs à vérifier (S16)** : sept recommandations précisées ; volumes provisoires, mesures séparées de chaque type d'opération, trois étapes de l'email distinguées et cible 5 min sans garantie, pilote après contrôles, bilan et correction des anomalies bloquantes avant généralisation. NFR-2, mesures de réussite et index H10 sont à jour.
- **H11 validée avec durées provisoires (S17)** : huit recommandations précisées, procédure sécurisée pour informations sensibles reçues, diagnostic 30 jours/sécurité 6 mois, demandes traitées 12 mois à justifier, droits encadrés, sauvegardes 30 jours et suppressions réappliquées. Les décisions restant avant production sont explicites dans Q-4, dont durée maximale des ouvertes et identification des anciens collaborateurs, responsable/base juridique/prestataires et information. NFR-6, sources, addendum et index sont à jour.
- **H12 validée (S18)** : huit recommandations et trois parcours confirmés ; commentaires d'intervention inclus, procédure de retranscription email/téléphone avant pilote sans import automatique, exploitation et sécurité obligatoires. H1 à H12 ont toutes été examinées.
- **Approbation globale acquise (S19)** : après consolidation et rapport final dans `../validation-finale-2026-11-18/`, l'utilisateur approuve définitivement le PRD avec ses réserves avant production. Étape PRD clôturée, sauvegarde Git/GitHub demandée ; UX en attente d'une nouvelle confirmation. Aucun développement ni travail UX n'est commencé.

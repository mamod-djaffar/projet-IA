# PRD Quality Review — Nova Services

Date : 2026-11-18. Périmètre : lecture complète de `prd.md` et `addendum.md`, évalués selon `prd-validation-checklist.md`. Cette relecture documentaire ne vaut ni approbation définitive du PRD, ni démarrage UX ou développement, ni autorisation de production.

## Overall verdict

Le PRD est suffisamment solide pour une décision explicite d'approbation documentaire : le besoin, les arbitrages, les résultats observables et les conditions d'ouverture réelle sont identifiables sans choix de fournisseur implicite. Les validations H1 à H12 et leurs réserves sont cohérentes ; les décisions et preuves restant avant production sont assumées et attribuées, sans être présentées comme déjà réalisées. Aucun défaut documentaire ouvert n'est relevé dans le périmètre examiné.

Comptes des constats ouverts : **critical 0 ; high 0 ; medium 0 ; low 0**. L'approbation définitive explicite reste attendue.

## Decision-readiness — strong

L'introduction, les §1, §8 et §9 distinguent clairement consolidation, approbation globale, travaux futurs et ouverture réelle. Le lecteur peut approuver le périmètre et ses réserves sans prétendre choisir les prestataires ou lever les conditions de production. Q-1 à Q-5 donnent des responsables et des échéances ; P-1 à P-4 demandent les preuves correspondantes.

Les arbitrages sont concrets : accès commun à toutes les demandes plutôt que cloisonnement, absence d'affectation, échanges client par les canaux habituels, prévention des répétitions du même envoi sans détection des demandes similaires. L'addendum expose leurs conséquences. Les volumes, seuils, durées et objectifs provisoires sont des engagements à vérifier ou finaliser, avec jalons ; ils ne constituent pas des contradictions cachées.

## Substance over theater — strong

Les utilisateurs du §2 ont des droits et besoins qui déterminent les fonctions ; la direction ne crée pas artificiellement un rôle. Les trois parcours nommés couvrent dépôt, traitement et administration. Aucun argument d'innovation ou usage d'IA dans le produit n'est ajouté pour habiller le besoin.

Les NFR sont spécifiques au produit : restriction des accès directs après désactivation, confidentialité des descriptions et commentaires dans les logs, mesure des alertes, récupération de l'authentification et des commentaires, neutralisation des emails pendant une restauration isolée. Ces exigences ont des conséquences vérifiables et des preuves futures définies.

## Strategic coherence — strong

Le pari du §2 relie dépôt confirmé, liste partagée et historique à la visibilité et à la réduction des oublis. Les exclusions du §3 préservent ce premier usage exploitable tout en maintenant sécurité, restauration et support dans le MVP. La transition email/téléphone n'est pas escamotée : Q-5 et P-4 la conditionnent avant pilote.

SM-1 à SM-6 valident intégrité, livraison d'email, traitement, droits, visibilité et exploitation. SM-5 utilise une comparaison des mêmes canaux et une définition des oublis ; l'absence de mesure initiale interdit de conclure abusivement à une baisse. Les contre-mesures du §8 examinent clôtures artificielles, réouvertures et blocages de dépôts valides. L'absence d'un pourcentage de baisse approuvé reste un choix explicitement assumé, avec décision motivée de la direction.

## Done-ness clarity — strong

Chaque FR a au moins une conséquence observable. FR-1 définit champs, limites et validation serveur ; FR-2 couvre persistance, unicité et répétitions concurrentes ; FR-3 distingue enregistrement, acceptation et réception de l'email, fixe le nombre d'essais et contrôle les relances. FR-4 précise connexion, liens expirés/réutilisés et révocation dès la requête suivante. FR-5 à FR-7 fixent contenu, pagination, filtres combinés et période inclusive. FR-8 et FR-9 fixent les quatre transitions, commentaires obligatoires, conflits, atomicité et historique attribué. FR-10 et FR-11 rendent observables les droits, le dernier administrateur, les catégories actives et les emplacements du contact de support.

Les NFR importants possèdent également des bornes ou des exercices identifiables : matrice d'accès et essais directs (NFR-1), largeurs et mesures séparées de performance (NFR-2), version et retour compatible sans perte de demandes récentes (NFR-3), origine et fin du délai d'alerte (NFR-4), périmètre récupérable et points de mesure RPO/RTO (NFR-5), décisions de conservation et exercices fictifs de purge/droits/restauration (NFR-6), incident et guides vérifiés (NFR-7). Le §8 impose la conservation des preuves et le traitement des anomalies bloquantes.

Les algorithmes d'idempotence, le calendrier précis des essais email, les mécanismes d'authentification et les commandes d'exploitation sont légitimement laissés à la conception après approbation : leurs résultats attendus sont déjà spécifiés. Les politiques H11 non finalisées sont explicitement bloquantes avant tout usage réel ; leur présence ne rend pas les autres critères invérifiables.

## Scope honesty — strong

Le §3 nomme les inclusions et exclusions ; l'addendum sépare le socle existant des fonctions et procédures futures. Les accords H1 à H12 sont décrits comme validés avec leurs réserves, sans assimilation à des preuves techniques. Les décisions Q et preuves P rendent visibles les limites de la validation actuelle.

La densité des réserves est adaptée à un document soumis à approbation, sans autorisation actuelle de travaux UX ou de développement. Les conditions de production ne doivent pas être transformées en défauts d'approbation documentaire, ni leur résolution présumée par cette approbation.

## Downstream usability — strong

Le glossaire du §4, les identifiants FR-1 à FR-11, NFR-1 à NFR-7, UJ-1 à UJ-3 et SM-1 à SM-6 permettent une extraction vers la conception et la recette. La matrice de droits et les renvois H/S/Q/P permettent de retrouver origine, comportement et réserve. L'addendum donne des livrables futurs et leurs preuves utiles, sans commandes techniques inventées ni architecture imposée.

La vérification finale du §5 confirme que les détails H1 à H12 sont donnés comme validés avec réserves, avec approbation globale encore attendue. Les colonnes du §9 distinguent décisions validées, réserves et suites à donner ; leur extraction ne les requalifie pas en hypothèses non examinées. Aucun constat ouvert sur cette dimension.

## Shape fit — strong

La forme correspond à une petite application métier avec dépôt public et plusieurs responsabilités internes : trois parcours courts, une grille de droits, onze capacités fonctionnelles et des contraintes d'exploitation concrètes. Les parcours portent les interactions utiles sans multiplier les personas ou imposer une conception d'écran.

Le caractère existant du dépôt est présenté prudemment dans le §3 et l'addendum : Next.js/Supabase fournit un contexte réutilisable après examen, sans preuve de livraison métier ni fournisseur déjà engagé. La distinction entre besoin, architecture future et documentation d'exploitation respecte la phase autorisée.

## Mechanical notes

- Identifiants FR, NFR, UJ, SM, H, Q et P continus et sans doublon constaté ; les renvois internes vers ces groupes se résolvent dans les documents lus.
- Les trois UJ ont un protagoniste nommé et un contexte d'accès explicite.
- Les notions demande, référence, statut, historique, commentaire d'intervention, RPO et RTO conservent un sens cohérent. La confidentialité de la référence et la distinction email accepté/email reçu sont répétées sans contradiction.
- Aucun marqueur inline `[ASSUMPTION: …]` non indexé : les anciennes hypothèses sont explicitement reprises comme décisions H1 à H12 validées avec réserves. L'index H/Q/P remplit ici le rôle de suivi des décisions et incertitudes ; un nouvel index d'hypothèses n'est pas nécessaire.
- Les liens aux rapports historiques sont explicitement qualifiés au §10 ; la présente relecture est conservée séparément. Aucun rapport ancien ni document source n'a été modifié par cette revue.

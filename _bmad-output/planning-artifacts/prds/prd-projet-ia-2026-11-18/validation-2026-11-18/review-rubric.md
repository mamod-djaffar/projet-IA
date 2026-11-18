# PRD Quality Review — Nova Services

## Overall verdict

Le PRD est solide pour examiner et valider le besoin : périmètre, droits, erreurs, exploitation et hypothèses sont explicites, avec des conséquences vérifiables pour chaque fonctionnalité. Deux précisions proposées rendraient la recette et le bilan du pilote plus déterminés ; aucun constat critique ou élevé ne justifie de remettre le périmètre en cause. Cette appréciation ne vaut ni accord utilisateur, ni autorisation de développement : les corrections ci-dessous sont proposées et attendent son accord.

## Decision-readiness — strong

Les §1, §8 et §9 distinguent clairement validation du besoin, conception et ouverture réelle. Les hypothèses H1 à H12 indiquent les responsables et le moment de décision ; Q1 à Q5 exposent les sujets encore ouverts sans prétendre que les prestataires ou la conformité sont déjà validés.

Les arbitrages ont un coût explicite : accès commun sans cloisonnement, réponse au client par les canaux habituels, absence d'import automatique et prise en charge de l'email sans annuler la demande. Le téléphone obligatoire et la conservation malgré l'échec email sont correctement reconnus comme confirmés. Le nombre d'hypothèses est acceptable pour ce document soumis à validation, qui ne constitue pas un feu vert à construire.

## Substance over theater — strong

Le §2 décrit des rôles qui déterminent les droits et les trois parcours ; il ne multiplie pas les personas décoratifs. La direction réutilise un rôle existant. La différenciation n'est pas artificiellement revendiquée et l'IA est explicitement située dans la réalisation du projet.

Les NFR portent sur des risques concrets : droits vérifiés en accès direct, contrôle d'une session après désactivation, restauration avec authentification, retour de version compatible avec les données et exercices d'incident. Les seuils de charge, de performance et d'exploitation sont chiffrés tout en restant identifiés comme propositions.

## Strategic coherence — adequate

Le pari du §2 — rendre chaque demande visible et sa progression vérifiable — structure le dépôt, la liste commune et l'historique. SM1 à SM4 et SM6 vérifient ces mécanismes. Le §8 prévoit aussi des garde-fous contre les clôtures artificielles, les refus abusifs et la confusion entre email accepté et reçu. Q5 rend honnêtement visible que la transition des canaux existants conditionne la centralisation.

### Findings

- **[medium]** Le résultat métier du pilote manque d'une règle de lecture (§8, SM-5 et étape 4) — Le texte demande de « comparer les oublis signalés à un état initial », mais ne définit ni ce qui compte comme oubli ni comment comparer des périodes pouvant recevoir des volumes différents. Les fonctions peuvent être acceptées techniquement, mais deux bilans du pilote pourraient conclure différemment sur la réduction des oublis. *Fix:* proposer une définition simple de l'oubli et une comparaison rapportée aux demandes reçues, à relever avant le pilote ; préciser que la direction juge ensuite l'amélioration avec ces éléments. La méthode est une clarification documentaire à proposer ; tout seuil chiffré conditionnant la généralisation serait une décision utilisateur, à ne pas inventer.

## Done-ness clarity — adequate

FR1 à FR11 comportent chacun des résultats observables. FR2 traite le nouvel essai après perte de réponse ; FR3 distingue enregistrement et acheminement ; FR8 précise transitions et conflits ; FR9 préserve l'historique sans promettre une conservation illimitée. Les NFR imposent des preuves, avec des décisions restantes explicitement exigées avant production. Il est raisonnable de laisser les mécanismes de programmation et les commandes exactes aux travaux de conception et d'exploitation.

### Findings

- **[medium]** L'affichage du contact de support n'a pas de périmètre vérifiable (§5.3, FR-11) — Le critère « apparaît sur les surfaces concernées » ne permet pas de décider quelles pages doivent refléter une modification. Le contact est une fonction incluse, mais un écran interne seul ou une présence également publique pourraient tous deux être présentés comme conformes. *Fix:* proposer une liste explicite des emplacements attendus, ou renvoyer à une liste à valider lors de la conception des écrans. La clarification du renvoi est documentaire ; le choix de visibilité du contact reste soumis à l'accord utilisateur et n'ajoute pas de canal de support.

## Scope honesty — strong

Le §3 énumère les exclusions et distingue l'affectation individuelle confirmée des limites proposées sous H12. Le §9 maintient les choix sensibles avant production. L'addendum ne transforme ni le socle Next.js/Supabase ni les essais antérieurs en fonctions livrées et présente les guides comme des livrables futurs.

La conservation maximale des demandes ouvertes, les responsabilités nominatives, l'hébergement et la transition des sollicitations sont des décisions restantes déclarées, avec leurs échéances. Leur ouverture actuelle n'est pas un oubli du PRD et ne justifie pas de réclamer de nouvelles fonctions.

## Downstream usability — adequate

Le glossaire du §4, les identifiants FR/NFR/UJ/SM et la grille des droits permettent d'extraire les règles pour les écrans, l'architecture et les récits d'implémentation. Les parcours ont des protagonistes et leur lien aux exigences est lisible. L'addendum précise les preuves attendues pour chaque livrable futur.

### Findings

- **[low]** Le statut de la décision d'accès commun varie entre les deux documents (PRD §2, FR-5 et §6 ; addendum, « Arbitrages assumés pour le MVP ») — Le PRD marque l'accès de tous les collaborateurs à toutes les demandes comme confirmé ; l'addendum écrit encore qu'il « exige que Nova Services confirme » leur accès aux coordonnées et descriptions. Cette formulation peut faire rouvrir une décision déjà acquise ou laisser croire à une restriction non décrite. *Fix:* rappeler dans l'addendum que l'accès commun est confirmé et que ses implications sur les données doivent être prises en compte dans la préparation avant production. C'est une harmonisation documentaire, sans nouvelle décision de droits à demander.

## Shape fit — strong

La forme convient à une petite application métier comportant un dépôt public, deux rôles internes et de vrais besoins d'exploitation. Trois parcours suffisent à donner du contexte sans alourdir le document. La séparation PRD/addendum garde les choix de programmation hors des exigences et explique au public débutant ce qui doit encore être produit.

## Mechanical notes

- Identifiants continus et uniques : FR-1 à FR-11, NFR-1 à NFR-7, UJ-1 à UJ-3, SM-1 à SM-6, H1 à H12 et Q-1 à Q-5. Les renvois internes cités correspondent aux exigences présentes.
- Les douze hypothèses indexées apparaissent dans le corps du PRD ; leurs reprises dans l'index ne changent pas leur statut. H1 et H4 distinguent bien les modalités proposées des décisions S4/S5 confirmées.
- Les trois parcours portent chacun un protagoniste nommé. Le vocabulaire métier reste cohérent ; « log » est défini comme synonyme de journal technique.
- Les liens du §10 conservent les noms des rapports précédents. Le présent rapport constitue une nouvelle validation datée et ne remplace pas ces documents ; ne pas présenter automatiquement leurs constats comme ceux de cette passe.
- Total des constats : **0 critical, 0 high, 2 medium, 1 low**. Aucun document source ni ancien rapport n'a été modifié. Corrections proposées uniquement, à soumettre à l'accord utilisateur avant mise à jour.

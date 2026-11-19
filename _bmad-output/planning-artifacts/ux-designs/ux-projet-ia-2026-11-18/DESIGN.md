---
name: Nova Services
description: Identité sobre et lisible pour déposer et traiter les demandes des clients et prospects.
status: pending_validation
created: 2026-11-18
updated: 2026-11-19
sources:
  - ../../prds/prd-projet-ia-2026-11-18/prd.md
  - EXPERIENCE.md
colors:
  primary: '#173B5F'
  primary-hover: '#102C48'
  primary-soft: '#EAF0F7'
  on-primary: '#FFFFFF'
  background: '#F4F6F9'
  surface: '#FFFFFF'
  surface-muted: '#EEF2F6'
  ink: '#1B2B40'
  ink-muted: '#526176'
  border: '#D5DDE7'
  input-border: '#7C899A'
  focus: '#2563EB'
  focus-inverse: '#FFFFFF'
  new-ink: '#244B76'
  new-bg: '#EAF0F7'
  progress-ink: '#80520C'
  progress-bg: '#FFF3D6'
  done-ink: '#17613F'
  done-bg: '#E7F4ED'
  error-ink: '#A1252B'
  error-bg: '#FFF0F0'
  disabled-ink: '#566376'
  disabled-bg: '#E6EBF1'
typography:
  title:
    fontFamily: 'Segoe UI, system-ui, -apple-system, sans-serif'
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: '-0.025em'
  section:
    fontFamily: 'Segoe UI, system-ui, -apple-system, sans-serif'
    fontSize: 20px
    fontWeight: '650'
    lineHeight: '1.35'
  body:
    fontFamily: 'Segoe UI, system-ui, -apple-system, sans-serif'
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label:
    fontFamily: 'Segoe UI, system-ui, -apple-system, sans-serif'
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.5'
  meta:
    fontFamily: 'Segoe UI, system-ui, -apple-system, sans-serif'
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  full: 9999px
spacing:
  '1': 4px
  '2': 8px
  '3': 12px
  '4': 16px
  '5': 24px
  '6': 32px
  '7': 48px
  margin-mobile: 16px
  gutter: 24px
components:
  brand:
    foreground: '{colors.primary}'
    fontWeight: '700'
  navigation:
    background: '{colors.primary}'
    foreground: '{colors.on-primary}'
    width: 224px
  panel:
    background: '{colors.surface}'
    border: '{colors.border}'
    radius: '{rounded.lg}'
  button-primary:
    background: '{colors.primary}'
    foreground: '{colors.on-primary}'
    hover: '{colors.primary-hover}'
    radius: '{rounded.md}'
    minHeight: 44px
  button-secondary:
    background: '{colors.surface}'
    foreground: '{colors.primary}'
    border: '{colors.input-border}'
    radius: '{rounded.md}'
    minHeight: 44px
  field:
    background: '{colors.surface}'
    foreground: '{colors.ink}'
    border: '{colors.input-border}'
    radius: '{rounded.md}'
    minHeight: 44px
  filters:
    background: '{colors.surface}'
    gap: '{spacing.3}'
  request-list:
    background: '{colors.surface}'
    border: '{colors.border}'
    minRowHeight: 60px
  pagination:
    minTarget: 44px
    foreground: '{colors.primary}'
  badge:
    radius: '{rounded.full}'
    font: '{typography.label.fontSize}'
  notice:
    radius: '{rounded.md}'
    padding: '{spacing.4}'
  treatment:
    background: '{colors.surface}'
    gap: '{spacing.4}'
  history:
    border: '{colors.border}'
    gap: '{spacing.5}'
  email-status:
    background: '{colors.surface-muted}'
    radius: '{rounded.md}'
  empty-state:
    background: '{colors.surface}'
    padding: '{spacing.6}'
  skeleton:
    background: '{colors.surface-muted}'
    radius: '{rounded.sm}'
  dialog:
    background: '{colors.surface}'
    radius: '{rounded.lg}'
    maxWidth: 480px
  support:
    foreground: '{colors.ink-muted}'
    font: '{typography.meta.fontSize}'
---

# Nova Services — DESIGN

Document proposé à validation. Il décrit **l'apparence**. [EXPERIENCE.md](EXPERIENCE.md) décrit les comportements. Le PRD approuvé reste la référence métier ; les deux documents UX priment sur les maquettes en cas d'écart de représentation.

Origines : **[PRD]** = exigence héritée ; **[CHOIX ACCEPTÉ]** = réponse par défaut acceptée dans l'unique tour UX ; **[HYPOTHÈSE UX A-n]** = détail proposé, distinct des décisions déjà approuvées du PRD. Registre commun en fin d'EXPERIENCE.md. Un « token » est simplement un nom stable donné à une valeur, par exemple `{colors.primary}` pour le bleu principal.

## Brand & Style

**[CHOIX ACCEPTÉ]** Identité professionnelle sobre, bleu marine, fond clair et gris neutres. « Nova Services » reste une signature textuelle : aucun logo officiel n'est inventé. Le produit aide à accomplir une tâche, sans promesse de résolution instantanée, slogan commercial ou décoration envahissante.

**[HYPOTHÈSE UX A-1]** Mode clair uniquement pour cette proposition, sans sélecteur de thème. Une petite mention « Espace clients et prospects » ou « Espace collaborateurs » distingue les deux contextes. Les maquettes comportent une barre de consultation séparée du produit : données fictives, liens vers les autres écrans et variantes d'état. Cette barre ne fait pas partie de l'application future.

Références visuelles : [formulaire public](mockups/formulaire-public.html), [liste interne](mockups/liste-demandes.html), [détail et traitement](mockups/detail-demande.html). Les variantes se choisissent par les liens d'état en haut de chaque fichier ; elles sont des instantanés, pas des opérations réelles.

## Colors

**[HYPOTHÈSE UX A-1]** Les valeurs exactes complètent la direction acceptée.

| Rôle | Tokens | Usage |
|---|---|---|
| Action et identité | `{colors.primary}`, `{colors.primary-hover}`, `{colors.on-primary}` | Bouton principal, marque, menu interne ; texte blanc sur marine |
| Plans de lecture | `{colors.background}`, `{colors.surface}`, `{colors.surface-muted}` | Fond général, panneaux blancs et informations secondaires |
| Texte | `{colors.ink}`, `{colors.ink-muted}` | Titres/contenu et aides ; aucune aide essentielle en gris trop clair |
| Délimitations | `{colors.border}`, `{colors.input-border}` | Séparateurs décoratifs et contour plus contrasté des contrôles |
| Focus clavier | `{colors.focus}`, `{colors.focus-inverse}` | Anneau visible de 3 px, séparé du composant par 2 px ; bleu sur fond clair, blanc sur le menu marine |
| Nouvelle | `{colors.new-ink}` sur `{colors.new-bg}` | Badge « Nouvelle », repère rond |
| En cours | `{colors.progress-ink}` sur `{colors.progress-bg}` | Badge « En cours », repère de progression |
| Traitée | `{colors.done-ink}` sur `{colors.done-bg}` | Badge « Traitée », repère de validation |
| Erreur | `{colors.error-ink}` sur `{colors.error-bg}` | Erreur expliquée, jamais uniquement un contour rouge |
| Désactivé | `{colors.disabled-ink}` sur `{colors.disabled-bg}` | Action momentanément indisponible, avec raison si nécessaire |

**[PRD NFR-2]** Le statut ne dépend pas seulement d'une couleur. **[HYPOTHÈSE UX A-2]** Viser au minimum 4,5:1 pour le texte courant et 3:1 pour les contours des contrôles et le repère de focus. Vérifier les couples réellement utilisés ; un séparateur décoratif peut rester discret, mais ne remplace pas un contour de champ. Les mesures locales de la palette seront conservées dans `controle-local.json` ; elles ne constituent pas une certification d'accessibilité de l'application.

## Typography

**[HYPOTHÈSE UX A-1]** Utiliser une police système sans téléchargement : Segoe UI sur Windows, puis `system-ui` et les polices de secours définies dans les tokens. Aucun service de polices ni dépendance graphique n'est imposé.

| Rôle | Référence | Règle |
|---|---|---|
| Titre d'écran | `{typography.title}` | Un titre principal ; 32 px sur ordinateur, 28 px sur téléphone |
| Titre de panneau | `{typography.section}` | 20 px ; hiérarchie avant décoration |
| Texte et champs | `{typography.body}` | 16 px, interligne 1,5 ; ne pas réduire les champs sur mobile |
| Libellé | `{typography.label}` | 14 px, semi-gras ; toujours extérieur au champ |
| Aide, date, référence | `{typography.meta}` | 14 px ; références et dates peuvent utiliser des chiffres alignés |

L'objet peut revenir à la ligne. Les descriptions et commentaires gardent leurs retours à la ligne. Aucun texte saisi n'est tronqué dans le détail ; la liste peut limiter l'objet à deux lignes avec un lien de détail explicite.

## Layout & Spacing

**[CHOIX ACCEPTÉ]** Formulaire et détail aérés ; liste plus compacte. Tableau sur ordinateur et fiches empilées sur téléphone, sans modifier les 25 éléments d'une page.

**[HYPOTHÈSE UX A-3]** Grille par pas de 4 px. Marges téléphone `{spacing.margin-mobile}`, espaces entre panneaux `{spacing.gutter}`. Le formulaire occupe au maximum 760 px de contenu centré. L'espace interne conserve un menu de 224 px puis un contenu souple, plafonné à 1 440 px. Le détail place lecture/historique à gauche et traitement à droite ; l'ordre mobile devient résumé, contenu, traitement, historique.

À partir de 1 024 px : menu latéral et détail en deux colonnes. De 768 à 1 023 px : menu compact en haut et détail en une colonne. Sous 768 px : une colonne et liste en fiches. Les filtres se replient en lignes, sans imposer un défilement horizontal. Le menu mobile est dans le flux et non un panneau qui masque l'écran. Chaque page garde son propre défilement ; pas de barre d'action flottante recouvrant les champs.

## Elevation & Depth

**[HYPOTHÈSE UX A-1]** Panneaux délimités par un trait, avec ombre discrète `0 6px 24px rgba(27,43,64,.04)`. Les champs restent plats. La seule superposition envisagée est une confirmation d'action d'administration sensible ; elle ne crée pas un nouvel écran métier. Ni verre transparent, ni dégradé décoratif, ni ombre sur chaque ligne de liste.

## Shapes

Champs et boutons : `{rounded.md}` ; panneaux : `{rounded.lg}` ; petits repères : `{rounded.sm}` ; badges : `{rounded.full}`. Les cibles interactives mesurent au moins 44 px de haut **[HYPOTHÈSE UX A-2]**. Les coins arrondis ne servent jamais à distinguer seuls un état. Pas de boutons exclusivement constitués d'une icône pour les actions importantes.

## Components

Les noms ci-dessous sont identiques dans EXPERIENCE.md. Les valeurs viennent du frontmatter ; les états fonctionnels sont définis dans le document d'expérience.

| Composant | Règles visuelles et états |
|---|---|
| `brand` | Signature textuelle marine sur fond clair, blanche dans le menu ; nom toujours lisible |
| `navigation` | Menu marine, onglet actif souligné par fond plus clair et texte renforcé ; icône facultative accompagnée d'un libellé |
| `panel` | Surface blanche, bord discret, titre net, espaces 24/32 px ; sections sémantiques distinctes |
| `button-primary` | Marine/blanc, 44 px minimum, libellé d'action ; survol plus foncé, focus distinct, texte de chargement visible |
| `button-secondary` | Blanc/marine, contour de contrôle, mêmes dimensions ; pas de compétition visuelle avec l'action principale |
| `field` | Libellé permanent, contour `{colors.input-border}`, aide et erreur sous le champ ; erreur avec texte et repère ; lecture seule différenciée sans masquer la valeur |
| `filters` | Groupe de champs avec titres ; recherche plus large, autres filtres de même hauteur ; critères visibles sans ligne de badges décoratifs supplémentaire |
| `request-list` | En-têtes gris léger, lignes séparées, hauteur au moins 60 px ; objet/référence mis en avant ; fiches mobiles reprenant les mêmes informations |
| `pagination` | Compteur de résultats et boutons de 44 px ; page actuelle explicitement nommée ; états premier/dernier visibles |
| `badge` | Libellés complets Nouvelle/En cours/Traitée et repère de forme ; aucune ambiguïté avec l'état d'email |
| `notice` | Bandeau avec titre, phrase utile et action éventuelle ; erreur rouge, avertissement ocre, réussite verte ; pas de disparition automatique d'une référence |
| `treatment` | Bloc distinct du dépôt en lecture seule : statut cible, commentaire d'intervention et bouton d'enregistrement ; obligation du commentaire clairement indiquée |
| `history` | Liste chronologique avec repères, date/heure/auteur et commentaire ; jamais une présentation en bulles de discussion |
| `email-status` | Bloc secondaire réservé à l'administrateur, séparé du traitement ; libellés techniques expliqués et compteur explicite |
| `empty-state` | Titre direct, une explication et une action utile ; pas d'illustration volumineuse ni d'invitation à dupliquer une demande |
| `skeleton` | Blocs gris statiques reprenant la structure ; pas de clignotement ni de mouvement obligatoire |
| `dialog` | Fenêtre de confirmation sobre, action et conséquence nommées ; bouton de retour visible ; hauteur et défilement compatibles avec téléphone |
| `support` | Pied de page discret mais lisible, contact identique sur toutes les surfaces requises ; mention de confidentialité séparée du bouton d'envoi |

## Do's and Don'ts

- **Faire :** garder le texte, le statut, la référence et les erreurs compréhensibles ; préserver la saisie ; utiliser les mêmes composants publics et internes ; afficher une seule action principale par bloc.
- **Faire :** comparer les [états du formulaire](mockups/formulaire-public.html#erreur), la [liste vide](mockups/liste-demandes.html#vide) et le [traitement refusé](mockups/detail-demande.html#erreur) avant validation.
- **Éviter :** notifications de réussite qui disparaissent avec la référence, confusion « Traitée »/« email envoyé », texte clair sur fond clair, barre latérale débordante sur mobile, champ uniquement expliqué par son placeholder.
- **Éviter :** priorités, affectations, pièces jointes, graphiques, avatars clients, consentement précoché ou nouvelle case obligatoire de consentement : ces fonctions ou choix juridiques ne sont pas ajoutés au PRD.
- **Avant validation :** les valeurs exactes et hypothèses UX peuvent être corrigées sans changer les exigences métier. Aucun choix de framework, prestataire, architecture ou application n'est engagé par ces documents.

---
name: Paula Riquelme Portfolio
description: An evidence-led product launch dossier spanning product leadership, design, go-to-market, and frontend delivery.
colors:
  primary: '#4338a8'
  primary-light: '#a5b5fc'
  primary-dark: '#292263'
  paper: '#f3f0e8'
  paper-bright: '#fbfaf6'
  ink: '#11110f'
  muted: '#66645e'
  line: '#b8b4aa'
  line-dark: '#383832'
  on-accent: '#ffffff'
typography:
  display:
    fontFamily: 'Barlow Condensed, Arial Narrow, sans-serif'
    fontSize: 'clamp(4.35rem, 9.4vw, 9.3rem)'
    fontWeight: 700
    lineHeight: 0.78
    letterSpacing: '-0.04em'
  headline:
    fontFamily: 'Barlow Condensed, Arial Narrow, sans-serif'
    fontSize: 'clamp(2.6rem, 5.4vw, 5.5rem)'
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: '-0.035em'
  project-title:
    fontFamily: 'Barlow Condensed, Arial Narrow, sans-serif'
    fontSize: 'clamp(3.5rem, 7vw, 7rem)'
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: '-0.04em'
  title:
    fontFamily: 'Barlow Condensed, Arial Narrow, sans-serif'
    fontSize: 'clamp(1.55rem, 2.4vw, 2.4rem)'
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 'normal'
  body:
    fontFamily: 'Barlow, Arial, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 'normal'
  label:
    fontFamily: 'Barlow, Arial, sans-serif'
    fontSize: '0.72rem'
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '0.13em'
  action:
    fontFamily: 'Barlow, Arial, sans-serif'
    fontSize: '0.82rem'
    fontWeight: 600
    lineHeight: 1
    letterSpacing: '0.055em'
rounded:
  square: '0'
spacing:
  page-gutter: 'clamp(1.25rem, 4vw, 4.5rem)'
  section-space: 'clamp(5rem, 10vw, 9rem)'
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-accent}'
    typography: '{typography.action}'
    rounded: '{rounded.square}'
    padding: '0.76rem 1.05rem'
    height: '2.9rem'
  button-primary-hover:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.on-accent}'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '{colors.ink}'
    typography: '{typography.action}'
    rounded: '{rounded.square}'
    padding: '0.76rem 1.05rem'
    height: '2.9rem'
  button-secondary-hover:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-accent}'
  button-quiet:
    backgroundColor: 'transparent'
    textColor: '{colors.ink}'
    rounded: '{rounded.square}'
    padding: '0.7rem'
    height: '2.9rem'
    width: '2.9rem'
---

# Design System: Paula Riquelme Portfolio

## Overview

**Creative North Star: "The Product Launch Dossier"**

The system feels like a product launch dossier built from field evidence, not a centered personal-brand homepage. Warm paper, near-black ink, compressed display typography, thin rules, and square geometry create a factual editorial surface with a clear point of view.

Deep indigo marks decisive actions and high-confidence evidence. Factual project and publication imagery, structured outcomes, and visible metrics make product leadership, design, go-to-market work, and frontend delivery read as one connected practice.

Density stays deliberate. Oversized type and the asymmetric role register establish identity, while ledgers and indices make the record easy to scan. Depth appears only when an overlay detaches from the document plane, and purposeful motion reinforces structure while respecting reduced-motion preferences.

**Key Characteristics:**

- Evidence before biography.
- Compressed display type against calm body copy.
- Square, ruled paper geometry with square actions and one deep indigo accent.
- A vertical desktop role register that becomes horizontal responsively.
- Factual imagery and motion that confirms structure, never decorates.

**The Evidence Before Biography Rule.** Lead with observable work, outcomes, and artifacts before relying on professional labels.

## Colors

The palette combines warm editorial neutrals with one authoritative indigo family.

### Primary

- **Deep Launch Indigo:** Use for the highest-priority action, recognition feature, contact close, and other high-confidence anchors.
- **Soft Signal Indigo:** Use for selection, visible focus, headings inside near-black regions, and restrained hover feedback.
- **Midnight Indigo:** Use as the fallback plane behind project media and other rare dark-indigo surfaces.

### Neutral

- **Warm Dossier Paper:** The default page and card surface.
- **Proof Sheet:** A brighter paper used to distinguish selected evidence and detached overlays.
- **Near-Black Ink:** Primary text, structural rules, dark action surfaces, and the capabilities band.
- **Quiet Graphite:** Supporting copy and secondary metadata.
- **Ruled Taupe:** Internal dividers, registers, and low-emphasis borders.
- **Dark Rule:** Dividers used on near-black surfaces.
- **Clean White:** Text and controls placed on indigo or other dark fills.

**The One Indigo Rule.** Use deep indigo for decisive actions, selected evidence, and major closing surfaces; its rarity carries authority.

**The Factual Color Rule.** Project media may be toned or cropped, but never recolored into decorative or invented imagery.

## Typography

**Display Font:** Barlow Condensed with Arial Narrow and sans-serif fallbacks

**Body Font:** Barlow with Arial and sans-serif fallbacks

**Character:** Barlow Condensed provides the compressed, forceful silhouette of a launch headline and structured index. Barlow keeps evidence, supporting copy, navigation, and actions calm and highly legible.

### Hierarchy

- **Display:** Oversized uppercase hero and contact statements with very tight line-height and negative tracking.
- **Headline:** Uppercase section headings that establish major document divisions.
- **Project Title:** Large uppercase project names that anchor each proof sheet.
- **Title:** Experience roles, education entries, capability groups, press introductions, and dialog headings.
- **Body:** Summaries, descriptions, outcomes, and evidence. Keep copy measures intentionally narrow within the wider grid.
- **Label:** Uppercase roles, locations, sources, captions, and ledger metadata with measured tracking.
- **Action:** Compact uppercase buttons and external links.

**The Compression Rule.** Barlow Condensed carries every oversized claim and index title; body copy never imitates it through tracking or all caps.

## Layout

Content is capped at 94rem and framed by the responsive page-gutter and section-space tokens. A faint fixed guide divides the desktop canvas into quarters and simplifies to two columns on mobile.

The opening composition uses a narrow 6.25rem role register beside the main statement. Its proof ledger spans the full composition below. Projects use two equal-width proof sheets separated by a one-pixel ink gap. Experience uses a three-part index, while press alone uses a twelve-column grid to create three-up and two-up evidence rows.

At the compact breakpoint, desktop navigation becomes a right-edge dialog and the vertical role register becomes horizontal. At the mobile breakpoint, the proof ledger, projects, experience, capabilities, education, recognition, press, and contact layouts stack into one column. The page gutter becomes 1rem and section spacing becomes 4.5rem.

Visual order must follow semantic reading order. The layout remains complete in the static Next.js export without relying on JavaScript for structure.

**The Responsive Register Rule.** Preserve hierarchy and reading order when vertical desktop labels become horizontal; do not preserve desktop novelty at the cost of mobile comprehension.

## Elevation & Depth

The document plane is flat. Inline cards, ledgers, media, and sections use one-pixel rules, paper contrast, and tonal bands instead of shadows. The sticky masthead uses translucent paper and restrained backdrop blur without appearing detached.

Only the project preview and mobile navigation overlays receive soft shadows. Their dark translucent backdrops and restrained blur establish modal depth without introducing glass-card styling.

**The Detached Sheet Rule.** Shadows appear only when an overlay leaves the page plane; inline panels stay flat and use borders or contrast instead.

## Shapes

The document system is deliberately square. Cards, media crops, navigation surfaces, proof ledgers, dialogs, and interactive actions use zero corner radius. One-pixel rules provide most structural separation.

The PR monogram is a square ink tile. Project media uses a 16:10 rectangular crop, while publication imagery preserves enough source context to remain factual. Avoid pills, soft cards, ornamental circles, and rounded containers.

The favicon uses a single white P on a deep-indigo square so it remains legible at browser-tab size. The masthead keeps the fuller black PR monogram.

**The Square Proof Rule.** Document surfaces, media crops, overlays, and actions keep square corners; affordance comes from contrast, rules, labels, and interaction states.

## Components

### Buttons

- **Foundation:** Base UI owns button behavior and supports rendering the same primitive as a semantic button or anchor.
- **Shape:** Square with a one-pixel rule and a minimum height of 2.9rem.
- **Primary:** Deep indigo with white text for the principal action. Contextual inverse buttons use white on indigo.
- **Secondary:** Transparent paper with near-black text and an ink rule.
- **Quiet:** A compact square transparent icon control for menus and dialog dismissal.
- **Hover:** Filled actions change toward ink or indigo and lift by two pixels over 150ms.
- **Focus:** A three-pixel soft-indigo outline with a four-pixel offset.

### Masthead and Navigation

The masthead is sticky, ruled, and backed by 94 percent opaque paper with a 14px blur. The PR mark and name sit opposite compact uppercase section links. The final desktop contact link becomes a filled ink action.

Below 68rem, desktop navigation is replaced by a Base UI dialog. The mobile drawer enters from 32px to the right while fading from 55 percent opacity over 280ms.

### Role Register and Proof Ledgers

The three-role register is vertical on desktop, separated by thin rules, and becomes a wrapping horizontal line below the compact breakpoint.

Evidence ledgers are semantic definition lists. Large condensed values sit above compact metadata in three equal cells and stack below the mobile breakpoint. Treat evidence as structure, not as badges or decorative statistics.

### Project Proof Sheets

Selected work uses equal-width, square proof sheets with large project names, factual local WebP imagery, a ruled metric strip, outcome lists, and visible preview and external actions. Woku uses the brighter proof-sheet surface while the adjacent card remains on warm paper.

Project imagery is slightly desaturated and contrasted. It scales to 1.025 on card hover and reveals once from 24px below over 460ms without reducing evidence contrast.

### Dialogs

Base UI owns focus management, dismissal, and accessible dialog semantics. The project preview is a bright paper sheet above a 78 percent near-black backdrop with 6px blur. It enters from 16px below over 240ms.

Preview content mounts only after explicit interaction. The component supports a lazy iframe, but the current Woku and Inpla data use factual local screenshot fallbacks plus persistent external links.

### Motion

Motion for React is loaded through LazyMotion. It draws the hero rule from the left, reveals project media, translates the preview sheet, and slides and fades mobile navigation.

**The Motion With Purpose Rule.** Animate rule growth, evidence reveal, and overlay entry only; reduced motion removes spatial starts and preserves immediate feedback.

When reduced motion is requested, Motion skips spatial initial states, smooth scrolling is disabled, and CSS transition duration collapses to 0.01ms.

## Do's and Don'ts

### Do:

- **Do** use verified local WebP imagery and retain enough publication context for the evidence to remain honest.
- **Do** pair one filled deep-indigo primary action with a ruled secondary action.
- **Do** reserve Barlow Condensed 700 for oversized statements, headings, project names, and dialog titles.
- **Do** preserve semantic reading order before applying grid offsets, vertical writing, or responsive rearrangement.
- **Do** use thin rules, background contrast, and type scale to separate inline content.

### Don't:

- **Don't** recenter the first impression into a generic personal-brand cover.
- **Don't** add portraits, stock imagery, generic AI imagery, decorative gradients, glass cards, pills, or rounded card systems.
- **Don't** use shadows on inline cards, ledgers, sections, or media.
- **Don't** animate for ornament or leave spatial motion active when the user prefers reduced motion.
- **Don't** invent metrics, customers, testimonials, benchmarks, or project visuals.

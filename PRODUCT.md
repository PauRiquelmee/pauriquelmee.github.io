# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js App Router with TypeScript, Tailwind CSS, Base UI, Motion for React, Vitest, React Testing Library, and Playwright. The site is a static export deployed as a GitHub Pages user site.

## Users

Primary audience inferred from the portfolio brief: prospective clients, partners, founders, and product teams evaluating Paula Riquelme for product leadership, design, and frontend execution.

## Product Purpose

Present Paula's product leadership, design judgment, technical execution, and entrepreneurial record through a concise professional portfolio. Success means a visitor can quickly understand how Paula works across discovery, strategy, UX/UI, and implementation, inspect selected work, verify evidence, download the English resume, and start a conversation.

## Positioning

Paula bridges customer discovery, product strategy, product design, go-to-market work, and frontend implementation. The portfolio must make this unusual end-to-end range concrete rather than treating it as a generic multidisciplinary claim.

## Operating Context

Visitors arrive from professional referrals, LinkedIn, press coverage, or direct outreach. They evaluate the site on desktop and mobile, scan evidence quickly, may open Woku and Inpla, and may download a resume for later review.

## Capabilities and Constraints

- An English-only portfolio at `/`, with substantive `/about/`, `/contact/`, and `/privacy/` trust pages.
- A custom recoverable 404, `llms.txt`, a sitemap, and canonical Markdown documents for agent access.
- No backend, API routes, database, contact form, multilingual routes, or language selector.
- Static export compatible with the GitHub Pages user-site root.
- Woku and Inpla previews load only after explicit interaction and fall back to local screenshots plus safe external links when embedding is blocked.
- Base UI owns relevant interactive primitives and focus management.
- Motion owns meaningful animation and respects the user's reduced-motion preference.
- Source architecture enforces one named component per production TSX file, folder-boundary imports, colocated tests, and default exports from component folders while allowing idiomatic JSX in callbacks and conditions.
- All visible copy, metadata, code, tests, documentation, workflow text, branches, commits, and pull request content are English-only.
- The repository may not use em dash characters.

## Brand Commitments

- Name: Paula Riquelme.
- Primary professional line: Product Lead, Product Designer, Frontend Developer.
- Required hero headline: "I design products, bring them to market, and can build them too."
- Editorial, minimal, contemporary direction with selective asymmetry, large typography, warm white surfaces, near-black text, one controlled indigo or deep-violet accent, thin borders, and small metadata labels.
- No portrait, stock illustration, generic AI imagery, excessive glass effects, decorative gradients, or emoji icons.
- Typographic PR identity.

## Evidence on Hand

- Canonical English resume and implementation brief: `../prompt.md` outside the repository.
- Press images supplied by the user: `../woku.png`, `../inpla.png`, `../verano1.png`, `../verano2.png`, `../fracaso.png`, `../madeinnconce.png`, and `../optima2017.jpeg` outside the repository.
- Verified public links in the brief for LinkedIn, Woku, Inpla, `(defi)2`, Diario Concepcion, and five El Mercurio Innovation posts.
- No personal photograph or separate project product screenshots were supplied. Project presentation may use optimized crops of the supplied Woku and Inpla media as factual local imagery.
- No testimonials, extra customer names, revenue claims, prices, or benchmarks may be invented.

## Product Principles

1. Lead with evidence, not labels.
2. Let selected work demonstrate the connection between product strategy, design, and implementation.
3. Keep exploration fast, legible, and keyboard accessible.
4. Make every claim traceable to the canonical resume.
5. Preserve a lightweight static experience with minimal initial JavaScript.

## Accessibility & Inclusion

Target WCAG AA contrast, complete keyboard navigation, visible focus states, descriptive labels, semantic HTML, appropriate touch targets, resilient zoom and reflow, and a site-wide reduced-motion policy.

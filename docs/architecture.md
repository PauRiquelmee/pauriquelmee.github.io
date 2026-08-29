# Architecture

## Project constraints

This repository produces one English-only portfolio page for Paula Riquelme. The site must export to static files, run at the root of Paula's GitHub Pages user site, avoid server-only features, minimize browser JavaScript, and preserve the canonical resume facts in `src/content`.

The implementation uses strict TypeScript, Tailwind CSS, Base UI, Motion for React, Vitest, React Testing Library, user-event, jest-dom, and Playwright. It does not use another foundational component library, animation library, backend, API route, database, or multilingual routing.

## Architectural decisions

- Use the Next.js App Router because the brief requires it and its Server Components can render static HTML at build time.
- Use `output: "export"`, `trailingSlash: true`, and unoptimized Next images so `next build` emits the deployable `out` directory.
- Keep route and section content server-rendered by default. Mark only Motion providers, dialogs, and mobile navigation as client components.
- Store canonical content as typed plain data. Components render this data but do not own resume facts.
- Use Base UI for buttons and dialogs. Semantic content and ordinary anchor navigation stay native HTML.
- Wrap each reusable component in its own folder with a colocated test and a default export from `index.ts`.
- Use a small number of compositions instead of broad abstraction layers. This keeps a one-page portfolio maintainable without hiding the design.

## Folder structure

```text
src/
  app/                    Next.js route, metadata routes, layout, and global styles
  components/
    foundations/          Base UI wrappers and low-level visual primitives
    patterns/             Reusable compositions such as project and press cards
    sections/             Page-level Hero, Work, Experience, Skills, Recognition, Contact
  content/                Typed canonical resume and portfolio content
  lib/                    URL, asset-path, and metadata helpers
  styles/                 Shared non-route style utilities when needed
  test/                   Global test setup and test-only helpers
docs/                     Architecture and implementation evidence
public/                   Static identity, resume, and optimized media assets
scripts/                  Architecture and documentation validators
tests/e2e/                Playwright flows
```

## Component categories

`foundations` are the only components allowed to wrap Base UI directly. They expose project-specific styling and preserve Base UI prop forwarding, refs, state attributes, keyboard behavior, and accessibility.

`patterns` combine foundations and semantic HTML into reusable units such as project previews, metric groups, press links, and resume links.

`sections` compose patterns and content for one major page region. A section may not import another section.

Route files compose sections and global providers. Content and library modules never import React components.

## Dependency direction

```text
app -> sections -> patterns -> foundations -> Base UI
                 -> content
                 -> lib

content -> types only
lib -> platform APIs only
```

Imports must enter component folders through `index.ts`. Broad component barrels are prohibited. This keeps boundaries explicit and prevents circular dependencies.

## Base UI strategy

Base UI is installed as `@base-ui/react`. The project uses its Button and Dialog primitives for controls, mobile navigation, and project previews. Wrappers accept the underlying Base UI types, forward supported props, and style public state attributes with Tailwind. Composition uses Base UI's `render` API only when changing the rendered element is necessary. Dialog focus trapping, Escape handling, and focus restoration remain Base UI responsibilities.

Native anchors remain appropriate for static in-page and external navigation. Static headings, articles, lists, and grids do not receive unnecessary interactive wrappers.

## Motion strategy

A small client-side provider wraps the page in `LazyMotion` and `<MotionConfig reducedMotion="user">`. Motion components use `m` from `motion/react`. The hero receives one restrained entrance sequence, project media receives reveal feedback, and dialogs use short opacity and transform transitions. `AnimatePresence` is reserved for real exit transitions.

Content remains visible in server-rendered HTML. Motion does not gate meaningful content before hydration. Reduced-motion tests verify that large transforms are removed or replaced with opacity-only feedback.

## Static export strategy

`next.config.ts` enables `output: "export"`, `trailingSlash: true`, and `images.unoptimized: true`. The build emits `out`. A post-build script places `.nojekyll` in `out`.

No component uses cookies, headers, draft mode, server actions, rewrites, redirects, or runtime route handlers. Metadata routes must be statically generated or represented by public files when static export constraints require it.

## GitHub Pages root hosting

The repository is named `pauriquelmee.github.io`, so production is served directly from `/` without `basePath` or `assetPrefix`. `src/lib/paths.ts` provides one tested helper that normalizes public asset URLs to root-relative paths.

The canonical production origin is `https://PauRiquelmee.github.io/`. Metadata, sitemap, robots, manifest, JSON-LD, resume links, screenshots, icons, and social cards use the user-site root.

## Content architecture

All resume facts live in `src/content/portfolio.ts` with explicit TypeScript types. Experience, education, skills, metrics, recognition, press, and contact links are separate exported records. This gives tests a single factual source and prevents text drift across sections, metadata, JSON-LD, and the resume generator.

The site does not invent testimonials, customer names, awards, dates, metrics, roles, funding sources, or capabilities. Press imagery and links are mapped explicitly to the supplied local files.

## Testing strategy

The component workflow is test-first: add a behavior test, run it and confirm the expected failure, implement the minimum behavior, run the relevant test, then refactor while green.

Vitest and React Testing Library cover semantic roles, names, external links, disabled controls, focus behavior, mobile navigation, project preview loading, Escape closing, focus restoration, fallback messaging, resume downloads, reduced motion, base paths, and English metadata. Coverage thresholds are 90 percent statements, lines, and functions, plus 85 percent branches for the component layer.

Playwright runs against the static export served at the production root. It covers navigation, mobile menu, previews, fallbacks, external links, resume download, LinkedIn, press links, core content, and static assets.

The custom architecture validator parses production TSX and folder structure. CI runs lint, typecheck, unit tests, coverage, architecture validation, agent-document validation, build, and Playwright.

## Accessibility strategy

- Semantic landmarks and ordered heading levels.
- Skip link and visible `:focus-visible` treatments.
- Base UI focus trapping and restoration for dialogs.
- Descriptive accessible names for project previews and external press links.
- `aria-current` only where state is real.
- Mobile touch targets of at least 44 pixels.
- WCAG AA foreground and surface contrast.
- Meaningful alt text for factual images and empty alt text only for purely decorative assets.
- Reduced-motion support at both Motion configuration and component-decision levels.
- No hover-only content or interaction.

## SEO strategy

Static metadata defines the exact English title and description, a production `metadataBase`, canonical URL, Open Graph data, Twitter card data, robots directives, keywords, icons, and theme color. Static robots, sitemap, and manifest files use root-relative paths. A Person JSON-LD object matches visible facts and uses LinkedIn, Woku, and Inpla for `sameAs`.

No alternate locale, `hreflang`, Spanish metadata, or localized route is generated.

## Asset generation strategy

Identity assets are deterministic. Source SVG files define the PR monogram, the white-P-on-indigo favicon, and the social card. Sharp rasterizes and optimizes favicon sizes, PWA icons, Apple touch icon, Open Graph image, Twitter image, and supplied Woku, Inpla, press, and recognition media. The favicon combines 16, 32, and 48 pixel images.

The static export also publishes `llms.txt` at the project root. It follows the current llms.txt Markdown structure, links to canonical evidence, and is discoverable through both the footer and a `rel="describedby"` document link.

The English resume PDF is generated from canonical content using a deterministic PDF library and visually inspected before release. Source assets stay under `assets/source` when useful, while browser-ready output lives in `public`.

## Trade-offs

- Base UI and Motion add client code, but only interactive preview and navigation islands import them.
- Static export removes server-dependent features, which fits a portfolio and makes hosting simple.
- Next image optimization is disabled for GitHub Pages, so assets must be pre-optimized at build time.
- One-component-per-file increases file count but makes the requested boundaries mechanically enforceable.
- Local fonts would make builds fully offline, while `next/font` can offer optimized font loading. The implementation will prefer deterministic self-hosted font packages if they meet the visual direction.

## Rejected alternatives

- Vercel deployment: rejected because the requested production target is GitHub Pages.
- Pages Router: rejected because the brief requires App Router.
- A client-rendered single page application: rejected because static Server Components provide better initial HTML and less JavaScript.
- Radix UI, shadcn/ui, Headless UI, Material UI, and Chakra UI: rejected because Base UI is the required foundation.
- CSS animation libraries or custom entrance keyframes: rejected because Motion is the required animation system.
- MDX or a content management system: rejected because one canonical typed content module is simpler and more enforceable.
- Runtime iframe capability probing: rejected because cross-origin frame policies cannot be inspected reliably from a static browser client. Deployment-time header checks and explicit fallback messaging are more honest.

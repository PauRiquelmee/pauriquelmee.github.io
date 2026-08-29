<!-- BEGIN:nextjs-agent-rules -->

# Next.js version guidance

This repository uses the installed Next.js version. Read relevant documentation in `node_modules/next/dist/docs/` before relying on older framework conventions, and follow current deprecation notices.

<!-- END:nextjs-agent-rules -->

# Portfolio contributor guide

## Purpose

Build and maintain Paula Riquelme's English-only professional portfolio. Preserve every factual claim in `src/content/portfolio.ts` and the product record in `PRODUCT.md`.

## Stack

- Next.js App Router with strict TypeScript
- Tailwind CSS
- Base UI from `@base-ui/react`
- Motion for React from `motion/react`
- Vitest, React Testing Library, user-event, and jest-dom
- Playwright
- Static export to GitHub Pages

## Architecture

Follow `docs/architecture.md`. Dependencies flow from `app` to `sections`, then `patterns`, then `foundations`. Components may also read `content` and `lib`. Content and library modules must not import UI components.

## Folder conventions

- Put each reusable component in its own folder under `src/components/foundations`, `patterns`, or `sections`.
- Every component folder requires the implementation TSX file, a colocated test, and `index.ts`.
- `index.ts` must default-export the component from the folder boundary.
- Consumers must import from the folder, never an internal implementation file.
- Do not add broad component barrel files.
- Keep exactly one React component in every production TSX file.
- Keep at most one component-level JSX return in every production TSX file.
- Move JSX-returning children into their own component files.
- Put non-JSX helpers in TS files.

## Base UI

Use Base UI for every relevant interactive primitive, including buttons, dialogs, drawers, menus, and tooltips. Preserve the documented `render` composition API, prop and ref forwarding, state attributes, keyboard interaction, focus management, TypeScript types, and accessibility behavior. Do not recreate behavior Base UI already provides.

## Motion

Use only Motion for meaningful animation. Import from `motion/react`, use `LazyMotion` and `m`, and keep `<MotionConfig reducedMotion="user">` at the site level. Use `AnimatePresence` only when an exit transition is needed. Do not hide meaningful content before hydration or animate every paragraph.

## TDD workflow

For every component or behavior:

1. Write the behavior test first.
2. Run it and confirm the expected failure.
3. Implement the minimum behavior.
4. Run the test and confirm it passes.
5. Refactor without changing behavior.
6. Run the relevant test suite.
7. Commit the green slice.

Test behavior, roles, names, keyboard and focus behavior, links, and user-visible state. Avoid broad snapshots.

## English-only rule

All visible copy, alt text, labels, metadata, code, identifiers, comments, tests, documentation, workflow text, branch names, commit messages, pull requests, issues, and release notes must be English. Proper official names retain their original spelling. Do not create localized routes, language selectors, `hreflang`, Spanish metadata, or a Spanish resume. Do not use the em dash character.

## Accessibility

Maintain WCAG AA contrast, semantic landmarks and headings, visible focus states, complete keyboard navigation, appropriate touch targets, descriptive labels, honest iframe fallbacks, reduced-motion behavior, and focus restoration for overlays.

## SEO

Keep metadata, canonical URL, Open Graph, Twitter card, robots, sitemap, manifest, and Person JSON-LD in English and consistent with visible content. The production origin and repository base path must remain correct.

## Static export and GitHub Pages

- Preserve `output: "export"`, `trailingSlash: true`, and compatible image handling.
- Do not add server actions, runtime APIs, middleware, cookies, headers, rewrites, or database access.
- Use the tested base-path helper for static assets.
- Build to `out` and preserve `.nojekyll`.
- The deployment workflow must use official GitHub Pages actions, minimum permissions, the `github-pages` environment, and concurrency protection.

## Git workflow

- Use only `main`, `feature/*`, and `hotfix/*` branches.
- Keep `main` deployable and never develop features directly on it.
- Merge through pull requests, prefer rebase-and-merge, delete merged branches, and avoid force-pushing shared branches.
- Write granular English commit messages beginning with a real Gitmoji emoji and an imperative description.
- Keep each commit focused and green for its relevant tests.

## Commands before committing

Run the focused test for the slice, then:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run validate:architecture
npm run validate:agent-docs
```

## Commands before opening a pull request

```bash
npm run validate:architecture
npm run validate:agent-docs
npm run format:check
npm run test
npm run coverage
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

## Pull requests

Use an English Gitmoji title. Include summary, architecture, components, Base UI primitives, Motion interactions, tests, coverage, accessibility checks, SEO checks, Lighthouse results, desktop and mobile screenshots, deployment considerations, known limitations, and a checklist. Do not merge until required checks pass.

## Definition of done

- Canonical English content is complete and accurate.
- Every reusable component satisfies the folder, test, and export contract.
- Architecture and agent-document validators pass.
- Unit, coverage, Playwright, lint, typecheck, and static build pass.
- Keyboard, focus, responsive, reduced-motion, metadata, assets, resume, and iframe fallbacks are verified.
- Lighthouse meets the documented targets.
- The pull request is merged and the public GitHub Pages URL responds correctly.

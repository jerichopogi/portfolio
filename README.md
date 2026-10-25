# Portfolio

Editorial-engineer portfolio: serif display type on a warm paper surface, layered
depth, and scrollytelling case studies. Light and dark are both designed; light is
the default and the OS preference is honoured until the visitor chooses.

## Running it

```bash
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
```

> Run only one Next process at a time. Two concurrent `dev`/`build` runs write to
> `.next` simultaneously and leave duplicate `chunk 2.js` files behind, which makes
> the server 404 on chunks. If that happens: `rm -rf .next && npm run build`.

## Editing content

All visitor-facing copy lives in `src/content/` — no text is hardcoded in components.

| File | What it holds |
|---|---|
| `src/content/site.ts` | Name, title, hero headline, email, location, availability, services, experience, stack, nav |
| `src/content/projects.ts` | Case studies — summary, metrics, and the problem/approach/outcome sections |
| `src/content/types.ts` | The shape each of the above must satisfy |

Items marked `TODO` are placeholders. Replacing a case study means editing one
object in `projects.ts`; the index row, the `/work/<slug>` page, the metadata and
the sitemap all follow from it.

### Project art

`ProjectVisual` generates an abstract composition from each project's `hue` so the
grid reads as designed before real screenshots exist. When you have real images,
swap that component for `next/image` with explicit `width`/`height`.

## Architecture

```
src/
├── app/            routes, metadata, sitemap, robots
├── components/     grouped by surface (hero, work, about, services, contact, chrome, ui)
├── content/        all copy — the only files you need to edit for a content change
├── hooks/          useInView, useTheme, useReducedMotion
├── lib/            theme constants shared by server and client
├── styles/         tokens.css, typography.css, global.css
└── proxy.ts        per-request nonce CSP
```

### Design tokens

`src/styles/tokens.css` defines colour, spacing, radii, elevation and motion as
custom properties, redeclared for dark. Colours are OKLCH and were tuned against
measured WCAG contrast, not by eye — `--ink-faint` in particular must clear 4.5:1
against `--paper-sunken`, the darkest light surface. `global.css` maps them into
Tailwind's `@theme` so `text-ink-muted` and `var(--ink-muted)` are the same value.

Two gotchas worth knowing before editing styles:

- Base element styles must stay inside `@layer base`. Unlayered CSS beats every
  Tailwind utility regardless of specificity, so an unlayered `a { color: inherit }`
  silently overrides every text colour utility on links.
- Prefer the generated utilities (`text-accent`) over `text-[var(--accent)]`.
  Tailwind cannot tell whether a bare `var()` is a colour or a length and may
  resolve it as `font-size`.

### Motion

Scroll reveals are CSS transitions toggled by an `IntersectionObserver`
(`useInView`), so the home page ships no animation library. Motion is imported only
by `CaseStudyBody` for the pinned-visual parallax, which keeps it off every other
route. Everything animates `transform`/`opacity`/`clip-path` only.

`prefers-reduced-motion` is honoured globally, and a `<noscript>` rule guarantees
revealed content is visible without JavaScript.

## Verified

Against the production build:

- **axe** (WCAG 2.0/2.1/2.2 A + AA): 0 violations on the home page in both themes
  and on a case study page, including `target-size` at 375px and 1280px.
- **Keyboard**: skip link first, logical tab order, visible focus on every control.
- **Vitals**: CLS 0, LCP/FCP well inside target locally.
- **Bundle**: ~136 kB gzipped JS on the landing page (budget: 150 kB).

Re-check with Playwright after any significant change.

## Deploying

Designed for Vercel (`vercel --prod`) or any Node host. Set the real domain in
`site.url` first — canonical URLs, Open Graph tags and the sitemap derive from it.

Note: `src/proxy.ts` issues a per-request CSP nonce, which makes pages render
dynamically rather than statically. That is the stricter security posture. If you
would rather have fully static pages, delete `proxy.ts` and accept
`script-src 'unsafe-inline'` — Next inlines its RSC payload in script tags, so
there is no third option.

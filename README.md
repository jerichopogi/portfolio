# Portfolio

A full-stack developer portfolio built to a supplied reference: near-black ground,
code-like monospace display type, rounded cards and pill controls. Dark is the
native scheme; light is an explicit opt-in that inverts the same four colours.

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
| `src/content/site.ts` | Name, role, hero headline, email, location, availability, experience, nav |
| `src/content/projects.ts` | Case studies: summary, metrics, and the problem/approach/outcome sections |
| `src/content/skills.ts` | Skill groups, the work-history table and the social links |
| `src/content/types.ts` | The shape each of the above must satisfy |

Items marked `TODO` are placeholders. Replacing a case study means editing one
object in `projects.ts`; the index row, the `/work/<slug>` page, the metadata and
the sitemap all follow from it.

### The one missing asset

`src/components/about/Skills.tsx` holds a labelled portrait slot. Drop a photo at
`public/portrait.jpg` and swap the placeholder for `next/image` with explicit
`width`/`height`. The reference leans on a black-and-white portrait, and the page
looks unfinished without one.

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

The art direction follows a supplied reference (a Behance full-stack developer
portfolio). Its stated system is four colours and two typefaces, and both are
reproduced exactly in `src/styles/tokens.css`:

| Token | Value | Role |
|---|---|---|
| `--black` | `#121212` | Ground (dark is the native scheme) |
| `--white` | `#f5f5f5` | Ink |
| `--grey` | `#a6a6a6` | Muted text |
| `--grey-dark` | `#3d3d3d` | Surfaces and lines |

**Fira Code** sets the display voice (the code-like headline, section labels and
tech lists); **Open Sans** carries the reading text, with its italic used for
emphasis inside paragraphs. There is no accent hue: white is the accent.

Dark is the default. Light is an explicit opt-in that inverts the same four
colours, and the choice is stored and applied before first paint.

Two gotchas worth knowing before editing styles:

- Base element styles must stay inside `@layer base`. Unlayered CSS beats every
  Tailwind utility regardless of specificity, so an unlayered `a { color: inherit }`
  silently overrides every text colour utility on links.
- Use the generated utilities (`text-display`, `text-ink`) rather than
  `text-[var(--text-display)]`. Tailwind cannot tell whether a bare `var()` is a
  colour or a length and may resolve it as the wrong property, which silently
  drops the rule. This bit this project three times.

### Deliberate departures from the taste skill

`design-taste-frontend` was run on an earlier iteration of this page and its
house rules are good defaults, but the chosen reference deliberately uses four
things that skill bans. These are intentional and should not be "fixed":

- **Monospace display type** (Fira Code) — it is the reference's whole voice.
- **Pill buttons and outlined cards** — the reference's component language.
- **Thin 1px rules** on cards and the work table.
- **Decorative circular arcs** in the hero and contact backgrounds.

Running `node <skill>/scripts/lint.mjs src` therefore reports 8 failures, all of
them in that list. Everything else the skill checks (layer order, contrast,
heading sizes, margins) is respected.

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
  and on a case study page.
- **Keyboard**: skip link first, logical tab order, visible focus on every control.
- **Vitals**: CLS 0, LCP/FCP well inside target locally.
- **Bundle**: ~138 kB gzipped JS on the landing page (budget: 150 kB).

Re-check with Playwright after any significant change.

## Deploying

Designed for Vercel (`vercel --prod`) or any Node host. Set the real domain in
`site.url` first — canonical URLs, Open Graph tags and the sitemap derive from it.

Note: `src/proxy.ts` issues a per-request CSP nonce, which makes pages render
dynamically rather than statically. That is the stricter security posture. If you
would rather have fully static pages, delete `proxy.ts` and accept
`script-src 'unsafe-inline'` — Next inlines its RSC payload in script tags, so
there is no third option.

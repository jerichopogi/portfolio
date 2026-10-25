# DIRECTION SHEET — The split stage
seed 1979934874 · drawn 2026-10-25 · sector personal-portfolio
Brief: Independent web developer, six years, builds production interfaces for founders and studios and is hired on measured outcomes

| | |
| --- | --- |
| Direction | The split stage |
| Hero | Inset photograph, crossing wordmark |
| Type | Young Serif / Source Serif 4 |
| Colour | Navy on white |
| Sections | work (Big names, fixed preview) → about (Founder's letter) → features (Small proof beside text) → contact (One field, nothing else) → footer (A single quiet line) |
| Motion | Scaling wordmark |
| Photographs | the "Architecture" set, as atmosphere |

This is the direction for this build. Adopt it. Do not blend it with the layout you would have made anyway,
and do not redraw because it is unfamiliar: unfamiliar is the point. Redraw a slot only when it conflicts
with a stated brand constraint or needs an asset that does not exist, and say why in your report.

The parts of this sheet were written separately and will disagree in small ways. Settle every disagreement in this order:
**house rules** (including type no smaller than 13px and body text of 16px or more) → **the direction** (the idea, the composition habits, where the
one accent goes) → **the type system and the palette** (which face does which job, the five size steps, which colour is the ground and where the
accent goes) → **the hero blueprint** → **the section blueprints**. Under each blueprint below, "Adjusted for this page" lists where it disagrees.
In practice: take geometry from blueprints (columns, proportions, what sits where) and take everything else from above them. Map every size a
blueprint names onto one of your five type steps instead of adding a sixth. Use one button shape, one corner radius and one pair of page margins on
the whole page, whatever individual blueprints say. If a blueprint names a kind of typeface (a light serif, a heavy grotesk), use the dealt face.

## 1. The idea
Half the screen never moves. One side is a fixed photograph (or object, or product view) that stays in place for the whole visit; the other side is a calm scrolling column with everything you need to read. The fixed half keeps the feeling present while the reader gets on with the facts, like sitting in the room while reading the menu. As sections pass, the fixed image may quietly change to the one that matches.

Before anything else, write one sentence in your notes: "On this page, <the subject's own material> becomes <the device>."
Fill the first blank from your inventory of what only this client has (its name and what it means, its street, its numbers, its
constraint), then put the nearest competitor in the sentence: if it still works, the idea is the category's, not the client's.
Then name the one live thing the visitor can do on the page (SKILL.md step 4).

## 2. Composition
Desktop: a two-column page, 50/50 or 45/55. One column is `position: sticky; top: 0; height: 100svh` and holds a single photograph filling it edge to edge, or the object centred on a flat field. The other column scrolls and holds all content in a single narrow measure (max 46ch) with comfortable padding (48–72px): name and one-line description first, then sections separated by generous space, then contact and footer. Headings in the scrolling column are modest (32–44px). The column grounds differ: photograph on one side, flat paper colour on the other, meeting at a clean vertical edge. On a phone the fixed half becomes a 60svh image at the top that stays sticky behind the first section, then releases.

## 3. Type — Young Serif / Source Serif 4
A heavy, round old-style headline face with soft bracketed serifs over a clear transitional text serif. Suits essays, food, independent publishers and personal sites that want warmth with weight.
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Young+Serif:wght@400&family=Source+Serif+4:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
```
- Display: **Young Serif** — weight 400 (single heavy cut) · tracking -0.02em · leading 0.95 · sentence case
- Text: **Source Serif 4** — 400 for body, 600 for emphasis, italic for quotations · leading 1.55 · tracking 0
```css
:root {
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
  --step-body: clamp(1.125rem, 1.05rem + 0.3vw, 1.3125rem);
  --step-lead: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --step-head: clamp(2rem, 1.3rem + 3.2vw, 4rem);
}
```
A text-first setting: a readable serif or a calm sans at 17–19px, with one display size for the name. Left-aligned throughout.
The direction decides sizes and how many of them; the type system decides how this face is set. Where the two give different tracking or leading, use the values of the type system: they are tuned to this face.
The display size itself comes from the hero blueprint below.

## 4. Colour — Navy on white
```css
:root {
  --bg: #ffffff;
  --surface: #f4f4f2;
  --ink: #1f2b4d;
  --muted: #6a7186;
  --accent: #f7941d;
  --accent-ink: #1f2b4d;
  --field-1: #05070a;  --field-1-ink: #ffffff;
  --field-2: #e3e1dc;  --field-2-ink: #1f2b4d;
}
```
Pure white pages with navy type sit between full-bleed photographs, opening on near-black and closing on a warm grey footer. Tangerine is one small tab or button, never larger than a thumbnail.
The paper colour of the reading column is chosen against the photograph: a tone taken from its shadows or its lightest area. One ink, optionally one accent ink for links and the action.

## 5. Imagery
**The project has no photographs of its own yet.** First choice: **real pictures of the subject's world from the open collections**: its city and street in old postcards and photographs, an old map of the neighbourhood, its materials up close, its trade in engravings, museum objects of its kind (references/imagery.md §3). Start with `node /Users/jericho/.claude/skills/design-taste-frontend/scripts/assets.mjs "web developer"`, then queries from your inventory (its street, its materials, its trade's tools and history). Download what you use into the project with `--get` and credit every one on the page (`--credits` prints the footer line). They show the world around the client, never the client's own room, dish, product, person or team. Second, for what no honest picture exists of: draw the subject's own things in code, large, in one flat graphic language and the palette's real colours (its tiles, its windows, its objects; references/imagery.md §8). Third: the dealt photographs, only where an honestly generic picture fits (the sea, the weather, a material), never one a visitor could take for the thing itself and never an unrelated scene. One treatment for all of them. If this direction is built on photographs, plan the set before building (four to six pictures of one family) and reuse them at different crops and scales instead of finding or drawing a new picture for every slot; keep drawings as `<symbol>` + `<use>` or generate them with a small script so the page stays light. List every found picture (with its source and licence), every dealt photograph and every drawing that stands in for photography in your report.

One excellent portrait-orientation photograph for the fixed half, plus three or four more that crossfade in as their sections arrive. Small inline photographs in the reading column are optional and should be few.

**Floor (the inspector checks it):** at least four real pictures on the page, usually six to twelve; SVG drawings do not count. One moving picture where an honest clip exists: `node <skill>/scripts/assets.mjs --video "<query>"`, used as a muted loop with a poster frame. Whatever this direction says about pictures, it is carried out with real ones.

Photographs dealt for this build, from the "Architecture" set (structure, lines, bridges, facades and building interiors)
Order of preference for imagery: (1) the project's own photographs and product shots; (2) images you generate, if an image tool is
available; (3) real pictures of the subject's world found in the open collections (assets.mjs, downloaded and credited on the page);
(4) drawings of the subject in code; (5) these. They are real photographs (Unsplash licence, served by picsum.photos) of places, light and
texture. They are atmosphere, never a stand-in for a specific product, dish, person or interface. List the ones you use in your report so
they can be replaced.
- `https://picsum.photos/id/942/1600/1000` — White angular concrete building against a black sky · dark tone · black, white, pale grey · black-and-white · calm area: top · native landscape · photo: Carl Nenzen Loven
- `https://picsum.photos/id/1081/1600/1000` — Stepped white modern building corner rising into a pale blue sky · light tone · white, pale blue, soft grey · calm area: top · native landscape · photo: Julien Moreau
- `https://picsum.photos/id/520/1600/1000` — Suspension bridge tower framed between red brick buildings · mid tone · brick red, sky blue, steel grey · native portrait · photo: Dorothee Hübner
- `https://picsum.photos/id/193/1600/1000` — Gothic stone college building facing a striped green lawn · mid tone · lawn green, sandstone, sky blue · calm area: bottom · native landscape · photo: Vadim Sherbakov
- `https://picsum.photos/id/951/1600/1000` — Building facade of red, yellow and white rectangular panels · light tone · red, yellow, white · native landscape · photo: Sérgio Rola
- `https://picsum.photos/id/859/1600/1000` — Red brick building with a cream door, red shutters and a parked bicycle · mid tone · brick red, cream · native square · photo: Brennan Ehrhardt
- `https://picsum.photos/id/743/1600/1000` — Narrow wedge-shaped building corner seen from below against a teal sky · mid tone · teal blue, sandstone, warm brown · calm area: left · native landscape · photo: Anthony DELANOIX
- `https://picsum.photos/id/101/1600/1000` — Concrete bunker-like building against a pale teal sky · mid tone · pale teal, concrete grey · calm area: top · native landscape · photo: Christian Bardenhorst
The last two path numbers are width and height: request the exact crop you render (`/1200/1500` for a 4:5 portrait, `/2400/1350` for a hero) and
add `?grayscale` to desaturate. Use three to six of them, not all eight. Always set `width`, `height`, `alt` and `loading="lazy"` (not on the hero image).
Other sets that fit this brief: object-still, hands-and-making, city-day, fog-and-quiet — `node draw.mjs --photos <set>` prints one in full; `--photos list` shows all sets. Taking photographs from another set is your call and is not a redraw; keep them to one light and one treatment.

## 6. Hero — Inset photograph, crossing wordmark
One deep, dark flat field. A tall portrait photograph fills the left 47% of the viewport, inset 20px from the top, left and bottom edges, with a 12px radius and object-fit: cover; it is position: sticky for the length of the page while the right side scrolls. Five text links at 15px sit top-right on a 32px margin, the last of them the single action. There is no logo at the top. In the right half, at 44% of the height and centred on that half's own axis, one supporting sentence in the light ink at 24px on up to three lines, max 26ch. Along the bottom runs the name in lowercase at clamp(120px, 12vw, 200px), light or regular weight, tracking -0.04em, on one line. It starts over the photograph's lower-right corner, overlapping the image by about 10% of the viewport width (z-index above it; mix-blend-mode: difference keeps the letters legible on the picture), and ends flush with the right margin, its baseline 40px above the bottom edge.

On a phone: The photograph takes the top 58% of the screen, inset 12px, with the same radius. The name runs under it at 21vw on one line, its ascenders overlapping the photograph's bottom edge by 3vw. The sentence follows at 17px, left-aligned on a 20px margin. Links reduce to a menu word and the action on the top row, set over the photograph.
Headline: The name in lowercase on one line, up to 9 characters at this size; a longer name drops to 9vw.

Adjusted for this page:
- It names its own corners: use the one radius of this page (square unless the direction says otherwise) and one button shape.
- It blends text with `difference`: over anything but black, white or grey that gives random hues. Use a solid ink chosen for each ground instead.

## 7. Sections, in order
Each is a composition to rebuild with this project's content. Keep the geometry; change the subject. Re-order or drop a
section when the argument of the page needs it (see references/copy.md), never to fall back to a card grid.

### 1. work — Big names, fixed preview (index)
Project names are the index. In columns 1–8, five to nine names stack one per line at clamp(44px, 5.4vw, 80px), leading 1.0, each row a link with 10px of vertical padding. All names rest in the ink at 35% opacity except the active one, which is full ink; the first is active by default, and hover or keyboard focus moves the state. To the right of each name, on its baseline at 14px: the discipline and the year. In columns 9–12 a `position: sticky; top: 15vh` frame, 4:5 and 26vw wide with square corners, shows the active project's photograph; all images are stacked in the frame and swapped by opacity over 200ms. A two-word heading at 28px sits top-left, 48px above the first name. Nothing is drawn between rows: the size of the type and the dimming do the separating.
On a phone: Names at 9.5vw, all in full ink, one per line; discipline and year sit beneath each name at 13px. There is no sticky frame: each name is preceded by its own photograph at 16:10, full width, so the list becomes image then name, repeated, with 40px between projects.

Adjusted for this page:
- It fades text: anything a visitor reads, inactive items of a list included, is `--ink` or `--muted` at full strength (contrast 4.5:1 or more). The active item is told apart by `--ink` against `--muted`, weight or the accent, not by fading the rest.

### 2. about — Founder's letter (stack)
A letter in a centred column 520px wide with at least 160px of empty ground above and below. At the column's top-left, a round portrait 44px across. 28px below it, four or five short paragraphs at 16–17px with leading 1.55, each two to four lines and separated by one blank line, written in the first person. No heading. The sign-off is the writer's name at 22px in the text face's italic, with the role at 14px in the soft ink beneath it. One phrase in the letter may carry a flat marker-colour background. Variant for a page built as an object: the letter sits on a filled paper-colour sheet 640px wide with 60px padding on a contrasting ground, square corners, its bottom edge cut into small scallops with `clip-path`, and below a row of 5px round dots a tear-off strip 72px tall that carries the email address.
On a phone: The column takes the full width with 24px margins; text at 16px, portrait 40px. In the sheet variant the sheet spans edge to edge with 24px padding and keeps its shaped bottom edge; the tear-off strip stacks the email above a full-width button.

Adjusted for this page:
- It names a kind of typeface: use the dealt faces (display Young Serif, text Source Serif 4) and their settings; capitals only where the type system sets them.

### 3. features — Small proof beside text (list)
One narrow module repeated four to six times down the page, never alternating sides. Each module is 640px wide at most and starts on the page's text margin (at about 22% of the viewport on an understated page). Left part: a flat panel 360px wide and 120 to 200px tall, one tone off the ground, radius 8px, holding one small exact demonstration: a cropped interface fragment at true size, or a tightly cropped photograph covering the panel. Right part, 20px away and top-aligned: a heading of one or two lines at 18px medium and two short paragraphs at 15px in the soft ink, in a column 250px wide. Panel heights vary with their content; text always hangs from the panel's top edge. 96–120px of empty ground between modules. The section heading is 24–28px, on the same left edge, 64px above the first module. In a column under 600px the text moves beneath its panel.
On a phone: Each module stacks: the panel at full width and natural height, then heading and paragraphs 16px below on the same left edge, at 17px and 15px. 64px between modules. Panels keep their true-size contents and crop from the right instead of scaling down.

Adjusted for this page:
- It names its own corners: use the one radius of this page (square unless the direction says otherwise) and one button shape.

### 4. contact — One field, nothing else (stack)
The whole section is one prompt and one field in a column 520px wide, on the page's text column line or centred, with 200px of empty ground above and 160px below. The prompt is two lines at one size, 24–28px in medium weight: the first line in the soft ink, the second in full ink. 28px below, a single input 520px wide and 64px tall with a 12px radius, filled with the lightest tone on the page so it is the only bright surface in view; no outline at rest and a 2px inner ring in the accent on focus. Inside the right end of the field, 8px from its edge, a round submit button 44px across with an arrow and an accessible name. 16px below the field, one line at 13px says what happens next. 72px lower, three label and value rows at 14px: email, phone, address.
On a phone: The column fills the width with 20px margins. Prompt at 22px. The field stays one row, 60px tall, with the arrow button inside its right end. The three label and value rows stack with the label above each value and 20px between them.

Adjusted for this page:
- It names its own corners: use the one radius of this page (square unless the direction says otherwise) and one button shape.

### 5. footer — A single quiet line (strip)
No footer block at all. After at least 30svh of empty page ground, one baseline 30px above the bottom edge carries three items in the page's ordinary small text size (14–16px), the same size and weight as the navigation: at the left margin, what this is in three or four words; centred, two to five links separated by 24px of space; at the right margin, the year and a privacy link. Use a three-column grid (1fr auto 1fr) so the centre group is truly centred whatever the side lengths. No logo, no background change, no line above it, no columns. Links are in the full ink; the rest in the softer ink. If the page has a narrow text column, the three items may instead sit on that column's left edge as one wrapped line. The restraint only works if the page above has already made its invitation.
On a phone: Three short lines at 14px on the left margin with 8px between them: the description, the links on one wrapped line, then year and privacy. Links stay in the full ink. Leave 20svh of empty ground above and 24px below.

## 8. Motion — Scaling wordmark
The giant name responds to the scroll: as the first screen leaves, the wordmark scales down a few percent (or grows from 0.94 to 1 as the footer arrives) on a scroll-linked timeline, so the monument feels heavy. Travel stays under 8%. Static fallback where scroll timelines are unsupported. Recipe: 'Scroll-linked progress' in references/motion.md, animating `scale`.
This is the signature move, the one loud moment. Around it the page still needs the rest of the motion layer (SKILL.md step 9): an entrance for the parts of every section, feedback on every control, and one moving picture. The inspector fails a page that barely moves. Recipes: references/motion.md.

## 10. Where the richness comes from
A full-height photograph always in view, against a quiet, well-set column of text.

## 11. How this direction goes wrong
The reading column must be genuinely well typeset, since it is half the page. Do not put cards or grids in it. Check that the fixed image crops well at short viewport heights. In blind tests the commonest complaint was monotony: several screens of the same split with only the text changing. Change what the reading half holds from section to section (a list, a large figure, a table, a full-colour panel, a drawing) and let at least one section break the split and run full width.

## 12. Real references
Studied sites that work this way. Take the principle, never the specifics: no names, copy, images or signature assets of theirs.
- **Le Petit Bleu** (One Page Love, studied score 7.8) `opl-le-petit-bleu`
  Idea: The cafe's teal-and-white stripes become the whole system: one teal ink on cream, everything boxed in thin double outlines like printed menu cards, beside a permanently visible photo of the room.
  Hero: Viewport split 50/50 with 12px gaps. Left: a cream panel with a thin pale-teal outline and rounded corners. Inside, a second outlined box is the nav bar: two-line hamburger left, teal brush-script logo about 300px wide centred, a caps order link right. Below, a two-line light serif headline at about 3.5vw, centred, in teal, then two centred stacks, each a bold caps label, a serif line and a solid teal button wrapped in a second thin outline. Right: a full-height rounded photo of a striped booth, with an outlined hours bar across its top, three slide dots bottom-left and a white address card bottom-right.
  Worth taking: Print everything in one brand ink on cream, including body text, rules and buttons, and let photographs supply the other colours.
- **Rafael Derolez** (One Page Love, studied score 7.3) `opl-rafael-derolez-2026`
  Idea: A portfolio as a phone carousel: a fixed text rail on the left narrates whichever phone-shaped screen is centred on the right.
  Hero: Dark charcoal page split by a vertical hairline at 30% width. Left rail: a 55px header row with name, slash and current section as a breadcrumb in 16px sans, plus a small cobalt ticket-shaped hire button with a perforated divider and arrow; below a hairline, four short paragraphs of 16px grey text with white links, top-aligned, leaving the lower 40% of the rail empty. Right 70%: three phone-proportioned frames with large rounded corners in a row; the centre one upright, full brightness and about 680px tall, the outer two smaller, dimmed and rotated in perspective toward the centre.
  Worth taking: Use a breadcrumb (name / current item) as the only heading and update its last word as the content changes.
- **Nick Ho** (Awwwards Site of the Day, studied score 7.5) `aww-nick-ho`
  Idea: A young racing driver's sponsor pitch built from the paddock's own objects: the car number as the hero, the helmet as the sponsor wall, the season calendar as a track the car drives down, a gallery dial that reads like a rev counter and a chequered-flag hand-off, all in black, white and greyscale photography with one signal yellow for what is live.
  Hero: A full-bleed greyscale photograph of the driver in his helmet beside the car fills the screen as a WebGL depth-map canvas, with a 288px dark scrim at the bottom. Dead centre, the car number in white condensed figures at about 216px (15vw) dominates. Three stacked stats (figure plus 14px label) at the left, a right-aligned column of short facts at the right edge; the name as the h1 bottom-left in condensed caps at only 50px (3.5vw) over a three-line 14px intro, and the next race bottom-right. No visible nav or action: only a 24px yellow square menu button top-right and a small monogram top-left.
  Worth taking: Turn the subject's own objects into navigation: a vehicle sliding down a schedule as the you-are-here marker, a carousel shaped like a gauge, flag tiles as the one soft transition. Each carries information as well as character.
Full notes on any of them: `node draw.mjs --site <id>`.

## Always
Headlines two lines or fewer at every width. No eyebrow labels, no monospace, no 01/02/03, no thin rules, no gradients, no shadows at rest,
no cream-and-terracotta, no violet. The frame: one h1 on the first screen that says what this is, equal outer margins, no
section huddled on one side with the other half empty, no blank stretch over half a screen, a heading on every section.
`inspect.mjs` measures all of it.

Saved to /Users/jericho/Documents/AI Shits/Jericho Portfolio/.taste-skill/direction.json · reprint with `node draw.mjs --show`

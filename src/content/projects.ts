import type { Project } from './types';

/* TODO: replace all three with real work. Keep the shape — the case study
 * pages read `sections` in order, and the index reads `summary` + `metrics`. */

export const projects: readonly Project[] = [
  {
    slug: 'ledgerline',
    name: 'Ledgerline',
    client: 'Fintech startup',
    year: '2026',
    role: 'Lead developer',
    discipline: 'Web app · Design system',
    summary:
      'Rebuilt an invoicing dashboard around the three actions users actually performed, cutting time-to-invoice by more than half.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    metrics: [
      { value: '-58%', label: 'Time to invoice' },
      { value: '0.8s', label: 'LCP, down from 3.4s' },
      { value: '+31%', label: 'Weekly active users' },
    ],
    hue: 250,
    sections: [
      {
        heading: 'The problem',
        body: [
          'The original dashboard surfaced every field the API could return. Support tickets clustered around a single question: where do I send this invoice.',
          'Session recordings showed users scrolling past four panels to reach the one control they came for.',
        ],
      },
      {
        heading: 'Approach',
        body: [
          'I mapped every session against the three actions that drove revenue, then rebuilt the shell around those and demoted the rest behind progressive disclosure.',
          'A typed design system replaced six variants of the same button, and server components moved the heavy tables off the client bundle.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'Time to send a first invoice fell 58%. The client retired two support macros entirely.',
          'The component library has since carried three further product surfaces with no redesign.',
        ],
      },
    ],
  },
  {
    slug: 'northward',
    name: 'Northward',
    client: 'Outdoor retail',
    year: '2025',
    role: 'Design & build',
    discipline: 'Storefront · Performance',
    summary:
      'A headless storefront replatform that held its conversion rate while halving page weight on mobile.',
    stack: ['Next.js', 'Shopify', 'TypeScript', 'Motion'],
    metrics: [
      { value: '-52%', label: 'Mobile page weight' },
      { value: '+19%', label: 'Mobile conversion' },
      { value: '98', label: 'Lighthouse performance' },
    ],
    hue: 150,
    sections: [
      {
        heading: 'The problem',
        body: [
          'A theme-based storefront had accumulated eleven third-party scripts. Mobile shoppers, two thirds of the traffic, were waiting 6s for a usable page.',
        ],
      },
      {
        heading: 'Approach',
        body: [
          'I audited every script against measured revenue contribution and removed the seven that could not justify their cost.',
          'Product imagery moved to AVIF with explicit dimensions, and the cart became an optimistic client island over a static shell.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'Page weight dropped 52%, mobile conversion rose 19%, and the team shipped seasonal campaigns without my involvement.',
        ],
      },
    ],
  },
  {
    slug: 'atlas-care',
    name: 'Atlas Care',
    client: 'NDA · Healthcare',
    year: '2025',
    role: 'Frontend lead',
    discipline: 'Platform · Accessibility',
    summary:
      'A scheduling platform for clinic staff, taken from an inaccessible prototype to a WCAG 2.2 AA audit pass.',
    stack: ['React', 'TypeScript', 'Node.js', 'Playwright'],
    metrics: [
      { value: 'AA', label: 'WCAG 2.2 conformance' },
      { value: '0', label: 'Critical axe violations' },
      { value: '-40%', label: 'Scheduling errors' },
    ],
    hue: 25,
    sections: [
      {
        heading: 'The problem',
        body: [
          'The prototype was keyboard-hostile: focus escaped modals, the calendar was unreachable without a mouse, and contrast failed across the status palette.',
        ],
      },
      {
        heading: 'Approach',
        body: [
          'Keyboard handling, focus management and ARIA moved into a headless layer so every widget inherited correct behaviour by default.',
          'The status palette was rebuilt in OKLCH to guarantee contrast in both themes, and axe checks ran on every pull request.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'The platform passed an external WCAG 2.2 AA audit with no critical findings, and staff scheduling errors fell 40% in the first quarter.',
        ],
      },
    ],
  },
];

export const findProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

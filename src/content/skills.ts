export type SkillGroup = {
  readonly title: string;
  readonly items: readonly string[];
  /** Controls the staggered card widths in the grid. */
  readonly span: 'wide' | 'narrow' | 'mid';
};

/** TODO: trim to what you actually want to be hired for. */
export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Front-end',
    span: 'wide',
    items: [
      'TypeScript', 'React', 'Next.js', 'Vue', 'Redux Toolkit',
      'Astro', 'Vitest', 'Playwright', 'GraphQL', 'React Native',
    ],
  },
  {
    title: 'Styles',
    span: 'narrow',
    items: ['Tailwind', 'SCSS', 'PostCSS', 'CSS Modules', 'Radix', 'Motion'],
  },
  {
    title: 'Back-end',
    span: 'wide',
    items: [
      'Node', 'Nest', 'Express', 'PostgreSQL', 'Prisma',
      'Redis', 'tRPC', 'REST', 'Stripe', 'Supabase',
    ],
  },
  {
    title: 'DevOps',
    span: 'mid',
    items: ['Docker', 'GitHub Actions', 'Vercel', 'Fly.io', 'Sentry', 'Nginx'],
  },
];

export type WorkRow = {
  readonly period: string;
  readonly duration: string;
  readonly company: string;
  readonly role: string;
  readonly stack: string;
};

/** TODO: replace with your real history. */
export const workRows: readonly WorkRow[] = [
  { period: '2024 —', duration: '2 years 9 months', company: 'Independent', role: 'Full-stack developer', stack: 'TypeScript & Next.js' },
  { period: '2022 — 2024', duration: '2 years', company: 'Product studio', role: 'Senior frontend developer', stack: 'React & Node' },
  { period: '2021 — 2022', duration: '1 year 2 months', company: 'Digital agency', role: 'Frontend developer', stack: 'React & Vue' },
  { period: '2020 — 2021', duration: '1 year', company: 'Agency', role: 'Web developer', stack: 'JavaScript & PHP' },
];

export const totalExperience = '6 years 2 months';

export const socials = [
  { label: 'Github', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/' },
  { label: 'Telegram', href: 'https://t.me/' },
  { label: 'Instagram', href: 'https://instagram.com/' },
] as const;

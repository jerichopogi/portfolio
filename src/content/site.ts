import type { ExperienceEntry, Metric, Service, SocialLink } from './types';

/* ---------------------------------------------------------------------------
 * EDIT ME. Every string a visitor reads lives in this folder.
 * Values marked TODO are placeholders awaiting real details.
 * ------------------------------------------------------------------------- */

export const site = {
  name: 'Jericho',
  /** TODO: confirm full name as it should appear. */
  fullName: 'Jericho',
  title: 'Web Developer',
  role: 'Full-stack web developer',
  /** The hero statement. Serif display type, italic span is the accent. */
  headline: {
    before: 'I build web products that',
    accent: 'earn their keep',
    after: '.',
  },
  lead:
    'Six years of shipping production interfaces for startups and studios — fast, accessible, and measured against the numbers that matter to the business.',
  /** TODO: confirm location and timezone. */
  location: 'Philippines',
  timezone: 'GMT+8',
  /** TODO: real address. Rendered obfuscated to deter naive scrapers. */
  email: 'hello@example.com',
  /** TODO: real domain — drives canonical URLs, sitemap and OG tags. */
  url: 'https://example.com',
  availability: {
    isOpen: true,
    label: 'Available for new work',
    detail: 'Taking on one project at a time — currently booking from Q1 2027.',
  },
  yearsExperience: 6,
} as const;

export const socialLinks: readonly SocialLink[] = [
  // TODO: replace with real profiles, drop the ones that do not apply.
  { label: 'GitHub', href: 'https://github.com/', featured: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/', featured: true },
  { label: 'X', href: 'https://x.com/' },
];

export const heroStats: readonly Metric[] = [
  // Deliberately avoids repeating the years already shown in the meta column.
  { value: '40+', label: 'Projects delivered' },
  { value: '12', label: 'Industries' },
  { value: '98', label: 'Median Lighthouse' },
];

/** TODO: replace with real history. */
export const experience: readonly ExperienceEntry[] = [
  {
    period: '2024 — Now',
    role: 'Independent web developer',
    org: 'Freelance',
    note: 'Design-led builds for founders who need the first version to be the right version.',
  },
  {
    period: '2022 — 2024',
    role: 'Senior frontend developer',
    org: 'Product studio',
    note: 'Led the frontend on client platforms; set the component and performance standards the team still uses.',
  },
  {
    period: '2020 — 2022',
    role: 'Web developer',
    org: 'Digital agency',
    note: 'Shipped marketing sites and dashboards across retail, fintech and healthcare.',
  },
];

export const services: readonly Service[] = [
  {
    index: '01',
    title: 'Marketing sites that convert',
    body:
      'Positioning, layout and copy structure built around one action. Fast on a mid-range phone, not just on your laptop.',
    deliverables: ['Design direction', 'Build & CMS', 'Analytics wiring', 'Core Web Vitals pass'],
  },
  {
    index: '02',
    title: 'Web applications',
    body:
      'Dashboards, portals and internal tools. Typed end to end, tested where it counts, documented so the next developer is not stuck.',
    deliverables: ['Architecture', 'Auth & roles', 'API integration', 'Handover docs'],
  },
  {
    index: '03',
    title: 'Performance & accessibility audits',
    body:
      'A written report with prioritised fixes and measured before/after, not a Lighthouse screenshot and a shrug.',
    deliverables: ['Audit report', 'Prioritised fixes', 'Implementation', 'Verification'],
  },
];

export const stack: readonly string[] = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Motion',
  'Playwright',
  'Figma',
  'Vercel',
];

export const navigation = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
] as const;

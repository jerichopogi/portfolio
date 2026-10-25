import type { ExperienceEntry, SocialLink } from './types';

/* ---------------------------------------------------------------------------
 * EDIT ME. Every string a visitor reads lives in this folder.
 * Values marked TODO are placeholders awaiting real details.
 * ------------------------------------------------------------------------- */

export const site = {
  /** TODO: confirm how your name should appear. */
  firstName: 'Jericho',
  lastName: 'Santos',
  fullName: 'Jericho Santos',
  role: 'Full-stack developer',
  /** The headline is set on two lines, the second pushed right. */
  headline: {
    lineOne: 'Full-stack',
    lineTwo: 'Developer',
  },
  intro: 'Hello! I am Jericho, a full-stack developer. More than six years of experience.',
  /** TODO: real address. */
  email: 'hello@example.com',
  /** TODO: real domain. Drives canonical URLs, sitemap and OG tags. */
  url: 'https://example.com',
  /** TODO: confirm location and timezone. */
  location: 'Philippines',
  timezone: 'GMT+8',
  availability: {
    isOpen: true,
    label: 'Open to new projects',
    detail: 'One project at a time. Booking from Q1 2027.',
  },
  yearsExperience: 6,
} as const;

export const socialLinks: readonly SocialLink[] = [
  { label: 'Github', href: 'https://github.com/', featured: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/', featured: true },
  { label: 'Telegram', href: 'https://t.me/' },
  { label: 'Instagram', href: 'https://instagram.com/' },
];

/** TODO: replace with real history. */
export const experience: readonly ExperienceEntry[] = [
  {
    period: '2024 to now',
    role: 'Independent full-stack developer',
    org: 'Freelance',
    note: 'Design-led builds for founders who need the first version to be the right version.',
  },
  {
    period: '2022 to 2024',
    role: 'Senior frontend developer',
    org: 'Product studio',
    note: 'Led the frontend on client platforms and set the component and performance standards.',
  },
  {
    period: '2020 to 2022',
    role: 'Web developer',
    org: 'Digital agency',
    note: 'Shipped marketing sites and dashboards across retail, fintech and healthcare.',
  },
];

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacts', href: '#contact' },
] as const;

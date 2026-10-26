import type { ExperienceEntry, SocialLink } from './types';

export const site = {
  firstName: 'Jericho',
  lastName: '',
  fullName: 'Jericho',
  role: 'Web Development Lead & AI Professional',
  headline: { lineOne: 'Thoughtful code.', lineTwo: 'Useful experiences.' },
  intro: 'Web developer with 6 years of experience in WordPress websites, custom plugins, web applications, and development leadership. Based in the Philippines, helping businesses plan and build useful digital tools.',
  email: 'jerichogane30@gmail.com',
  url: 'https://example.com',
  location: 'Philippines',
  timezone: 'GMT+8',
  availability: { isOpen: true, label: 'Let’s build something good', detail: 'Open to conversations about web development.' },
  yearsExperience: 6,
} as const;

// Add verified personal profile URLs here.
export const socialLinks: readonly SocialLink[] = [{ label: 'GitHub', href: 'https://github.com/jerichopogi', featured: true }];
export const experience: readonly ExperienceEntry[] = [
  { period: 'Present', role: 'Web Dev Lead / Manager', org: 'A3Brands LLC', note: 'Leading web development work and managing the team, bringing a development perspective to planning and delivery.' },
  { period: 'Present', role: 'Web App & AI Professional', org: 'Professional practice', note: 'A current professional focus on web applications and AI, alongside a background in WordPress and development leadership.' },
  { period: '2022 — Present', role: 'Digital Supervisor / Website & Server Administrator', org: 'Global 1 Media', note: 'Digital supervision alongside website and server administration, connecting development work with the day-to-day operation of web properties.' },
  { period: '2023 — 2025', role: 'Lead Web Developer', org: 'Refuge Marketing & Consulting', note: 'A lead development role in a marketing and consulting setting, connecting technical implementation with client-facing website work.' },
  { period: '2021 — 2025', role: 'WordPress / Plugin Developer', org: 'Freelance', note: 'Independent WordPress and plugin development, focused on extending website functionality to suit individual project requirements.' },
  { period: '2019 — 2021', role: 'Jr Web Developer', org: 'GoCrayons', note: 'An early web development role that established the foundation for later freelance work and technical leadership.' },
];
export const navigation = [
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
] as const;

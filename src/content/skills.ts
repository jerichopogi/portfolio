export type SkillGroup = { readonly title: string; readonly items: readonly string[]; readonly span: 'wide' | 'narrow' | 'mid' };
export const skillGroups: readonly SkillGroup[] = [
  { title: 'Frontend development', span: 'wide', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML & CSS', 'Responsive interfaces'] },
  { title: 'WordPress & custom development', span: 'wide', items: ['WordPress', 'Custom plugins', 'PHP', 'Theme development', 'API integrations'] },
  { title: 'Backend & integrations', span: 'wide', items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Authentication', 'Third-party integrations'] },
  { title: 'Quality & delivery', span: 'wide', items: ['Git', 'Code review', 'Accessibility', 'Performance', 'Testing', 'Deployment'] },
];
export type WorkRow = { readonly period: string; readonly duration: string; readonly company: string; readonly role: string; readonly stack: string };
export const workRows: readonly WorkRow[] = [];
export const totalExperience = '6 years';
export const socials: readonly { label: string; href: string }[] = [];

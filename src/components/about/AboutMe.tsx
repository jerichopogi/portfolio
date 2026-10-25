import { site } from '@/content/site';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Skills } from './Skills';

export const AboutMe = () => (
  <section id="about" aria-labelledby="about-heading" className="relative scroll-mt-20 px-[var(--gutter)] pt-[var(--section-gap)]">
    <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <SectionLabel id="about-heading">About me</SectionLabel>
      <p className="lede max-w-[46ch]">
        Hello! I am {site.firstName}, a <em>full-stack developer</em>. More than{' '}
        <em>{site.yearsExperience} years</em> of experience building web products that have to work
        on the first day and still work in the second year.
      </p>
    </div>

    <div id="skills" className="scroll-mt-20">
      <Skills />
    </div>
  </section>
);

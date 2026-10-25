import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProjectCarousel } from './ProjectCarousel';
import { WorkTable } from './WorkTable';

export const WorkSection = () => (
  <section id="work" aria-labelledby="work-heading" className="relative scroll-mt-20 px-[var(--gutter)] pt-20 sm:pt-24">
    <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <SectionLabel>Projects</SectionLabel>
      <h2 id="work-heading" className="lede max-w-[46ch]">
        Three rebuilds, each with the problem it started from and the number it moved.
      </h2>
    </div>

    <div className="mt-12">
      <ProjectCarousel />
    </div>

    <div className="mt-[var(--section-gap)]">
      <h2 className="display text-right text-[clamp(2.5rem,7vw,5.5rem)]">Work</h2>
      <WorkTable />
    </div>
  </section>
);

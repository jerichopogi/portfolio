import { projects } from '@/content/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectRow } from './ProjectRow';

export const WorkSection = () => (
  <section id="work" aria-labelledby="work-heading" className="scroll-mt-24">
    <div className="shell pt-[var(--space-section)]">
      <SectionHeading index="02" label="Selected work" id="work-heading">
        <p className="prose-body max-w-[42ch]">
          Three projects, each with the problem, the decisions and the measured result. The rest is
          available on request.
        </p>
      </SectionHeading>

      <Reveal>
        <ul className="mt-[var(--space-lg)] border-t border-rule">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

import { experience, site } from '@/content/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export const AboutSection = () => (
  <section id="about" aria-labelledby="about-heading" className="scroll-mt-24">
    <div className="shell pt-[var(--space-section)]">
      <SectionHeading index="03" label="About" id="about-heading" />

      <div className="mt-[var(--space-lg)] grid gap-[var(--space-xl)] lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="display-lg text-ink">
              I care less about the framework and more about whether the thing{' '}
              <span className="display-accent">works for the person using it</span>.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-[var(--space-md)] grid gap-[var(--space-sm)]">
              <p className="prose-body">
                {site.yearsExperience} years in, most of my work is repair: interfaces that grew
                faster than their structure. I am good at finding the two decisions that made
                everything else difficult, and at making the case for changing them.
              </p>
              <p className="prose-body">
                I build <strong>typed, tested and accessible</strong> by default, measure against
                Core Web Vitals rather than vibes, and write the handover documentation before it is
                asked for. If a project does not need a framework, I will say so.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Experience ladder — mono periods against the rule. */}
        <div className="lg:col-span-5">
          <ol className="border-t border-rule">
            {experience.map((entry, index) => (
              <Reveal as="li" key={entry.period} delay={index * 0.08}>
                <div className="group border-b border-rule py-[var(--space-sm)] transition-colors duration-[var(--duration-normal)]">
                  <p className="font-meta text-accent">{entry.period}</p>
                  <p className="mt-[var(--space-2xs)] text-base text-ink">
                    {entry.role}
                    <span className="text-ink-faint"> — {entry.org}</span>
                  </p>
                  <p className="mt-[var(--space-2xs)] text-sm text-ink-muted">
                    {entry.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

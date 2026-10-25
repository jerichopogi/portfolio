import { services } from '@/content/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export const ServicesSection = () => (
  <section id="services" aria-labelledby="services-heading" className="scroll-mt-24">
    <div className="shell pt-[var(--space-section)]">
      <SectionHeading index="04" label="What I do" id="services-heading" />

      {/* Uneven widths on purpose: the first offer carries the most weight. */}
      <div className="mt-[var(--space-lg)] grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule bg-rule md:grid-cols-3">
        {services.map((service, index) => (
          <Reveal
            as="article"
            key={service.index}
            delay={index * 0.08}
            className="flex flex-col justify-between gap-[var(--space-md)] bg-paper-raised p-[var(--space-md)] transition-colors duration-[var(--duration-normal)] hover:bg-paper"
          >
            <div>
              <p className="font-meta text-accent">{service.index}</p>
              <h3 className="display-sm mt-[var(--space-sm)] text-ink">{service.title}</h3>
              <p className="mt-[var(--space-xs)] text-sm leading-relaxed text-ink-muted">
                {service.body}
              </p>
            </div>

            <ul className="grid gap-[var(--space-2xs)] border-t border-rule pt-[var(--space-sm)]">
              {service.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="font-meta flex items-center gap-[var(--space-xs)] text-ink-faint"
                >
                  <span aria-hidden="true" className="h-px w-3 bg-accent" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

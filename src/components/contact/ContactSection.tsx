import { site, socialLinks } from '@/content/site';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { StatusDot } from '@/components/ui/StatusDot';

/**
 * Inverted surface so the closing ask carries the most contrast on the page.
 * A mailto rather than a form: fewer steps, no spam endpoint to defend.
 */
export const ContactSection = () => (
  <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24">
    <div className="shell pt-[var(--space-section)]">
      <SectionHeading index="05" label="Contact" id="contact-heading" />

      <Reveal>
        <div className="mt-[var(--space-lg)] overflow-hidden rounded-[var(--radius-lg)] bg-paper-inverse p-[var(--space-lg)] text-ink-inverse">
          <p className="font-meta flex items-center gap-[var(--space-xs)] opacity-70">
            <StatusDot isLive={site.availability.isOpen} />
            {site.availability.label}
          </p>

          <p className="display-lg mt-[var(--space-md)] max-w-[22ch]">
            Tell me what you are building and what it has to achieve.
          </p>

          <p className="mt-[var(--space-sm)] max-w-[48ch] text-sm leading-relaxed opacity-70">
            A paragraph is enough to start. I reply within one working day with either a clear plan
            or an honest referral if it is not my strength.
          </p>

          <div className="mt-[var(--space-lg)] flex flex-wrap items-center gap-[var(--space-md)]">
            <a
              href={`mailto:${site.email}`}
              className="group font-display text-[clamp(1.5rem,1rem+2.4vw,3rem)] leading-none underline decoration-1 underline-offset-[0.18em] transition-colors duration-[var(--duration-normal)] hover:text-accent"
            >
              {site.email}
            </a>
          </div>

          <ul className="mt-[var(--space-lg)] flex flex-wrap gap-[var(--space-md)] border-t border-[color-mix(in_oklab,var(--ink-inverse)_18%,transparent)] pt-[var(--space-sm)]">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="font-meta opacity-60 transition-opacity duration-[var(--duration-fast)] hover:opacity-100"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

import { site, socialLinks } from '@/content/site';
import { Arc } from '@/components/ui/Arc';
import { PillLink } from '@/components/ui/PillLink';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const ContactSection = () => (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    className="relative isolate scroll-mt-20 overflow-clip px-[var(--gutter)] pt-[var(--section-gap)]"
  >
    <Arc className="-bottom-[70%] -left-[22%] hidden lg:block" size={720} />

    <div className="relative grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <SectionLabel>Contacts</SectionLabel>

      <div>
        <h2 id="contact-heading" className="display text-[clamp(2rem,5vw,4rem)]">
          Let us build it
        </h2>

        <p className="lede mt-6 max-w-[44ch] text-muted">
          Tell me what you are building and what it has to achieve. I reply within{' '}
          <em className="text-ink">one working day</em>, with a plan or an honest referral.
        </p>

        <div className="mt-10">
          <PillLink href={`mailto:${site.email}`} external>
            {site.email}
          </PillLink>
        </div>

        <dl className="mt-14 grid gap-5 sm:grid-cols-3">
          <div>
            <dt className="mono-label">Based</dt>
            <dd className="mt-1">
              {site.location}, {site.timezone}
            </dd>
          </div>
          <div>
            <dt className="mono-label">Availability</dt>
            <dd className="mt-1">{site.availability.detail}</dd>
          </div>
          <div>
            <dt className="mono-label">Elsewhere</dt>
            <dd className="mt-1 flex flex-wrap gap-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="underline decoration-1 underline-offset-4 transition-colors duration-[var(--duration-fast)] hover:text-muted"
                >
                  {link.label}
                </a>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
);

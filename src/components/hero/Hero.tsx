import { heroStats, site, stack } from '@/content/site';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { MaskedLines } from '@/components/ui/MaskedLines';
import { StackMarquee } from '@/components/ui/StackMarquee';
import { HeroGlow } from './HeroGlow';
import { HeroMeta } from './HeroMeta';

export const Hero = () => (
  <section
    aria-labelledby="hero-heading"
    className="relative flex min-h-[100svh] flex-col justify-end pt-[calc(var(--space-xl)*1.6)]"
  >
    <HeroGlow />

    <div className="shell w-full">
      <div className="grid items-end gap-[var(--space-lg)] lg:grid-cols-12">
        {/* Display statement — 8 of 12 columns, deliberately off-centre. */}
        <div className="lg:col-span-8">
          <p className="font-meta mb-[var(--space-md)] flex items-center gap-[var(--space-xs)] text-ink-faint">
            <span className="text-accent">01</span>
            <span className="h-px w-8 bg-rule-strong" />
            {site.role}
          </p>

          <h1 id="hero-heading" className="display-xl text-ink">
            <MaskedLines
              lines={[
                site.headline.before,
                <span key="headline-accent">
                  <span className="display-accent">{site.headline.accent}</span>
                  {site.headline.after}
                </span>,
              ]}
            />
          </h1>
        </div>

        {/* Meta column — the scannable facts. */}
        <div className="lg:col-span-4 lg:border-l lg:border-rule lg:pl-[var(--space-md)]">
          <HeroMeta />
        </div>
      </div>

      <div className="mt-[var(--space-xl)] grid gap-[var(--space-lg)] border-t border-rule pt-[var(--space-md)] lg:grid-cols-12">
        <p className="lead lg:col-span-6">{site.lead}</p>

        <div className="flex flex-wrap items-start gap-[var(--space-sm)] lg:col-span-3">
          <ArrowLink href="/#work">See selected work</ArrowLink>
          <ArrowLink href="/#contact" tone="quiet">
            Start a project
          </ArrowLink>
        </div>

        <ul className="flex gap-[var(--space-md)] lg:col-span-3 lg:justify-end">
          {heroStats.map((stat) => (
            <li key={stat.label}>
              <p className="tabular text-h3 leading-none text-ink">
                {stat.value}
              </p>
              <p className="font-meta mt-[var(--space-2xs)] max-w-[7rem] text-ink-faint">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-[var(--space-lg)] border-y border-rule bg-paper-sunken">
      <StackMarquee items={stack} />
    </div>
  </section>
);

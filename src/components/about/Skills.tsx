import { skillGroups } from '@/content/skills';
import { site } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';

const SPAN_CLASS: Record<string, string> = {
  wide: 'lg:w-full',
  mid: 'lg:w-[72%] lg:ml-auto',
  narrow: 'lg:w-[56%]',
};

/**
 * Rounded cards at staggered widths, each holding a title and a slash-
 * separated list set in the mono face. The portrait sits beside them.
 */
export const Skills = () => (
  <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16">
    <div className="grid gap-5">
      {skillGroups.map((group, index) => (
        <Reveal key={group.title} delay={index * 0.06}>
          <div
            className={`rounded-[var(--radius-card)] border border-line px-6 py-5 transition-colors duration-[var(--duration-normal)] hover:border-ink ${SPAN_CLASS[group.span] ?? ''}`}
          >
            <h3 className="text-body">{group.title}</h3>
            <p className="mono-list mt-2">
              {group.items.map((item, itemIndex) => (
                <span key={item}>
                  {item}
                  {itemIndex < group.items.length - 1 ? <span aria-hidden="true"> / </span> : null}
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      ))}

      <p className="body max-w-[38ch] text-muted">
        Some of my <em className="text-ink">favourite technologies, topics and tools</em> that I have
        worked with.
      </p>
    </div>

    {/* TODO: drop a portrait at public/portrait.jpg and swap this for <Image>. */}
    <Reveal delay={0.1} className="lg:sticky lg:top-16">
      <figure className="m-0 mx-auto max-w-[26rem] lg:mx-0">
        <div className="relative aspect-[3/4] overflow-clip rounded-[var(--radius-card)] border border-line bg-surface">
          <div className="absolute inset-0 grid place-items-center px-6 text-center">
            <p className="mono-label">
              portrait.jpg
              <span className="mt-2 block">add a photo of yourself here</span>
            </p>
          </div>
        </div>
        <figcaption className="mono-label mt-3">
          {site.fullName}, {site.location}
        </figcaption>
      </figure>
    </Reveal>
  </div>
);

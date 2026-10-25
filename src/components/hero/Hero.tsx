import { site } from '@/content/site';
import { Arc } from '@/components/ui/Arc';
import { PillLink } from '@/components/ui/PillLink';
import { SocialChips } from './SocialChips';

/**
 * The headline sits on two lines, the second pushed right, with the
 * supporting paragraph tucked under the first line and the primary action
 * level with it.
 */
export const Hero = () => (
  <section id="top" aria-labelledby="hero-heading" className="relative isolate px-[var(--gutter)] pt-14 sm:pt-20">
    <Arc className="-right-[26%] -top-[58%] hidden lg:block" size={820} />

    <div className="relative">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <h1 id="hero-heading" className="display text-display">
          {site.headline.lineOne}
        </h1>

        <div className="shrink-0 lg:pt-6">
          <PillLink href="#work">Projects</PillLink>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <p className="lede max-w-[34ch] text-muted lg:pt-2">
          My goal is to <em className="text-ink">write maintainable, clean and understandable code</em>, so that
          working on what comes next is still enjoyable.
        </p>

        <h2 aria-hidden="true" className="display text-display lg:-mt-4">
          {site.headline.lineTwo}
        </h2>
      </div>
    </div>

    <div className="relative mt-12 sm:mt-14">
      <SocialChips />
    </div>
  </section>
);

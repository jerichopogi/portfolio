import { site } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';

/** Founder's letter: a narrow centred column, written in the first person. */
export const Letter = () => (
  <section id="about" aria-labelledby="about-heading" className="scroll-mt-16 bg-[var(--surface)]">
    <div className="shell py-[var(--section-gap)]">
      <div className="mx-auto max-w-[38rem]">
        <Reveal>
          <h2 id="about-heading" className="display text-statement text-ink">
            A note from me
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6">
          <Reveal delay={0.0}>
            <p className="body text-ink">
            Most of what I do is repair. A product grows faster than its structure, and one day
            nobody can add a feature without breaking two others. That is usually when I am called.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="body text-ink">
            I am good at finding the two decisions that made everything after them difficult, and at
            making the case for changing them. Sometimes that case is &ldquo;this does not need a
            rewrite&rdquo;, and I will say so even though a rewrite pays better.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body text-ink">
            I work on one project at a time. You will talk to the person writing the code, every
            week, and you will get the handover documentation before you ask for it.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="body text-ink">
            I measure what I ship. If a change was supposed to move a number, I will show you the
            number before and after, including the times it did not move.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-10 text-[1.375rem] italic text-ink">{site.fullName}</p>
        </Reveal>
        <p className="small mt-1 text-muted">
          {site.role} · {site.location}
        </p>
      </div>
    </div>
  </section>
);

'use client';

import Link from 'next/link';
import { useState } from 'react';

import { projects } from '@/content/projects';

const wrap = (index: number, length: number) => ((index % length) + length) % length;

/**
 * Three cards with the centre one active and its neighbours dimmed and cut
 * off at the edges, moved by the two round arrow buttons.
 */
export const ProjectCarousel = () => {
  const [active, setActive] = useState(0);
  const total = projects.length;

  const step = (delta: number) => setActive((current) => wrap(current + delta, total));

  return (
    <div className="relative">
      <div className="flex items-stretch gap-4 sm:gap-6">
        {[-1, 0, 1].map((offset) => {
          const project = projects[wrap(active + offset, total)];
          if (!project) return null;
          const isCentre = offset === 0;

          return (
            <article
              key={`${offset}-${project.slug}`}
              aria-hidden={!isCentre}
              className={`min-w-0 flex-1 overflow-clip rounded-[var(--radius-card)] border border-line transition-[opacity,background-color] duration-[var(--duration-slow)] ease-[var(--ease)] ${
                isCentre ? 'bg-surface-raised' : 'hidden opacity-75 lg:block'
              }`}
            >
              <div className="flex h-full flex-col gap-5 p-6 sm:p-8">
                <p className="mono-label">{project.discipline}</p>

                <h3 className="display text-h3 leading-snug">{project.name}</h3>

                <p className="body max-w-[44ch] text-muted">{project.summary}</p>

                <dl className="mt-auto flex flex-wrap gap-x-8 gap-y-3 pt-2">
                  {project.metrics.slice(0, 2).map((metric) => (
                    <div key={metric.label}>
                      <dt className="mono-label">{metric.label}</dt>
                      <dd className="display mt-1 text-[1.5rem]">{metric.value}</dd>
                    </div>
                  ))}
                </dl>

                {isCentre ? (
                  <Link
                    href={`/work/${project.slug}`}
                    className="mt-2 inline-flex w-fit items-center rounded-[var(--radius-pill)] bg-fill px-6 py-2.5 text-small text-ink-invert transition-opacity duration-[var(--duration-normal)] hover:opacity-90"
                  >
                    Read more
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 lg:mt-0">
        {[
          { delta: -1, label: 'Previous project', path: 'M13 8H4M7.5 4l-4 4 4 4' },
          { delta: 1, label: 'Next project', path: 'M3 8h9M8.5 4l4 4-4 4' },
        ].map((control) => (
          <button
            key={control.label}
            type="button"
            onClick={() => step(control.delta)}
            className="grid h-12 w-12 place-items-center rounded-[var(--radius-pill)] border border-line bg-bg text-ink transition-[background-color,color,transform] duration-[var(--duration-normal)] ease-[var(--ease)] hover:bg-fill hover:text-ink-invert active:scale-95 lg:absolute lg:top-1/2 lg:-translate-y-1/2"
            style={control.delta === -1 ? { left: '-1.25rem' } : { right: '-1.25rem' }}
          >
            <span className="sr-only">{control.label}</span>
            <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
              <path d={control.path} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};

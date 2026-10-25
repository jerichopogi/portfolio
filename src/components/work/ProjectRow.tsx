'use client';

import Link from 'next/link';
import { useState } from 'react';

import type { Project } from '@/content/types';
import { ProjectVisual } from '@/components/ui/ProjectVisual';

type ProjectRowProps = {
  readonly project: Project;
  readonly index: number;
};

/**
 * A full-width editorial row. Hover lifts the title, slides the visual in
 * from the right and tints the hairline — one coordinated gesture.
 */
export const ProjectRow = ({ project, index }: ProjectRowProps) => {
  const [isActive, setIsActive] = useState(false);
  const label = String(index + 1).padStart(2, '0');

  return (
    <li className="border-b border-rule">
      <Link
        href={`/work/${project.slug}`}
        className="group relative grid grid-cols-12 items-center gap-[var(--space-sm)] py-[var(--space-md)] transition-colors duration-[var(--duration-normal)] ease-[var(--ease-out-expo)]"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      >
        <span className="font-meta col-span-2 text-ink-faint transition-colors duration-[var(--duration-normal)] group-hover:text-accent sm:col-span-1">
          {label}
        </span>

        <div className="col-span-10 sm:col-span-5">
          <h3 className="display-sm text-ink transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] group-hover:translate-x-1">
            {project.name}
          </h3>
          <p className="font-meta mt-[var(--space-2xs)] text-ink-faint">
            {project.client} · {project.year}
          </p>
        </div>

        <p className="col-span-12 text-sm text-ink-muted sm:col-span-4">
          {project.summary}
        </p>

        <span className="font-meta col-span-12 text-accent sm:col-span-2 sm:text-right">
          Case study →
        </span>

        {/* Hover preview — decorative, never the only route to the content. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[16%] top-1/2 hidden h-[11rem] w-[16rem] -translate-y-1/2 overflow-hidden rounded-[var(--radius-md)] transition-[opacity,transform] duration-[var(--duration-slow)] ease-[var(--ease-out-expo)] lg:block"
          style={{
            opacity: isActive ? 1 : 0,
            transform: `translateY(-50%) translateX(${isActive ? '0' : '2.5rem'}) rotate(${isActive ? '-2deg' : '0deg'})`,
            boxShadow: isActive ? 'var(--shadow-float)' : 'none',
          }}
        >
          <ProjectVisual hue={project.hue} label={project.name} index={label} />
        </span>
      </Link>
    </li>
  );
};

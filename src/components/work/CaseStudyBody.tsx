'use client';

import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';

import type { Project } from '@/content/types';
import { ProjectVisual } from '@/components/ui/ProjectVisual';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type CaseStudyBodyProps = {
  readonly project: Project;
};

/**
 * Scrollytelling pair: the narrative scrolls while the visual stays pinned
 * and drifts slowly. With reduced motion the visual simply sits still.
 */
export const CaseStudyBody = ({ project }: CaseStudyBodyProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start center', 'end center'],
  });

  const drift = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 1.08, 1.02]);

  return (
    <div ref={trackRef} className="grid gap-[var(--space-xl)] lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-[18vh]">
          <div className="aspect-4/3 overflow-hidden rounded-[var(--radius-md)] border border-rule shadow-[var(--shadow-raised)]">
            {prefersReduced ? (
              <ProjectVisual hue={project.hue} label={project.name} index="01" />
            ) : (
              <motion.div className="h-full w-full" style={{ y: drift, scale }}>
                <ProjectVisual hue={project.hue} label={project.name} index="01" />
              </motion.div>
            )}
          </div>

          <ul className="mt-[var(--space-md)] flex flex-wrap gap-[var(--space-xs)]">
            {project.stack.map((item) => (
              <li
                key={item}
                className="font-meta rounded-[var(--radius-pill)] border border-rule px-[0.6rem] py-[0.3rem] text-ink-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-[var(--space-xl)] lg:col-span-7">
        {project.sections.map((section, index) => (
          <section key={section.heading}>
            <h2 className="display-sm flex items-baseline gap-[var(--space-sm)] text-ink">
              <span className="font-meta text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              {section.heading}
            </h2>
            <div className="mt-[var(--space-sm)] grid gap-[var(--space-sm)]">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="prose-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

'use client';

import type { CSSProperties, ReactNode } from 'react';

import { useInView } from '@/hooks/useInView';

type RevealProps = {
  readonly children: ReactNode;
  /** Stagger offset in seconds. */
  readonly delay?: number;
  readonly className?: string;
  readonly as?: 'div' | 'li' | 'section' | 'article' | 'header';
};

/**
 * Scroll-triggered rise, driven by CSS transitions on compositor-friendly
 * properties. Reduced motion and no-JS are handled in global.css.
 */
export const Reveal = ({ children, delay = 0, className, as: Tag = 'div' }: RevealProps) => {
  const { ref, isInView } = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal-target${isInView ? ' is-revealed' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  );
};

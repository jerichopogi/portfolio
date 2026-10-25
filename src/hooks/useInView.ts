'use client';

import { useCallback, useEffect, useState } from 'react';

type Options = {
  /** Fraction of the element that must be visible before revealing. */
  readonly amount?: number;
  readonly rootMargin?: string;
};

/**
 * Fires once when the element enters the viewport. Replaces an animation
 * library for the simple reveal case — no bundle cost, and the observer
 * keeps the work off the scroll path.
 *
 * Returns a callback ref so it attaches to any element type.
 */
export const useInView = ({
  amount = 0.2,
  rootMargin = '0px 0px -10% 0px',
}: Options = {}) => {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  const ref = useCallback((element: HTMLElement | null) => setNode(element), []);

  useEffect(() => {
    if (!node || isInView) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsInView(true);
      },
      { threshold: amount, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, isInView, amount, rootMargin]);

  return { ref, isInView } as const;
};

'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { navigation, site } from '@/content/site';

/**
 * Below the `sm` breakpoint the inline nav is replaced by this panel.
 * Escape closes it, the page behind is scroll-locked, and focus returns
 * to the trigger on close.
 */
export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, close]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        className="grid h-9 w-9 place-items-center rounded-[var(--radius-pill)] border border-rule text-ink-muted transition-colors duration-[var(--duration-normal)] hover:border-accent hover:text-accent"
      >
        <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
        <span aria-hidden="true" className="relative block h-3 w-4">
          <span
            className="absolute left-0 block h-px w-full bg-current transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out-expo)]"
            style={{ transform: isOpen ? 'translateY(6px) rotate(45deg)' : 'none', top: 0 }}
          />
          <span
            className="absolute left-0 top-[6px] block h-px w-full bg-current transition-opacity duration-[var(--duration-fast)]"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
          <span
            className="absolute bottom-0 left-0 block h-px w-full bg-current transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out-expo)]"
            style={{ transform: isOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
          />
        </span>
      </button>

      <div
        id="mobile-nav"
        hidden={!isOpen}
        className="fixed inset-0 top-[3.75rem] z-40 bg-paper px-[var(--gutter)] pt-[var(--space-lg)]"
      >
        <nav aria-label="Main navigation">
          <ul className="grid gap-[var(--space-sm)]">
            {navigation.map((item, index) => (
              <li key={item.href} className="border-b border-rule pb-[var(--space-sm)]">
                <Link
                  href={item.href}
                  onClick={close}
                  className="display-sm flex items-baseline gap-[var(--space-sm)] text-ink"
                >
                  <span className="font-meta text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`mailto:${site.email}`}
          onClick={close}
          className="font-meta mt-[var(--space-lg)] inline-block text-ink-muted"
        >
          {site.email}
        </a>
      </div>
    </div>
  );
};

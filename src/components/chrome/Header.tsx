'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { navigation, site } from '@/content/site';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from './ThemeToggle';

const SCROLL_THRESHOLD_PX = 24;

/** The bar condenses and gains a surface once the hero scrolls away. */
export const Header = () => {
  const [isCondensed, setIsCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCondensed(window.scrollY > SCROLL_THRESHOLD_PX);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-[var(--duration-normal)] ease-[var(--ease-out-expo)]"
      style={{
        backgroundColor: isCondensed ? 'color-mix(in oklab, var(--paper) 94%, transparent)' : 'transparent',
        borderBottom: `1px solid ${isCondensed ? 'var(--rule)' : 'transparent'}`,
        backdropFilter: isCondensed ? 'blur(14px) saturate(1.4)' : 'none',
      }}
    >
      <div className="shell flex items-center justify-between py-[var(--space-sm)]">
        <Link
          href="/"
          className="group flex items-baseline gap-[var(--space-2xs)]"
        >
          <span className="text-sm font-semibold tracking-[-0.02em]">
            {site.name}
          </span>
          <span
            aria-hidden="true"
            className="font-meta text-accent transition-opacity duration-[var(--duration-fast)] group-hover:opacity-60"
          >
            ·
          </span>
          <span className="font-meta hidden text-ink-faint sm:block">{site.title}</span>
        </Link>

        <div className="flex items-center gap-[var(--space-sm)]">
          <nav aria-label="Main navigation" className="hidden sm:block">
            <ul className="flex items-center gap-[var(--space-md)]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-meta relative text-ink-muted transition-colors duration-[var(--duration-fast)] hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-[var(--duration-normal)] after:ease-[var(--ease-out-expo)] hover:after:scale-x-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

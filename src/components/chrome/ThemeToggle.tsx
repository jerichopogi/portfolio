'use client';

import { useTheme } from '@/hooks/useTheme';

/** Icon swaps on the resolved theme; both states are deliberate, not default. */
export const ThemeToggle = () => {
  const { theme, isReady, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isReady ? isDark : undefined}
      className="group grid h-9 w-9 place-items-center rounded-[var(--radius-pill)] border border-rule text-ink-muted transition-[color,border-color,transform] duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] hover:scale-105 hover:border-accent hover:text-accent"
    >
      <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
        {isDark ? (
          <path
            d="M15.5 11.3A6.2 6.2 0 0 1 8.7 4.5 6.5 6.5 0 1 0 15.5 11.3Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <circle cx="10" cy="10" r="3.6" />
            <path d="M10 2.4v1.8M10 15.8v1.8M2.4 10h1.8M15.8 10h1.8M4.6 4.6l1.3 1.3M14.1 14.1l1.3 1.3M15.4 4.6l-1.3 1.3M5.9 14.1l-1.3 1.3" />
          </g>
        )}
      </svg>
    </button>
  );
};

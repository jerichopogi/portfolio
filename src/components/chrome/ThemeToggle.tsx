'use client';

import { useTheme } from '@/hooks/useTheme';

/**
 * Sits where the reference puts its language switch. The visible word is the
 * current theme, and it is contained in the accessible name so the control
 * satisfies WCAG 2.5.3 (label in name).
 */
export const ThemeToggle = () => {
  const { theme, isReady, toggle } = useTheme();
  const isDark = theme === 'dark';
  const current = isDark ? 'Dark' : 'Light';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`${current} theme. Switch to ${isDark ? 'light' : 'dark'}.`}
      aria-pressed={isReady ? isDark : undefined}
      className="mono-label shrink-0 text-right leading-tight transition-colors duration-[var(--duration-fast)] hover:text-ink"
    >
      {/* One text node, so the visible string matches the accessible name. */}
      <span aria-hidden="true" className="text-ink">{`${current} theme`}</span>
    </button>
  );
};

'use client';

import { useCallback, useEffect, useState } from 'react';

import { THEME_STORAGE_KEY, type Theme } from '@/lib/theme';

const readStoredTheme = (): Theme | null => {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : null;
  } catch {
    // Private browsing or blocked storage — fall back to the system preference.
    return null;
  }
};

const systemTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

/**
 * Resolves the active theme and persists explicit choices. The document
 * attribute is the source of truth so CSS stays in control of the cascade.
 */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTheme(readStoredTheme() ?? systemTheme());
    setIsReady(true);
  }, []);

  const apply = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Preference simply will not persist; the session still honours it.
    }
  }, []);

  const toggle = useCallback(() => {
    apply(theme === 'dark' ? 'light' : 'dark');
  }, [apply, theme]);

  return { theme, isReady, toggle } as const;
};

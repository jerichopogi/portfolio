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

/** The design is built dark; light is an explicit choice, not the OS default. */
const DEFAULT_THEME: Theme = 'dark';

/**
 * Resolves the active theme and persists explicit choices. The document
 * attribute is the source of truth so CSS stays in control of the cascade.
 */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTheme(readStoredTheme() ?? DEFAULT_THEME);
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

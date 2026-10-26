'use client';
import { useTheme } from '@/hooks/useTheme';
export const ThemeToggle = () => {
  const { theme, toggle, isReady } = useTheme();
  return <button className="theme-switch" type="button" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} aria-pressed={isReady ? theme === 'dark' : undefined}><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="7.5"/><path d="M12 4.5a7.5 7.5 0 0 1 0 15Z" fill="currentColor"/></svg></button>;
};

import { navigation, site } from '@/content/site';
import { ThemeToggle } from './ThemeToggle';

/**
 * Name left on two lines, links centred, theme switch right. On a phone the
 * links drop to their own row rather than disappearing behind a menu.
 */
export const Header = () => (
  <header className="relative z-20 px-[var(--gutter)] pt-8">
    <div className="flex items-start justify-between gap-6">
      <a
        href="#top"
        className="shrink-0 leading-tight transition-opacity duration-[var(--duration-fast)] hover:opacity-70"
      >
        <span className="block text-body">{site.firstName}</span>
        <span className="block text-body">{site.lastName}</span>
      </a>

      <nav aria-label="Main navigation" className="hidden md:block">
        <ul className="flex items-center gap-9 pt-1">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-body text-muted transition-colors duration-[var(--duration-fast)] hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ThemeToggle />
    </div>

    <nav aria-label="Sections" className="mt-6 md:hidden">
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {navigation.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-small text-muted transition-colors duration-[var(--duration-fast)] hover:text-ink"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

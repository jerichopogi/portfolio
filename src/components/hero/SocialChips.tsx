import { socials } from '@/content/skills';

/** Small outlined pills, spaced across the width as the reference has them. */
export const SocialChips = () => (
  <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
    {socials.map((social) => (
      <li key={social.label}>
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer me"
          className="flex items-center gap-2 rounded-[var(--radius-pill)] border border-line px-4 py-2 text-small italic text-muted transition-[color,border-color] duration-[var(--duration-normal)] hover:border-ink hover:text-ink"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
          {social.label}
        </a>
      </li>
    ))}
  </ul>
);

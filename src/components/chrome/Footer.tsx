import { site } from '@/content/site';

export const Footer = () => (
  <footer className="px-[var(--gutter)] pb-10 pt-[var(--section-gap)]">
    <div className="flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-baseline sm:justify-between">
      <p className="mono-label">
        {site.role}, {site.location}
      </p>
      <p className="mono-label">
        {new Date().getFullYear()} {site.fullName}
      </p>
    </div>
  </footer>
);

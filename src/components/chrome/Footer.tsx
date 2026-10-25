import { site, socialLinks } from '@/content/site';

/** Oversized wordmark, then the practical details. */
export const Footer = () => (
  <footer className="rule-top mt-[var(--space-section)]">
    <div className="shell py-[var(--space-xl)]">
      <p
        className="font-display text-[clamp(3rem,1rem+10vw,9rem)] leading-[0.82] text-ink"
        aria-hidden="true"
      >
        {site.fullName}
      </p>

      <div className="mt-[var(--space-lg)] flex flex-col gap-[var(--space-md)] border-t border-rule pt-[var(--space-md)] sm:flex-row sm:items-start sm:justify-between">
        <dl className="grid gap-[var(--space-xs)]">
          <div className="flex gap-[var(--space-sm)]">
            <dt className="font-meta w-20 text-ink-faint">Based</dt>
            <dd className="text-sm text-ink-muted">
              {site.location} · {site.timezone}
            </dd>
          </div>
          <div className="flex gap-[var(--space-sm)]">
            <dt className="font-meta w-20 text-ink-faint">Email</dt>
            <dd className="text-sm">
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-rule-strong decoration-1 underline-offset-4 transition-colors duration-[var(--duration-fast)] hover:decoration-accent hover:text-accent"
              >
                {site.email}
              </a>
            </dd>
          </div>
        </dl>

        <nav aria-label="Social links">
          <ul className="flex flex-wrap gap-[var(--space-md)]">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="font-meta text-ink-muted transition-colors duration-[var(--duration-fast)] hover:text-accent"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="font-meta mt-[var(--space-lg)] text-ink-faint">
        © {new Date().getFullYear()} {site.fullName} — Built with Next.js
      </p>
    </div>
  </footer>
);

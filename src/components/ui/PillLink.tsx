import Link from 'next/link';

type PillLinkProps = {
  readonly href: string;
  readonly children: string;
  readonly tone?: 'solid' | 'outline';
  readonly external?: boolean;
};

const ARROW = (
  <span
    aria-hidden="true"
    className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-pill)] border border-line text-ink transition-[transform,background-color,color] duration-[var(--duration-normal)] ease-[var(--ease)] group-hover:bg-fill group-hover:text-ink-invert"
  >
    <svg viewBox="0 0 16 16" className="h-4 w-4">
      <path d="M3 8h9M8.5 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

/** A wide pill with a separate round arrow, the reference's primary action. */
export const PillLink = ({ href, children, tone = 'solid', external = false }: PillLinkProps) => {
  const pill =
    tone === 'solid'
      ? 'bg-fill text-ink-invert'
      : 'border border-line text-ink';

  const inner = (
    <>
      <span
        className={`flex h-11 items-center justify-center rounded-[var(--radius-pill)] px-7 text-center transition-opacity duration-[var(--duration-normal)] group-hover:opacity-90 ${pill}`}
      >
        {children}
      </span>
      {ARROW}
    </>
  );

  const className = 'group inline-flex items-center gap-2';

  return external ? (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link className={className} href={href}>
      {inner}
    </Link>
  );
};

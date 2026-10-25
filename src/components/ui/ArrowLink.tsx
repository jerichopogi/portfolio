import Link from 'next/link';
import type { ReactNode } from 'react';

type ArrowLinkProps = {
  readonly href: string;
  readonly children: ReactNode;
  readonly external?: boolean;
  readonly tone?: 'solid' | 'quiet';
};

const TONE_CLASS: Record<'solid' | 'quiet', string> = {
  solid:
    'bg-ink text-ink-inverse hover:bg-accent hover:text-accent-on',
  quiet:
    'border border-rule-strong text-ink hover:border-accent hover:text-accent',
};

/**
 * Primary call to action. The arrow travels on hover and the label shifts to
 * meet it, so the whole control reads as one gesture.
 */
export const ArrowLink = ({ href, children, external = false, tone = 'solid' }: ArrowLinkProps) => {
  const className = `group inline-flex items-center gap-[var(--space-xs)] rounded-[var(--radius-pill)] px-[1.35rem] py-[0.7rem] text-sm font-medium tracking-[-0.01em] transition-[background-color,color,border-color,transform] duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] hover:-translate-y-0.5 ${TONE_CLASS[tone]}`;

  const inner = (
    <>
      <span>{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5 transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] group-hover:translate-x-1"
      >
        <path
          d="M2 8h11M9 4l4 4-4 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {inner}
    </Link>
  );
};

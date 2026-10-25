import type { CSSProperties, ReactNode } from 'react';

type MaskedLinesProps = {
  readonly lines: readonly ReactNode[];
  readonly className?: string;
  /** Seconds before the first line starts. */
  readonly delay?: number;
};

const STAGGER_SECONDS = 0.09;

/**
 * Reveals display type line by line from behind a mask. Pure CSS animation,
 * so this stays a server component and ships no JavaScript.
 */
export const MaskedLines = ({ lines, className, delay = 0.1 }: MaskedLinesProps) => (
  <span className={className}>
    {lines.map((line, index) => (
      <span key={index} className="block overflow-hidden pb-[0.08em]">
        <span
          className="unmask block will-change-transform"
          style={{ '--reveal-delay': `${delay + index * STAGGER_SECONDS}s` } as CSSProperties}
        >
          {line}
        </span>
      </span>
    ))}
  </span>
);

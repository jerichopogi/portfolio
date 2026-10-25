import type { ReactNode } from 'react';

type SectionHeadingProps = {
  readonly index: string;
  readonly label: string;
  readonly id: string;
  readonly children?: ReactNode;
};

/** Editorial section marker: `01 — SELECTED WORK` over a full-bleed hairline. */
export const SectionHeading = ({ index, label, id, children }: SectionHeadingProps) => (
  <header className="rule-top pt-[var(--space-sm)]">
    <div className="flex items-baseline gap-[var(--space-sm)]">
      <span className="font-meta text-accent">{index}</span>
      <h2 id={id} className="font-meta text-ink-muted">
        {label}
      </h2>
    </div>
    {children ? <div className="mt-[var(--space-md)]">{children}</div> : null}
  </header>
);

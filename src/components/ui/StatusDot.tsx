type StatusDotProps = {
  readonly isLive?: boolean;
};

/** Pulsing availability indicator. The pulse ring is decorative only. */
export const StatusDot = ({ isLive = true }: StatusDotProps) => (
  <span className="relative inline-flex h-2 w-2 shrink-0" aria-hidden="true">
    {isLive ? (
      <span className="absolute inset-0 animate-ping rounded-full bg-signal-live opacity-60" />
    ) : null}
    <span
      className="relative inline-flex h-2 w-2 rounded-full"
      style={{ backgroundColor: isLive ? 'var(--signal-live)' : 'var(--ink-faint)' }}
    />
  </span>
);

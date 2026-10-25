type ArcProps = {
  readonly className?: string;
  readonly size?: number;
};

/** Thin circular outline used as background geometry, as the reference does. */
export const Arc = ({ className, size = 760 }: ArcProps) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute -z-10 rounded-full border border-line opacity-60 ${className ?? ''}`}
    style={{ width: size, height: size }}
  />
);

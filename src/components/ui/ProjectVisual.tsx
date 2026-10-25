type ProjectVisualProps = {
  readonly hue: number;
  readonly label: string;
  readonly index: string;
};

/**
 * Generated stand-in for project art. Draws a layered abstract composition
 * from the project's hue so the grid reads as designed before real
 * screenshots exist. Replace with <Image> once assets land.
 */
export const ProjectVisual = ({ hue, label, index }: ProjectVisualProps) => (
  <div
    className="relative h-full w-full overflow-hidden"
    style={{ backgroundColor: `oklch(94% 0.03 ${hue})` }}
    role="img"
    aria-label={`${label} — placeholder artwork`}
  >
    <div
      className="absolute -left-[12%] top-[14%] h-[72%] w-[78%] rounded-[var(--radius-lg)]"
      style={{
        background: `linear-gradient(140deg, oklch(72% 0.13 ${hue}) 0%, oklch(58% 0.16 ${hue}) 100%)`,
        boxShadow: 'var(--shadow-float)',
      }}
    />
    <div
      className="absolute right-[8%] top-[34%] h-[54%] w-[46%] rounded-[var(--radius-md)] backdrop-blur-md"
      style={{
        backgroundColor: `oklch(99% 0.01 ${hue} / 0.55)`,
        border: `1px solid oklch(99% 0.01 ${hue} / 0.7)`,
      }}
    />
    <div
      className="absolute bottom-[12%] left-[16%] h-[2px] w-[34%]"
      style={{ backgroundColor: `oklch(30% 0.08 ${hue} / 0.5)` }}
    />
    <span
      className="font-meta absolute left-[var(--space-sm)] top-[var(--space-sm)]"
      style={{ color: `oklch(28% 0.08 ${hue})` }}
    >
      {index}
    </span>
  </div>
);

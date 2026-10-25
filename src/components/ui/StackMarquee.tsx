type StackMarqueeProps = {
  readonly items: readonly string[];
};

/**
 * Continuous stack ticker. The track is duplicated for a seamless loop and
 * the copy is hidden from assistive tech; the first pass carries the content.
 */
export const StackMarquee = ({ items }: StackMarqueeProps) => (
  <div className="relative overflow-hidden py-[var(--space-sm)] [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
    <div className="flex w-max animate-[marquee_42s_linear_infinite] gap-[var(--space-md)] motion-reduce:animate-none">
      {[0, 1].map((pass) => (
        <ul
          key={pass}
          className="flex shrink-0 items-center gap-[var(--space-md)]"
          aria-hidden={pass === 1}
        >
          {items.map((item) => (
            <li
              key={item}
              className="font-meta flex items-center gap-[var(--space-md)] text-ink-faint"
            >
              {item}
              <span className="text-accent">/</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

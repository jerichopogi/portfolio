/**
 * Ambient light behind the hero. Two offset radial fields rather than one
 * centred blob, so the hero reads as lit from an angle.
 */
export const HeroGlow = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div
      className="absolute -top-[18%] left-[52%] h-[46rem] w-[46rem] rounded-full opacity-70 blur-[120px]"
      style={{ background: 'radial-gradient(circle, var(--glow) 0%, transparent 68%)' }}
    />
    <div
      className="absolute -left-[12%] top-[32%] h-[32rem] w-[32rem] rounded-full opacity-50 blur-[110px]"
      style={{
        background:
          'radial-gradient(circle, color-mix(in oklab, var(--accent) 16%, transparent) 0%, transparent 70%)',
      }}
    />
  </div>
);

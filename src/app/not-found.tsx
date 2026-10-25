import { PillLink } from '@/components/ui/PillLink';

const NotFound = () => (
  <section className="grid min-h-[70svh] content-center px-[var(--gutter)]">
    <p className="mono-label">404</p>
    <h1 className="display mt-4 text-[clamp(2rem,6vw,4.5rem)]">This page does not exist</h1>
    <p className="lede mt-5 max-w-[42ch] text-muted">
      Try the projects, or write to me and I will point you at what you were looking for.
    </p>
    <div className="mt-10">
      <PillLink href="/">Back to the start</PillLink>
    </div>
  </section>
);

export default NotFound;

import { ArrowLink } from '@/components/ui/ArrowLink';

const NotFound = () => (
  <section className="shell grid min-h-[70svh] content-center gap-[var(--space-md)]">
    <p className="font-meta text-accent">404</p>
    <h1 className="display-lg max-w-[24ch] text-ink">
      That page does not exist — or it never did.
    </h1>
    <p className="prose-body">Try the work index, or get in touch and I will point you at it.</p>
    <div className="mt-[var(--space-sm)] flex flex-wrap gap-[var(--space-sm)]">
      <ArrowLink href="/">Back home</ArrowLink>
      <ArrowLink href="/#work" tone="quiet">
        Selected work
      </ArrowLink>
    </div>
  </section>
);

export default NotFound;

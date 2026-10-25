import { site } from '@/content/site';
import { StatusDot } from '@/components/ui/StatusDot';

/** The mono meta column: the facts a client scans for first. */
export const HeroMeta = () => (
  <dl className="grid gap-[var(--space-md)]">
    <div>
      <dt className="font-meta text-ink-faint">Experience</dt>
      <dd className="tabular mt-[var(--space-2xs)] flex items-baseline gap-1 text-h3 leading-none text-ink">
        {site.yearsExperience}
        <span className="font-meta text-ink-faint">yrs</span>
      </dd>
    </div>

    <div>
      <dt className="font-meta text-ink-faint">Based</dt>
      <dd className="mt-[var(--space-2xs)] text-sm text-ink-muted">
        {site.location}
        <span className="tabular ml-2 text-ink-faint">{site.timezone}</span>
      </dd>
    </div>

    <div>
      <dt className="font-meta text-ink-faint">Status</dt>
      <dd className="mt-[var(--space-2xs)] flex items-start gap-[var(--space-xs)]">
        <span className="mt-[0.45rem]">
          <StatusDot isLive={site.availability.isOpen} />
        </span>
        <span className="text-sm text-ink-muted">
          <strong className="font-medium text-ink">{site.availability.label}</strong>
          <br />
          {site.availability.detail}
        </span>
      </dd>
    </div>
  </dl>
);

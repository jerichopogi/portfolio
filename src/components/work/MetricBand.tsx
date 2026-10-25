import type { Metric } from '@/content/types';

type MetricBandProps = {
  readonly metrics: readonly Metric[];
};

/** Results, given the scale they deserve. */
export const MetricBand = ({ metrics }: MetricBandProps) => (
  <dl className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule bg-rule sm:grid-cols-3">
    {metrics.map((metric) => (
      <div key={metric.label} className="bg-paper-raised p-[var(--space-md)]">
        <dt className="font-meta text-ink-faint">{metric.label}</dt>
        <dd className="tabular mt-[var(--space-xs)] text-h2 leading-none text-accent">
          {metric.value}
        </dd>
      </div>
    ))}
  </dl>
);

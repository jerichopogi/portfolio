import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { findProject, projects } from '@/content/projects';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { MaskedLines } from '@/components/ui/MaskedLines';
import { CaseStudyBody } from '@/components/work/CaseStudyBody';
import { MetricBand } from '@/components/work/MetricBand';

type PageProps = {
  readonly params: Promise<{ readonly slug: string }>;
};

export const generateStaticParams = () => projects.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) return { title: 'Case study not found' };

  return {
    title: `${project.name} — ${project.discipline}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.name, description: project.summary },
  };
};

const CaseStudyPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((entry) => entry.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length] ?? project;

  return (
    <article>
      <header className="shell pt-[calc(var(--space-xl)*2)]">
        <Link
          href="/#work"
          className="font-meta text-ink-faint transition-colors duration-[var(--duration-fast)] hover:text-accent"
        >
          ← All work
        </Link>

        <h1 className="display-xl mt-[var(--space-md)] text-ink">
          <MaskedLines lines={[project.name]} />
        </h1>

        <dl className="mt-[var(--space-lg)] grid gap-[var(--space-md)] border-t border-rule pt-[var(--space-md)] sm:grid-cols-4">
          {[
            { label: 'Client', value: project.client },
            { label: 'Year', value: project.year },
            { label: 'Role', value: project.role },
            { label: 'Discipline', value: project.discipline },
          ].map((item) => (
            <div key={item.label}>
              <dt className="font-meta text-ink-faint">{item.label}</dt>
              <dd className="mt-[var(--space-2xs)] text-sm text-ink">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="lead mt-[var(--space-lg)] max-w-[52ch]">{project.summary}</p>

        {project.liveUrl ? (
          <div className="mt-[var(--space-md)]">
            <ArrowLink href={project.liveUrl} external tone="quiet">
              Visit live site
            </ArrowLink>
          </div>
        ) : null}
      </header>

      <div className="shell mt-[var(--space-xl)]">
        <MetricBand metrics={project.metrics} />
      </div>

      <div className="shell mt-[var(--space-section)]">
        <CaseStudyBody project={project} />
      </div>

      {/* Next project — keeps the visitor inside the work. */}
      <aside className="shell mt-[var(--space-section)]">
        <Link
          href={`/work/${nextProject.slug}`}
          className="group block border-t border-rule pt-[var(--space-md)]"
        >
          <p className="font-meta text-ink-faint">Next case study</p>
          <p className="display-lg mt-[var(--space-xs)] text-ink transition-[color,transform] duration-[var(--duration-normal)] ease-[var(--ease-out-expo)] group-hover:translate-x-2 group-hover:text-accent">
            {nextProject.name} →
          </p>
        </Link>
      </aside>
    </article>
  );
};

export default CaseStudyPage;

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { findProject, projects } from '@/content/projects';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

type PageProps = {
  readonly params: Promise<{ readonly slug: string }>;
};

export const generateStaticParams = () => projects.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) return { title: 'Case study not found' };

  return {
    title: `${project.name} · ${project.discipline}`,
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
    <article className="px-[var(--gutter)] pt-14">
      <Link
        href="/#work"
        className="mono-label transition-colors duration-[var(--duration-fast)] hover:text-ink"
      >
        Back to projects
      </Link>

      <h1 className="display mt-8 text-[clamp(2.25rem,6vw,5rem)]">{project.name}</h1>
      <p className="lede mt-6 max-w-[48ch] text-muted">{project.summary}</p>

      <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-4">
        {[
          { label: 'Client', value: project.client },
          { label: 'Year', value: project.year },
          { label: 'Role', value: project.role },
          { label: 'Discipline', value: project.discipline },
        ].map((item) => (
          <div key={item.label}>
            <dt className="mono-label">{item.label}</dt>
            <dd className="mt-1">{item.value}</dd>
          </div>
        ))}
      </dl>

      <dl className="mt-14 grid gap-5 sm:grid-cols-3">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="rounded-[var(--radius-card)] border border-line p-6">
            <dt className="mono-label">{metric.label}</dt>
            <dd className="display mt-3 text-[clamp(1.75rem,4vw,2.75rem)]">{metric.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-[var(--section-gap)] grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <SectionLabel>Stack</SectionLabel>
          <p className="mono-list mt-4">
            {project.stack.map((item, index) => (
              <span key={item}>
                {item}
                {index < project.stack.length - 1 ? <span aria-hidden="true"> / </span> : null}
              </span>
            ))}
          </p>
        </div>

        <div className="grid gap-12">
          {project.sections.map((section, index) => (
            <Reveal as="section" key={section.heading} delay={index * 0.05}>
              <h2 className="text-h3">{section.heading}</h2>
              <div className="mt-4 grid gap-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="body max-w-[62ch] text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-[var(--section-gap)] border-t border-line pt-8">
        <Link href={`/work/${nextProject.slug}`} className="group block">
          <span className="mono-label">Next project</span>
          <span className="display mt-2 block text-[clamp(1.75rem,4.5vw,3.5rem)] transition-transform duration-[var(--duration-normal)] ease-[var(--ease)] group-hover:translate-x-2">
            {nextProject.name}
          </span>
        </Link>
      </div>
    </article>
  );
};

export default CaseStudyPage;

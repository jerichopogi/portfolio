import Link from 'next/link';
import { projects } from '@/content/projects';
import { ProjectVisual } from './ProjectVisual';
import { Reveal } from '@/components/ui/Reveal';
export const WorkSection = () => (
  <section id="work" className="work-section section-pad" aria-labelledby="work-heading">
    <div className="section-heading"><div><p className="eyebrow">02 / PROJECT CONCEPTS</p><h2 id="work-heading">Different challenges.<br/><span>The same care.</span></h2></div><p>Six illustrative concepts showing how I would approach common business needs. Each includes a scenario, proposed features, and a development plan.</p></div>
    <p className="concept-note">These are portfolio concepts, not commissioned client projects. Explore a project to see the proposed scope and approach.</p>
    <div className="project-grid">{projects.map((project,i)=><Reveal as="article" key={project.slug} className={`project-item project-item-${i}`}><Link href={`/work/${project.slug}`} className="project-image-link" aria-label={`Explore ${project.name} concept`}><ProjectVisual variant={project.slug}/><span className="project-open" aria-hidden="true">↗</span></Link><div className="project-meta"><div><p className="eyebrow">{project.discipline} <span> / CONCEPT</span></p><h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3></div><span className="project-number">0{i+1}</span></div><p className="project-description">{project.summary}</p><ul className="project-features">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul><Link className="project-detail-link" href={`/work/${project.slug}`}>Explore the approach <span aria-hidden="true">↗</span></Link><p className="project-stack">{project.stack.join(' / ')}</p></Reveal>)}</div>
  </section>
);

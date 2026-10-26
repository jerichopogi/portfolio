import { skillGroups } from '@/content/skills';
import { Reveal } from '@/components/ui/Reveal';
export const Skills = () => <><div className="skills-heading"><p className="eyebrow">THE TOOLKIT</p><p>The right tools.<br/>A solid foundation.</p></div><div className="skills-list">{skillGroups.map((group,i)=><Reveal key={group.title} className="skill-row"><span className="eyebrow">0{i+1}</span><h3>{group.title}</h3><p>{group.items.join(' · ')}</p><span className="skill-arrow" aria-hidden="true">↗</span></Reveal>)}</div></>;

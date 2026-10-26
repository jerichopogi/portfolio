import { site, socialLinks } from '@/content/site';

const projectBrief = `Hi Jericho,

I’d like to discuss a project.

Business / current website:
What we want to achieve:
Pages, features, or integrations needed:
Preferred timeline:
Budget range (if known):

Thanks!`;
const enquiryHref = `mailto:${site.email}?subject=${encodeURIComponent('Let’s discuss a web project')}&body=${encodeURIComponent(projectBrief)}`;

export const ContactSection = () => (
  <section id="contact" className="contact-section section-pad" aria-labelledby="contact-heading">
    <div className="contact-top"><p className="eyebrow">05 / LET’S DISCUSS YOUR PROJECT</p><span>PHILIPPINES · GMT+8</span></div>
    <div className="contact-main"><h2 id="contact-heading">Have a good<br /><span>challenge?</span></h2><span className="contact-asterisk" aria-hidden="true">✳</span></div>
    <div className="contact-bottom"><p>Tell me what your business needs to do next.<br />A new website, a custom feature, or a workflow that needs a better tool.</p><a className="contact-cta" href={enquiryHref}>Discuss your project <span aria-hidden="true">↗</span></a></div>
    <div className="contact-details">
      <div><h3>A useful first message</h3><p>Share your current website, the goal, and any pages or features you have in mind. A preferred timeline and budget range help shape a realistic conversation. A rough outline is enough to start.</p></div>
      <div><h3>Reach me directly</h3><a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a><div className="contact-socials">{socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}</div></div>
    </div>
  </section>
);

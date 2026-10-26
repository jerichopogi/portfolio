import { projects } from '@/content/projects';
import { site } from '@/content/site';
import { ProjectVisual } from '@/components/work/ProjectVisual';
export const Hero = () => (
  <section id="top" className="hero" aria-labelledby="hero-heading">
    <div className="hero-eyebrow"><span><span className="status-dot"/> WEB DEVELOPMENT LEAD & AI PROFESSIONAL</span><span>BASED IN THE PHILIPPINES · GMT+8</span></div>
    <h1 id="hero-heading">Thoughtful code.<br/><span>Useful experiences.</span><span className="hero-asterisk" aria-hidden="true">✳</span></h1>
    <div className="hero-bottom"><p>I’m {site.firstName}. With <strong>6 years of web development experience</strong>, I help businesses build better WordPress websites, custom plugins, web applications, and practical AI tools.</p><a className="round-link" href="#services"><span>How I can help</span><span className="circle-arrow" aria-hidden="true">↘</span></a><span className="hero-note">WordPress. Web applications.<br/>Teams. And what comes next.</span></div>
    <div className="hero-showcase"><div className="showcase-caption"><span>IN THE DETAILS, IT ALL COMES TOGETHER.</span><span>INTERFACE EXPLORATION — 01 / {String(projects.length).padStart(2, '0')}</span></div><ProjectVisual/><div className="hero-project-label"><span><b>Ledgerline</b> &nbsp; / &nbsp; A clearer view of business.</span><a href="/work/ledgerline">Explore concept <span aria-hidden="true">↗</span></a></div></div>
  </section>
);

import { services } from '@/content/services';
import { Reveal } from '@/components/ui/Reveal';

export const Services = () => (
  <section id="services" className="services-section section-pad" aria-labelledby="services-heading">
    <div className="section-heading">
      <div>
        <p className="eyebrow">01 / HOW I CAN HELP</p>
        <h2 id="services-heading">Your business has a goal.<br /><span>Let’s build toward it.</span></h2>
      </div>
      <p>From a website your team can manage to a tool built around your workflow. Start with what you need to accomplish.</p>
    </div>
    <div className="service-list">
      {services.map((service, index) => (
        <Reveal as="article" className="service-row" key={service.title}>
          <span className="eyebrow">0{index + 1}</span>
          <div className="service-description"><h3>{service.title}</h3><p>{service.description}</p><p className="service-fit"><strong>A good fit for:</strong> {service.fit}</p></div>
          <ul>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
        </Reveal>
      ))}
    </div>
    <a className="text-link" href="#contact">Tell me what you need <span aria-hidden="true">↗</span></a>
  </section>
);

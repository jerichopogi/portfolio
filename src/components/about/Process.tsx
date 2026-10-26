import { processSteps } from '@/content/services';
import { Reveal } from '@/components/ui/Reveal';

export const Process = () => (
  <section id="process" className="process-section section-pad" aria-labelledby="process-heading">
    <div className="section-heading">
      <div><p className="eyebrow">04 / WORKING TOGETHER</p><h2 id="process-heading">Clear steps.<br /><span>No guessing what’s next.</span></h2></div>
      <p>You know your business. I bring the development perspective. We agree on the work, review it together, and prepare for launch.</p>
    </div>
    <ol className="process-list">
      {processSteps.map((step, index) => (
        <Reveal as="li" className="process-step" key={step.title}>
          <span className="eyebrow">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p><p className="process-output"><strong>What you get</strong>{step.output}</p>
        </Reveal>
      ))}
    </ol>
    <p className="process-note">Scope, timing, and any ongoing support are agreed for your project. Have an existing team or designer? We can shape the collaboration around them.</p>
  </section>
);

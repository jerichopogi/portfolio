export const ProjectVisual = ({ variant = 'ledgerline' }: { readonly variant?: string }) => {
  if (variant === 'forma-studio') return (
    <div className="project-art forma-art" aria-hidden="true">
      <div className="forma-preview">
        <div className="forma-nav"><b>forma.</b><span>Studio &nbsp; Services &nbsp; Work &nbsp; Let’s talk ↗</span></div>
        <div className="forma-heading"><small>INDEPENDENT DESIGN & STRATEGY STUDIO</small><h4>Good ideas.<br /><i>Made tangible.</i></h4><p>Thoughtful spaces for ambitious businesses.</p></div>
        <div className="forma-objects"><div className="forma-block" /><div className="forma-arch" /><div className="forma-disc" /></div>
        <div className="forma-caption"><span>STRATEGY / IDENTITY / SPACES</span><span>Discover our approach ↗</span></div>
      </div>
    </div>
  );
  if (variant === 'bridge-sync') return (
    <div className="project-art bridge-art" aria-hidden="true">
      <div className="bridge-preview">
        <div className="bridge-nav"><b>◈ Bridge Sync</b><span>WordPress / Integrations</span></div>
        <div className="bridge-heading"><div><small>YOUR WEBSITE, CONNECTED</small><h4>Keep the right things in sync.</h4></div><span>● Connected</span></div>
        <div className="bridge-flow"><div><b>W</b><span>Website enquiry</span></div><span>→</span><div><b>◈</b><span>Bridge Sync</span></div><span>→</span><div><b>◎</b><span>Your CRM</span></div></div>
        <div className="bridge-log-heading"><b>Recent deliveries</b><span>Status / Last attempt</span></div>
        {[['Project enquiry', 'Delivered', 'Just now'], ['Consultation request', 'Delivered', '2 min ago'], ['Service enquiry', 'Retry queued', '5 min ago']].map(([label, status, time]) => <div className="bridge-log-row" key={label}><span>{label}</span><span>{status}</span><span>{time}</span></div>)}
      </div>
    </div>
  );
  if (variant === 'fieldnotes-ai') return (
    <div className="project-art fieldnotes-art" aria-hidden="true">
      <div className="fieldnotes-preview">
        <aside><b>fieldnotes<span> / ai</span></b><small>YOUR KNOWLEDGE, WITH CONTEXT</small><span className="fieldnotes-new">+ New question</span><p>Team handbook</p><p>Project guides</p><p>Onboarding</p><span className="fieldnotes-private">◈ Internal workspace</span></aside>
        <div className="fieldnotes-main"><div className="fieldnotes-top">Knowledge assistant <span>Approved sources only</span></div><h4>A good question.<br />A grounded answer.</h4><p className="fieldnotes-question">Where can I find our project handover checklist?</p><div className="fieldnotes-answer"><small>FROM YOUR TEAM’S KNOWLEDGE</small><p>The delivery guide includes the checklist for access, documentation, and the client walkthrough.</p><span>↗ Delivery guide · Section 4</span></div><div className="fieldnotes-input">Ask a follow-up question <span>↑</span></div></div>
      </div>
    </div>
  );
  if (variant === 'northward') return (
    <div className="project-art northward-art" aria-hidden="true">
      <div className="store-preview"><div className="store-nav"><b>NORTHWARD<span>↗</span></b><span>Equipment for out there.</span></div><div className="mountain-scene"><div className="mountain mountain-back"/><div className="mountain mountain-front"/><div className="sun"/><div className="store-headline">Take the<br/><i>long way.</i></div><span className="store-button">Explore the collection ↗</span></div><div className="store-bottom"><span>LESS NOISE. MORE OUTSIDE.</span><span>EST. FOR THE EVERYDAY EXPLORER</span></div></div>
    </div>
  );
  if (variant === 'atlas-care') return (
    <div className="project-art atlas-art" aria-hidden="true"><div className="calendar-preview"><div className="calendar-top"><b>atlas<span>care</span></b><span>Workspace / Calendar</span><span className="avatar">JS</span></div><div className="calendar-title"><div><small>MONDAY, JUNE 16</small><h4>A little clarity for your day.</h4></div><span>+ Appointment</span></div><div className="calendar-days">{['Mon 16', 'Tue 17', 'Wed 18', 'Thu 19'].map((day,i)=><div key={day}><b>{day}</b>{[0,1,2].map(n=><div className={`appointment appointment-${(i+n)%3}`} key={n}><small>{9+n*2}:00 AM</small><strong>{['Consultation','Team check-in','Follow-up'][(i+n)%3]}</strong><span>30 min · Scheduled</span></div>)}</div>)}</div></div></div>
  );
  return (
    <div className="project-art ledger-art" aria-hidden="true"><div className="finance-preview"><aside className="finance-sidebar"><b className="finance-brand">◧ ledgerline</b><small>WORKSPACE</small><span className="selected">◫ &nbsp; Overview</span><span>▤ &nbsp; Invoices</span><span>↗ &nbsp; Transactions</span><span>◷ &nbsp; Customers</span><div className="sidebar-bottom">JS &nbsp; Your workspace <span>⌄</span></div></aside><div className="finance-main"><div className="finance-top"><span>Workspace <span>/ Overview</span></span><span>⌕ &nbsp; ◉</span></div><div className="finance-heading"><div><small>YOUR BUSINESS, AT A GLANCE</small><h4>Good things are adding up.</h4></div><span className="new-invoice">+ New invoice</span></div><div className="finance-stats"><div><small>Total revenue</small><strong>$24,680<span>.00</span></strong><em>↗ 12.8% <span>vs. last month</span></em></div><div><small>Outstanding</small><strong>$6,240<span>.00</span></strong><em className="neutral">8 invoices awaiting payment</em></div></div><div className="chart-heading"><b>Revenue overview</b><span>This year ⌄</span></div><div className="bar-chart">{[35,48,42,61,52,70,64,85,73,94,84,100].map((height,i)=><div key={i}><span style={{height: `${height}%`}}/><small>{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</small></div>)}</div><div className="recent-invoice"><b>Recent invoices</b><span>View all ↗</span></div><div className="invoice-row"><span>Studio North</span><span>INV–0042</span><span className="paid">Paid</span><b>$2,400.00</b></div></div></div></div>
  );
};

export const services = [
  {
    title: 'Websites that work for your business',
    description: 'For businesses that need a clear, credible website customers can use and the team can update. I build WordPress sites around your content, your audience, and the action you want visitors to take.',
    deliverables: ['Business websites & landing pages', 'Custom themes & content editing', 'Website rebuilds & mobile improvements'],
    fit: 'A new business, a redesign, or a website you have outgrown.',
  },
  {
    title: 'WordPress, without the workarounds',
    description: 'When a theme or off-the-shelf plugin cannot quite do the job, I can build the missing functionality. That might mean a custom plugin, a WooCommerce workflow, or a connection to another business tool.',
    deliverables: ['Custom WordPress plugins', 'WooCommerce features & workflows', 'API connections & troubleshooting'],
    fit: 'An existing site that needs to do more, with less manual work.',
  },
  {
    title: 'Web applications & connected tools',
    description: 'For processes that have become too complicated for spreadsheets and email. I help shape dashboards, portals, and web applications around the people who will use them every day.',
    deliverables: ['Dashboards & internal tools', 'Customer portals & booking systems', 'Backend development & integrations'],
    fit: 'A business process that needs its own dependable workspace.',
  },
  {
    title: 'AI with a practical purpose',
    description: 'Start with a specific task: finding an answer, organizing information, or preparing a draft. I help explore where AI fits, connect it to the workflow, and keep review and human control in the process.',
    deliverables: ['Knowledge & support assistants', 'AI features for web applications', 'Workflow automation prototypes'],
    fit: 'A repeatable task where an AI-assisted approach is worth testing.',
  },
] as const;

export const processSteps = [
  { title: 'Understand the job', description: 'We discuss your goals, current setup, audience, and the problem you need solved. If you already have a website, designs, or a brief, this is where we review them.', output: 'A shared understanding of the scope and priorities.' },
  { title: 'Agree on the approach', description: 'I outline the pages or features, technical approach, dependencies, and milestones. We agree on what is included, what you need to provide, and how feedback will be handled.', output: 'A clear scope and delivery plan before development starts.' },
  { title: 'Build, review, refine', description: 'Development happens in reviewable stages. You can see the work, test the important flows, and give feedback while there is still room to adjust the details.', output: 'A working preview with regular opportunities for feedback.' },
  { title: 'Launch with a handover', description: 'We check the agreed functionality, responsive layouts, and launch requirements. I walk you through the finished work and explain what is needed to maintain it.', output: 'A launch checklist, handover, and an agreed next step for support.' },
] as const;

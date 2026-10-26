import type { Project } from './types';

// These are illustrative project concepts. No client delivery or results are claimed.
export const projects: readonly Project[] = [
  {
    slug: 'ledgerline', name: 'Ledgerline', client: 'Independent concept', year: '01',
    role: 'Application planning & development concept', discipline: 'Operations dashboard',
    summary: 'An invoice workspace for a small service business that needs to see what is paid, what is overdue, and what needs attention.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL'], metrics: [], hue: 30,
    features: ['Invoice creation and status tracking', 'Customer records and payment history', 'Revenue overview and overdue filters'],
    sections: [
      { heading: 'The client scenario', body: ['A small service business manages customer details in one spreadsheet and invoices in another. Following up on payments means checking several places, and the owner has no quick overview of outstanding work.'] },
      { heading: 'The proposed solution', body: ['Bring customers, invoices, and payment status into a single workspace. The overview would prioritize overdue invoices and recent activity, with a direct path to create an invoice or open a customer record.'] },
      { heading: 'Key features', body: ['Invoice drafts, line items, due dates, and searchable customer records. Filters would separate draft, sent, paid, and overdue invoices so the team can find the next action quickly.', 'An activity log and role-based access would help keep changes understandable when more than one person uses the system.'] },
      { heading: 'Development approach', body: ['Use Next.js for the interface and server-side workflows, TypeScript for shared data contracts, and PostgreSQL for customer and invoice records. Currency values, validation, permissions, and duplicate submissions would need explicit handling.', 'Payment-provider integration would be a separate scoped feature. A real implementation would verify webhook handling and payment reconciliation before connecting live payments.'] },
      { heading: 'How success would be checked', body: ['Walk through creating an invoice, finding an overdue payment, and updating a customer record with the people doing that work. Check totals and access permissions against expected cases. This concept includes no measured business results.'] },
    ],
  },
  {
    slug: 'northward', name: 'Northward', client: 'Independent concept', year: '02',
    role: 'WooCommerce storefront concept', discipline: 'WooCommerce store',
    summary: 'An outdoor retail storefront that helps customers compare products and gives the business a familiar place to manage its catalog.',
    stack: ['WordPress', 'WooCommerce', 'PHP'], metrics: [], hue: 150,
    features: ['Product collections and useful filters', 'Product variants and stock availability', 'Cart, checkout, and order management'],
    sections: [
      { heading: 'The client scenario', body: ['An outdoor retailer wants to sell online without making catalog updates a development task. Customers need clear product information, understandable variants, and a checkout that works well on a phone.'] },
      { heading: 'The proposed solution', body: ['A custom WooCommerce storefront that balances an editorial brand experience with familiar shopping behavior. Collection pages would help customers narrow their choices, while product pages make specifications, availability, and delivery information easy to find.'] },
      { heading: 'Key features', body: ['Collections, category filters, product variants, size information, and stock states. The store team would manage products, orders, and promotions through WordPress.', 'The cart and checkout would include clear validation and useful feedback when stock changes or a payment attempt fails.'] },
      { heading: 'Development approach', body: ['Build the presentation around WooCommerce’s catalog and checkout capabilities, with custom PHP where the business workflow needs it. Keep essential store functionality separate from presentation so a future design change does not remove it.', 'Use staging to check payment-provider behavior, shipping rules, order emails, and the mobile buying journey before launch.'] },
      { heading: 'How success would be checked', body: ['Test a complete order, a failed payment, a product running out of stock, and a catalog update by the store team. Review real conversion data only after launch; this concept makes no sales or performance claims.'] },
    ],
  },
  {
    slug: 'atlas-care', name: 'Atlas Care', client: 'Independent concept', year: '03',
    role: 'Booking platform concept', discipline: 'Booking platform',
    summary: 'A shared scheduling workspace for a service team that needs fewer booking conflicts and a clearer view of the day.',
    stack: ['React', 'TypeScript', 'Node.js'], metrics: [], hue: 220,
    features: ['Staff availability and calendar views', 'Appointment creation and rescheduling', 'Clear booking states and reminders'],
    sections: [
      { heading: 'The client scenario', body: ['A service team coordinates appointments through messages and a shared calendar. Changes are hard to follow, and checking availability interrupts the people delivering the service.'] },
      { heading: 'The proposed solution', body: ['A central booking workspace where staff can see availability, schedule appointments, and manage changes. A daily view would help the team focus on upcoming appointments without losing access to the wider calendar.'] },
      { heading: 'Key features', body: ['Staff schedules, service durations, appointment states, and rescheduling. Booking forms would explain unavailable times and preserve entered details when validation needs attention.', 'Reminders and cancellation rules would be agreed with the business, with clear messages for customers and staff.'] },
      { heading: 'Development approach', body: ['Separate availability rules from calendar presentation so the same logic governs every booking. The server would validate availability again when saving to prevent conflicting appointments.', 'Keyboard navigation, descriptive labels, time-zone handling, and access permissions would be checked throughout development. A healthcare deployment would require its own privacy and regulatory review.'] },
      { heading: 'How success would be checked', body: ['Test simultaneous booking attempts, cancellations, staff schedule changes, and daylight-saving transitions where relevant. Ask staff to complete daily tasks in the preview before launch. No accessibility certification or reduction in errors is claimed for this concept.'] },
    ],
  },
  {
    slug: 'forma-studio', name: 'Forma Studio', client: 'Independent concept', year: '04',
    role: 'Business website concept', discipline: 'Business website',
    summary: 'A WordPress website for a professional services studio, designed to explain the offer and turn interest into a useful project enquiry.',
    stack: ['WordPress', 'PHP', 'CSS'], metrics: [], hue: 25,
    features: ['Service and project pages', 'Editable content and reusable sections', 'Project enquiry form with clear next steps'],
    sections: [
      { heading: 'The client scenario', body: ['A professional services studio has grown through referrals, but its website no longer explains the work clearly. Prospective clients need to understand the services, see relevant examples, and know how to start a conversation.'] },
      { heading: 'The proposed solution', body: ['A focused business website with clear service pages, a project collection, and an enquiry route. The content would answer the questions a client usually asks before getting in touch: what the studio does, who it helps, and what working together involves.'] },
      { heading: 'Key features', body: ['Reusable page sections, editable services and project entries, and a project enquiry form. The team could publish new work without rebuilding a page layout each time.', 'Form fields would collect the project type, goal, and contact details, with helpful validation and a confirmation explaining the next step.'] },
      { heading: 'Development approach', body: ['Use a custom WordPress theme and structured content fields to balance flexibility with consistent presentation. Set sensible image sizes, heading structures, and responsive layouts.', 'The launch scope would include form delivery checks, page metadata, redirects from old URLs where needed, and a walkthrough of content editing.'] },
      { heading: 'How success would be checked', body: ['Ask someone unfamiliar with the studio to find the right service and submit a test enquiry. Confirm that the team can update a project and that notifications reach the correct inbox. Enquiry growth would require real post-launch data.'] },
    ],
  },
  {
    slug: 'bridge-sync', name: 'Bridge Sync', client: 'Independent concept', year: '05',
    role: 'Custom plugin & integration concept', discipline: 'WordPress plugin',
    summary: 'A custom integration that connects website enquiries to a CRM, with a clear record of what was sent and what needs another attempt.',
    stack: ['WordPress', 'PHP', 'REST APIs'], metrics: [], hue: 100,
    features: ['Form-to-CRM field mapping', 'Delivery logs and retry handling', 'Admin settings and connection status'],
    sections: [
      { heading: 'The client scenario', body: ['A business receives enquiries through WordPress and re-enters the same details in its CRM. The manual step takes time, and failed transfers are difficult to spot when a simple automation stops working.'] },
      { heading: 'The proposed solution', body: ['A dedicated WordPress plugin that maps approved form fields to CRM records. An admin screen would show connection health, recent deliveries, and items that need attention.'] },
      { heading: 'Key features', body: ['Field mapping, validation, delivery status, and retry controls. Each transfer would keep a reference to the source enquiry so staff can investigate an issue without guessing what happened.', 'Duplicate handling and a limited activity log would make repeated submissions easier to manage. Log retention and personal-data handling would be defined with the client.'] },
      { heading: 'Development approach', body: ['Use WordPress hooks and server-side API requests, with capabilities checks and protected settings. Credentials would stay on the server, outside public page content.', 'Queue transfers where appropriate, handle API timeouts and rate limits, and use stable record identifiers so a retry does not create another lead. The exact integration depends on the chosen form plugin and CRM.'] },
      { heading: 'How success would be checked', body: ['Test a valid enquiry, missing required fields, an unavailable CRM, an expired credential, and a repeated submission. Verify that staff can understand and recover from a failed transfer. No live CRM connection is included in this concept.'] },
    ],
  },
  {
    slug: 'fieldnotes-ai', name: 'Fieldnotes AI', client: 'Independent concept', year: '06',
    role: 'AI application concept', discipline: 'AI knowledge assistant',
    summary: 'An internal assistant that helps a team find answers in approved documents, follow the sources, and recognize when a question needs a person.',
    stack: ['Next.js', 'Node.js', 'AI API'], metrics: [], hue: 200,
    features: ['Questions over approved knowledge', 'Source references with each answer', 'Feedback and human escalation'],
    sections: [
      { heading: 'The client scenario', body: ['A growing team has useful information spread across guides, policies, and onboarding documents. People repeatedly ask the same questions because finding the right source takes longer than asking a colleague.'] },
      { heading: 'The proposed solution', body: ['An internal assistant that searches a defined collection of approved documents and prepares an answer with source references. When the available material does not support an answer, it would say so and point the user toward a human contact.'] },
      { heading: 'Key features', body: ['A question interface, linked source excerpts, and feedback on whether an answer helped. Administrators would control the document collection and see which information needs updating.', 'The assistant would support finding and drafting information. Actions such as changing records or sending messages would require a separate, explicitly approved workflow.'] },
      { heading: 'Development approach', body: ['Retrieve relevant document passages before generating an answer, enforce access rules before retrieval, and keep provider credentials on the server. Choose the model and storage approach after reviewing the client’s data and requirements.', 'Use a small evaluation set of real questions to check answer quality, source support, and appropriate uncertainty. Agree on data retention, provider handling, and operating costs before connecting business material.'] },
      { heading: 'How success would be checked', body: ['Try answerable questions, missing information, conflicting documents, and attempts to access restricted content. Review answers with the team before a pilot. This concept has no live model connection and makes no accuracy or time-saving claims.'] },
    ],
  },
];

export const findProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

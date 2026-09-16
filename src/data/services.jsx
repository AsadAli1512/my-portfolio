// Three offers, deliberately balanced: web development and automation carry
// equal weight. Pricing is not listed — every project is quoted after a call,
// based on scope and the client situation.

export const services = [
  {
    icon: "bi-window",
    title: "Business Websites",
    summary:
      "Professional websites for businesses that need to look credible and be found.",
    deliverables: [
      "Custom design built around your brand, not a template",
      "Fast, responsive and readable on every screen size",
      "Search engine fundamentals: clean markup, meta tags, sitemap, fast load times",
      "A simple way for you to update content yourself after launch",
    ],
    timeline: "2 – 4 weeks",
  },
  {
    icon: "bi-code-slash",
    title: "Web Applications",
    summary:
      "Full-stack applications with real users, real data and an admin panel behind them.",
    deliverables: [
      "React front end with a responsive, accessible interface",
      "Node or Python back end with a proper database layer",
      "Authentication, admin controls and deployment included",
      "Clean, documented code you can hand to another developer",
    ],
    timeline: "4 – 8 weeks",
  },
  {
    icon: "bi-diagram-3",
    title: "AI & Workflow Automation",
    summary:
      "Repetitive work moved into automated pipelines and AI agents, so your team stops doing it by hand.",
    deliverables: [
      "Your process mapped and documented before any build",
      "Automation built in n8n with your existing tools connected",
      "AI agents where they genuinely help, conventional code where they do not",
      "Error handling, failure alerts and a written runbook at handover",
    ],
    timeline: "1 – 4 weeks",
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery call",
    body: "A 30-minute call to understand the problem. No charge, and no obligation to continue.",
  },
  {
    step: "02",
    title: "Written proposal",
    body: "Scope, timeline, milestones and a fixed quote in writing before any work starts.",
  },
  {
    step: "03",
    title: "Build in milestones",
    body: "Work ships in reviewable stages. You see progress and can redirect early rather than at the end.",
  },
  {
    step: "04",
    title: "Handover and support",
    body: "Documentation, a walkthrough session, and 30 days of support after delivery.",
  },
];

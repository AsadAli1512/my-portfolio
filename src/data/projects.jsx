// Ordered deliberately: paid client work first, since that is what a buyer
// looks for, then AI and automation, then earlier applications.
// Only Evergreen has the client's permission to be named. Other client work
// stays anonymous, with no name or link, until the client agrees.

export const caseStudies = [
  {
    title: "Evergreen Services — Multi-Location Contractor Website",
    url: "https://callevergreenservices.com",
    intro:
      "A live website for a South Florida dumpster rental, junk removal, demolition and excavation company. Each of its Google Business Profile listings has its own page, so local customers land on the right location.",
    problem:
      "The company runs several Google listings across Broward and Miami-Dade, each with its own address and phone number, and keeps adding more. A single generic website gives none of them a relevant page to link to, and the build had to grow without slowing down or getting harder to maintain.",
    approach: [
      "A page for each listing, with its exact business details and content written for that area",
      "Location pages generated from plain content files and checked at build time for missing details, overlong titles and duplicate listings",
      "Structured data, metadata and a sitemap generated for every page",
      "Quote form that emails each lead and keeps a backup copy on the server",
      "Automated deployment to a VPS behind Cloudflare, with a health check and automatic rollback",
    ],
    outcome:
      "Delivered and accepted, and the client has since come back for more work. There is no database to pay for or maintain: a new location is one content file and a deploy.",
    tech: ["Next.js", "Tailwind CSS", "Local SEO", "GitHub Actions", "Cloudflare"],
  },
  {
    title: "JobShob — AI-Powered Recruitment Platform",
    url: "https://jobshob.me",
    intro:
      "A live two-sided hiring platform. Candidates build a profile and apply; recruiters post roles and receive a shortlist that has already been screened and interviewed by AI.",
    problem:
      "The first phase of hiring is where recruiters lose most of their time. Sifting CVs, arranging interview slots and running introductory calls is slow, repetitive, and inconsistent from one candidate to the next.",
    approach: [
      "CV parsing and scoring agent that reads each application and ranks it against the actual job requirements",
      "Scheduling agent that arranges interview slots without a recruiter coordinating them",
      "Interview agent that conducts the live interview with each selected candidate",
      "Reporting agent that writes up every candidate and how they performed, so decisions are based on the same evidence each time",
    ],
    outcome:
      "Recruiters open the platform to a shortlist that is already screened, interviewed and written up. The entire first phase of hiring runs without a recruiter present, and every candidate is assessed against the same criteria rather than whoever read the CV that day.",
    tech: ["AI Agents", "LangGraph", "React", "n8n", "PostgreSQL"],
  },
];

export const projects = [
  {
    title: "Boat Removal Company Website",
    desc: "A 45-page website for a South Florida boat removal company with eight Google listings: a page for each listing, a quote form that accepts photos, and analytics that track page views and phone clicks.",
    link: null,
    demo: null,
    note: "Private client project",
    tech: ["Next.js", "Local SEO", "GA4", "Cloudflare"],
  },
  {
    title: "Cash Home Buyer Lead Site",
    desc: "A lead generation website for a Florida home buying company. A two-step offer form with consent capture, spam protection and rate limiting sends each lead to the team by email and keeps a backup on the server.",
    link: null,
    demo: null,
    note: "Private client project",
    tech: ["Next.js", "Lead Generation", "Local SEO"],
  },
  {
    title: "Content Library & Store",
    desc: "A content library and equipment store with customer accounts, cart, checkout and order tracking, run from an admin panel that manages content, products, orders, customers, discounts and media.",
    link: null,
    demo: null,
    note: "Private client project",
    tech: ["Next.js", "PostgreSQL", "Drizzle ORM", "Admin Panel"],
  },
  {
    title: "WhatsApp Interview Agent",
    desc: "An automated interview agent that runs entirely over WhatsApp, built as an n8n workflow with no custom backend to maintain. Candidates are screened in the channel they already use.",
    link: "https://github.com/AsadAli1512",
    demo: null,
    tech: ["n8n", "WhatsApp API", "Automation"],
  },
  {
    title: "LangGraph AI Agent",
    desc: "A full-stack autonomous agent with persistent state, built on LangGraph with a Supabase and PostgreSQL data layer. Dockerised for either local or cloud deployment.",
    link: "https://github.com/AsadAli1512/Langgraph-AI-Agent",
    demo: null,
    tech: ["LangGraph", "Next.js", "Supabase", "Docker"],
  },
  {
    title: "Conversational AI Chatbot",
    desc: "A multi-model chatbot with a React front end and Flask backend, routed through OpenRouter so the underlying model can be swapped without touching application code.",
    link: "https://github.com/AsadAli1512/conversational-AI-chatbot",
    demo: null,
    tech: ["React", "Flask", "Python", "OpenRouter"],
  },
  {
    title: "Restaurant Menu Management",
    desc: "A full MERN application for managing a restaurant menu — categorised items, full create and edit flows, and a responsive interface backed by MongoDB Atlas.",
    link: "https://github.com/AsadAli1512/MERN-Restaurant-Menu-Management-App-using-MERN",
    demo: null,
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Daily Recipe App",
    desc: "A React application with complete create, read, update and delete flows and client-side routing, built to practise state management patterns cleanly.",
    link: "https://github.com/AsadAli1512/daily-recipe-react-app",
    demo: null,
    tech: ["React", "React Router", "REST"],
  },
  {
    title: "Hospital Management System",
    desc: "A database-driven system for patient records and appointment scheduling, designed around normalised relational schema and transactional integrity.",
    link: "https://github.com/AsadAli1512",
    demo: null,
    tech: ["SQL", "Database Design", "C++"],
  },
];

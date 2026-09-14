// Ordered deliberately: AI and automation work first, since that is the
// work I want to be hired for. Web projects follow as supporting evidence.

export const caseStudy = {
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
};

export const projects = [
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

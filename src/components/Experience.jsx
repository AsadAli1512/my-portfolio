import { Container } from "react-bootstrap";

const experiences = [
  {
    role: "n8n Automation Intern",
    company: "Figover",
    period: "2025",
    highlight: true,
    points: [
      "Gained hands-on experience in workflow automation and system integration using n8n",
      "Built and deployed automated pipelines for real-world business use cases",
      "Received Automation & Integration Internship certificate upon completion",
    ],
  },
  {
    role: "FYP Lead Developer",
    company: "Jobshob: AI-Powered Interview Agent",
    period: "2025 – Present",
    points: [
      "Built and deployed a production ready AI interview platform at jobshob.me",
      "Integrated LangGraph AI agents for automated candidate evaluation and detailed feedback",
      "Designed the complete full-stack architecture from React UI to AI-driven backend",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Personal Projects",
    period: "2022 – Present",
    points: [
      "Built 10+ projects spanning MERN stack, AI chatbots, and automation tools",
      "Designed, developed, and deployed full-stack applications end-to-end from UI to database",
      "Maintained public repositories on GitHub covering web development, AI, and automation",
    ],
  },
  {
    role: "Volunteer Teacher",
    company: "Faiz-ul-Islam (VIS) Faizabad, Rawalpindi",
    period: "2024",
    points: [
      "Volunteered as an educator contributing to community education initiatives",
      "Strengthened communication and teaching skills through real world engagement",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-5 position-relative">
      <Container>
        <h2 data-aos="fade-up" className="text-center mb-5">
          Experience
        </h2>
        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`experience-item${exp.highlight ? " exp-highlighted" : ""}`}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="exp-period">{exp.period}</div>
              <div className="exp-content">
                <h5 className="exp-role">
                  {exp.role}
                  {exp.highlight && (
                    <span className="exp-intern-badge ms-2">Internship</span>
                  )}
                </h5>
                <div className="exp-company">{exp.company}</div>
                <ul className="exp-points">
                  {exp.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

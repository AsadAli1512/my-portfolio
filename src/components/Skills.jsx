import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    icon: "bi-window",
    skills: ["React", "Next.js", "JavaScript", "Bootstrap", "Responsive UI", "Technical SEO"],
  },
  {
    title: "Backend & Data",
    icon: "bi-server",
    skills: ["Node.js", "Express", "Python", "Flask", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "AI & Automation",
    icon: "bi-robot",
    skills: ["AI Agents", "LangGraph", "n8n", "OpenAI / OpenRouter", "Prompt design"],
  },
  {
    title: "Engineering",
    icon: "bi-tools",
    skills: ["Git & GitHub", "Docker", "Supabase", "Testing", "Data structures"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Container>
        <div className="section-head">
          <span className="section-eyebrow">Toolkit</span>
          <h2 className="section-title">What I work with</h2>
        </div>

        <Row className="g-4">
          {groups.map((g, i) => (
            <Col md={6} lg={3} key={g.title}>
              <motion.div
                className="skill-group"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div className="skill-group-head">
                  <i className={`bi ${g.icon}`} />
                  <h3>{g.title}</h3>
                </div>
                <div className="skill-tags">
                  {g.skills.map((s) => (
                    <span className="skill-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

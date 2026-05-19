import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const skillCategories = [
  { title: "Languages", skills: ["JavaScript", "Python", "Java", "C/C++"] },
  { title: "Frontend", skills: ["React", "HTML", "CSS", "Bootstrap"] },
  { title: "Backend & Databases", skills: ["Node.js", "Express", "MongoDB", "SQL"] },
  { title: "AI & Automation", skills: ["LangGraph", "TensorFlow", "Flask", "n8n", "AI Agents"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-5 position-relative">
      <div className="section-blob one"></div>
      <div className="section-blob two"></div>
      <Container>
        <h2 data-aos="fade-up">Skills</h2>
        <Row className="mt-4 g-4">
          {skillCategories.map((cat, idx) => (
            <Col md={6} lg={3} key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
              <h4 className="text-primary text-center mb-3">{cat.title}</h4>
              <div className="d-flex flex-wrap justify-content-center">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="skill-badge m-2"
                    key={i}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

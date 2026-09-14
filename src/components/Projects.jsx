import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <Container>
        <div className="section-head">
          <span className="section-eyebrow">Selected work</span>
          <h2 className="section-title">Other things I have built</h2>
          <p className="section-sub">
            A mix of automation work and full-stack applications. Source is
            public where the client permits.
          </p>
        </div>

        <Row className="g-4">
          {projects.map((p, i) => (
            <Col md={6} lg={4} key={p.title}>
              <motion.article
                className="project-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span className="tech-chip tech-chip-sm" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="project-link">
                      <i className="bi bi-globe" /> Live demo
                    </a>
                  )}
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                      <i className="bi bi-github" /> Source
                    </a>
                  )}
                </div>
              </motion.article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

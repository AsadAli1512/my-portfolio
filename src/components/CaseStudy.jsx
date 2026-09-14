import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { caseStudy } from "../data/projects";

export default function CaseStudy() {
  return (
    <section id="work" className="section">
      <Container>
        <div className="section-head">
          <span className="section-eyebrow">Case study</span>
          <h2 className="section-title">A closer look at one build</h2>
          <p className="section-sub">
            Rather than list everything I have touched, here is one project in
            full — the problem, the decisions, and where it ended up.
          </p>
        </div>

        <motion.div
          className="case-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="case-head">
            <div>
              <span className="case-live">
                <span className="pill-dot" /> Live in production
              </span>
              <h3 className="case-title">{caseStudy.title}</h3>
              <p className="case-intro">{caseStudy.intro}</p>
            </div>
            <Button
              href={caseStudy.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary-cta"
            >
              Visit the live site <i className="bi bi-box-arrow-up-right ms-2" />
            </Button>
          </div>

          <Row className="g-4 case-body">
            <Col lg={4}>
              <h4 className="case-label">The problem</h4>
              <p className="case-text">{caseStudy.problem}</p>
            </Col>

            <Col lg={4}>
              <h4 className="case-label">What I built</h4>
              <ul className="case-list">
                {caseStudy.approach.map((a) => (
                  <li key={a}>
                    <i className="bi bi-dot" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Col>

            <Col lg={4}>
              <h4 className="case-label">The outcome</h4>
              <p className="case-text">{caseStudy.outcome}</p>
              <div className="case-tech">
                {caseStudy.tech.map((t) => (
                  <span className="tech-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}

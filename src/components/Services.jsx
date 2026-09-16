import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <Container>
        <div className="section-head">
          <span className="section-eyebrow">Services</span>
          <h2 className="section-title">How I can help</h2>
          <p className="section-sub">
            Every project is scoped and quoted individually after a short call,
            then agreed in writing before any work begins. No hourly surprises
            and no invoice you did not expect.
          </p>
        </div>

        <Row className="g-4 align-items-stretch">
          {services.map((s, i) => (
            <Col md={6} lg={4} key={s.title}>
              <motion.article
                className="service-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="service-icon">
                  <i className={`bi ${s.icon}`} />
                </div>

                <h3 className="service-title">{s.title}</h3>
                <p className="service-summary">{s.summary}</p>

                <ul className="service-list">
                  {s.deliverables.map((d) => (
                    <li key={d}>
                      <i className="bi bi-check2" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-foot">
                  <div>
                    <span className="service-price-label">Typical timeline</span>
                    <span className="service-timeline-value">{s.timeline}</span>
                  </div>
                </div>

                <a href="#contact" className="service-cta">
                  Request a quote <i className="bi bi-arrow-right" />
                </a>
              </motion.article>
            </Col>
          ))}
        </Row>

        <p className="services-note">
          Not sure which of these fits? Describe the problem and I will tell you
          honestly whether I am the right person for it.
        </p>
      </Container>
    </section>
  );
}

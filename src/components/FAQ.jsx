import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "../data/faq";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section section-alt">
      <Container>
        <div className="section-head">
          <span className="section-eyebrow">Questions</span>
          <h2 className="section-title">Before you get in touch</h2>
          <p className="section-sub">
            The things clients usually want to know first. If yours is not here,
            ask me directly and I will answer plainly.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={9}>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  className={`faq-item ${isOpen ? "is-open" : ""}`}
                  key={f.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{f.q}</span>
                    <i className={`bi bi-${isOpen ? "dash" : "plus"}-lg`} />
                  </button>
                  <div className="faq-answer" hidden={!isOpen}>
                    <p>{f.a}</p>
                  </div>
                </motion.div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

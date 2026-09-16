import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { process } from "../data/services";

export default function Process() {
  return (
    <section id="process" className="section">
      <Container>
        <div className="section-head">
          <span className="section-eyebrow">Process</span>
          <h2 className="section-title">What working together looks like</h2>
          <p className="section-sub">
            Hiring a developer in another country is a risk. This is how I try
            to make that risk small and visible rather than something you find
            out about at the end.
          </p>
        </div>

        <Row className="g-4">
          {process.map((p, i) => (
            <Col md={6} lg={3} key={p.step}>
              <motion.div
                className="process-step"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <span className="process-number">{p.step}</span>
                <h3 className="process-title">{p.title}</h3>
                <p className="process-body">{p.body}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

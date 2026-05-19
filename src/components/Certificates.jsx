import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Dean's Honor Awards",
    issuer: "CUST — Capital University of Science & Technology",
    year: "2022 – 2026",
    icon: "bi-award-fill",
    color: "#f5a623",
  },
  {
    title: "Automation & Integration Internship",
    issuer: "Figover",
    year: "2025",
    icon: "bi-robot",
    color: "#0d6efd",
  },
  {
    title: "Excite Cup Participation",
    issuer: "10th Excite Cup — On-Spot Programming",
    year: "2024",
    icon: "bi-trophy-fill",
    color: "#20c997",
  },
  {
    title: "Financial Literacy Training Program",
    issuer: "Training Program Certificate",
    year: "2024",
    icon: "bi-mortarboard-fill",
    color: "#6f42c1",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-5 position-relative">
      <Container>
        <h2 data-aos="fade-up" className="text-center mb-5">
          Certificates &amp; Awards
        </h2>
        <Row className="g-4 justify-content-center">
          {certificates.map((cert, i) => (
            <Col md={6} lg={3} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <motion.div
                className="cert-card"
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 280 }}
              >
                <div className="cert-icon" style={{ color: cert.color }}>
                  <i className={`bi ${cert.icon}`}></i>
                </div>
                <h6 className="cert-title">{cert.title}</h6>
                <p className="cert-issuer">{cert.issuer}</p>
                <span
                  className="cert-year"
                  style={{
                    background: `linear-gradient(135deg, ${cert.color}cc, ${cert.color})`,
                  }}
                >
                  {cert.year}
                </span>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

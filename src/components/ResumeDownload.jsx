import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function ResumeDownload() {
  return (
    <section id="resume" className="py-5 position-relative">
      <div className="section-blob one"></div>
      <div className="section-blob two"></div>
      <Container>
        <div className="resume-download-card" data-aos="zoom-in">
          <Row className="align-items-center gy-4">
            <Col md={8}>
              <div className="resume-file-icon">
                <i className="bi bi-file-earmark-person-fill"></i>
              </div>
              <h3 className="fw-bold mb-2" style={{ color: "#212529" }}>
                Download My CV
              </h3>
              <p className="text-muted mb-0" style={{ maxWidth: "480px" }}>
                Get a complete overview of my skills, projects, internship at Figover, education at CUST, and certifications — all in one document.
              </p>
              <div className="resume-meta mt-3 d-flex flex-wrap gap-3">
                <span className="resume-meta-chip">
                  <i className="bi bi-file-earmark-pdf-fill text-danger me-1"></i>
                  PDF Format
                </span>
                <span className="resume-meta-chip">
                  <i className="bi bi-check-circle-fill text-success me-1"></i>
                  Updated 2025
                </span>
                <span className="resume-meta-chip">
                  <i className="bi bi-translate me-1 text-primary"></i>
                  English
                </span>
              </div>
            </Col>
            <Col md={4} className="text-md-end">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  href="/Asad_ALI_Resume.pdf"
                  download
                  className="btn-custom rounded-pill px-5 py-3 fs-6 fw-bold"
                >
                  <i className="bi bi-download me-2"></i>
                  Download CV
                </Button>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

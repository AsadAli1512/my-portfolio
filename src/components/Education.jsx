import { Container, Row, Col, Badge } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-5 position-relative">
      <div className="section-blob one"></div>
      <div className="section-blob two"></div>
      <Container>
        <h2 data-aos="fade-up" className="text-center mb-5">
          Education
        </h2>
        <Row className="justify-content-center">
          <Col md={8} data-aos="fade-up">
            <motion.div className="education-card" whileHover={{ y: -5 }}>
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-3">
                <div>
                  <h4 className="fw-bold text-primary mb-1">
                    BS Computer Science
                  </h4>
                  <div className="edu-university">
                    Capital University of Science &amp; Technology (CUST)
                    Islamabad, Pakistan
                  </div>
                </div>
                <span className="edu-year-badge">2022 – Sept 2026</span>
              </div>
              <div className="d-flex flex-wrap gap-2 mt-2">
                <Badge className="edu-badge">CGPA: 3.89 / 4.0</Badge>
                <Badge className="edu-badge">Dean's Honor Awards</Badge>
                <Badge className="edu-badge">Excite Cup Participant</Badge>
                <Badge className="edu-badge">Volunteer Educator — VIS</Badge>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

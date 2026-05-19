import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import mypic from "../assets/mypic2.jpg";

const roles = [
  "AI Automation Engineer",
  "Web Developer",
  "Python/ML Enthusiast",
  "MERN Stack Developer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center gy-5">
          {/* ── Left Content ── */}
          <Col md={6}>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="availability-badge mb-3">
                <span className="badge-dot"></span>
                Open to Work
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="fw-bold display-4"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm{" "}
              <span className="text-primary">Asad Ali</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              className="lead mb-3"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              style={{ minHeight: "2rem" }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  className="fw-semibold"
                  style={{ color: "#20c997" }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Social icon links */}
            <motion.div
              className="hero-social mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <a
                href="https://github.com/AsadAli1512"
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/asad-ali-18b8aa2bb/"
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="mailto:asadalibaltistani@gmail.com"
                className="hero-social-link"
                title="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="d-flex flex-wrap gap-3"
            >
              <Button className="btn-custom rounded-pill px-4" href="#contact">
                Contact Me
              </Button>
              <Button
                variant="outline-dark"
                className="rounded-pill px-4"
                href="/Asad_ALI_Resume.pdf"
                download
              >
                <i className="bi bi-download me-2"></i>Download CV
              </Button>
            </motion.div>
          </Col>

          {/* ── Right Image ── */}
          <Col md={6} className="text-center">
            <motion.div
              className="profile-ring-wrapper"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={mypic}
                alt="Asad Ali"
                className="img-fluid rounded-circle profile-pic"
                style={{ maxWidth: "280px", width: "100%" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              Turning ideas into scalable products
            </motion.p>

            <motion.div
              className="hero-tech-badges"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
            >
              {["Python", "n8n Automation", "Node", "React", "SQL/NoSQL", "Git"].map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>

      <div className="blob1"></div>
      <div className="blob2"></div>
    </section>
  );
}

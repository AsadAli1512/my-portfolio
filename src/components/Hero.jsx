import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import mypic from "../assets/mypic2.png";
import { site } from "../data/site";

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const proofPoints = [
  { value: "10+", label: "Projects delivered end to end" },
  { value: "Live", label: "AI platform running in production" },
  { value: "Full-stack", label: "Design through to deployment" },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />
      <div className="hero-grid-overlay" />

      <Container className="position-relative">
        <Row className="align-items-center gy-5">
          <Col lg={7}>
            <motion.div variants={rise} initial="hidden" animate="show" custom={0}>
              <span className="availability-pill">
                <span className="pill-dot" />
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              className="hero-title"
              variants={rise}
              initial="hidden"
              animate="show"
              custom={1}
            >
              Websites and AI automation
              <br />
              <span className="hero-title-accent">for growing businesses</span>
            </motion.h1>

            <motion.p
              className="hero-lede"
              variants={rise}
              initial="hidden"
              animate="show"
              custom={2}
            >
              {site.tagline} I work with founders and small teams around the
              world, from a first business website through to systems that run
              on their own.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={rise}
              initial="hidden"
              animate="show"
              custom={3}
            >
              <Button href="#contact" className="btn-primary-cta btn-lg-cta">
                Book a free discovery call
              </Button>
              <Button href="#work" className="btn-ghost-cta btn-lg-cta">
                See my work
              </Button>
            </motion.div>

            <motion.div
              className="hero-proof"
              variants={rise}
              initial="hidden"
              animate="show"
              custom={4}
            >
              {proofPoints.map((p) => (
                <div className="proof-item" key={p.label}>
                  <span className="proof-value">{p.value}</span>
                  <span className="proof-label">{p.label}</span>
                </div>
              ))}
            </motion.div>
          </Col>

          <Col lg={5}>
            <motion.div
              className="hero-portrait-wrap"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-portrait-ring" />
              <img src={mypic} alt={site.name} className="hero-portrait" />

              <motion.div
                className="floating-card card-top"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <i className="bi bi-broadcast" />
                <div>
                  <strong>jobshob.me</strong>
                  <span>Live in production</span>
                </div>
              </motion.div>

              <motion.div
                className="floating-card card-bottom"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                <i className="bi bi-clock-history" />
                <div>
                  <strong>Your timezone</strong>
                  <span>Hours that suit you</span>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          className="tech-strip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="tech-strip-label">Working with</span>
          <div className="tech-strip-items">
            {["React", "Node.js", "Next.js", "n8n", "LangGraph", "PostgreSQL", "MongoDB"].map(
              (t) => (
                <span className="tech-chip" key={t}>
                  {t}
                </span>
              )
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

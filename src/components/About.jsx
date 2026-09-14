import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { site, overlapHours } from "../data/site";

const track = [
  {
    period: "2025 — Present",
    role: "Lead Developer, Jobshob",
    detail:
      "Designed and shipped a production two-sided recruitment platform driven by four AI agents: CV parsing and scoring, interview scheduling, interview conduction and report generation. Live at jobshob.me.",
  },
  {
    period: "2025",
    role: "Automation Engineer (Internship), Figover",
    detail:
      "Built and deployed n8n automation pipelines for real business processes, integrating third-party systems. Completed with an Automation & Integration certificate.",
  },
  {
    period: "2022 — Present",
    role: "Freelance & independent projects",
    detail:
      "Delivered 10+ projects end to end across business websites, full-stack applications and workflow automation, from first requirement through to deployment.",
  },
];

const credentials = [
  { icon: "bi-mortarboard", label: "BS Computer Science", sub: "CUST Islamabad, 2026" },
  { icon: "bi-award", label: "Dean's Honor Awards", sub: "CGPA 3.87 / 4.0" },
  { icon: "bi-robot", label: "Automation & Integration", sub: "Figover, 2025" },
  { icon: "bi-trophy", label: "Excite Cup Programming", sub: "On-spot contest, 2024" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <Container>
        <Row className="g-4 gy-5 align-items-start">
          <Col lg={5}>
            <span className="section-eyebrow">About</span>
            <h2 className="section-title text-start">
              A developer who finishes things
            </h2>
            <p className="about-text">
              I am a computer science graduate based in {site.location}, working
              with clients internationally. I work across two areas that
              overlap more than people expect: professional websites and web
              applications, and the AI automation that removes repetitive work
              behind them.
            </p>
            <p className="about-text">
              Most of what I build is meant to run unattended in production, so
              I care more about error handling, documentation and handover than
              about a polished demo. If I do not think I am the right fit for
              your project, I will say so early rather than take the work.
            </p>

            <div className="about-meta">
              <div className="about-meta-item">
                <i className="bi bi-geo-alt" />
                <div>
                  <strong>Based in</strong>
                  <span>{site.location}</span>
                </div>
              </div>
              <div className="about-meta-item">
                <i className="bi bi-clock" />
                <div>
                  <strong>Availability</strong>
                  <span>{overlapHours}</span>
                </div>
              </div>
              <div className="about-meta-item">
                <i className="bi bi-translate" />
                <div>
                  <strong>Working language</strong>
                  <span>English, written and spoken</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="track-list">
              {track.map((t, i) => (
                <motion.div
                  className="track-item"
                  key={t.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <span className="track-period">{t.period}</span>
                  <h3 className="track-role">{t.role}</h3>
                  <p className="track-detail">{t.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="credentials-row">
              {credentials.map((c) => (
                <div className="credential-chip" key={c.label}>
                  <i className={`bi ${c.icon}`} />
                  <div>
                    <strong>{c.label}</strong>
                    <span>{c.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <a className="resume-link" href={site.resume} download>
              <i className="bi bi-file-earmark-arrow-down" />
              Prefer a CV? Download the PDF
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

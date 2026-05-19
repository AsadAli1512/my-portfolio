import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-5 position-relative">
      <Container>
        <h2 data-aos="fade-up" className="text-center mb-5">
          Projects
        </h2>

        {featuredProject && (
          <div className="mb-5" data-aos="fade-up">
            <div className="featured-project-card">
              <div className="featured-badge">Featured — FYP</div>
              <h3 className="featured-title">{featuredProject.title}</h3>
              <p className="featured-desc">{featuredProject.desc}</p>
              <div className="mb-4 d-flex flex-wrap gap-2">
                {featuredProject.tech.map((t, i) => (
                  <Badge key={i} className="tech-badge">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="d-flex gap-3 flex-wrap">
                {featuredProject.demo && (
                  <Button
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-featured-demo rounded-pill"
                  >
                    <i className="bi bi-globe me-2"></i>Live Demo <u>jobshob.me</u>
                  </Button>
                )}
                {featuredProject.link && (
                  <Button
                    href={featuredProject.link}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-light"
                    className="rounded-pill"
                  >
                    <i className="bi bi-github me-2"></i>GitHub
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        <Row className="g-4">
          {otherProjects.map((p, i) => (
            <Col md={6} lg={4} key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ height: "100%" }}
              >
                <Card className="project-card shadow-sm h-100">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="project-title text-center mb-2">
                      {p.title}
                    </Card.Title>
                    <div className="mb-2 d-flex flex-wrap justify-content-center gap-1">
                      {p.tech?.map((t, j) => (
                        <Badge key={j} className="tech-badge-sm">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <Card.Text className="flex-grow-1 text-muted" style={{ fontSize: "0.9rem" }}>
                      {p.desc}
                    </Card.Text>
                    <div className="d-flex gap-2 flex-wrap mt-auto pt-2">
                      {p.demo && (
                        <Button
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-custom rounded-pill flex-fill"
                        >
                          Live Demo
                        </Button>
                      )}
                      {p.link && (
                        <Button
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          variant="outline-secondary"
                          className="rounded-pill flex-fill"
                        >
                          <i className="bi bi-github me-1"></i>GitHub
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

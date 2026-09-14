import { Container, Row, Col } from "react-bootstrap";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-4 align-items-center">
          <Col md={6}>
            <div className="footer-brand">{site.name}</div>
            <p className="footer-tagline">{site.tagline}</p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-socials">
              <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bi bi-github" />
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email">
                <i className="bi bi-envelope" />
              </a>
            </div>
          </Col>
        </Row>
        <div className="footer-base">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>Built with React</span>
        </div>
      </Container>
    </footer>
  );
}

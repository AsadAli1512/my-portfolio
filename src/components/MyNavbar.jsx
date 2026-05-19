import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

export default function MyNavbar() {
  const { isDark, toggle } = useTheme();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          <span style={{ color: "#20c997" }}>&lt;</span>
          Asad Ali
          <span style={{ color: "#20c997" }}>/&gt;</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-1">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#certificates">Certs</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            <Button
              href="/Asad_ALI_Resume.pdf"
              download
              size="sm"
              className="btn-custom rounded-pill ms-lg-2 px-3"
            >
              <i className="bi bi-download me-1"></i>CV
            </Button>

            {/* Dark / Light toggle */}
            <button
              className="theme-toggle-btn"
              onClick={toggle}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              <i className={`bi bi-${isDark ? "sun-fill" : "moon-fill"}`}></i>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

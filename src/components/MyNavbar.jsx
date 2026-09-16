import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTheme } from "../context/useTheme";
import { site } from "../data/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export default function MyNavbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`site-nav ${scrolled ? "is-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="nav-brand">
          {site.name}
          <span className="nav-brand-dot" />
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-2 order-lg-last">
          <button
            className="theme-toggle-btn"
            onClick={toggle}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-label="Toggle colour theme"
          >
            <i className={`bi bi-${isDark ? "sun" : "moon"}`} />
          </button>
          <Button
            href="#contact"
            className="btn-primary-cta btn-nav-cta d-none d-lg-inline-flex"
          >
            Start a project
          </Button>
          <Navbar.Toggle aria-controls="main-nav" />
        </div>

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center">
            {links.map((l) => (
              <Nav.Link key={l.href} href={l.href} className="nav-item-link">
                {l.label}
              </Nav.Link>
            ))}
            <Button
              href="#contact"
              className="btn-primary-cta btn-nav-cta mt-3 mt-lg-0 d-lg-none"
            >
              Start a project
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

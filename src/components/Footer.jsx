import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="text-center py-4">
      <Container>
        <div className="mb-2">
          <a href="https://github.com/AsadAli1512" target="_blank" rel="noreferrer">
            <i className="bi bi-github fs-4"></i>
          </a>
          <a href="https://www.linkedin.com/in/asad-ali-18b8aa2bb/" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin fs-4"></i>
          </a>
        </div>
         <Container className="text-center">
        <p className="mb-1">© {new Date().getFullYear()} Asad Ali. All Rights Reserved.</p>
        <small>Designed & Built with ❤️ using React & Bootstrap</small>
      </Container>
      </Container>
    </footer>
  );
}

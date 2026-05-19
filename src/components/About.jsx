import { Container } from "react-bootstrap";
import QuickFacts from "./QuickFacts";

export default function About() {
  return (
    <section id="about" className="py-5" data-aos="fade-up">
      <Container>
        <h2 className="mb-4 text-center">About Me</h2>
        <p
          className="text-center mx-auto"
          style={{ maxWidth: "750px", lineHeight: "1.95" }}
        >
          I'm <strong>Asad Ali</strong>, a final-year Computer Science student at{" "}
          <strong>CUST Islamabad</strong> with a <strong>3.89/4.0 CGPA</strong> and
          Dean's Honor Awards. I interned at{" "}
          <strong>Figover</strong> in n8n workflow automation and built{" "}
          <a
            href="https://jobshob.me"
            target="_blank"
            rel="noreferrer"
            className="text-primary fw-semibold"
          >
            Jobshob
          </a>
          , a live AI-powered interview platform, as my Final Year Project. I specialize
          in <strong>MERN stack</strong> development, <strong>AI/ML</strong> integration,
          and <strong>workflow automation</strong>. I write clean, efficient code and love
          turning complex ideas into seamless digital experiences.
        </p>
      </Container>
      <QuickFacts />
    </section>
  );
}

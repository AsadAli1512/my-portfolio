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
          I'm <strong>Asad Ali</strong>, Computer Science graduate (
          <strong>CGPA 3.87/4.0, multiple Dean's Honor Awards</strong>) with hands-on experience in full-stack web development and 
AI workflow automation. Built and deployed{" "} 
          <a
            href="https://jobshob.me"
            target="_blank"
            rel="noreferrer"
            className="text-primary fw-semibold"
          >
            Jobshob
          </a>
          , a live AI recruitment platform that parses CVs, scores candidates and runs automated 
audio interviews. I specialize
          in <strong>Full-stack</strong> development, <strong>AI/ML</strong> integration,
          and <strong>workflow automation</strong>. I write clean, efficient code and love
          turning complex ideas into seamless digital experiences.
        </p>
      </Container>
      <QuickFacts />
    </section>
  );
}

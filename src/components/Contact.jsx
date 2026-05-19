import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const templateParams = {
      name: form.user_name.value,
      email: form.user_email.value,
      message: form.message.value,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus("sent");
        form.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="mb-4 text-center">Get In Touch</h2>
        <Row className="g-4">
          <Col md={4} data-aos="fade-right">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h5>Email</h5>
                <p>
                  <a href="mailto:asadalibaltistani@gmail.com">
                    asadalibaltistani@gmail.com
                  </a>
                </p>
                <h5>Phone</h5>
                <p>+92-313-5533578</p>
                <h5>Location</h5>
                <p>Islamabad, Pakistan</p>
                <div className="mt-3 d-flex flex-wrap gap-2">
                  <Button
                    className="rounded-pill btn-custom"
                    href="https://github.com/AsadAli1512"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github me-1"></i> GitHub
                  </Button>
                  <Button
                    variant="primary"
                    className="rounded-pill"
                    href="https://www.linkedin.com/in/asad-ali-18b8aa2bb/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin me-1"></i> LinkedIn
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8} data-aos="fade-left">
            <Card className="shadow-sm">
              <Card.Body>
                {status === "sent" ? (
                  <div className="text-center py-4">
                    <i
                      className="bi bi-check-circle-fill text-success"
                      style={{ fontSize: "3rem" }}
                    ></i>
                    <h5 className="mt-3 text-success">Message Sent!</h5>
                    <p className="text-muted">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                    <Button
                      variant="outline-success"
                      className="rounded-pill"
                      onClick={() => setStatus("idle")}
                    >
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        name="user_name"
                        placeholder="Your Name"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        name="user_email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        name="message"
                        as="textarea"
                        rows={4}
                        placeholder="Write your message..."
                        required
                      />
                    </Form.Group>
                    {status === "error" && (
                      <p className="text-danger small mb-2">
                        Something went wrong. Please email me directly at{" "}
                        <a href="mailto:asadalibaltistani@gmail.com">
                          asadalibaltistani@gmail.com
                        </a>
                        .
                      </p>
                    )}
                    <Button
                      type="submit"
                      className="rounded-pill btn-custom"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </Form>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

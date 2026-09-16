import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { site, overlapHours } from "../data/site";

const budgets = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
  "Not sure yet",
];

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.user_name.value,
          email: form.user_email.value,
          company: form.company.value,
          budget: form.budget.value,
          message: form.message.value,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus("sent");
        form.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="section contact-section">
      <Container>
        <Row className="g-4 gy-5">
          <Col lg={5}>
            <span className="section-eyebrow">Get in touch</span>
            <h2 className="section-title text-start">
              Tell me what you are trying to build
            </h2>
            <p className="about-text">
              Send over a short description of the problem and I will reply
              within one business day with honest thoughts on whether it is a
              good fit, a rough timeline, and what it would cost. No pressure
              and no sales sequence.
            </p>

            <div className="contact-details">
              <a className="contact-row" href={`mailto:${site.email}`}>
                <i className="bi bi-envelope" />
                <div>
                  <strong>Email</strong>
                  <span>{site.email}</span>
                </div>
              </a>
              <div className="contact-row">
                <i className="bi bi-clock-history" />
                <div>
                  <strong>Usual response time</strong>
                  <span>Within one business day</span>
                </div>
              </div>
              <div className="contact-row">
                <i className="bi bi-globe2" />
                <div>
                  <strong>Calls</strong>
                  <span>{overlapHours}</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bi bi-github" />
              </a>
            </div>
          </Col>

          <Col lg={7}>
            <div className="contact-card">
              {status === "sent" ? (
                <div className="contact-success">
                  <i className="bi bi-check-circle" />
                  <h3>Thank you — your message is on its way</h3>
                  <p>
                    I have received your enquiry and will get back to you within
                    one business day. If it is urgent, email me directly at{" "}
                    <a href={`mailto:${site.email}`}>{site.email}</a>.
                  </p>
                  <Button className="btn-ghost-cta" onClick={() => setStatus("idle")}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Label htmlFor="user_name">Your name</Form.Label>
                      <Form.Control id="user_name" name="user_name" required />
                    </Col>
                    <Col md={6}>
                      <Form.Label htmlFor="user_email">Email</Form.Label>
                      <Form.Control id="user_email" name="user_email" type="email" required />
                    </Col>
                    <Col md={6}>
                      <Form.Label htmlFor="company">Company (optional)</Form.Label>
                      <Form.Control id="company" name="company" />
                    </Col>
                    <Col md={6}>
                      <Form.Label htmlFor="budget">Budget range</Form.Label>
                      <Form.Select id="budget" name="budget" defaultValue="Not sure yet">
                        {budgets.map((b) => (
                          <option key={b}>{b}</option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col xs={12}>
                      <Form.Label htmlFor="message">What are you trying to build?</Form.Label>
                      <Form.Control
                        id="message"
                        name="message"
                        as="textarea"
                        rows={5}
                        placeholder="A few sentences about the problem, what you have tried, and any deadline you are working to."
                        required
                      />
                    </Col>
                  </Row>

                  {status === "error" && (
                    <p className="contact-error">
                      Something went wrong sending that. Please email me directly
                      at <a href={`mailto:${site.email}`}>{site.email}</a>.
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="btn-primary-cta btn-lg-cta mt-4"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Send enquiry"}
                  </Button>
                  <p className="contact-privacy">
                    Your details are used only to reply to this enquiry.
                  </p>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

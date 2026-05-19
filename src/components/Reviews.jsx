import { Container, Card, Row, Col } from "react-bootstrap";
import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section id="reviews" className="py-5 bg-light">
      <Container>
        <h2 className="mb-5 text-center">What Clients Say</h2>
        <Row className="g-4 justify-content-center">
          {reviews.map((r, i) => (
            <Col md={6} key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <Card className="review-card h-100 shadow-sm">
                <Card.Body>
                  <div className="review-stars mb-2">
                    {"★★★★★".split("").map((s, j) => (
                      <span key={j} className="text-warning">
                        {s}
                      </span>
                    ))}
                  </div>
                  <Card.Text className="review-text mb-3">"{r.text}"</Card.Text>
                  <Card.Subtitle className="review-name text-muted">
                    — {r.name}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

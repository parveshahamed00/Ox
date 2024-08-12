import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
const Services = () => {
  return (
   <div className="services-page">
    <section className="hero-sections text-center">
      <Container>
        <h1 data-aos="fade-up">Our Services</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Discover how we can help you achieve your business goals with our expert services.
        </p>
      </Container>
    </section>

    <section className="services-list">
      <Container>
        <Row>
          <Col md={4} data-aos="fade-up">
            <Card className="service-card">
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/uiux.jpg`} />
              <Card.Body>
                <Card.Title>UI & UX</Card.Title>
                <Card.Text>
                "Crafting seamless, intuitive experiences that engage and inspire users."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <Card className="service-card">
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/s2.jpg`} />
              <Card.Body>
                <Card.Title>Mobile App Development</Card.Title>
                <Card.Text>
                "Building innovative mobile solutions for a connected, on-the-go world."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="400">
            <Card className="service-card">
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/s2.png`} />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                "Creating dynamic, responsive websites that captivate and convert visitors."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="cta-section text-center">
      <Container>
        <h2 data-aos="fade-up">Ready to Take Your Business to the Next Level?</h2>
        {/* <Button  size="lg" data-aos="fade-up" data-aos-delay="200">
          Get in Touch
        </Button> */}
      </Container>
    </section>
  </div>
  )
}

export default Services

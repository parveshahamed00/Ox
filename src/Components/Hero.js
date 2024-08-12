import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'aos/dist/aos.css'; // Import AOS styles

const Hero = () => {

  return (
    <section className="hero-section">
  <Container fluid className="d-flex align-items-center justify-content-center pt-5">
    <Row className="w-100 align-items-center">
      <Col md={6}   className="text-white text-center text-md-left p-5">
        <h1
          className="hero-title sm-display-6"
          data-aos="fade-right" // AOS animation type
        >
          Your Digital Future Starts Here
        </h1>
        <p
          className="hero-subtitle"
          data-aos="fade-right"
          data-aos-delay="200" // Delay for the subtitle
        >
          Innovative web solutions tailored for your business success.
        </p>
        <Button
          variant="warning"
          size="lg"
          className="hero-btn"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          Get Started
        </Button>
      </Col>
      <Col md={6}>
        <div
          className="hero-gif"
          data-aos="fade-left" // GIF animation type
        >
          <img src={`${process.env.PUBLIC_URL}/images/hero.png`} alt="Web Solutions" className="img-fluid" />
        </div>
      </Col>
    </Row>
  </Container>
</section>

  )
}

export default Hero

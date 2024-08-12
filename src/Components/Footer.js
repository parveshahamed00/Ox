import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-about">
            <h5>About Us</h5>
            <p>
              We are a leading web solutions company dedicated to delivering top-notch services.
            </p>
          </Col>
          <Col md={4} className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-contact">
            <h5>Contact Info</h5>
            <p><strong>Address:</strong> OX Web Solutions, Tirunelveli, TamilNadu</p>
            <p><strong>Phone:</strong> +91 8870213057</p>
            <p><strong>Email:</strong> afzaloxcodes@gmail.com</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} OX Web Solution. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>

  )
}

export default Footer

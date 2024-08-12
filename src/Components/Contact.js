import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
const Contact = () => {
  return (
    <div className="contact-us-page mt-5">
    <section className="hero-section-c text-center">
      <Container>
        <h1 data-aos="fade-up">Get in Touch</h1>
        <p data-aos="fade-up" data-aos-delay="200" style={{fontStyle:'italic', color:'grey'}}>
          We’d love to hear from you! Reach out with any questions or feedback.
        </p>
      </Container>
    </section>

    <section className="contact-info border border-warning border-3 mt-4">
      <Container>
        <Row>
          <Col md={6} data-aos="fade-right">
            <h2 className='text-primary text-center p-3 '>Contact Information</h2>
            <p><strong>Address:</strong> OX Web Solutions, Tirunelveli, TamilNadu</p>
            <p><strong>Phone:</strong>+91 8870213057</p>
            <p><strong>Email:</strong> afzaloxcodes@gmail.com</p>
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2 className='text-center p-3 '>Send Us a Message</h2>
             <Col className='text-center'>
            <a href="https://www.facebook.com/YourCompanyFB" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com/YourCompanyTW" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://www.instagram.com/YourCompanyIG" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/YourCompanyLI" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
              <a href="https://www.linkedin.com/YourCompanyLI" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="social-icon" />
              </a>
            </a>
          </Col>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="map-section text-center">
      <Container>
        <h2 data-aos="fade-up">Find Us Here</h2>
        <div className="map-container" data-aos="fade-up" data-aos-delay="200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1534702.789142315!2d77.02325167989614!3d8.713967107051758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8432ebbe8b1b1%3A0x872849003b5285d1!2sTirunelveli%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1633475272917!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </section>
  </div>
  )
}

export default Contact

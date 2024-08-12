import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavBar = () => {
  return (
    <Navbar expand="lg" className=" sticky-top  navbar navbar-light bg-light">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            height={50}
            width={90}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll "  />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="ms-auto"
            style={{ maxHeight: "150px" ,fontSize:'25px' , fontFamily:'inherit',fontWeight:'bold'}}
            navbarScroll
          >
            <Nav.Link href="#action1">
              Home
            </Nav.Link>
            <Nav.Link href="#about-section">AboutUs</Nav.Link>
            <Nav.Link href="#services-page">Services</Nav.Link>
            <Nav.Link href="#action4">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

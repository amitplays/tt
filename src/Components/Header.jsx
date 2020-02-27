import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Button } from "react-bootstrap";
import "./Components.css";
import ContactForm from "./ContactForm";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  ApplyBtn = () => {};

  render() {
    return (
      <div className="NavigationBarBody">
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="sm"
          width="40"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="/Home">
            <img
              src="/logo.svg"
              width="30"
              size="sm"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            {" TorontoTechie"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Button href="/ContactForm" size="sm" variant="success">
              Contact Us
            </Button>

            <Nav className="mr-auto" />
            <Nav>
              <Nav.Link href="/FAQs">FaQs</Nav.Link>
              <Nav.Link href="/AboutUs">About Us</Nav.Link>
              <Nav.Link href="/Services">Services</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

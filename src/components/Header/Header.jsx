import React from "react";
import "./Header.css";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img  className="logo" src={logo} alt="" />
            Shayaan
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <li><Link className="nav-item" to='/'>Home</Link></li>
              <li><Link className="nav-item"  to='blogs'>Blogs</Link></li>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

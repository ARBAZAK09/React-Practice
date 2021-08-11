import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navigation1 = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">AK</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/Courses">Courses</NavLink>
            <NavLink to="/Service">Service</NavLink>
            <NavLink to="/Contactus">Contactus</NavLink>
            <NavLink to="/Aboutus">Aboutus</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

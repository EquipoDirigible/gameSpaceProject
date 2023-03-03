import React from 'react'
import {Container , Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
            <Link to="/" className="navbar-brand"> Index </Link>
            <Nav className="me-auto">
                <Link to="/new" className="nav-link"> New </Link> 
            </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavBar;


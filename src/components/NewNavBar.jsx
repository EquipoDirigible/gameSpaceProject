import React from 'react';
//nav copiado de boostrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './stylesheets/NewNavbar.css'
import { Link } from 'react-router-dom';

function NewNavbar() {
  return (
    <Navbar className='navbarContainer' expand="lg" fixed="top" >
      <Container fluid>
        <Navbar.Brand href="#">Game-Space</Navbar.Brand>
        <img src="src\assets\logo-navbar.png" className='LogoGameSpaceNavbar'/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
             <Link to="/" className="navbar-brand">Home</Link>
             <Link to="/new" className="nav-link"> Add Product </Link> 
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NewNavbar;
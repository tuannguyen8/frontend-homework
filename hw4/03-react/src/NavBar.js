import './App.css';
import React from 'react';
//  import {  Link } from "react-router-dom";
import {
  Navbar, 
  Nav,
  Container
} from "react-bootstrap"

export default function navbar(){
  return (
    <Navbar className="navbar-inverse" bg="light" expand="lg">
    <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/houses">Houses</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
        
  );
}

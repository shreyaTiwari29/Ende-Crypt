import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';
function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='Nav'>
        <Container >
          <Navbar.Brand href="#home">EnDe|Crypt</Navbar.Brand>
          <Nav className="me-auto ">
            <div className='SubDiv'>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

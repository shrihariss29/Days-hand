import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb() {
  const location = useLocation();


  const showBrand = location.pathname !== '/';

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {showBrand && (
          <Navbar.Brand className='opname' href="/"><span style={{ color: '#10439f' }}>Day</span><span style={{ color: 'red' }}>s h</span>
          <span style={{ color: '#10439f' }}>and</span></Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="navele" href="Add">Add</Nav.Link>
            <Nav.Link className="navele" href="Subtract">Subtract</Nav.Link>
            <Nav.Link className="navele" href="Count">Count</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Outlet />
    </>
  )
}

export default Navb;

import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
function Navb() {
  const location = useLocation();
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };


  const showBrand = location.pathname !== '/';

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {showBrand && (
          <Navbar.Brand className='opname' href="/"><span style={{ color: '#10439f' }}>Day</span><span style={{ color: 'red' }}>s h</span>
          <span style={{ color: '#10439f' }}>and</span></Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto custom-toggle" onClick={handleToggle}>
            <span className='toggleletters'>{isToggled ? 'X Close' : ' Menu'}</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link id="navele0" className="navele element" href="/">Home</Nav.Link>
            <Nav.Link id="navele1" className="navele element" href="/Subtract">Subtract</Nav.Link>
            <Nav.Link id="navele2" className="navele element" href="/Add">Add</Nav.Link>
            <Nav.Link id="navele3" className="navele element" href="/Count">Count</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Outlet />
    </>
  )
}

export default Navb;

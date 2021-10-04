import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../business.jpg'
import './Header.css'

const Header = () => {
    //NavLink Active Style
    const activeStyle = {
        fontWeight: "bold",
        color: "black",
        textDecoration:"none",
        fontSize:"20px",
        borderRadius:"4px"
        
    }
    return (
        <div>
     <Navbar bg="light" variant="light">
    <Container className="mt-3">
    <NavLink to="/home">
       <img style={{height:"48px"}} src={logo} alt="" /> 
    </NavLink>
    <span>Leader Of EnterprenureShip</span>
    
    {/* NavLink for Route */}
    
    <Nav className="me-auto nav-iteam">
    <NavLink to="/home" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",}} activeStyle={activeStyle} >Home</NavLink>
    
    <NavLink to="/services" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px"}} activeStyle={activeStyle}>Service</NavLink>
    
    <NavLink to="/aboutus" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px"}} activeStyle={activeStyle}>About Us</NavLink>
    
    <NavLink to="/registration" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px"}} activeStyle={activeStyle}>Registration </NavLink>

    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;
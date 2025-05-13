import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice.mjs';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import '../assets/css/style.css';

const MyNavbar = ({ userName, userImage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link as={Link} to="/login" className="custom-button" >Login</Nav.Link>
            <Nav.Link as={Link} to="/" className="custom-button" >Signup</Nav.Link>
            <Nav.Link onClick={handleLogout}  className="custom-button">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

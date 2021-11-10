import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Navigation.css'
const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navigation">
            <Container>
                <Navbar.Brand href="#home">
                    <img className="img-fluid" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" style={{ alignItems: "center" }}>
                        <NavLink className="menu" activeStyle={{
                            fontWeight: "bold",
                        }} to="/home">
                            HOME
                        </NavLink>
                        <NavLink className="menu " activeStyle={{
                            fontWeight: "bold"
                        }} to="/dashboard">
                            DASHBOARD
                        </NavLink>
                        <NavLink className="menu" activeStyle={{
                            fontWeight: "bold"
                        }} to="/login">
                            <button className="btn btn-sm my-btn">
                                LOGIN
                            </button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import { useHistory } from 'react-router';
import './Navigation.css'
const Navigation = () => {
    const { allFirebase } = useAuth();
    const { user, logOut } = allFirebase;
    const history = useHistory();
    const handleLogout = () => {
        logOut(history);
    }
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

                        {user?.email ?
                            <button onClick={handleLogout} className="btn btn-sm my-btn logout-btn">
                                LOGOUT
                            </button>
                            :
                            <NavLink className="menu" activeStyle={{
                                fontWeight: "bold"
                            }} to="/login">
                                <button className="btn btn-sm my-btn">
                                    LOGIN
                                </button>
                            </NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
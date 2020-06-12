import React, {Component} from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./NavLinks.css";
// import { NavLink } from "react-router-dom";

class NavLinks extends Component {
    render() {
        return (    
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/" id="navbar-brand">Cultivate <img src={require('../Images/cultivate.png')} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/plants" >My Plants <FontAwesomeIcon icon={['fas', 'seedling']} /></Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/favorites">Favorites <FontAwesomeIcon icon={['fas', 'heart']} /></NavDropdown.Item>
                            <NavDropdown.Item href="/blogs">My Blogs <FontAwesomeIcon icon={['fas', 'blog']} /></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login">Login <FontAwesomeIcon icon={['fas', 'sign-in-alt']} /></NavDropdown.Item>
                            <NavDropdown.Item href="/signup">Register <FontAwesomeIcon icon={['fas', 'user-plus']} /></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Plants" id="search"/>
                        <Button variant="outline-success"><FontAwesomeIcon icon={['fas', 'search']} /></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default NavLinks;
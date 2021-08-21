import React from 'react';
import {CartWidget} from './CartWidget/CartWidget';
import {Nav, Navbar} from "react-bootstrap";

export const NavBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                    E-Commerce con React
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#productos">Productos</Nav.Link>
                    <Nav.Link href="#cart">Carrito <CartWidget/></Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
        </>
    );
}
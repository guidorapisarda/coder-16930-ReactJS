import React from 'react';
import {CartWidget} from '../CartWidget/CartWidget';
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/home">
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
                    <NavLink className="mx-1 nav-link" to="/products">Productos</NavLink>
                    <NavLink className="mx-1 nav-link" to="/products/remeras">Remeras</NavLink>
                    <NavLink className="mx-1 nav-link" to="/products/calzado">Calzado</NavLink>
                    <NavLink className="mx-1 nav-link" to="/products/pantalones">Pantalones</NavLink>
                    <NavLink className="mx-1 nav-link" to="/ClickTracker">ClickTracker</NavLink>
                    <NavLink className="mx-1 nav-link" to="/Nosotros">Nosotros</NavLink>
                    <NavLink className="mx-1 nav-link" to="/cart">Carrito <CartWidget/></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}
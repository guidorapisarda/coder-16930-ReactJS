import React from 'react';
import {CartWidget} from './CartWidget/CartWidget';

export const NavBar = () => {
    return (
    <>
        <nav>
            <div>
                <h1>ecommerce con React!</h1>
            </div>
            <div>
                <a href="#">Home</a>
                <a href="#">Productos</a>
                <CartWidget/>
            </div>
        </nav>
    </>
    );
}
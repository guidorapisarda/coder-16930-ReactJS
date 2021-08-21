import React from 'react';
import cartLogo from './cart.png';
import './cartcss.css'

export const CartWidget = () => {
    return (
        <>
            <img class="d-inline-block align-top" src={cartLogo} alt="cartLogo" id='img-carrito'/>
        </>
    );
}
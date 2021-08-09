import React from 'react';
import cartLogo from './cart.png';
import styles from './cartcss.css'

export const CartWidget = () => {
    return (
        <>
            <img src={cartLogo} alt="cartLogo" id='img-carrito'/>
        </>
    );
}
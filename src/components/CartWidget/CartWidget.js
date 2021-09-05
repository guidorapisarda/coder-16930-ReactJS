import React,{ useContext } from 'react';
import cartLogo from './cart.png';
import './cartcss.css'
import { CartContext } from '../../Context/CartContext';

import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


export const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext);
    return (
        // <>
        //     <img className={"d-inline-block align-top"} src={cartLogo} alt="cartLogo" id='img-carrito'/>
        // </>
        <Badge color="secondary" badgeContent={cantidadCarrito}>
            <ShoppingCartIcon />{" "}
        </Badge>
    );
}
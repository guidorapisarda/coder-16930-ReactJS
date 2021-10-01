import React,{ useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


export const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext);
    return (
        <Badge color="secondary" badgeContent={cantidadCarrito}>
            <ShoppingCartIcon />{" "}
        </Badge>
    );
}
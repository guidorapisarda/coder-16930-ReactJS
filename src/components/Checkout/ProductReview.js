import { List, ListItem } from '@material-ui/core';
import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

export const ProductReview = () => {

    const { carrito } = useContext(CartContext);

    return (
    <>
        <div className={"col-md-5 col-lg-4 order-md-last overflow-hidden"}>
            <List>
                <ListItem alignItems={'center'}>asdasdasdasdasd</ListItem>
                <ListItem alignItems={'center'}>123</ListItem>
                <ListItem alignItems={'center'}>a</ListItem>
                <ListItem alignItems={'center'}>d</ListItem>
            </List>
        </div>
    </>);
}
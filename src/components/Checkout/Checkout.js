import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Redirect } from 'react-router-dom';
import { BuyerInfoForm } from './BuyerInfoForm';
import { ProductReview } from './ProductReview';
export const Checkout = () => {

    const {carrito, cantidadCarrito, vaciarCarrito,totalCarrito} = useContext(CartContext);

    return (
        <>
            <div className={"container"}>
                <div className={"py-5 text-center"}>
                    <h2>Formulario de Compra</h2>
                </div>
                <div className={"row g-5"}>
                    <BuyerInfoForm/>
                    <ProductReview/>
                </div>
            </div>
            {// ?carrito.map(prod =>
            //     <div key={prod.id}>
            //     <h3>{prod.nombre}</h3>
            //     <p>Cantidad: {prod.cantidad}</p>
            //     <p>Precio: ${prod.precio * prod.cantidad}</p>
            //     {/* <Trashicon onClick={() => eliminarDelCarrito(prod.id)}/> */}
            // </div>)
            }
        </>
    );


}
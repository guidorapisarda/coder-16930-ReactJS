import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Redirect } from 'react-router-dom';
import { BuyerInfoForm } from './BuyerInfoForm';
import { ProductReview } from './ProductReview';
import Swal from 'sweetalert2'
import { generarOrden } from '../../helpers/funcionesDB';


export const Checkout = () => {

    const { carrito, vaciarCarrito, totalCarrito} = useContext(CartContext);

    const generateOrder = (values) => {
        
        generarOrden(values, carrito, totalCarrito())
            .then( res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Su compra fue registrada!',
                    text: `Guarde este identificador: ${res}`,
                    confirmButtonText: 'Genial!'
                });
                vaciarCarrito();
            })
            .catch( err => {
                console.log(err)
            });
    }

    return (
        <>
            {!carrito.length
                ? <Redirect to="/" />
                :
                <div className={"container"}>
                    <div className={"py-5 text-center"}>
                        <h2>Formulario de Compra</h2>
                    </div>
                    <div className={"row g-5"}>
                        <h4>Resumen del carrito</h4>
                        <ProductReview/>
                        <BuyerInfoForm createOrder={generateOrder}/>
                    </div>
                </div>}
        </>
    );


}
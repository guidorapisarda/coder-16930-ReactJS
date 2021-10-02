import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { ProductReview } from '../Checkout/ProductReview';
export const CartScreen = () => {

    const {vaciarCarrito,totalCarrito} = useContext(CartContext);

    return (
        <div>
            <h1>Resumen de compra</h1>

                <ProductReview renderTrash={true}/>
            <hr/>
            <p>Total: ${totalCarrito()}</p>

            <hr/>

            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>

            <Link to="/checkout">
                <button className="btn btn-success mx-3">
                    Finalizar compra
                </button>
            </Link>

        </div>
    )
}
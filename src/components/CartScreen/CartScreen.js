import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import Trashicon from '@material-ui/icons/DeleteRounded';
export const CartScreen = () => {

    const {carrito, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)

    return (
        <div>
            <h1>Resumen de compra</h1>

            {carrito.map(prod => (
                <div key={prod.id}>
                    <h3>{prod.nombre}</h3>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Precio: ${prod.precio * prod.cantidad}</p>
                    <Trashicon onClick={() => eliminarDelCarrito(prod.id)}/>
                </div>
            ))}

            <hr/>

            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}
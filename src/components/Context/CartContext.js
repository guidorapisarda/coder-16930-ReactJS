import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]) //comienzo con el carrito vacio.
    const [cantidadCarrito,setCantidadCarrito] = useState(0);

    //Agrego un producto al carrito, pero fijandome de reemplazarlo si existe.
    const agregarAlCarrito = (prod) => {
        let exists = carrito.find (elem => elem.id === prod.id);

        //categoria, id, nombre, desc, img, precio, cantidad,stock

        if (!exists){
            console.log('El producto no existia. Agregandolo al carrito...');
            setCarrito([
                ...carrito,
                prod
            ]);
            if(cantidadCarrito > 0)
                    setCantidadCarrito(prod.cantidad + cantidadCarrito);
                else
                    setCantidadCarrito(prod.cantidad);
        }else{
            if ( (exists.stock - (exists.cantidad + prod.cantidad)) >= 0){
                exists.cantidad += prod.cantidad;
                console.log(carrito);
                if(cantidadCarrito > 0)
                    setCantidadCarrito(exists.cantidad + cantidadCarrito);
                else
                    setCantidadCarrito(exists.cantidad);
            }
        }
    }
    const eliminarDelCarrito = (id) => {
        let actual = carrito.find(prod => prod.id == id);
        console.log(actual);
        if(actual){
            setCantidadCarrito(cantidadCarrito - actual.cantidad);
        }
        setCarrito( carrito.filter(prod => prod.id !== id) );
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const isInCart = (id) => {
        return carrito.some(el => el.id === id);
    }

    return (
        <CartContext.Provider value={{carrito, isInCart, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}
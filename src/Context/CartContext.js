import { createContext, useState, useEffect} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]) //comienzo con el carrito vacio.
    const [cantidadCarrito,setCantidadCarrito] = useState(0);

    useEffect( () => {
        let cant =carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
        setCantidadCarrito(cant);
    },[carrito]);

    //Agrego un producto al carrito, pero fijandome de reemplazarlo si existe.
    const agregarAlCarrito = (prod) => {
        let exists = carrito.find (elem => elem.id === prod.id);

        if (!exists){
            console.log('El producto no existia. Agregandolo al carrito...');
            setCarrito([
                ...carrito,
                prod
            ]);

        }else{
            if ( (exists.stock - (exists.cantidad + prod.cantidad)) >= 0){
                exists.cantidad += prod.cantidad;
                setCarrito([
                    ...carrito
                ]);
                console.log(carrito);
            }
        }
    }
    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id));
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
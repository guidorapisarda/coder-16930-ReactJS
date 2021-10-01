import React,{ useState,useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import {Counter} from '../Counter/Counter'

export const ItemDetail = ({id,categoria,nombre,precio,desc,img,talle,stock}) => {
    
    const {agregarAlCarrito, isInCart} = useContext(CartContext);
    const [cantidad,setCantidad] = useState(1);

    // agregar al carrito
    const handleAdd = () => {
        agregarAlCarrito({
            categoria, id, nombre, desc, img, precio, cantidad,stock
        });
    }

    return (
        <div className="card col-4">
            <img src={img} alt={nombre}/>
            <h3>{nombre}</h3>
            <p><strong>Descripcion: </strong>{desc}</p>
            <p><strong>Precio: </strong>${precio}</p>
            <p><strong>Categoria: </strong>{categoria}</p>
            <p><strong>Talle: </strong>{talle}</p>
            <Counter 
                max={stock} 
                cantidad={cantidad} 
                setCantidad={setCantidad} 
                agregar={handleAdd} 
                agregado={isInCart(id)}
            />

            <Link to={`/products/${categoria}`} className="btn btn-primary">Volver</Link>
        </div>
    );
}
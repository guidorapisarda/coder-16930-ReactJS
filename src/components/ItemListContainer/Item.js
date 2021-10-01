import React from 'react';
import {Link} from 'react-router-dom';

//el elemento recibe, y descompone, los objetos img, nombre, descripcion, y precio
export const Item = ( {img,nombre,desc,precio,categoria,talle,id} ) => {
    return (
        <div className="card col-4">
            <img src={img} alt={nombre}/>
            <h3>{nombre}</h3>
            <p><strong>Descripcion: </strong>{desc}</p>
            <p><strong>Precio: </strong>${precio}</p>
            <p><strong>Categoria: </strong>{categoria}</p>
            <p><strong>Talle: </strong>{talle}</p>
            <Link to={`/item/${id}`} className="btn btn-outline-primary">Ver más</Link>
        </div>
    )
}
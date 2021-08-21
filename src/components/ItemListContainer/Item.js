import React from 'react';

//el elemento recibe, y descompone, los objetos img, nombre, descripcion, y precio
export const Item = ( {img,nombre,desc,precio} ) => {
    return (
        <div className="card col-4">
            <img src={img} alt={nombre}/>
            <h3>{nombre}</h3>
            <p>{desc}</p>
            <p>{precio}</p>
        </div>
    )
}
import React from 'react';
import {Link} from 'react-router-dom';

export const ItemDetail = ({id,categoria,nombre,precio,desc,img,talle}) => {
    //const [cantidad,setCantidad] = useState(1);

    return (
        <div className="card col-4">
            <img src={img} alt={nombre}/>
            <h3>{nombre}</h3>
            <p><strong>Descripcion: </strong>{desc}</p>
            <p><strong>Precio: </strong>${precio}</p>
            <p><strong>Categoria: </strong>{categoria}</p>
            <p><strong>Talle: </strong>{talle}</p>
            <p><strong>Cantidad:</strong> 1</p>

            <Link to={`/products/${categoria}`} className="btn btn-primary">Volver</Link>
        </div>
    );
}
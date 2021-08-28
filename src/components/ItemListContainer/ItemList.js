import React from 'react';
import {Item} from './Item';

//si no recibo nada, por default tomo que productos esta vacio. EL fin es evitar errores
export const ItemList = ({productos = []}) => {

    return (
        <section className="container my-5">
            <h2>Productos</h2>
            <hr/>
            <div className="row">
                {
                productos && productos.length > 0
                ? productos.map(prod => <Item key={prod.id} {...prod}/>)
                : <div>No existen productos cargados en el sistema...</div>
                }
            </div>
        </section>
    );

}
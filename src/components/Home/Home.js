import React, { useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
export const Home = () => {
    return (
    <>
        <p>Bienvenido! Las categorias de productos disponibles son:</p>
        <ul>
            <li><Link to={`/products/remeras`} >Remeras</Link></li>
            <li><Link to={`/products/calzado`} >Calzado</Link></li>
            <li><Link to={`/products/pantalones`} >Pantalones</Link></li>
        </ul>
        <p>O bien, puede listar todos los productos disponibles:</p>
        <ul><li><Link to={`/products`}>Todos los productos</Link></li></ul>
    </>);
}
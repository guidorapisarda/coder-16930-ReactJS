import React, { useEffect, useState  } from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from './ItemDetail'
import { pedirDatos } from '../helpers/pedirDatos'

export const ItemDetailContainer = () => {

    const {id} = useParams();

    console.log(id);

    const [Item, setItem] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect( () => {
        setLoading(true);

        pedirDatos()
            .then(res => {
                setItem(res.find(elem => elem.id === Number(id)))
            })
            .catch(err => {console.log('Ocurrio un error buscando el producto: '+err)})
            .finally(()=> { setLoading(false)});
    },[id]);

    return (
        <div>
            {loading
            ? <h2>Cargando...</h2>
            :<ItemDetail {...Item}/>
            }
        </div>
    );

}
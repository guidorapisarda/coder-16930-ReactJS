import React, { useEffect, useContext,useState  } from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from './ItemDetail'
import { pedirDatos } from '../helpers/pedirDatos'
import { UIContext } from '../../Context/UIContext';
import Loader from 'react-spinners/BarLoader';

export const ItemDetailContainer = () => {

    const {id} = useParams();

    const [Item, setItem] = useState(null);
    const {loading, setLoading} = useContext(UIContext);

    useEffect( () => {
        pedirDatos()
            .then(res => {
                setItem(res.find(elem => elem.id === Number(id)))
            })
            .catch(err => {console.log('Ocurrio un error buscando el producto: '+err)})
            .finally(()=> {
                setLoading(false);
            });
    },[id,setLoading]);

    return (
        <div>
            {loading
            ? <Loader loading/>
            :<ItemDetail {...Item}/>
            }
        </div>
    );

}
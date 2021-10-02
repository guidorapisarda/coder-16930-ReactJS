import React, { useEffect, useContext,useState  } from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from './ItemDetail'
import { UIContext } from '../../Context/UIContext';
import { Loader } from '../Loader/Loader';
import { obtenerElemento } from '../../helpers/funcionesDB';

export const ItemDetailContainer = () => {

    const {id} = useParams();

    const [Item, setItem] = useState(null);
    const {loading,setLoading} = useContext(UIContext);

    useEffect( () => {
        obtenerElemento('productos',id)
            .then(res => setItem(res))
            .catch(err => {console.log('Ocurrio un error buscando el producto: '+err)})
            .finally(()=> {
                setLoading(false);
            });
    },[id,setLoading]);

    return (
        <div>
            {loading
            ? <Loader loading={loading}/>
            :<ItemDetail {...Item}/>
            }
        </div>
    );

}
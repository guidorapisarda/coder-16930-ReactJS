import React, { useEffect, useState  } from 'react';
import { useParams } from 'react-router-dom';
import {pedirDatos} from '../helpers/pedirDatos'
import { Loader } from '../Loader/Loader';
import {ItemList} from './ItemList'

export const ItemListContainer = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);

    const {catFilter} = useParams();

    useEffect( () => {
        setLoading(true);

        pedirDatos()
            .then(res => {
                if(catFilter)
                    res = res.filter(element => element.categoria === catFilter)
                setData(res)})
            .catch(err => console.log(err))
            .finally( () => {setLoading(false)});
    },[catFilter]);

    return (
        <>
            {loading
            ? <Loader loading/>
            : <ItemList productos={data}/>}
        </>
    );
}
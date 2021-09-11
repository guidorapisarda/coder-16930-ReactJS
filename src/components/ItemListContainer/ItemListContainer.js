import React, { useEffect, useState,useContext  } from 'react';
import { useParams } from 'react-router-dom';
import { UIContext } from '../../Context/UIContext';
import {pedirDatos} from '../../helpers/pedirDatos'
import { Loader } from '../Loader/Loader';
import {ItemList} from './ItemList'

export const ItemListContainer = () => {
    const [data,setData] = useState([]);
    const {loading, setLoading} = useContext(UIContext);

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
    },[catFilter,setLoading]);

    return (
        <>
            {loading
            ? <Loader loading/>
            : <ItemList productos={data}/>}
        </>
    );
}
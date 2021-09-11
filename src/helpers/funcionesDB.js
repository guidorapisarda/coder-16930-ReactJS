import {collection, getDocs,getDoc,doc,query,where} from 'firebase/firestore';
import { db } from '../Firebase/config';

export const generarOrden = async () => {

}

export const obtenerElemento = (coll,id) => {

    return new Promise ( async (resolve,reject) => {
        try{
            const elemento = await getDoc(doc(db, coll, id));
            return resolve({id,...elemento.data()});
        }catch(err){
            return reject(`Ocurrió un error al buscar el documento en la colección ${coll} con el id ${id}\n${err}`);
        }
    });
}

export const obtenerElementos =  (coll,filter) => {
    return new Promise ( async (resolve,reject) => {
        const col = collection(db,coll);
        try {
            let ColleccionElementos;
            if(filter){
                let q = query(col, where('categoria','==',filter));
                ColleccionElementos = await getDocs(q);
            }
            else
                ColleccionElementos = await getDocs(col);
            const elementos = ColleccionElementos.docs.map(doc => {
                let id= doc.id;
                let info = doc.data();
                return {id,...info};
            });
            return resolve(elementos);
        } catch (err){
            return reject('Ocurrió un error al obtener todos los productos: '+err);
        }
    });
}
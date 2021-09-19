import {collection, getDocs,getDoc,doc,query,where,writeBatch,Timestamp,addDoc} from 'firebase/firestore';
import { db } from '../Firebase/config';

export const generarOrden = async (buyer, carrito, total) => {

    return new Promise ( async (resolve,reject) => {

        const batch = writeBatch(db);
        
        const newOrder = {
            buyer: buyer,
            items: carrito,
            total: total,
            date: Timestamp.fromDate(new Date())
        }

        //lo que obtengo aca es un array de promesas, porque al ser una tarea asincronica, hay que esperar a que finalicen. Se ejecutan las consultas en paralelo.
        let productos = carrito.map ( prod => obtenerElemento('productos',prod.id).then(el => el) );

        //Aca espero a que Firebase me termine de responder.
        productos = await Promise.all(productos); 

        const outOfStock = []

        productos.forEach(async prod => {
            const itemInCart = carrito.find(el => el.id === prod.id);
            if (prod.stock >= itemInCart.cantidad ) {
                let updatedStock = prod.stock-itemInCart.cantidad;
                batch.update(prod.ref,{stock: updatedStock});
            } else {
                outOfStock.push({id: prod.id})
            }
        });

        if (outOfStock.length == 0){

            const orderRef = await addDoc(collection(db, "orders"), newOrder);
            batch.commit();
            console.log(orderRef.id);
            resolve(orderRef.id);

        }else{
            console.log('productos sin stock: '+outOfStock);
            reject({sinStock: outOfStock});
        }
    });
}

export const obtenerElemento = (coll,id) => {

    return new Promise ( async (resolve,reject) => {
        try{
            const elemento = await getDoc(doc(db, coll, id));
            let ref = elemento.ref;
            return resolve({id,ref,...elemento.data()});
        }catch(err){
            return reject(`Ocurrió un error al buscar el documento en la colección ${coll} con el id ${id}\n${err}`);
        }
    });

}

export const obtenerElementosByCategoria =  (coll,filter) => {
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
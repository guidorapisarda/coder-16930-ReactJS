import React, { useContext,useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Redirect } from 'react-router-dom';
import { BuyerInfoForm } from './BuyerInfoForm';
import { ProductReview } from './ProductReview';
import Trashicon from '@material-ui/icons/DeleteRounded';
import Swal from 'sweetalert2'
import { generarOrden } from '../../helpers/funcionesDB';


export const Checkout = () => {

    const { carrito, cantidadCarrito, vaciarCarrito, totalCarrito, eliminarDelCarrito } = useContext(CartContext);

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: 0,
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (values.nombre.length > 3 && values.email.length > 3 && values.tel.length > 5) {
            generarOrden(values, carrito, totalCarrito())
                .then( res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Su compra fue registrada!',
                        text: `Guarde este identificador: ${res}`,
                        confirmButtonText: 'Genial!'
                    });
                    vaciarCarrito();
                })
                .catch( err => {
                    console.log(err)
                });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Campos inválidos',
                text: 'Revise su información'
              })
        }


    }

    return (
        <>
            <div className={"container"}>
                <div className={"py-5 text-center"}>
                    <h2>Formulario de Compra</h2>
                </div>
                <div className={"row g-5"}>
                    <ProductReview/>
                    <BuyerInfoForm/>
                </div>
            </div>
            <hr/>
            <div>
                <h2>Checkout</h2>
                <hr />

                {!carrito.length
                    ? <Redirect to="/" />
                    :

                    <div>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={values.nombre}
                                onChange={handleInputChange}
                                name="nombre"
                                required
                            />
                            <input
                                type="tel"
                                value={values.tel}
                                onChange={handleInputChange}
                                name="tel"
                                required
                            />
                            <input
                                type="email"
                                value={values.email}
                                onChange={handleInputChange}
                                name="email"
                                required
                            />
                            <button type="submit">Comprar!</button>
                        </form>
                    </div>
                }

            </div>

        </>
    );


}
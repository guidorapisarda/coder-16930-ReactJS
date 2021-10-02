import React, {useState} from 'react';
import validator from 'validator'; 

export const BuyerInfoForm = ({createOrder}) => {

    const def = {
        Nombre: { value: '', isValid: true, message: '' },
        Apellido: { value: '', isValid: true, message: '' },
        Email: { value: '', isValid: true, message: '' },
        Direccion: { value: '', isValid: true, message: '' },
    };

    const [state, setState] = useState({...def});


    let resetForm = () => {
        setState({...def});
        resetValidationStates();
    }

    let onSubmit = (e) => {
        e.preventDefault(); 
        e.stopPropagation();

        if (formIsValid()) {
            let buyer = {
                Nombre: state.Nombre.value,
                Apellido: state.Apellido.value,
                Email: state.Email.value,
                Direccion: state.Direccion.value
            }
            createOrder(buyer);
        }
    }

    let onChange = (e) => {
        const newState = {
            ...state,
            [e.target.name]: {
                ...state[e.target.name],
                value: e.target.value,
            }
        };
        setState(newState);
    }

    let onBlur = () => {
        resetValidationStates();
    }

    let formIsValid = () => {
        const Nombre = { ...state.Nombre };
        const Apellido = { ...state.Apellido };
        const Email = { ...state.Email };
        const Direccion = { ...state.Direccion };
        let isGood = true;

        if (!validator.isLength(Nombre.value, 2, 20)) {
            Nombre.isValid = false;
            Nombre.message = 'El nombre no puede ser menor a 4 caracteres ni mayor a 20.';
            isGood = false;
        }

        if (!validator.isEmail(Email.value)) {
            Email.isValid = false;
            Email.message = 'Ingrese un email valido.';
            isGood = false;
        }

        

        if (!isGood) {
            setState({
                Nombre,
                Apellido,
                Email,
                Direccion
            });
        }

        return isGood;
    }

    let resetValidationStates = () => {

        const newState = JSON.parse(JSON.stringify(state));
        
        Object.keys(newState).map(key => {
            if (newState[key].hasOwnProperty('isValid')) {
                newState[key].isValid = true;
                newState[key].message = '';
            }
            return key;
        });
        setState(newState);
    }

    return (
        <div className="container">
            <h4>Datos personales</h4>
            <form className="form-signin" onSubmit={onSubmit}>
                
                <div>
                    <input
                        type="text"
                        name="Email"
                        className="form-control"
                        placeholder="Dirección de email"
                        value={state.Email.value}
                        onChange={onChange}
                        onBlur={onBlur}
                        autoFocus
                    />
                    <span className="help-block">{state.Email.message}</span>
                </div>

                <div>
                    <input
                        type="text"
                        name="Nombre"
                        className="form-control"
                        placeholder="Nombre"
                        value={state.Nombre.value}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                    <span className="help-block">{state.Nombre.message}</span>
                </div>

                <div>
                    <input
                        type="text"
                        name="Apellido"
                        className="form-control"
                        placeholder="Apellido"
                        value={state.Apellido.value}
                        onChange={onChange}
                    />
                    <span className="help-block">{state.Apellido.message}</span>
                </div>

                <div>
                    <input
                        type="text"
                        name="Direccion"
                        className="form-control"
                        placeholder="Dirección de entrega"
                        value={state.Direccion.value}
                        onChange={onChange}
                    />
                    <span className="help-block">{state.Direccion.message}</span>
                </div>

                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                >
                    Realizar pedido
                </button>

                <button onClick={resetForm} className="btn btn-lg btn-primary btn-block">Vaciar Formulario</button>
            </form>
        </div>
    );
}
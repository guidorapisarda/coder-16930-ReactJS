import { Input } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import React, { useContext, useState, setState, useEffect } from 'react';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { classNames } from 'classnames'; 
import validator from 'validator'; 

export const BuyerInfoForm = () => {
    const [validated, setValidated] = useState(false);

    const def = {
        Nombre: { value: '', isValid: true, message: '' },
        Apellido: { value: '', isValid: true, message: '' },
        Email: { value: '', isValid: true, message: '' },
        Direccion: { value: '', isValid: true, message: '' },
    };

    const [state, setState] = useState({...def});


    let resetForm = () => {
        setState(...def);
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    let onSubmit = (e) => {
        e.preventDefault();
        // reset states before the validation procedure is run.
        //resetValidationStates();
        console.log(state.Nombre.message)
        // run the validation, and if it's good move on.
        if (formIsValid()) {
            // form processing here....
            alert('formulario valido!')
        }
    }

    let onChange = (e) => {
        console.log(state[e.target.name])
        const newState = {
            ...state,
            [e.target.name]: {
                ...state[e.target.name],
                value: e.target.value,
            }
        };
        setState(newState);
    }

    let formIsValid = () => {
        const Nombre = { ...state.Nombre };
        const Apellido = { ...state.Apellido };
        const Email = { ...state.Email };
        const Direccion = { ...state.Direccion };
        let isGood = true;

        if (!validator.isEmail(Email.value)) {
            Email.isValid = false;
            Email.message = 'Not a valid email address';
            isGood = false;
        }

        if (!validator.isLength(Nombre.value, 2, 20)) {
            Nombre.isValid = false;
            Nombre.message = 'El nombre no puede ser menor a 4 caracteres ni mayor a 20.';
            isGood = false;
        }

        console.log(isGood);

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

    // let resetValidationStates = () => {
    //     // make a copy of everything in state
    //     const state = JSON.parse(JSON.stringify(state));
        
    //     Object.keys(state).map(key => {
    //         if (state[key].hasOwnProperty('isValid')) {
    //             state[key].isValid = true;
    //             state[key].message = '';
    //         }
    //     });
    //     console.log(state)
    //     setState(state);
    //     console.log('se realizó el reset')
    // }

    useEffect(() => {

        const newState = JSON.parse(JSON.stringify(state));
        let changed = false;
        Object.keys(newState).map(key => {
            if (newState[key].hasOwnProperty('isValid') && newState[key].isValid === false) {
                newState[key].isValid = true;
                newState[key].message = '';
                changed=true;
            }
        });
        if(changed){
            console.log(newState)
            setState(newState);
            console.log('se realizó el reset')
        }

    },[state])

    return (
        <div className="container">
            <form className="form-signin" onSubmit={onSubmit}>
                <h2 className="form-signin-heading">Create Account</h2>

                <div className={{ 'has-error': !state.Email.isValid }}>
                    <input
                        type="text"
                        name="Email"
                        className="form-control"
                        placeholder="Dirección de email"
                        value={state.Email.value}
                        onChange={onChange}
                        autoFocus
                    />
                    <span className="help-block">{state.Email.message}</span>
                </div>

                <div className={{ 'has-error': !state.Nombre.isValid }}>
                    <input
                        type="text"
                        name="Nombre"
                        className="form-control"
                        placeholder="Nombre"
                        value={state.Nombre.value}
                        onChange={onChange}
                    />
                    <span className="help-block">{state.Nombre.message}</span>
                </div>

                <div className={{ 'has-error': !state.Apellido.isValid }}>
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

                <div className={{ 'has-error': !state.Direccion.isValid }}>
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
                    Create Account
                </button>
            </form>
        </div>
    );
}


    // return (
    //     <>
    //         <Form noValidate validated={validated} onSubmit={handleSubmit}>
    //             <Row className="mb-3">
    //                 <Form.Group as={Col} md="4" controlId="validationCustom01">
    //                     <Form.Label>First name</Form.Label>
    //                     <Form.Control
    //                         required
    //                         type="text"
    //                         placeholder="First name"
    //                         defaultValue="Mark"
    //                     />
    //                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //                 </Form.Group>
    //                 <Form.Group as={Col} md="4" controlId="validationCustom02">
    //                     <Form.Label>Last name</Form.Label>
    //                     <Form.Control
    //                         required
    //                         type="text"
    //                         placeholder="Last name"
    //                         defaultValue="Otto"
    //                     />
    //                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //                 </Form.Group>
    //                 <Form.Group as={Col} md="4" controlId="validationCustomUsername">
    //                     <Form.Label>Username</Form.Label>
    //                     <InputGroup hasValidation>
    //                         <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
    //                         <Form.Control
    //                             type="text"
    //                             placeholder="Username"
    //                             aria-describedby="inputGroupPrepend"
    //                             required
    //                         />
    //                         <Form.Control.Feedback type="invalid">
    //                             Please choose a username.
    //                         </Form.Control.Feedback>
    //                     </InputGroup>
    //                 </Form.Group>
    //             </Row>
    //             <Row className="mb-3">
    //                 <Form.Group as={Col} md="6" controlId="validationCustom03">
    //                     <Form.Label>City</Form.Label>
    //                     <Form.Control type="text" placeholder="City" required />
    //                     <Form.Control.Feedback type="invalid">
    //                         Please provide a valid city.
    //                     </Form.Control.Feedback>
    //                 </Form.Group>
    //                 <Form.Group as={Col} md="3" controlId="validationCustom04">
    //                     <Form.Label>State</Form.Label>
    //                     <Form.Control type="text" placeholder="State" required />
    //                     <Form.Control.Feedback type="invalid">
    //                         Please provide a valid state.
    //                     </Form.Control.Feedback>
    //                 </Form.Group>
    //                 <Form.Group as={Col} md="3" controlId="validationCustom05">
    //                     <Form.Label>Zip</Form.Label>
    //                     <Form.Control type="text" placeholder="Zip" required />
    //                     <Form.Control.Feedback type="invalid">
    //                         Please provide a valid zip.
    //                     </Form.Control.Feedback>
    //                 </Form.Group>
    //             </Row>
    //             <Form.Group className="mb-3">
    //                 <Form.Check
    //                     required
    //                     label="Agree to terms and conditions"
    //                     feedback="You must agree before submitting."
    //                     feedbackType="invalid"
    //                 />
    //             </Form.Group>
    //             <Button type="submit">Submit form</Button>
    //         </Form>
    //     </>);
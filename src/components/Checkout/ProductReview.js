import { List, ListItem } from '@material-ui/core';
import React, { useContext } from 'react';
import { Row,ListGroup,Card, CardGroup } from 'react-bootstrap';
import { CartContext } from '../../Context/CartContext';

export const ProductReview = () => {

    const { carrito } = useContext(CartContext);

    return (
    <container>
        <div>
            <Row xs={1} md={2} className="g-4 justify-content-md-center">
                <CardGroup>
                    {carrito.map(element => 
                    // <ListGroupItem key={element.id} as="li" classname="display: inline-block">
                    //     <h5>{element.nombre}</h5>
                    //     <p>Cantidad: {element.cantidad}</p>
                    //     <p>Precio unitario: ${element.precio}</p>
                    //     <p>Subtotal: ${element.precio * element.cantidad}</p>
                    // </ListGroupItem>)
                    <Card key={element.id}  className="mx-1">
                        <Card.Img variant="top" src={element.img} />
                        <Card.Body>
                            <Card.Title className="text-center">{element.nombre}</Card.Title>
                            <Card.Text>
                                Cantidad: {element.cantidad}
                                Precio unitario: ${element.precio}
                                Subtotal: ${element.precio * element.cantidad} 
                            </Card.Text>
                        </Card.Body>
                    </Card>)} 
                </CardGroup>
                
            </Row>
        </div>
    </container>);
}
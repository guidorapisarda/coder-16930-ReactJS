import React, { useContext } from 'react';
import { Row,Card, CardGroup } from 'react-bootstrap';
import { CartContext } from '../../Context/CartContext';
import Trashicon from '@material-ui/icons/DeleteRounded';

export const ProductReview = ({renderTrash}) => {

    const { carrito,eliminarDelCarrito } = useContext(CartContext);

    return (
        <div className={'container'}>
            <Row xs={1} md={2} xl={2} className="g-4 justify-content-center">
                <CardGroup>
                    {carrito.map(element => 
                    <Card key={element.id}  className="mx-1" >
                        <Card.Img src={element.img}/>
                        <Card.Body>
                            <Card.Title className="text-center">{element.nombre}</Card.Title>
                            <Card.Text>
                                    Cantidad: {element.cantidad}<br/>
                                    Precio unitario: ${element.precio}<br/>
                                    Subtotal: ${element.precio * element.cantidad}<br/>
                                
                                    {renderTrash
                                    ?<Trashicon onClick={() => eliminarDelCarrito(element.id)}/>
                                    :<></>
                                    }
                            </Card.Text>
                        </Card.Body>
                    </Card>)} 
                </CardGroup>
                
            </Row>
        </div>);
}
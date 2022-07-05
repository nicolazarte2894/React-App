import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { faBorderNone } from '@fortawesome/free-solid-svg-icons'

export default function Cart() {
    //Seteo el contexto
    const { cart, clearCart } = useCartContext()
    return (
        <div className ='d-flex flex-column align-items-center'>
            <ul style={{listStyle:'none'}} className ='d-flex flex-column justify-content-center'>
                {
                    cart.map(item => 
                        <li key={item.id} className='d-flex justify-content-center'>
                            <Container fluid="md" className='w-50 mt-4 mx-2 d-flex justify-content-center border border-warning rounded p-3'>
                                <Row>
                                    <Col><img src={item.img} className='w-100'/></Col>
                                    <Col>
                                        <h3>{item.name}</h3>
                                        <p>$ {item.price}</p>
                                        <p>Cantidad: {item.cantidad}</p>
                                        <p>Subtotal: $ {item.price*item.cantidad}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </li>
                    )
                }
            </ul>
            <Button onClick = {clearCart} className='w-25 '>Vaciar Carrito</Button>
        </div>
    )
}


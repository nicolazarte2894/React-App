import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Cart() {
    //Seteo el contexto
    const { cart,clearCart ,deleteItem ,totalPrice, iconCart} = useCartContext()
    return (
        <div className ='d-flex flex-column align-items-center'>
            <ul style={{listStyle:'none'}} className ='d-flex flex-column justify-content-center'>
                {
                    cart.map(item => 
                        <li key={item.id} className='d-flex justify-content-center align-items-center'>
                            <Container fluid="md" className='w-50 mt-4 mx-2 d-flex justify-content-center border border-warning rounded p-3'>
                                <Row className='d-flex justify-content-between align-items-center'>
                                    <Col xs='4'><img src={item.img} className='w-100' /></Col>
                                    <Col xs='6'>
                                        <h3>{item.name}</h3>
                                        <p>$ {item.price}</p>
                                        <p>Cantidad: {item.cantidad}</p>
                                        <p>Subtotal: $ {item.price*item.cantidad}</p>
                                    </Col>
                                    <Col className='d-flex justify-content-center w-100'>
                                        <Button onClick={(item)=>deleteItem(item.id)} variant='danger'>X</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </li>
                    )
                }
            </ul>
            {
                //RENDERING CONDICIONAL
                cart.length<1 ? 
                    <>
                    <h2>El Carrito está Vacío</h2>
                    <Link to='/'>
                        <Button className='w-100 ' variant='warning'>Ir a comprar</Button>
                    </Link>
                    </>
                :
                    <>
                        <h2>PRECIO TOTAL: $ {totalPrice()}</h2>
                        <div className='d-flex '>
                            <Button onClick = {clearCart}  variant='danger' >Vaciar Carrito</Button>
                            <Link to='/'>
                                <Button onClick = {clearCart} variant='primary'>Terminar compra</Button>
                            </Link>
                        </div>
                        <p>Cantidad de articulos agregados {iconCart()}</p>
                    </>
            }
        </div>
    )
}


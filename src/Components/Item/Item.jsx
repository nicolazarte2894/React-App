import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import "./Item.css"

const Item = ({productos}) => {
    return (
        <>
            <div className ="item-list">
                {productos.map(producto=>
                                <Card className="card-item" style={{ width: '18rem' }} key={producto.id}>
                                        <Card.Img variant="top" src={producto.img} />
                                        <Card.Body className="card-body">
                                            <Card.Title>{producto.name}</Card.Title>
                                                <Card.Text>
                                                $ {producto.price}
                                                </Card.Text>
                                                <Card.Text>
                                                {producto.description}
                                                </Card.Text>
                                            <ItemCount stock = {10} initial={1}/>
                                            <Button variant="success">Más detalle</Button>    
                                        </Card.Body>
                                </Card>                         
                )}
            </div>
        </>    
    )
}

export default Item

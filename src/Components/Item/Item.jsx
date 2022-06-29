import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({prod}) => {
    return (
        <>
            <Card className="card-item" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.img} />
                <Card.Body className="card-body">
                    <Card.Title>{prod.name}</Card.Title>
                        {/* <Card.Text>
                        $ {prod.price}
                        </Card.Text>
                    <ItemCount stock = {10} initial={1}/> */}
                    <Link to={`/detalle/${prod.id}`}>    
                        <Button variant="outline-warning">Ver detalle</Button>    
                    </Link>
                </Card.Body>
            </Card>        
        </>    
    )
}

export default Item

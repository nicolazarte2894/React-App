import React from 'react'

import ItemCount from '../ItemCount/ItemCount'
import '../Item/Item.css'


const ItemDetail = ({product}) => {
    return (
            <>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={product.img} alt="" className='w-100' />
                    </div>
                    <div className='col-md-6'>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>$ {product.price}</p>
                    <ItemCount stock = {10} initial={1}/>
                    </div>
                </div>
                {/* <Card className="card-item" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={prod.img} />
                    <Card.Body className="card-body">
                        <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                            $ {product.price}
                            </Card.Text>
                            <Card.Text>
                            $ {product.description}
                            </Card.Text>
                        <ItemCount stock = {10} initial={1}/>
                    </Card.Body>
                </Card>         */}
            </>
    )
}

export default ItemDetail
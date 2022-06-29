import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const GoToCart = () => {
    return (
        <>
            <Link to='/cart'>
                <Button variant="outline-primary">Ir al Carrito</Button>
            </Link>
        </>
    )
}
export default GoToCart
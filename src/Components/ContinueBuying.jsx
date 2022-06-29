import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const ContinueBuying = () => {
    return (
        <>
            <Link to='/'>
                <Button variant="outline-primary">Seguir Comprando</Button>
            </Link>
        </>
    )
}

export default ContinueBuying
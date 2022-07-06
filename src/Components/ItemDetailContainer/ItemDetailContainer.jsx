import React from 'react'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../Helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import {Spinner} from 'react-bootstrap'

const ItemDetailContainer = () => {
    //Estados
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    //useParams hook
    const {id} = useParams()
    //useEffect para getFetchDetail
    useEffect(() => {
        if(id){
            getFetch()
            .then(data => setProduct(data.find(item => item.id === id)))
            //.catch(err => console.log(err))
            .finally(setLoading(false))
        }else{
            getFetch()
            .then(data=>setProduct(data))
            //.catch(err => console.log(err))
            .finally(setLoading(false))
        }
    }, [])
    
    return (
        <>  
            <div>
                {   loading?
                    <Spinner animation="border" variant="warning" />
                    :
                    <ItemDetail product={product}/>
                }
            </div>
        </>
    )
};

export default ItemDetailContainer
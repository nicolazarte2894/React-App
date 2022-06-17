import React from 'react'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getFetchDetail } from '../../Helpers/getFetchDetail';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    //State para producto
    const [product, setProduct] = useState({})
    //useParams hook
    const {id} = useParams()
    //useEffect para getFetchDetail
    useEffect(() => {
        getFetchDetail(setProduct,id)
    }, [])
    
    return (
        <>
            <ItemDetail product={product}/>
        </>
    )
};

export default ItemDetailContainer
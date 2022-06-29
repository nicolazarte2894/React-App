import React from 'react'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getFetch } from '../../Helpers/getFetch';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    //State para producto
    const [product, setProduct] = useState({})
    //useParams hook
    const {id} = useParams()
    //useEffect para getFetchDetail
    useEffect(() => {
        if(id){
            getFetch()
            .then(data => setProduct(data.find(item => item.id === id)))
            //.catch(err => console.log(err))
            .finally(err => console.log(err))
        }else{
            getFetch()
            .then(data=>setProduct(data))
            //.catch(err => console.log(err))
            .finally(err => console.log(err))
        }
    }, [])
    
    return (
        <>
            <ItemDetail product={product}/>
        </>
    )
};

export default ItemDetailContainer
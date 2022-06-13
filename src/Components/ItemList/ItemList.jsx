import React from 'react'
import { useState, useEffect } from 'react'
import { getFetch } from '../../Helpers/getFetch'
import Item from '../Item/Item'
import "./ItemList.css"


const ItemList = () => {
    //Utilizo useState para hacer permanente los productos y el loading
    const [data, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(data)
    //Ejecuto llamada a productos con Fetch haciendo uso de useEffect(,[]) con array de dependencia
    useEffect( () => {
        //getFetch está modularizado en Helpers como componente .js (no .jsx)
        getFetch()
        .then(res => setProductos(res))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])

    return (
        <>
            <div className ="item-list" >
                {loading?
                <h1>Cargando datos</h1>
                :
                <Item productos = {data}/>
                }
            </div>
        </>
    )
}

export default ItemList
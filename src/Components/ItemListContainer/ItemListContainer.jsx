import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getFetch  } from '../../Helpers/getFetch'
// import { getFetchCategory } from '../../Helpers/getFetchCategory'
import { useParams } from 'react-router-dom'


function ItemListContainer() {
    //Utilizo useState para hacer permanente los productos y el loading
    const [data, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    //console.log(data)
    //useParams
    // const {categoriaId} = useParams()
    // console.log(categoriaId);
    //Ejecuto llamada a productos con Fetch haciendo uso de useEffect(,[]) con array de dependencia
    useEffect( () => {
        //getFetch está modularizado en Helpers como componente .js (no .jsx)
        // if (categoriaId) {
        //     getFetchCategory(setProductos, categoriaId)  
        // }else{
            
            
        // }
        getFetch(setProductos)
        .finally(()=> setLoading(false))
    },[])
    return (
        <>
            <div className="App-header">
                {   loading?
                    <h1>Cargando datos</h1>
                    :
                    <ItemList products={data}/>
                }
            </div>
            
        </>
    )
}

export default ItemListContainer
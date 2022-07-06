import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getFetch  } from '../../Helpers/getFetch'
// import { getFetchCategory } from '../../Helpers/getFetchCategory'
import { useParams } from 'react-router-dom'
import { Spinner, Button} from 'react-bootstrap'


function ItemListContainer() {
    //Utilizo useState para hacer permanente los productos y el loading
    const [data, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    //console.log(data)
    //useParams
    const {categoriaId} = useParams()
    console.log(categoriaId);
    //Ejecuto llamada a productos con Fetch haciendo uso de useEffect(,[]) con array de dependencia
    useEffect( () => {
        if(categoriaId){
            getFetch()
            .then(data => setProductos(data.filter(filterProds => filterProds.category === categoriaId)))
            .catch(err => console.log(err))
            .finally(setLoading(false))
        }else{
            getFetch()
            .then(data=>setProductos(data))
            .catch(err => console.log(err))
            .finally(setLoading(false))
        }
    },[categoriaId])
    return (
        <>
            <div className="App-header">
                {   loading?
                    // <Spinner animation="border" role="status">
                    // <span className="visually-hidden">Loading...</span>
                    // </Spinner>
                    // <Spinner animation="border" variant="warning" size='lg' />
                    // <h2>Cargando...</h2>
                    <Button variant="primary" disabled>
                        <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        Loading...
                    </Button>
                    :
                    <ItemList products={data}/>
                }
            </div>
            
        </>
    )
}

export default ItemListContainer
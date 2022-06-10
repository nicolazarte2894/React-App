
import { useState , useEffect} from 'react'
import { getFetch } from '../../Helpers/getFetch'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap'



function ItemListContainer({greeting}) {
    //Utilizo useState para hacer permanente los productos
    const [products, setProductos] = useState([])

    //Ejecuto llamada a productos con Fetch haciendo uso de useEffect(,[]) con array de dependencia
    useEffect( () => {
        //getFetch está modularizado en Helpers como componente .js (no .jsx)
        getFetch()
        .then(res => setProductos(res))
        .catch(err => console.log(err))
        .finally(()=>console.log())
    },[])
    console.log(products);
    return (
        <>
            <div className="App-header">
                <p>{greeting}</p>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <ItemCount stock = {10} initial={1}/>
                    </Card.Body>
                </Card> 


                {/* <header className="App-header">
                </header> */}
            </div>
        </>
    )
}

export default ItemListContainer
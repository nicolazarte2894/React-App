import {useState} from 'react'
import './ItemCount.css'
import {ButtonGroup, Button} from 'react-bootstrap'

const ItemCount = ({stock,initial}) =>{
    //Estado
    const [count, setCount] = useState(initial);

    //Función sumar
    const sumar = () =>{
        if(count < stock){
            setCount(count + 1);
            document.querySelector('.stock-alert').textContent = '';
        }else{
            document.querySelector('.stock-alert').textContent = 'Límite de stock alcanzado';
        }
    }
    //Funcion Restar
    const restar = () =>{
        if(count > 1){
            setCount(count - 1);
            document.querySelector('.stock-alert').textContent = '';
        }else{
            document.querySelector('.stock-alert').textContent = 'Mínimo de compra posible';
        }
    } 
    //Función Agregar al Carrito
    const setCart = () =>{
        console.log(count);
        document.querySelector('.stock-alert').textContent = `Se añadieron ${count} artículos al carrito`;
    } 

    return(
        <>
            <h1>El contador de React</h1>
            <div className="d-grid gap-2">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-danger" className="btn-set-count" onClick={restar}>-</Button>
                    <h2>{count}</h2>
                    <Button variant="outline-primary" className="btn-set-count" onClick={sumar}>+</Button>
                </ButtonGroup>
                <Button variant="primary" size="md" id="btn-add-cart" onClick={setCart}>
                    Agregar al carrito
                </Button>
            </div>
                <h4 className='stock-alert'></h4>
            
        </>
    )
}

export default ItemCount
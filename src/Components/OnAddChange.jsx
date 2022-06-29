import React from 'react'
import ContinueBuying from './ContinueBuying'
import GoToCart from './GoToCart'
import ItemCount from './ItemCount/ItemCount'
import { useState } from 'react'

const OnAddChange = () => {
    //Manejador de Intercambiabilidad de boton onAdd
    const [quantity, setQuantity] = useState(0)
    //Guardar tipo de botones
    const [inputType, setinputType] = useState('notInCart')
    //Handler de Intercambiabilidad y añadido a carrito
    const addHandle = (count)=>{
        //alert(`Se añadieron al carrito ${count} productos`)
        setQuantity(count)
        console.log(quantity);
        setinputType('addedInCart');
    }

    // //Estado del tipo de input en el itemDetail
    // const [inputType, setinputType] = useState('notInCart')
    // //Handler de Intercambiabilidad y añadido a carrito
    // const onAdd = (count)=>{
    //     // alert(`Se añadieron al carrito ${count} productos`)
    //     setinputType('addedInCart');
    // }
    return (
        <>
            {   inputType === 'notInCart' ?
                    <ItemCount
                        onAdd = {addHandle}
                        stock = {10} 
                        initial={1}
                    />
                :
                <>
                    <ContinueBuying/>
                    <GoToCart/>
                </>
            }
        </>
    )
}

export default OnAddChange
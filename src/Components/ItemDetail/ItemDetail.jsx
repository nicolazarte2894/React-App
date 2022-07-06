import React, { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import ContinueBuying from '../ContinueBuying'
import GoToCart from '../GoToCart'
import ItemCount from '../ItemCount/ItemCount'
import '../Item/Item.css'
//import OnAddChange from '../OnAddChange'


const ItemDetail = ({product}) => {
    const {cart, addToCart} = useCartContext()
    //Guardar tipo de botones
    const [inputType, setInputType] = useState(true)
    const onAdd = (cant)=>{
        addToCart({...product,cantidad: cant})
        setInputType(false);
    }
    //console.log(cart)  
    return (
            <>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={product.img} alt="" className='w-100' />
                    </div>
                    <div className='col-md-6'>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>$ {product.price}</p>
                        {/* Ternario para mostrar Intercambiabilidad */}
                        {/* <OnAddChange/> */}
                        <div>
                            {   inputType === true ?
                                    <ItemCount
                                        onAdd = {onAdd}
                                        stock = {10} 
                                        initial={1}
                                    />
                                :
                                <>
                                    <ContinueBuying/>
                                    <GoToCart/>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </>
    )
}

export default ItemDetail
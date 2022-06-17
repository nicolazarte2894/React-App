import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"


const ItemList = ({products}) => {
    return (
        <>
            <div className ="item-list">
                {products.map(prod=> <Item key={prod.id} prod={prod}/>)}
            </div>
        </>
    )
}

export default ItemList
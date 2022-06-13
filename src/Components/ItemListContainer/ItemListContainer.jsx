import React from 'react'
import ItemList from '../ItemList/ItemList'



function ItemListContainer({greeting}) {
    
    return (
        <>
            <div className="App-header">
                <ItemList/>
            </div>
            
        </>
    )
}

export default ItemListContainer
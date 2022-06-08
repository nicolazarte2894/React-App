
import { useState } from 'react'
import logo from '../../logo.svg'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer({greeting}) {
    const [count, setCount] = useState(0)
    return ( //Solo retorna un elemento. Para mandar dos etiquetas se puede colocar <> h1...div...etc </>
        <>
            <div className="App">
                <header className="App-header">
                    <p>{greeting}</p>
                <ItemCount stock = {10} initial={1}/>
                </header>
            </div>
        </>
    )
}

export default ItemListContainer
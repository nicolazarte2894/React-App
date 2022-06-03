
import { useState } from 'react'
import logo from '../../logo.svg'

function ItemListContainer({greeting}) {
    const [count, setCount] = useState(0)
    return ( //Solo retorna un elemento. Para mandar dos etiquetas se puede colocar <> h1...div...etc </>
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>{greeting}</p>
                </header>
            </div>
        </>
    )
}

export default ItemListContainer
import { createContext, useState, useContext } from "react"
//Creación del Contexto
const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

//Creación del Componente Proveedor del contexto
export const CartContextProvider = ({children}) =>{
    //Se crean todos los estados y funciones en value
    //ESTADOS
    const [cart, setCart] = useState([])

    //FUNCIONES
    //Agregar al carrito
    const isInCart = (item)=> cart.some(itemCarrito=> itemCarrito.id === item.id)
    const addToCart = (item) =>{
        //console.log(isInCart(item))
        if(isInCart(item)){
            //Mapeo y cambio de cantidad del item duplicado en cart
            cart.map(itemCarrito=> {
                if(itemCarrito.id===item.id){
                    itemCarrito.cantidad+=item.cantidad
                }   
            })
        }else{
            setCart([...cart,item])
        }
    }
    //Vaciar el carrito
    const clearCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider 
            value={{
                cart,
                addToCart,
                clearCart
                } 
            }
        >
            {children}
        </CartContext.Provider>
    )
}

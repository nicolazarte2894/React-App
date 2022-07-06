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
    //Borrar item de carrito
    const deleteItem = (id) =>{
        console.log(id)
        const newCart = cart.filter(itemCarrito=>itemCarrito.id !== id)
        //console.log(newCart)
        // setCart(newCart)
    }
    //Vaciar el carrito
    const clearCart = () => {
        setCart([])
    }
    //Suma de precio total
    const totalPrice = () =>{
        return cart.reduce((acum,item)=>acum+item.price*item.cantidad,0)
    }
    //Cantidad de items en el carrito
    const iconCart = ()=>{
        return cart.reduce((acum,item)=>acum+item.cantidad,0)
    }

    return(
        <CartContext.Provider 
            value={{
                cart,
                addToCart,
                deleteItem,
                clearCart,
                totalPrice,
                iconCart
                } 
            }
        >
            {children}
        </CartContext.Provider>
    )
}

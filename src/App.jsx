import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
//Import enrutamiento: BrowserRouter permite funcionalidad, Routes envuelve componentes que llevan rutas, Route enruta al componente, Navigate se usa para redirigir a algun lado en caso de error
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext';


function App() {
  return ( 
      <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              {/* Enrutamiento */}
              <Route index path = "/" element = {<ItemListContainer/>} />
              <Route path = "/categoria/:categoriaId" element = {<ItemListContainer/>} />
              <Route path = "/detalle/:id" element = {<ItemDetailContainer/>} />
              <Route path = "/cart" element = {<Cart/>} />
              
              {/* Pagina de error */}
              <Route path ="*" element = {<Navigate to = "/"/>}/>
            </Routes>
          </BrowserRouter>
      </CartContextProvider>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//Import enrutamiento: BrowserRouter permite funcionalidad, Routes envuelve componentes que llevan rutas, Route enruta al componente, Navigate se usa para redirigir a algun lado en caso de error
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';


function App() {
  return ( 
    <>
      {/* BroweserRouter: Envuelve todo, contiene todas las funciones de enrutamiento
            NavBar
            Routes: Envuelve los route/path de enrutamiento, NavBar va por fuera ya que es fijo, solo usa links
              Route: Contiene la ruta  cada vista
            Routes
          BrowserRouter
      */}
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
    </>
  )
}

export default App

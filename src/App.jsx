import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//Import enrutamiento: BrowserRouter permite funcionalidad, Routes envuelve componentes que llevan rutas, Route enruta al componente, Navigate se usa para redirigir a algun lado en caso de error
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';


function App() {
  return ( 
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          {/* Enrutamiento */}
          <Route index path = "/" element = {<ItemListContainer greeting = 'Funcionamiento de:'/>} />
          {/* Pagina de error */}
          <Route path ="*" element = {<Navigate to = "/"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return ( //Solo retorna un elemento. Para mandar dos etiquetas se puede colocar <> h1...div...etc </>
    <>
      <NavBar/>
      <ItemListContainer greeting = 'Hola Mundo'/>
    </>
  )
}

export default App

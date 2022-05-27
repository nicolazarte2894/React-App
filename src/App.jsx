import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cuerpo from './Components/Cuerpo/Cuerpo';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return ( //Solo retorna un elemento. Para mandar dos etiquetas se puede colocar <> h1...div...etc </>
    <>
      <NavBar/>
      <Cuerpo/>
    </>
  )
}

export default App

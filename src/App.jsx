import Navbar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Hola! bienvenido a Fire, mi E-commerce de indumentaria." />
    </div>
  )
}

export default App;
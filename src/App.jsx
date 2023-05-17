import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Remeras, Abrigos, Pantalones, Accesorios } from "./pages";
import NavBar from "./components/NavBar";
import ItemDetail from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/remeras" element={<Remeras />} />
        <Route path="/category/abrigos" element={<Abrigos />} />
        <Route path="/category/pantalones" element={<Pantalones />} />
        <Route path="/category/accesorios" element={<Accesorios />} />
        <Route path="/item/:itemId" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
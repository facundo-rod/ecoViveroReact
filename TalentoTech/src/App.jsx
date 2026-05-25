import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer"; 
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito"; // <-- Importamos tu archivo real

const Home = () => (
  <div style={{ textAlign: 'center', padding: '40px' }}>
    <h1>Bienvenido a mi EcoVivero en React🌿</h1>
    <p>Tu rincón verde en casa. Explora nuestra sección de productos para empezar.</p>
  </div>
);

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
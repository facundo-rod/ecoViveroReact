import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("/data/productos.json")
      .then(res => res.json())
      .then(data => {
        const encontrado = data.find(p => p.id === parseInt(id));
        setProducto(encontrado);
      });
  }, [id]);

  if (!producto) return <p>Cargando planta...</p>;

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <img src={producto.img} alt={producto.nombre} style={{ width: '300px', borderRadius: '10px' }} />
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <h3>Precio: ${producto.precio}</h3>
      <button 
        onClick={() => addToCart(producto)}
        style={{ padding: '10px 20px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default DetalleProducto;
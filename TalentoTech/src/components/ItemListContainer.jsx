import { useState, useEffect } from "react";
import Item from "./Item";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Nuestras Plantas</h2>
      <div style={styles.grid}>
        {productos.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { 
    padding: '40px 5%', 
    width: '100%',
    margin: '0 auto',
    boxSizing: 'border-box'
  },
  title: { 
    textAlign: 'center', 
    marginBottom: '30px',
    fontSize: '2rem',
    color: '#2e7d32'
  },
  grid: { 
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: '20px', 
    justifyContent: 'center', 
    width: '100%'
  }
};

export default ItemListContainer; 
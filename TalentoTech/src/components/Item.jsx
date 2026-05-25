import { Link } from "react-router-dom";

// Asegúrate de recibir las propiedades exactamente como vienen del JSON: id, nombre, precio, img
const Item = ({ id, nombre, precio, img }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img 
          src={img} 
          alt={nombre} 
          style={styles.img} 
          // Si por alguna razón una sola imagen falla, carga este comodín para que NO se rompa la tarjeta completa
          onError={(e) => { 
            e.target.src = "https://via.placeholder.com/300x200?text=Planta"; 
          }}
        />
      </div>
      <h3 style={styles.title}>{nombre}</h3>
      <p style={styles.price}>${precio}</p>
      <Link to={`/producto/${id}`} style={styles.button}> Ver Detalle </Link>
    </div>
  );
};

const styles = {
  card: { 
    border: '1px solid #ddd', 
    borderRadius: '12px', 
    padding: '20px', 
    width: 'calc(33.333% - 20px)', // Esto calcula las 3 columnas en tu notebook
    minWidth: '250px', 
    textAlign: 'center', 
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    boxSizing: 'border-box' 
  },
  imageContainer: {
    width: '100%',
    height: '200px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', 
    marginBottom: '1rem',
    borderRadius: '4px',
    backgroundColor: '#f5f5f5'
  },
  img: { 
    width: '100%',     
    height: '100%',    
    objectFit: 'cover', // Recorta de forma armoniosa para que no se deformen
  },
  title: {
    fontSize: '1.2rem',
    margin: '0.5rem 0',
    color: '#333'
  },
  price: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#2e7d32' // Color verde para el precio
  },
  button: { 
    display: 'inline-block', 
    padding: '10px 15px', 
    backgroundColor: '#2e7d32', 
    color: 'white', 
    textDecoration: 'none', 
    borderRadius: '4px',
    fontWeight: 'bold',
    marginTop: 'auto' 
  }
};

export default Item;
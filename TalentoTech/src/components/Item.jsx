import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img 
          src={img} 
          alt={nombre} 
          style={styles.img} 
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
    width: 'calc(33.333% - 20px)', 
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
    objectFit: 'cover',
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
    color: '#2e7d32' 
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
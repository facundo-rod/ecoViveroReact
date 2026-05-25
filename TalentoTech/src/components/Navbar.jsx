import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <nav style={styles.nav}>
      <h2><Link to="/" style={styles.link}>EcoVivero</Link></h2>
      <ul style={styles.ul}>
        <li><Link to="/" style={styles.link}>Inicio</Link></li>
        <li><Link to="/productos" style={styles.link}>Productos</Link></li>
        <li>
          <Link to="/carrito" style={styles.link}>
            🛒 <span>{totalQuantity}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#2e7d32', color: 'white' },
  ul: { display: 'flex', listStyle: 'none', gap: '20px' },
  link: { color: 'white', textDecoration: 'none', fontWeight: 'bold' }
};

export default Navbar;
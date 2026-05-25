import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div style={styles.container}>
      <h2>Tu Carrito de Compras 🛒</h2>
      
      {cart.length === 0 ? (
        <div style={{ marginTop: '20px' }}>
          <p>El carrito está vacío. ¡Ve a la sección de productos para elegir tus plantas!</p>
        </div>
      ) : (
        <div style={styles.cartWrapper}>
          <ul style={styles.list}>
            {cart.map((item, index) => (
              <li key={index} style={styles.item}>
                <img src={item.img} alt={item.nombre} style={styles.itemImg} />
                <div style={styles.itemInfo}>
                  <h4>{item.nombre}</h4>
                  <p style={styles.price}>${item.precio}</p>
                </div>
              </li>
            ))}
          </ul>
          
          <div style={styles.totalBox}>
            <h3>Total: ${total}</h3>
            <button onClick={clearCart} style={styles.clearBtn}>Vaciar Carrito</button>
            <button style={styles.buyBtn}>Finalizar Compra</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { padding: '40px 5%', textAlign: 'center', maxWidth: '900px', margin: '0 auto' },
  cartWrapper: { display: 'flex', flexWrap: 'wrap', gap: '30px', marginTop: '30px', justifyContent: 'space-between' },
  list: { listStyle: 'none', padding: 0, flex: '1', minWidth: '300px' },
  item: { display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid #eee', padding: '15px 0' },
  itemImg: { width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' },
  itemInfo: { textAlign: 'left' },
  price: { color: '#2e7d32', fontWeight: 'bold', margin: '5px 0 0 0' },
  totalBox: { border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '280px', height: 'fit-content', backgroundColor: '#f9f9f9' },
  clearBtn: { width: '100%', padding: '10px', backgroundColor: '#e53935', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '10px', fontWeight: 'bold' },
  buyBtn: { width: '100%', padding: '10px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
};

export default Carrito;
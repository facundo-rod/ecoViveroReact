import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const totalQuantity = cart.length;

const clearCart = () => {
    setCart([]); 
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart,totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
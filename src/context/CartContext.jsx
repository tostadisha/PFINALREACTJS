import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const calculateTotalPrice = () => {
    return cart.reduce(
      (acc, currentItem) => acc + currentItem.precio * currentItem.cantidad,
      0
    );
  };
  const deleteCart = () => {
    setCart([]);
  };
  const [cart, setCart] = useState([]);
  const addProductCart = (product) => {
    setCart((prevCart) => {
      const productExist = prevCart.find((item) => item.id === product.id);

      if (productExist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, cantidad: 1 }];
      }
    });
  };
  return (
    <CartContext.Provider
      value={{ cart, addProductCart, setCart, calculateTotalPrice, deleteCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

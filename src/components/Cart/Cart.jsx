import React from "react";
import CartItems from "./CartItems";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import NoItemsOnCart from "./NoItemsOnCart";
const Cart = () => {
  const { cart } = useContext(CartContext);
  const verifyCartItems = () => {
    if (cart.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  return verifyCartItems() ? <CartItems /> : <NoItemsOnCart />;
};

export default Cart;

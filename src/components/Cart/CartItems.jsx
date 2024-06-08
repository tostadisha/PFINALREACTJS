import React from "react";
import BottomCart from "./BottomCart";
import TopCart from "./TopCart";

const CartItems = () => {
  return (
    <div className="cartView">
      <TopCart />
      <BottomCart />
    </div>
  );
};

export default CartItems;

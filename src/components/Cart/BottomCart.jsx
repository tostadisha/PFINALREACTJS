import React from "react";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const BottomCart = () => {
  const { cart, deleteCart } = useContext(CartContext);
  const calculateTotalPrice = () => {
    return cart.reduce(
      (acc, currentItem) => acc + currentItem.precio * currentItem.cantidad,
      0
    );
  };
  return (
    <div className="bottomCart">
      <Link to="/checkout">
        <button className="buyCart" role="button">
          COMPRAR - {calculateTotalPrice()} ARS
        </button>
      </Link>

      <button className="deleteCart" onClick={() => deleteCart()}>
        <span className="deleteCart-shadow"></span>
        <span className="deleteCart-edge"></span>
        <span className="deleteCart-front text">
          <MdDelete color="black" size={30} />
        </span>
      </button>
    </div>
  );
};

export default BottomCart;

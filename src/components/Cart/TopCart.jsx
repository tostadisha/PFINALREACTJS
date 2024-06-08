import React, { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { currencyFormatter } from "../../utils/index";
const TopCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const calPrice = (quantity, price) => {
    return quantity * price;
  };
  const addItem = (idProduct) => {
    const newCart = cart.map((product) =>
      product.id === idProduct
        ? { ...product, cantidad: product.cantidad + 1 }
        : product
    );
    setCart(newCart);
  };

  const deleteItem = (idProduct) => {
    const indexOfActualProduct = cart.findIndex(
      (product) => product.id === idProduct
    );
    if (cart[indexOfActualProduct].cantidad >= 2) {
      const newCart = cart.map((product, i) =>
        i === indexOfActualProduct
          ? { ...product, cantidad: product.cantidad - 1 }
          : product
      );
      setCart(newCart);
    } else {
      cart.splice(indexOfActualProduct, 1);
      setCart([...cart]);
    }
  };

  return (
    <div className="topCart">
      {cart.map((product) => (
        <React.Fragment key={product.id}>
          <div className="cartItem" id={product.id}>
            <div className="cartItemPhoto">
              <img src={product.fuente} alt="" />
            </div>
            <div className="cartItemName">{product.nombre}</div>
            <div className="cartItemAmount">Cantidad: {product.cantidad}</div>
            <div className="cartItemTotalPrice">
              Precio total:{" "}
              {currencyFormatter(calPrice(product.cantidad, product.precio))}
              ARS
            </div>
            <div>
              <button
                className="cartItemPlus"
                onClick={() => addItem(product.id)}
              >
                <span className="cartItemPlus-shadow"></span>
                <span className="cartItemPlus-edge"></span>
                <span className="cartItemPlus-front text">
                  <CiCirclePlus color="black" size={30} />
                </span>
              </button>
              <button
                className="cartItemMinus"
                onClick={() => deleteItem(product.id)}
              >
                <span className="cartItemMinus-shadow"></span>
                <span className="cartItemMinus-edge"></span>
                <span className="cartItemMinus-front text">
                  <CiCircleMinus color="black" size={30} />
                </span>
              </button>
            </div>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default TopCart;

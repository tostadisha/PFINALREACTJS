import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../../utils/index";
const ItemDetail = ({ product }) => {
  const { addProductCart, cart } = useContext(CartContext);
  const [productAdded, setProductAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const addProduct = () => {
    toast.success("Usted ha añadido " + product.nombre, {
      position: "bottom-right",
      theme: "dark",
      autoClose: 3000,
    });
    if (productAdded == false) {
      setProductAdded(true);
      addProductCart(product);
    } else {
      addProductCart(product);
    }
  };

  return (
    <>
      <div className="detailGeneral">
        <div className="itemDetailInfo">
          <div className="itemDetailPhoto">
            <img src={product.fuente} alt="" />
          </div>
          <div className="itemDetailGeneralInfo">
            <div className="nameProduct">{product.nombre}</div>
            <div className="priceProduct">
              {currencyFormatter(product.precio)} ARS
            </div>
            <div className="generalInfoProduct"></div>
          </div>
        </div>
        <div className="buttonItemDetail">
          {productAdded ? (
            <>
              <button
                className="mainButton"
                id={hovered ? "onHoverButtonDetail" : ""}
                onClick={() => addProduct()}
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
              >
                COMPRAR
              </button>
              <Link to="/carrito">
                <button
                  className="cartItemPlus"
                  onClick={() => addItem(product.id)}
                >
                  <span className="cartItemPlus-shadow"></span>
                  <span className="cartItemPlus-edge"></span>
                  <span className="cartItemPlus-front text">
                    <FaShoppingCart color="black" size={30} />
                  </span>
                </button>
              </Link>
            </>
          ) : (
            <button
              className="mainButton"
              id={hovered ? "onHoverButtonDetail" : ""}
              onClick={() => addProduct()}
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}
            >
              COMPRAR
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default ItemDetail;

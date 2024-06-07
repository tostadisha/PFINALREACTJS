import React, { useState } from "react";
import { Link } from "react-router-dom";
const NoItemsOnCart = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className="noItemsOnCart">
      <h1>
        ¡No tienes productos en el carrito! <br /> Prueba ir a comprar:
      </h1>
      <Link to="/">
        <button
          className="goHomeButton"
          id={hovered ? "onHoverButtonDetail" : ""}
          onClick={() => addProduct()}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          HOME
        </button>
      </Link>
    </div>
  );
};

export default NoItemsOnCart;

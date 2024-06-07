import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Item = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
      <Link
        to={"/detail/" + product.id}
        className="productCard"
        id={hovered ? "changeOnHoverCard" : ""}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className="productImage">
          <img src={product.fuente} alt="" />
        </div>
        <div className="productInformation">
          <div className="nameProduct">{product.nombre}</div>
          <p>{product.precio} ARS</p>
        </div>
      </Link>
    </>
  );
};

export default Item;

import { Link } from "react-router-dom";
const Item = ({ product }) => {
  return (
    <>
      <div className="productCard" key={product.id}>
        <div className="productImage">
          <img src={product.fuente} alt="" />
        </div>
        <div className="productInformation">
          <Link to={"/detail/" + product.id} className="nameProduct">
            {product.nombre}
          </Link>
          <p>{product.precio} ARS</p>
        </div>
      </div>
    </>
  );
};

export default Item;

import { LuShoppingCart } from "react-icons/lu";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const productsAmount = cart.reduce(
    (acc, product) => acc + product.cantidad,
    0
  );
  return (
    <div className="navBar-Derecha">
      <div>
        <Link to="/carrito">
          <LuShoppingCart size={50} color="white" />
          <div className="cantidadProductos">{productsAmount}</div>
        </Link>
      </div>
    </div>
  );
};
export default CartWidget;

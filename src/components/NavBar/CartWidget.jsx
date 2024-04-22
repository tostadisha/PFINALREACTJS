import { LuShoppingCart } from "react-icons/lu";
const CartWidget = () => {
  return (
    <div className="navBar-Derecha">
      <div>
        <LuShoppingCart size={50} color="white" />
        <div className="cantidadProductos">40</div>
      </div>
    </div>
  );
};
export default CartWidget;

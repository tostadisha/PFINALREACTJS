import imgLogo from "../../assets/logo-cabalit.svg";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar-Izquierda">
        <div className="logoCommerce">
          <img src={imgLogo} alt="" />
        </div>
        <div className="izquierdaProductos">
          <ul>
            <li>
              <a href="">Auriculares</a>
            </li>
            <li>
              <a href="">Mouse</a>
            </li>
            <li>
              <a href="">Teclado</a>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </div>
  );
};
export default NavBar;

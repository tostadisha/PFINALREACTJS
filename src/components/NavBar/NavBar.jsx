import imgLogo from "../../assets/logo-cabalit.svg";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar-Izquierda">
        <div className="logoCommerce">
          <Link to="/">
            <img src={imgLogo} alt="" />
          </Link>
        </div>
        <div className="izquierdaProductos">
          <ul>
            <li>
              <Link to="/tipo/auricular">Auriculares</Link>
            </li>
            <li>
              <Link to="/tipo/mouse">Mouses</Link>
            </li>
            <li>
              <Link to="/tipo/teclado">Teclados</Link>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </div>
  );
};
export default NavBar;

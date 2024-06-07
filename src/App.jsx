import NavBar from "./components/NavBar/NavBar";
import "./styles/ItemListContainer.css";
import "./styles/NavBar.css";
import "./styles/ItemDetailContainer.css";
import "./styles/Cart.css";
import "./styles/Checkout.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path={`/tipo/:idCategory`} element={<ItemListContainer />} />
          <Route
            path={`/detail/:idProduct`}
            element={<ItemDetailContainer />}
          />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

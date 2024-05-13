import NavBar from "./components/NavBar/NavBar";
import "./styles/ItemListContainer.css";
import "./styles/NavBar.css";
import "./styles/ItemDetailContainer.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path={`/tipo/:idCategory`} element={<ItemListContainer />} />
        <Route path={`/detail/:idProduct`} element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import getProducts from "../../data/data";
import ItemList from "./itemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        if (idCategory) {
          const productsFilter = respuesta.filter((e) => e.tipo === idCategory);
          setProducts(productsFilter);
        } else {
          setProducts(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Promesa completada");
      });
  }, [idCategory]);

  return (
    <>
      <div className="mainBody">
        <ItemList products={products} />
      </div>
    </>
  );
};
export default ItemListContainer;

import getProducts from "../../data/data";
import ItemList from "./itemList";
import ItemLoading from "./ItemLoading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getProducts(2000)
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
        setLoading(false);
      });
  }, [idCategory]);

  return (
    <>
      <div className="mainBody">
        {loading ? <ItemLoading /> : <ItemList products={products} />}
      </div>
    </>
  );
};
export default ItemListContainer;

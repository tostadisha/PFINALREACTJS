import { useEffect, useState } from "react";
import getProducts from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();
  console.log(idProduct);
  useEffect(() => {
    getProducts(1)
      .then((respuesta) => {
        const productFind = respuesta.find((e) => e.id == idProduct);
        setProduct(productFind);
        console.log(productFind);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Promesa completada");
      });
  }, []);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;

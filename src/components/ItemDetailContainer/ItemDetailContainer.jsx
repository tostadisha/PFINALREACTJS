import { useEffect, useState } from "react";
import getProducts from "../../data/data";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        const productFind = respuesta.find((e) => e.id === 4);
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

  return <>{product.nombre}</>;
};

export default ItemDetailContainer;

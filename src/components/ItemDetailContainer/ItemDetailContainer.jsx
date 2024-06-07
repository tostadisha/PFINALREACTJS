import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ItemLoading from "./ItemLoading";
import { collection, getDocs } from "firebase/firestore";
import db from "../../db/db.js";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();
  const [loading, setLoading] = useState(true);
  const getProductsAndFind = async () => {
    try {
      const productsRef = collection(db, "productos");
      getDocs(productsRef).then((productsDb) => {
        const data = productsDb.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        const productFind = data.find((e) => e.id == idProduct);
        setProduct(productFind);
        setLoading(false);
      });
    } catch (error) {
      console.error("Hubo un error en la pedida de info", error);
    }
  };
  useEffect(() => {
    console.log(loading);
  }, [loading]);
  useEffect(() => {
    setLoading(true);
    getProductsAndFind();
  }, [idProduct]);

  return (
    <div className="mainBody">
      {loading ? <ItemLoading /> : <ItemDetail product={product} />}
    </div>
  );
};
export default ItemDetailContainer;

import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ItemLoading from "./ItemLoading";
import { collection, getDocs } from "firebase/firestore";
import { FaHome } from "react-icons/fa";
import db from "../../db/db.js";
import { Link } from "react-router-dom";
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
    setLoading(true);
    getProductsAndFind();
  }, [idProduct]);

  return (
    <div className="mainBody">
      {loading && <ItemLoading />}
      {!loading && !product && (
        <div className="errorContainer">
          <h2>Ups! No deberías estar aquí</h2>
          <Link to="/">
            <FaHome color="111" size={30} />
          </Link>
        </div>
      )}
      {!loading && product && <ItemDetail product={product} />}
    </div>
  );
};
export default ItemDetailContainer;

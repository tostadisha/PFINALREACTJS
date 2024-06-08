import React from "react";
import ItemList from "./itemList";
import ItemLoading from "./ItemLoading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(true);

  const getProducts = async (c) => {
    try {
      const productsRef = collection(db, "productos");
      const q = c ? query(productsRef, where("tipo", "==", c)) : productsRef;
      const productsDb = await getDocs(q);
      const data = productsDb.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }));
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Hubo un error en la pedida de info", error);
    }
  };
  useEffect(() => {
    setLoading(true);
    getProducts(idCategory);
  }, [idCategory]);
  return (
    <>
      <div className="mainBody">
        {loading && <ItemLoading />}
        {!loading && products.length === 0 && (
          <div className="errorContainer">
            <h2>Ups! No deberías estar aquí</h2>
            <Link to="/">
              <FaHome color="111" size={30} />
            </Link>
          </div>
        )}
        {!loading && products.length > 0 && <ItemList products={products} />}
      </div>
    </>
  );
};
export default ItemListContainer;

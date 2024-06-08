import React from "react";
import { useState } from "react";
import Form from "./Form";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import db from "../../db/db.js";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import validateForm from "../../data/validationYup.js";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Checkout = () => {
  const { cart, calculateTotalPrice, deleteCart } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const handleChangeInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const order = {
      client: { ...formData },
      cart: { ...cart },
      fecha: Timestamp.fromDate(new Date()),
      total: calculateTotalPrice(),
    };
    try {
      const response = await validateForm(formData);
      if (response.status === "success") {
        generateOrder(order);
      } else if (response.message === "formData is not defined") {
        toast.warning("Por favor, ponga su información antes de mandarla");
      } else {
        toast.warning(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const generateOrder = (order) => {
    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, order)
      .then((respuesta) => setIdOrder(respuesta.id))
      .catch((error) => console.log(error))
      .finally(() => {
        deleteCart();
      });
  };
  return (
    <div>
      {idOrder ? (
        <div className="finalOrder">
          <div>
            <h2>Orden generada de forma correcta</h2>
            <p>Su número de pedido es: </p>
            <p className="orderNumber">{idOrder}</p>
            <Link to="/">
              <button className="signbutton" role="button">
                <span className="signbutton-shadow"></span>
                <span className="signbutton-edge"></span>
                <span className="signbutton-front text">Listo</span>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <Form
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;

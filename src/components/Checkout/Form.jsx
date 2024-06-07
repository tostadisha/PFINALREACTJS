import React from "react";

const Form = ({ formData, handleChangeInput, handleSubmitForm }) => {
  return (
    <div className="checkoutBox">
      <form onSubmit={handleSubmitForm}>
        <h2>¡Perfecto!</h2>
        <h3>Lo único que falta es tu información para terminar la compra</h3>
        <label>Nombre: </label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChangeInput}
        />

        <label>Telefono: </label>
        <input
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleChangeInput}
        />

        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChangeInput}
        />
        <button className="signbutton" type="submit" role="button">
          <span className="signbutton-shadow"></span>
          <span className="signbutton-edge"></span>
          <span className="signbutton-front text">Listo</span>
        </button>
      </form>
    </div>
  );
};

export default Form;

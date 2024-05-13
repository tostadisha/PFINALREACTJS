const Item = ({ product }) => {
  return (
    <>
      <div className="productCard" key={product.id}>
        <div className="productImage">
          <img src={product.fuente} alt="" />
        </div>
        <div className="productInformation">
          <h2>{product.nombre}</h2>
          <p>{product.precio} ARS</p>
        </div>
      </div>
    </>
  );
};

export default Item;

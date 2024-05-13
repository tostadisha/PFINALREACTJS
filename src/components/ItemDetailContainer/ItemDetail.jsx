const ItemDetail = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="detailGeneral">
        <div className="itemDetailInfo">
          <div className="itemDetailPhoto">
            <img src={product.fuente} alt="" />
          </div>
          <div className="itemDetailGeneralInfo">
            <div className="nameProduct">{product.nombre}</div>
            <div className="priceProduct">{product.precio} ARS</div>
            <div className="generalInfoProduct"></div>
          </div>
        </div>
        <div className="buttonItemDetail">
          <button>COMPRAR</button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

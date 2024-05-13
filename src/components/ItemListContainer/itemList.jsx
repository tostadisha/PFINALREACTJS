import Item from "./Item";
const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Item product={product} />
      ))}
    </div>
  );
};

export default ItemList;

import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({ productos }) => {
  return (
    <section className="itemList">
      {productos.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </section>
  );
};

export default ItemList;

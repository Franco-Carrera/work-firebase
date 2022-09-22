import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <article className="container-cards">
      {items.map((item) => (
        <Item key={item.id} itemData={item}></Item>
      ))}
    </article>
  );
};

export default ItemList;

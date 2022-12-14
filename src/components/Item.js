import "./Item.css";

const Item = ({ itemData }) => {
  return (
    <div className="card">
      <img className="card__img" alt="#" src={itemData.pictureUrl}></img>
      <div className="cards__text ">
        <p className="card__title">{itemData.title}</p>
        <div className="containerPrice">
          <p className="description">{itemData.description}</p>
          <p className="price">${itemData.price}</p>
        </div>
      </div>
    </div>
  );
};

//posible ItemDos

export default Item;

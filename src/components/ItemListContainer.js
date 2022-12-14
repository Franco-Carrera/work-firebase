import { useState, useEffect } from "react";
import { data } from "../data";
// import ItemCount from "../ItemCount/ItemCount"
import ItemList from "./ItemList";
//import "./ItemListcontain.css";

function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000);
    console.log(data);
  });
}

const ItemListContainer = () => {
  const [itemList, setItemList] = useState([]);

  /*Logic */
  useEffect(() => {
    const list = getList();

    list
      .then(
        (list) => {
          setItemList(list);
        },
        (err) => console.log(err)
      )
      .catch((reason) => console.log(reason));
  }, []);

  /**Render */
  return (
    <main>
      <h1>Productos</h1>
      <ItemList items={itemList} />
    </main>
  );
};

///// Esto va a contener la galería

export default ItemListContainer;

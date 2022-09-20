import { useState, useEffect } from "react";
import { getData } from "../utils/firebaseConfig";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  // "" "" loading

  useEffect(() => {
    getData()
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h3>ItemListContainer</h3>
      {data.map((datItem) => (
        <ItemList key={datItem.id} itemData={datItem} />
      ))}
    </>
  );
};

export default ItemListContainer;

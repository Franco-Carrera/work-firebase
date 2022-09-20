import React from "react";

const ItemList = ({ itemData }) => {
  return (
    <>
      <h4>ItemList</h4>
      <p>{itemData.title}</p>
      <small>{itemData.description}</small>
    </>
  );
};

export default ItemList;

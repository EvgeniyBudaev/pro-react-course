import React from "react";

export const ProductListItem = ({ product, onDeleted, onEdit }) => {
  const { id, title, isPaid } = product;
  return (
    <>
      <h2>{title}</h2>
      <h2>{isPaid ? "Paid" : "Not paid"}</h2>
      <button onClick={() => onDeleted(id)}>Delete</button>
      <button onClick={() => onEdit(id)}>Edit</button>
    </>
  );
};

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProductList } from "./ProductList";

export const App = () => {
  const cart = [
    { id: "1", title: "Notebook", count: 10, price: 250000, isPaid: false },
    { id: "2", title: "Smartphone", count: 7, price: 150000, isPaid: false },
    { id: "3", title: "Ipad", count: 5, price: 75000, isPaid: false },
  ];
  const [products, setProducts] = useState(cart);

  const handleDeleteItem = (id) => {
    setProducts((prevState) => {
      const idx = prevState.findIndex((item) => item.id === id);
      return [...prevState.slice(0, idx), ...prevState.slice(idx + 1)];
    });
  };

  const handleAddItem = (title, count, price) => {
    const newItem = {
      id: uuidv4(),
      title,
      count,
      price,
    };
    setProducts((prevState) => [...prevState, newItem]);
  };

  const handleTogglePaid = (id) => {
    setProducts((prevState) => {
      const idx = prevState.findIndex((item) => item.id === id);
      const oldItem = prevState[idx];
      const newItem = { ...oldItem, isPaid: !oldItem.isPaid };
      return [...prevState.slice(0, idx), newItem, ...prevState.slice(idx + 1)];
    });
  };

  return (
    <div>
      <ProductList
        products={products}
        onDeleted={handleDeleteItem}
        onEdit={handleTogglePaid}
      />
      <button onClick={() => handleAddItem("Watch", 1, 2000)}>Add Item</button>
    </div>
  );
};

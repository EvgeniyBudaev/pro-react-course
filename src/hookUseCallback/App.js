import React, { useState } from "react";
import { List } from "./List";
import { payments } from "./mockData";

export const App = () => {
  const [count, setCount] = useState(0);
  const [isColor, setColor] = useState(false);

  const handleItemClick = (item) => {
    console.log("Clicked this item", item);
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1 style={{ color: isColor ? "red" : "black" }}>Hook useCallback</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setColor((prevState) => !prevState)}>
        Change color
      </button>
      <List list={payments} onClick={handleItemClick} />
    </div>
  );
};

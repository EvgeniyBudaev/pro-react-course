import React, { useState } from "react";
import { List } from "./List";
import { payments } from "./mockData";

export const App = () => {
  const [isColor, setColor] = useState(false);

  return (
    <div>
      <h1 style={{ color: isColor ? "red" : "black" }}>Hook useCallback</h1>
      <button onClick={() => setColor((prevState) => !prevState)}>
        Change color
      </button>
      <List list={payments} />
    </div>
  );
};

import React from "react";
import { ListItem } from "./ListItem";

export const List = ({ list, onClick }) => {
  console.log("List render");

  return (
    <ul>
      {list &&
        list.map((item) => (
          <ListItem key={item.id} item={item} onClick={onClick} />
        ))}
    </ul>
  );
};

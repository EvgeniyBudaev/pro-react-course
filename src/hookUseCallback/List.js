import React, { memo } from "react";
import { ListItem } from "./ListItem";

const ListComponent = ({ list, onClick }) => {
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

export const List = memo(ListComponent);

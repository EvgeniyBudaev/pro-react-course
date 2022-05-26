import React, { memo } from "react";
import { ListItemFC } from "./ListItemFC";
import { ListItemCC } from "./ListItemCC";

const ListComponent = ({ list }) => {
  console.log("List render");

  return (
    <ul>
      {list && list.map((item) => <ListItemFC key={item.id} item={item} />)}
      {/* {list && list.map((item) => <ListItemCC key={item.id} item={item} />)} */}
    </ul>
  );
};

export const List = memo(ListComponent);

import React, { memo } from "react";
import "./ListItem.scss";

const ListItemFCComponent = ({ item }) => {
  console.log("ListItemFC render");

  return <li className="ListItem">{`${item.name} - ${item.payment}rub`}</li>;
};

export const ListItemFC = memo(ListItemFCComponent);

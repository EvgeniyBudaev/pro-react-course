import React, { memo } from "react";
import "./ListItem.scss";

const ListItemComponent = ({ item, onClick }) => {
  console.log("ListItem render");

  const handleClick = () => onClick(item);

  return (
    <li
      className="ListItem"
      onClick={handleClick}
    >{`${item.name} - ${item.payment}rub`}</li>
  );
};

export const ListItem = memo(ListItemComponent);

import React from "react";
import "./ListItem.scss";

export const ListItem = ({ item, onClick }) => {
  console.log("ListItem render");

  const handleClick = () => onClick(item);

  return (
    <li
      className="ListItem"
      onClick={handleClick}
    >{`${item.name} - ${item.payment}rub`}</li>
  );
};

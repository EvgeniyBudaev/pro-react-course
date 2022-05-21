import React from "react";

export const List = ({ list }) => {
  return (
    <ul>
      {list &&
        list.map((item) => (
          <li key={item.id}>{`${item.name} - ${item.payment}rub`}</li>
        ))}
    </ul>
  );
};

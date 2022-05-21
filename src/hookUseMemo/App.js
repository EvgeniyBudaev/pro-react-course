import React, { useMemo, useState } from "react";
import { List } from "./List";
import { payments } from "./mockData";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(
    () =>
      payments &&
      payments.filter((item) => {
        console.log("filteredItems was called!");
        return item.name === search;
      }),
    [search]
  );

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearch(inputValue);
  };

  return (
    <>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      <List list={filteredItems.length > 0 ? filteredItems : payments} />
    </>
  );
};

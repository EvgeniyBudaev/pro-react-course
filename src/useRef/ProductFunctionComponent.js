import React, { useEffect, useRef, useState } from "react";

export const ProductFunctionComponent = () => {
  const [points, setPoints] = useState(1);
  const [value, setValue] = useState("");

  const countRef = useRef(1);
  const inputRef = useRef(null);
  const prevPointsRef = useRef(1);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAddPoint = () => {
    setPoints((prevState) => prevState + 1);
  };

  useEffect(() => {
    countRef.current++;
  });

  useEffect(() => {
    if (prevPointsRef.current) {
      prevPointsRef.current = points;
    }
  }, [points]);

  return (
    <>
      <h1>Count of renders: {countRef.current}</h1>
      <h1>Points: {points}</h1>
      <h1>Previous points: {prevPointsRef.current}</h1>
      <input type="text" ref={inputRef} value={value} onChange={handleChange} />
      <button onClick={handleFocus}>Click me</button>
      <button onClick={handleAddPoint}>Add point</button>
    </>
  );
};

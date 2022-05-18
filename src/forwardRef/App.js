import React, { useRef } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const App = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <Input ref={inputRef} />
      <Button onClick={handleFocus} />
    </>
  );
};

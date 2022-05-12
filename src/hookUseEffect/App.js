import React, { useEffect, useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleVisible = () => {
    setIsVisible((prevState) => !prevState);
  };

  useEffect(() => {
    console.log("useEffect");
    return () => console.log("clear");
  }, [count]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos`
        );
        const data = await response.json();
        setTodos(data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    void getTodos();
  }, []);
  console.log("todos: ", todos);

  return (
    <div>
      {isVisible && (
        <>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleVisible}>Hide</button>
          <p>{count}</p>
        </>
      )}
      {!isVisible && <button onClick={handleVisible}>Show</button>}
    </div>
  );
};

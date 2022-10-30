import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h2>Not found page!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};

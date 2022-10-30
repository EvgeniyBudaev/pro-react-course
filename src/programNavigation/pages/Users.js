import React from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  return (
    <>
      <h2>Users</h2>
      <Link to="/users/1">User #1</Link>
    </>
  );
};

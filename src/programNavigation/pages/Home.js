import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";

export const Home = () => {
  const navigate = useNavigate();

  const handleRouteToAboutPage = () => {
    navigate(ROUTES.About);
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleRouteToAboutPage}>Go to about page</button>
    </div>
  );
};

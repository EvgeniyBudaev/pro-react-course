import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { ROUTES } from "./constants";
import { About, Home, NotFound, User, Users } from "./pages";
import "./App.scss";

export const App = () => {
  return (
    <>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path={ROUTES.Home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.About} element={<About />} />
          <Route path={`${ROUTES.Users}/:userId`} element={<User />} />
          <Route path={ROUTES.Users} element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

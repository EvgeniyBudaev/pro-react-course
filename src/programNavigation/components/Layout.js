import React from "react";
import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

export const Layout = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      {/* <Layout> - это хорошее место для разметки, в котором мы хотим сделать так,
       чтобы навигация отображалась на всех страницах. */}
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-list__item">
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li className="navigation-list__item">
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li className="navigation-list__item">
            <CustomLink to="/users">Users</CustomLink>
          </li>
        </ul>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active. */}
      {/* <Outlet> отображает любой активный дочерний маршрут. */}
      <Outlet />
    </div>
  );
};

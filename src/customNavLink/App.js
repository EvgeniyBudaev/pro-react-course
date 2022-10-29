import React from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import { CustomNavLink } from "./CustomNavLink";
import { CustomLink } from "./CustomLink";
import "./App.scss";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users/:userId" element={<User />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

function Layout() {
  return (
    <div>
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
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return (
    <>
      <h2>Users</h2>
      <Link to="/users/1">User #1</Link>
    </>
  );
}

function User() {
  return <h2>User</h2>;
}

function NotFound() {
  return (
    <>
      <h2>Not found page!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
}

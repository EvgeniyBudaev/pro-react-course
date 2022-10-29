import { NavLink } from "react-router-dom";

export const CustomNavLink = ({ children, to, ...props }) => {
  const activeLinkClassName = "active-link";
  const linkClassName = "default-link";

  const setActiveLink = ({ isActive }) =>
    isActive ? activeLinkClassName : linkClassName;

  return (
    <NavLink className={setActiveLink} to={to} {...props}>
      {children}
    </NavLink>
  );
};

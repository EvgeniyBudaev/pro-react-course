import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

export const CustomLink = ({ children, to, ...props }) => {
  const activeLinkClassName = "active-link";
  const linkClassName = "default-link";

  const { pathname } = useLocation();

  return (
    <Link
      className={clsx(pathname === to ? activeLinkClassName : linkClassName)}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

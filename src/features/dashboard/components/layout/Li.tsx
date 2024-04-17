import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface LiProps {
  children: ReactNode;
  to: string;
}

export function Li({ children, to }: LiProps) {
  const active =
    "grid w-64 grid-cols-[auto_1fr] gap-x-4 rounded bg-sky-600 p-3 text-gray-200 font-semibold";
  const notActive =
    "grid w-64 grid-cols-[auto_1fr] gap-x-4 rounded p-3 text-gray-700 hover:bg-[rgba(156,163,175,.2)] font-semibold";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? active : notActive)}
      >
        {children}
      </NavLink>
    </li>
  );
}

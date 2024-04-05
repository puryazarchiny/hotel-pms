import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface LiProps {
  children: ReactNode;
  to: string;
}

export function Li({ children, to }: LiProps) {
  const active =
    "grid w-64 grid-cols-[auto_1fr] gap-x-4 rounded border border-gray-200 bg-gray-200 p-3 text-gray-700";
  const notActive =
    "grid w-64 grid-cols-[auto_1fr] gap-x-4 rounded border border-gray-300 p-3 text-gray-700 hover:border-gray-200";

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

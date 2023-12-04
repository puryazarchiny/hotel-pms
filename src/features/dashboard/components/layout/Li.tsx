import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface LiProps {
  to: string;
  children: ReactNode;
}

export function Li({ to, children }: LiProps) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "grid w-64 grid-cols-[auto_1fr] gap-4 rounded border border-gray-200 bg-sky-500 p-3 text-gray-100"
            : "grid w-64 grid-cols-[auto_1fr] gap-4 rounded border border-gray-300 p-3 text-gray-700 hover:border-gray-200 hover:text-sky-500"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
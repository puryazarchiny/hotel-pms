import { Link } from "react-router-dom";

import { Backdrop } from "@/features/home";

export function Logo() {
  return (
    <Backdrop>
      <Link
        to="/"
        className="grid rounded-br-xl bg-gray-200 p-3 font-caveat text-3xl font-bold text-gray-700"
      >
        🛎️ Hotel PMS
      </Link>
    </Backdrop>
  );
}

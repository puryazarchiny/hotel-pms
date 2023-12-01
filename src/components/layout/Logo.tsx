import { Link } from "react-router-dom";

import { Backdrop } from "@/components/layout";

export function Logo() {
  return (
    <Backdrop>
      <Link
        to="/"
        className="flex h-full justify-center rounded-br-xl bg-gray-200 p-3 font-caveat text-3xl font-bold text-[#24292f]"
      >
        🛎️ Hotel PMS
      </Link>
    </Backdrop>
  );
}

import { Outlet } from "react-router-dom";

import { Box } from "@/components";
import { Aside } from "@/features/dashboard";

export function Main() {
  return (
    <main className="grid grid-cols-[auto_1fr] gap-4">
      <Aside />
      <Box className="rounded-xl bg-gray-200 p-4">
        <Outlet />
      </Box>
    </main>
  );
}

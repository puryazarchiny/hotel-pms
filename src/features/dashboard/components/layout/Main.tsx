import { Outlet } from "react-router-dom";

import { Aside } from "@/features/dashboard";

export function Main() {
  return (
    <main className="grid grid-cols-[auto_1fr] gap-x-4">
      <Aside />
      <section className="rounded-2xl bg-gray-200 p-4">
        <Outlet />
      </section>
    </main>
  );
}

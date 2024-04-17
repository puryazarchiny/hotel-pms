import { Header, Main } from "@/features/dashboard";

export function Dashboard() {
  const root = document.getElementById("root")!;

  root.setAttribute(
    "class",
    "grid grid-rows-[1fr_auto] min-h-screen bg-gray-200 p-4 font-montserrat",
  );

  return (
    <div className="grid grid-rows-[auto_1fr] gap-y-4 rounded-2xl bg-gray-300 p-4">
      <Header />
      <Main />
    </div>
  );
}

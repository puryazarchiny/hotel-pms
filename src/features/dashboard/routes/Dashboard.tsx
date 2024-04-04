import { Header, Main } from "@/features/dashboard";

export function Dashboard() {
  const root = document.getElementById("root")!;

  root.setAttribute("class", "grid min-h-screen bg-gray-200 p-4 font-wotfard");

  return (
    <div className="grid grid-rows-[auto_1fr] gap-4 rounded-xl bg-gray-300 p-4">
      <Header />
      <Main />
    </div>
  );
}

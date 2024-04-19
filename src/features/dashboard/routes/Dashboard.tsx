import { Header, Main } from "@/features/dashboard";

export function Dashboard() {
  const root = document.getElementById("root")!;

  root.setAttribute(
    "class",
    "grid min-h-screen bg-gray-200 p-4 font-montserrat",
  );

  return (
    <div className="CONTAINER | grid grid-rows-[auto_1fr] gap-y-4 rounded-2xl bg-gray-300 p-4">
      <Header />
      <Main />
    </div>
  );
}

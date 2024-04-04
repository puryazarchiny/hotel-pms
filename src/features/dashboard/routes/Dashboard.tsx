import { Header, Main } from "@/features/dashboard";
import { useRootElement } from "@/hooks";

export function Dashboard() {
  useRootElement(`
    background-color: #e5e7eb;
    display: grid;
    font-family: Wotfard, sans-serif;
    min-height: 100vh;
    padding: 16px;
  `);

  return (
    <div className="grid grid-rows-[auto_1fr] gap-4 rounded-xl bg-gray-300 p-4">
      <Header />
      <Main />
    </div>
  );
}

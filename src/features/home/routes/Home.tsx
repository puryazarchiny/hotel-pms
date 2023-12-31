import { Footer, Header, Main } from "@/features/home";
import { useRootElement } from "@/hooks";

export function Home() {
  useRootElement(`
    background-color: #e5e7eb;
    display: grid;
    font-family: Wotfard, sans-serif;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    padding: 16px;
  `);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

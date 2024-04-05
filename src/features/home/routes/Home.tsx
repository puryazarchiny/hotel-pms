import { Footer, Header, Main } from "@/features/home";

export function Home() {
  const root = document.getElementById("root")!;

  root.setAttribute(
    "class",
    "grid min-h-screen grid-rows-[auto_1fr_auto] bg-gray-200 p-4 font-wotfard",
  );

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

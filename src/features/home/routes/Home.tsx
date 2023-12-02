import { Body } from "@/components/containers";
import { Footer, Header, Main } from "@/features/home";

export function Home() {
  return (
    <Body classes="p-4 font-wotfard">
      <Header />
      <Main />
      <Footer />
    </Body>
  );
}

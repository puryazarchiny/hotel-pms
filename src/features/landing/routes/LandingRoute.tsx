import { Body } from "@/components/containers";
import { Footer, Header } from "@/components/layout";
import { Main } from "@/features/landing";

export function LandingRoute() {
  return (
    <Body classes="font-wotfard p-4">
      <Header />
      <Main />
      <Footer />
    </Body>
  );
}

import { Box, Wrapper } from "@/components/containers";
import { Logo, Nav, Spacer } from "@/features/home";

export function Header() {
  return (
    <header>
      <Wrapper>
        <Box classes="flex">
          <Logo />
          <Spacer classes="rounded-t-xl" />
          <Nav />
        </Box>
      </Wrapper>
    </header>
  );
}

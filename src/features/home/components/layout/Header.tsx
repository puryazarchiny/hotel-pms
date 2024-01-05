import { Box } from "@/components";
import { GitHub, Logo, Spacer, Wrapper } from "@/features/home";

export function Header() {
  return (
    <header>
      <Wrapper>
        <Box className="grid grid-cols-[auto_1fr_auto]">
          <Logo />
          <Spacer className="rounded-t-xl" />
          <GitHub />
        </Box>
      </Wrapper>
    </header>
  );
}

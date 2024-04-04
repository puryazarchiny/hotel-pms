import { GitHub, Logo, Spacer, Wrapper } from "@/features/home";

export function Header() {
  return (
    <header>
      <Wrapper>
        <div className="grid grid-cols-[auto_1fr_auto]">
          <Logo />
          <Spacer className="rounded-t-xl" />
          <GitHub />
        </div>
      </Wrapper>
    </header>
  );
}

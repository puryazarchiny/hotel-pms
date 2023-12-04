import { Logo, UserMenu } from "@/features/dashboard";

export function Header() {
  return (
    <header className="grid grid-cols-[repeat(2,_1fr)] px-4">
      <Logo />
      <UserMenu />
    </header>
  );
}

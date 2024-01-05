import { Logo, UserMenu } from "@/features/dashboard";

export function Header() {
  return (
    <header className="grid grid-cols-2 px-4">
      <Logo />
      <UserMenu />
    </header>
  );
}

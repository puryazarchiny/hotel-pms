import { Backdrop, Github } from "@/features/home";

export function Nav() {
  return (
    <Backdrop>
      <nav className="rounded-bl-xl bg-gray-200 p-3">
        <ul>
          <li>
            <Github />
          </li>
        </ul>
      </nav>
    </Backdrop>
  );
}

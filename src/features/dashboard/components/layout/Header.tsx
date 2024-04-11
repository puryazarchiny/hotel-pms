import { UserIcon } from "@heroicons/react/24/solid";

export function Header() {
  return (
    <header className="flex justify-between px-4">
      <p className="font-caveat text-3xl font-bold text-gray-700">
        🛎️ Hotel PMS
      </p>
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700"
      >
        <UserIcon className="h-6 w-6" />
      </button>
    </header>
  );
}

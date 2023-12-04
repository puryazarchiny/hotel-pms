import { UserIcon } from "@heroicons/react/24/solid";

export function UserMenu() {
  return (
    <button
      type="button"
      className="grid h-9 w-9 items-center justify-center justify-self-end rounded-full bg-gray-200 text-gray-700"
    >
      <UserIcon className="h-6 w-6" />
    </button>
  );
}

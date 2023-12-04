import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { UsersIcon } from "@heroicons/react/24/solid";

import { Li } from "@/features/dashboard";

export function Aside() {
  return (
    <aside>
      <nav>
        <ul className="grid gap-4 py-4">
          <Li to="/">
            <HomeIcon className="h-6 w-6 text-gray-700" />
            <span>Home</span>
          </Li>
          <Li to="/bookings">
            <CalendarDaysIcon className="h-6 w-6 text-gray-700" />
            <span>Bookings</span>
          </Li>
          <Li to="/users">
            <UsersIcon className="h-6 w-6 text-gray-700" />
            <span>Users</span>
          </Li>
          <Li to="/rooms">
            <BuildingOfficeIcon className="h-6 w-6 text-gray-700" />
            <span>Rooms</span>
          </Li>
          <Li to="/settings">
            <Cog6ToothIcon className="h-6 w-6 text-gray-700" />
            <span>Settings</span>
          </Li>
        </ul>
      </nav>
    </aside>
  );
}

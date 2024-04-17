import {
  BuildingOfficeIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import { Li } from "@/features/dashboard";

export function Aside() {
  return (
    <aside>
      <nav>
        <ul className="space-y-2 py-4">
          <Li to="/">
            <HomeIcon className="h-6 w-6 text-gray-100 drop-shadow" />
            Home
          </Li>
          <Li to="/bookings">
            <CalendarDaysIcon className="h-6 w-6 text-gray-100 drop-shadow" />
            Bookings
          </Li>
          <Li to="/rooms">
            <BuildingOfficeIcon className="h-6 w-6 text-gray-100 drop-shadow" />
            Rooms
          </Li>
          <Li to="/guests">
            <UserGroupIcon className="h-6 w-6 text-gray-100 drop-shadow" />
            Guests
          </Li>
          <Li to="/users">
            <UserIcon className="h-6 w-6 text-gray-100 drop-shadow" />
            Users
          </Li>
          <Li to="/settings">
            <Cog6ToothIcon className="h-6 w-6 text-gray-100 drop-shadow" />
            Settings
          </Li>
        </ul>
      </nav>
    </aside>
  );
}

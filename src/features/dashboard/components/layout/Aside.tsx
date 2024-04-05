import {
  BuildingOfficeIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import { Li } from "@/features/dashboard";

export function Aside() {
  return (
    <aside>
      <nav>
        <ul className="space-y-2 py-4">
          <Li to="/">
            <HomeIcon className="h-6 w-6" />
            Home
          </Li>

          <Li to="/bookings">
            <CalendarDaysIcon className="h-6 w-6" />
            Bookings
          </Li>

          <Li to="/guests">
            <UsersIcon className="h-6 w-6" />
            Guests
          </Li>

          <Li to="/rooms">
            <BuildingOfficeIcon className="h-6 w-6" />
            Rooms
          </Li>

          <Li to="/settings">
            <Cog6ToothIcon className="h-6 w-6" />
            Settings
          </Li>
        </ul>
      </nav>
    </aside>
  );
}

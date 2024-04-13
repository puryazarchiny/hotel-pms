import { Dashboard } from "@/features/dashboard";
import { Rooms } from "@/features/rooms";

export const protectedRoutes = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { index: true, element: <div>Home</div> },
      { path: "bookings", element: <div>Bookings</div> },
      { path: "rooms", element: <Rooms /> },
      { path: "guests", element: <div>Guests</div> },
      { path: "users", element: <div>Users</div> },
      { path: "settings", element: <div>Settings</div> },
    ],
  },
];

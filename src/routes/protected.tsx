import { Dashboard } from "@/features/dashboard";

export const protectedRoutes = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { index: true, element: <div>Home</div> },
      { path: "bookings", element: <div>Bookings</div> },
      { path: "rooms", element: <div>Rooms</div> },
      { path: "guests", element: <div>Guests</div> },
      { path: "users", element: <div>Users</div> },
      { path: "settings", element: <div>Settings</div> },
    ],
  },
];

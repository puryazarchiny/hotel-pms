import { Dashboard } from "@/features/dashboard";

export const protectedRoutes = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { index: true, element: <div>DashboardHome</div> },
      { path: "bookings", element: <div>Bookings</div> },
      { path: "guests", element: <div>Guests</div> },
      { path: "rooms", element: <div>Rooms</div> },
      { path: "settings", element: <div>Settings</div> },
    ],
  },
];

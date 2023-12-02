export const protectedRoutes = [
  {
    path: "/",
    element: <div>Dashboard</div>,
    children: [
      { index: true, element: <div>DashboardHome</div> },
      { path: "bookings", element: <div>Bookings</div> },
      { path: "rooms", element: <div>Rooms</div> },
      { path: "settings", element: <div>Settings</div> },
      { path: "users", element: <div>Users</div> },
    ],
  },
];

import { Outlet } from "react-router-dom";

export const protectedRoutes = [
  {
    path: "/dashboard",
    element: (
      <div>
        Dashboard
        <Outlet />
      </div>
    ),
    children: [
      { path: "bookings", element: <div>Bookings</div> },
      { path: "rooms", element: <div>Rooms</div> },
      { path: "settings", element: <div>Settings</div> },
      { path: "users", element: <div>Users</div> },
    ],
  },
];

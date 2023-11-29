import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { protectedRoutes } from "@/routes/protected";
import { publicRoutes } from "@/routes/public";

export function AppRoutes() {
  const router = createBrowserRouter([...publicRoutes, ...protectedRoutes]);

  return <RouterProvider router={router} />;
}

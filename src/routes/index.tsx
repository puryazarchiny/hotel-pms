import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { protectedRoutes } from "@/routes/protected";
import { publicRoutes } from "@/routes/public";

export function AppRoutes() {
  const router = createBrowserRouter([...protectedRoutes, ...publicRoutes]);

  return <RouterProvider router={router} />;
}

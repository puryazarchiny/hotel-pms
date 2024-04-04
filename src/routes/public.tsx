import { Home } from "@/features/home";

export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <div>SignIn</div> },
];

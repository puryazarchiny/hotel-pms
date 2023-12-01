import { LandingRoute } from "@/features/landing";

export const publicRoutes = [
  { path: "/", element: <LandingRoute /> },
  { path: "/auth/*", element: <div>AuthRoutes</div> },
];

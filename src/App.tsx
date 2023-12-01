import { useEffect } from "react";

import { AppRoutes } from "@/routes";

export function App() {
  useEffect(() => {
    document.body.style.cssText = `
      background-color: #e5e7eb;
      margin-left: calc(100vw - 100%);
    `;
  }, []);

  return <AppRoutes />;
}

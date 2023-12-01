import { ReactNode } from "react";

interface BackdropProps {
  children: ReactNode;
}

export function Backdrop({ children }: BackdropProps) {
  return <div className="bg-gray-300">{children}</div>;
}

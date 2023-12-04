import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return <div className="mx-auto h-full max-w-7xl">{children}</div>;
}

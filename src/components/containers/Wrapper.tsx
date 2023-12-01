import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  classes?: string;
}

export function Wrapper({ children, classes }: WrapperProps) {
  return <div className={"mx-auto max-w-7xl " + classes}>{children}</div>;
}

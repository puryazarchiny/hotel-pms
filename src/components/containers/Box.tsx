import { ReactNode } from "react";

interface BoxProps {
  className?: string;
  children: ReactNode;
}

export function Box({ className, children }: BoxProps) {
  return <div className={className}>{children}</div>;
}

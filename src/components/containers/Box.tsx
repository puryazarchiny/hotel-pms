import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  classes?: string;
}

export function Box({ children, classes }: BoxProps) {
  return <div className={classes}>{children}</div>;
}

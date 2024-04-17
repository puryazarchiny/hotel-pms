import { CSSProperties } from "react";

export function Spinner() {
  return (
    <div className="SPINNER | flex h-full items-center justify-center">
      <span style={{ "--i": 1 } as CSSProperties}></span>
      <span style={{ "--i": 2 } as CSSProperties}></span>
      <span style={{ "--i": 3 } as CSSProperties}></span>
      <span style={{ "--i": 4 } as CSSProperties}></span>
      <span style={{ "--i": 5 } as CSSProperties}></span>
      <span style={{ "--i": 6 } as CSSProperties}></span>
      <span style={{ "--i": 7 } as CSSProperties}></span>
      <span style={{ "--i": 8 } as CSSProperties}></span>
      <span style={{ "--i": 9 } as CSSProperties}></span>
      <span style={{ "--i": 10 } as CSSProperties}></span>
      <span style={{ "--i": 11 } as CSSProperties}></span>
      <span style={{ "--i": 12 } as CSSProperties}></span>
      <span style={{ "--i": 13 } as CSSProperties}></span>
      <span style={{ "--i": 14 } as CSSProperties}></span>
      <span style={{ "--i": 15 } as CSSProperties}></span>
    </div>
  );
}

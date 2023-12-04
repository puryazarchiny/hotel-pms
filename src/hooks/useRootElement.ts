import { useEffect } from "react";

export function useRootElement(styles: string) {
  useEffect(() => {
    const root = document.getElementById("root")!;
    root.style.cssText = `${styles}`;
  }, [styles]);
}

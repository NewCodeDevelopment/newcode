import { useCallback, useEffect, useLayoutEffect, useState } from "react";

export function useWindow(
  initialWidth: number | string = "100vw",
  initialHeight: number | string = "100vh",
) {
  const [height, setHeight] = useState(initialWidth || "100vw");
  const [width, setWidth] = useState(initialHeight || "100vh");

  const canUseDOM: boolean = !!(
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined"
  );

  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    handleResize();
  }, []);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = useCallback(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, [setHeight, setWidth]);

  return {
    width,
    height,
  };
}

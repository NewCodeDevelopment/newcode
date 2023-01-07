import { useState, useLayoutEffect, useCallback, useEffect } from "react";

export function useWindow() {
    const [height, setHeight] = useState<number | string>("100vh");
    const [width, setWidth] = useState<number | string>("100vw");

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

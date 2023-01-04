import { useState, useLayoutEffect, useCallback } from "react";

export function useWindow() {
	// const height = useRef<number | string>("100vh");
	// const width = useRef<number | string>("100vw");

	const [height, setHeight] = useState<number | string>("100vh");
	const [width, setWidth] = useState<number | string>("100vw");

	useLayoutEffect(() => {
		handleResize();
	}, []);

	useLayoutEffect(() => {
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

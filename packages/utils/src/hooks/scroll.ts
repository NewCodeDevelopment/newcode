import { useRecoilState } from "recoil";
import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";
import { bgColorState, INavigationState } from "../states/navigation";
import { IScrollState, scrollState } from "../states/scroll";

/**
 *
 *
 *
 *
 *
 *Variables
 *
 *
 *
 *
 *
 */
const SCROLLING_CLASS = "scrolling-section";
/**
 *
 *
 *
 *
 *
 * Scroll funciton
 *
 *
 *
 *
 *
 */
async function scrolling(to: string | number) {
	await gsap.to(window, {
		duration: 0.7,
		scrollTo: to,
		ease: "power1.out",
	});
}
/**
 *
 *
 *
 *
 *
 * Scroll Handler
 *
 *
 *
 *
 *
 */
async function handleScroll(
	mainRef: RefObject<HTMLElement>,
	currentIndex: number,
	setBgColor: (color: INavigationState) => void,
	setScroll: (scroll: IScrollState) => void
) {
	const { innerHeight } = window;

	console.log(
		`
		**********
		**********
		SCROLLING
		**********
		**********

		////////////////////////

		currentIndex: ${currentIndex}
		innerHeight: ${innerHeight}
	`
	);
	/*

		Children of the mainRef
	*/
	const main = mainRef.current;
	const children = [...((main?.childNodes as any) ?? [])];
	/*

		Check if the current index is valid
	
		*/
	if (!children[currentIndex]) {
		console.log("NO MORE CHILDREN");
		return;
	}
	/*
	
		CurrenChild

	*/
	const currentChild = children[currentIndex];
	/*

		Adding classes

	*/
	children.forEach((child) => child.classList.add(SCROLLING_CLASS));

	await new Promise((r) => setTimeout(r, 200));
	/*

		Scrolling

	*/
	await scrolling(currentIndex * innerHeight);
	/*

		Changing nav color

	*/
	setBgColor(currentChild.getAttribute("data-color") ?? "");
	setScroll({ currentIndex, length: children.length, caller: "event" });
	/*

		Removing classes

	*/
	await new Promise((r) => setTimeout(r, 200));

	children.forEach((child) => {
		child.classList.remove(SCROLLING_CLASS);
	});
}
/**
 *
 *
 *
 *
 *
 * Hook
 *
 *
 *
 *
 *
 */
export function useScroll(mainRef: RefObject<HTMLElement>) {
	const currentIndexRef = useRef<number>(0);
	const onceRef = useRef<boolean>(false);
	const touchStartRef = useRef<number>(0);

	const [bgColor, setBgColor] = useRecoilState(bgColorState);
	const [scroll, setScroll] = useRecoilState(scrollState);

	useEffect(() => {
		if (scroll.caller === "event") return;

		currentIndexRef.current = scroll.currentIndex;
		handleScroll(mainRef, scroll.currentIndex, setBgColor, () => {});
	}, [scroll]);

	useEffect(() => {
		/**
		 *
		 * Setting GSAP ScrollTo Plugin
		 *
		 */
		const ScrollToPlugin = require("gsap/ScrollToPlugin");
		gsap.registerPlugin(ScrollToPlugin);
	});

	useEffect(() => {
		/**
		 *
		 * Initial scroll
		 *
		 */
		if (onceRef.current) return;
		if (!onceRef.current) {
			scrolling(0);
			onceRef.current = true;
		}
		setScroll({
			currentIndex: currentIndexRef.current,
			length: [...((mainRef.current?.childNodes as any) ?? [])].length,
			caller: "event",
		});
		/**
		 *
		 *
		 *
		 *
		 * KEY
		 *
		 *
		 *
		 *
		 */
		window.addEventListener("keydown", handleKey);

		async function handleKey(event: KeyboardEvent) {
			window.removeEventListener("keydown", handleKey);

			const { key } = event;

			if (key !== "ArrowDown" && key !== "ArrowUp") return;

			let currentIndex = currentIndexRef.current;

			if (key === "ArrowDown") currentIndex++;
			if (key === "ArrowUp") currentIndex--;

			currentIndexRef.current = currentIndex;

			await handleScroll(mainRef, currentIndex, setBgColor, setScroll);

			window.addEventListener("keydown", handleKey);
		}
		/**
		 *
		 *
		 *
		 *
		 *
		 * WHEEL
		 *
		 *
		 *
		 */
		window.addEventListener("wheel", handleWheel);

		async function handleWheel(event: WheelEvent) {
			window.removeEventListener("wheel", handleWheel);

			const { deltaY } = event;

			if (deltaY === 0 || deltaY === -0) {
				await new Promise((r) => setTimeout(r, 100));
				window.addEventListener("wheel", handleWheel);
				return;
			}

			const scrollAmount = Math.round(deltaY) * 10;

			let currentIndex = currentIndexRef.current;

			if (scrollAmount >= 0) currentIndex++;
			if (scrollAmount <= 0) currentIndex--;

			currentIndexRef.current = currentIndex;

			await new Promise((r) => setTimeout(r, 100));

			await handleScroll(mainRef, currentIndex, setBgColor, setScroll);

			await new Promise((r) => setTimeout(r, 100));

			window.addEventListener("wheel", handleWheel);
		}
	});
}

// async function handleScroll(
// 	mainRef: RefObject<HTMLElement>,
// 	currentIndexRef: MutableRefObject<number>,
// 	direction: "up" | "down",
// 	setBgColor: (color: INavigationState) => void,
// 	setScroll: (scroll: IScrollState) => void
// ) {
// 	const { outerHeight, innerHeight } = window;
// 	/*

// 		Children of the mainRef
// 	*/
// 	const main = mainRef.current;
// 	const children = [...((main?.childNodes as any) ?? [])];

// 	let currentIndex = currentIndexRef.current ?? 0;

// 	/*

// 		Calculate next index
// 	*/
// 	if (direction === "up") currentIndex--;
// 	if (direction === "down") currentIndex++;

// 	console.log(
// 		`
// 		**********
// 		**********
// 		SCROLLING
// 		**********
// 		**********

// 		////////////////////////

// 		direction: ${direction}
// 		currentIndex: ${currentIndex}
// 		outerHeight: ${outerHeight}
// 		innerHeight: ${innerHeight}
// 	`
// 	);
// 	/*

// 		Check if the current index is valid

// 		*/
// 	if (!children[currentIndex]) {
// 		console.log("NO MORE CHILDREN");
// 		return;
// 	}
// 	/*

// 		CurrenChild

// 	*/
// 	currentIndexRef.current = currentIndex;
// 	const currentChild = children[currentIndex];
// 	/*

// 		Adding classes

// 	*/
// 	children.forEach((child) => child.classList.add(SCROLLING_CLASS));

// 	await new Promise((r) => setTimeout(r, 200));
// 	/*

// 		Scrolling

// 	*/
// 	await scrolling(currentIndex * innerHeight);
// 	/*

// 		Changing nav color

// 	*/
// 	setBgColor(currentChild.getAttribute("data-color") ?? "");
// 	setScroll({ currentIndex, length: children.length });
// 	/*

// 		Removing classes

// 	*/
// 	await new Promise((r) => setTimeout(r, 200));

// 	children.forEach((child) => {
// 		child.classList.remove(SCROLLING_CLASS);
// 	});
// }

//	const previousChild = children[currentIndex];

/**
 *
 *
 *
 *
 *
 * TOUCH
 *
 *
 *
 *
 *
 */
// window.addEventListener("touchstart", handleTouchStart);
// window.addEventListener("touchmove", handleTouchMove);

// async function handleTouchStart(event: TouchEvent) {
// 	window.removeEventListener("touchstart", handleTouchStart);

// 	touchStartRef.current = event.touches[0].clientY;

// 	window.addEventListener("touchstart", handleTouchStart);
// }

// async function handleTouchMove(event: TouchEvent) {
// 	window.removeEventListener("touchmove", handleTouchMove);

// 	const { clientY, pageY } = event.touches[0];

// 	const scrollAmount =
// 		touchStartRef.current > clientY
// 			? window.scrollY + clientY
// 			: window.scrollY - clientY;

// 	// console.log("TOUCH MOVE", direction, clientY, window.scrollY, pageY);

// 	await gsap.to(window, {
// 		duration: 0.7,
// 		scrollTo: scrollAmount,
// 		ease: "power1.out",
// 	});
// 	// await handleScroll(mainRef, currentIndexRef, direction, setBgColor);

// 	touchStartRef.current = 0;
// 	window.addEventListener("touchmove", handleTouchMove);
// }
/*

		Check  if we are still on the same child
	*/
// setTimeout(() => {
// 	if (window.scrollY !== currentIndex * outerHeight) {
// 		console.log("Scroll Failed");
// 		scrollIntoView(currentChild, {
// 			duration: 200,
// 			skipOverflowHiddenElements: true,
// 			behavior: "smooth",
// 		});
// 	}
// }, 800);

// await scrollIntoView(currentChild, {
// 	// block: "start",
// 	// duration: 300,
// 	// skipOverflowHiddenElements: true,
// 	behavior: "smooth",
// });

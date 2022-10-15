import { useRecoilState } from "recoil";
import { useEffect, useRef, RefObject, MutableRefObject } from "react";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
// import scrollIntoView from "scroll-into-view";
import { bgColorState, INavigationState } from "../states/navigation";
// import {
// 	polyfill,
// 	elementScrollIntoViewPolyfill,
// 	// scrollIntoView,
// } from "seamless-scroll-polyfill";
import { gsap } from "gsap";

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
	currentIndexRef: MutableRefObject<number>,
	direction: "up" | "down",
	setBgColor: (color: INavigationState) => void
) {
	const { innerHeight } = window;
	/*

		Children of the mainRef
	*/
	const main = mainRef.current;
	const children = [...((main?.childNodes as any) ?? [])];

	let currentIndex = currentIndexRef.current ?? 0;
	const previousChild = children[currentIndex];

	/*

		Calculate next index
	*/
	if (direction === "up") currentIndex--;
	if (direction === "down") currentIndex++;

	console.log(
		`
		**********
		**********
		SCROLLING
		**********
		**********

		////////////////////////

		direction: ${direction}
		currentIndex: ${currentIndex}
	`
	);
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
	currentIndexRef.current = currentIndex;
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
	const [_, setBgColor] = useRecoilState(bgColorState);

	useEffect(() => {
		/**
		 *
		 *
		 *
		 *
		 *
		 * Setting GSAP ScrollTo Plugin
		 *
		 *
		 *
		 *
		 *
		 */
		const ScrollToPlugin = require("gsap/ScrollToPlugin");
		gsap.registerPlugin(ScrollToPlugin);
		/**
		 *
		 *
		 *
		 *
		 *
		 * Initial scroll
		 *
		 *
		 *
		 *
		 *
		 */
		if (onceRef.current) return;
		if (!onceRef.current) {
			scrolling(0);
			onceRef.current = true;
		}

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
		window.addEventListener("touchmove", handleTouch);

		async function handleTouch(event: TouchEvent) {
			window.removeEventListener("touchmove", handleTouch);

			const { clientY } = event.touches[0];

			console.log(`
		
		
		
			CALLLEDDDDD
			${clientY}
		`);

			const direction = Math.round(clientY) >= 0 ? "down" : "up";
			await handleScroll(mainRef, currentIndexRef, direction, setBgColor);

			window.addEventListener("touchmove", handleTouch);
		}
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

			let direction = key === "ArrowDown" ? "down" : ("up" as "down" | "up");

			await handleScroll(mainRef, currentIndexRef, direction, setBgColor);

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
			// event.preventDefault();
			window.removeEventListener("wheel", handleWheel);

			const { deltaY } = event;
			console.log(
				`
			

				WHEEL
			
			
			`,
				deltaY
			);

			if (deltaY === 0 || deltaY === -0) {
				await new Promise((r) => setTimeout(r, 100));
				window.addEventListener("wheel", handleWheel);
				return;
			}

			const scrollAmount = Math.round(deltaY) * 10;

			const direction = scrollAmount >= 0 ? "down" : "up";

			await new Promise((r) => setTimeout(r, 100));

			await handleScroll(mainRef, currentIndexRef, direction, setBgColor);

			await new Promise((r) => setTimeout(r, 100));

			window.addEventListener("wheel", handleWheel);
		}
	});
}

/*

		Check  if we are still on the same child
	*/
// setTimeout(() => {
// 	if (window.scrollY !== currentIndex * innerHeight) {
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

import { useRecoilState } from "recoil";
import { useEffect, useRef, RefObject, useCallback } from "react";
import { gsap } from "gsap";
import { bgColorState, INavigationState } from "../states/navigation";
import { IScrollState, scrollState } from "../states/scroll";
import { useRouter } from "next/router";
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
const MIN_WIDTH = 1024;
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
	const router = useRouter();

	const currentIndexRef = useRef<number>(0);

	const touchStartRef = useRef<number>(0);

	const [bgColor, setBgColor] = useRecoilState(bgColorState);
	const [scroll, setScroll] = useRecoilState(scrollState);

	/**
	 *
	 *
	 *
	 *  SCROLLING
	 *
	 *
	 */
	const scrolling = useCallback(async (to: string | number) => {
		await gsap.to(window, {
			duration: 0.7,
			scrollTo: to,
			ease: "power1.out",
		});
	}, []);
	/**
	 *
	 *
	 *
	 *  HANDLE SCROLL
	 *
	 *
	 */
	const handleScroll = useCallback(
		async (
			mainRef: RefObject<HTMLElement>,
			currentIndex: number,
			setBgColor: (color: INavigationState) => void,
			setScroll: (scroll: IScrollState) => void
		) => {
			const { innerHeight } = window;
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
		},
		[scrolling]
	);

	/**
	 *
	 * HANDLE KEY
	 *
	 */
	const handleKey = useCallback(async (event: KeyboardEvent) => {
		if (window.innerWidth <= MIN_WIDTH) return;

		window.removeEventListener("keydown", handleKey);

		const { key } = event;

		if (key !== "ArrowDown" && key !== "ArrowUp") return;

		let currentIndex = currentIndexRef.current;

		if (key === "ArrowDown") currentIndex++;
		if (key === "ArrowUp") currentIndex--;

		currentIndexRef.current = currentIndex;

		await handleScroll(mainRef, currentIndex, setBgColor, setScroll);

		window.addEventListener("keydown", handleKey);
	}, []);
	/**
	 *
	 * HANDLE WHEEL
	 *
	 */
	const handleWheel = useCallback(async (event: WheelEvent) => {
		if (window.innerWidth <= MIN_WIDTH) return;

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
	}, []);

	/**
	 *
	 * HANDLE Touch
	 *
	 */
	const handleTouchStart = useCallback(async (event: TouchEvent) => {
		if (window.innerWidth <= MIN_WIDTH) return;

		window.removeEventListener("touchstart", handleTouchStart);

		touchStartRef.current = event.touches[0].clientY;

		window.addEventListener("touchstart", handleTouchStart);
	}, []);

	const handleTouchMove = useCallback(async (event: TouchEvent) => {
		if (window.innerWidth <= MIN_WIDTH) return;

		window.removeEventListener("touchmove", handleTouchMove);

		const { clientY } = event.touches[0];
		const direction = touchStartRef.current - clientY > 0;

		let currentIndex = currentIndexRef.current;

		if (direction) currentIndex++;
		if (!direction) currentIndex--;

		currentIndexRef.current = currentIndex;

		await new Promise((r) => setTimeout(r, 100));

		await handleScroll(mainRef, currentIndex, setBgColor, setScroll);

		await new Promise((r) => setTimeout(r, 100));

		window.addEventListener("touchmove", handleTouchMove);
	}, []);

	/**
	 *
	 *
	 *
	 *  GLOBAL REGISTER
	 *
	 *
	 */
	useEffect(() => {
		/**
		 *
		 * Setting GSAP ScrollTo Plugin
		 *
		 */
		const ScrollToPlugin = require("gsap/ScrollToPlugin");
		gsap.registerPlugin(ScrollToPlugin);
		/**
		 *
		 * Setting the initial scroll
		 *
		 */
		scrolling(0);
		setScroll({
			currentIndex: currentIndexRef.current,
			length: [...((mainRef.current?.childNodes as any) ?? [])].length,
			caller: "event",
		});
	}, []);
	/**
	 *
	 *
	 * On route change
	 *
	 */
	useEffect(() => {
		async function updateScroll() {
			await new Promise((resolve) => setTimeout(resolve, 100));
			setScroll({
				currentIndex: currentIndexRef.current,
				length: [...((mainRef.current?.childNodes as any) ?? [])].length,
				caller: "event",
			});
		}

		updateScroll();
	}, [router]);
	/**
	 *
	 *
	 *
	 *  SCROLL INDICATOR HANDLER
	 *
	 *
	 */
	useEffect(() => {
		if (scroll.caller === "event") return;

		currentIndexRef.current = scroll.currentIndex;
		handleScroll(mainRef, scroll.currentIndex, setBgColor, () => {});
	}, [scroll]);
	/**
	 *
	 *
	 * EVENTS
	 *
	 *
	 */
	useEffect(() => {
		window.addEventListener("keydown", handleKey);

		window.addEventListener("wheel", handleWheel);

		window.addEventListener("touchstart", handleTouchStart);
		window.addEventListener("touchmove", handleTouchMove);

		return () => {
			window.removeEventListener("keydown", handleKey);
			window.removeEventListener("wheel", handleWheel);
			window.removeEventListener("touchstart", handleTouchStart);
			window.removeEventListener("touchmove", handleTouchMove);
		};
	}, [handleKey, handleWheel]);
}

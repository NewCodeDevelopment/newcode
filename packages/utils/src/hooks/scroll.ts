import { useRecoilState } from "recoil";
import { useEffect, useRef, RefObject, useCallback } from "react";
import { gsap } from "gsap";
import { bgColorState, INavigationState } from "../states/navigation";
import { IScrollState, scrollState } from "../states/scroll";
import { useRouter } from "next/router";
import { DESKTOP_MIN_WIDTH } from "../const";
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
const MIN_WIDTH = DESKTOP_MIN_WIDTH;
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

    const functions = {
        setInitial: useCallback(async () => {
            await new Promise((resolve) => setTimeout(resolve, 100));

            functions.scrolling(0);
            currentIndexRef.current = 0;

            setScroll({
                ...scroll,
                currentIndex: currentIndexRef.current,
                length: functions.scrollIndicatorLength(),
                caller: "event",
            });

            setBgColor("dark");
        }, []),
        /**
         *
         *
         * Scroll Indicator Length
         *
         */
        scrollIndicatorLength: useCallback(() => {
            const allChildren = [...((mainRef.current?.childNodes as any) ?? [])];
            const children = allChildren.filter(
                (child: HTMLElement) => child.getAttribute("data-visibility") !== "hidden",
            );
            return children.length;
        }, [mainRef]),
        /**
         *
         *
         *
         *  SCROLLING
         *
         *
         */
        scrolling: useCallback(async (to: string | number) => {
            await gsap.to(window, {
                duration: 0.7,
                scrollTo: to,
                ease: "power1.out",
            });
        }, []),
        /**
         *
         *
         *
         *  HANDLE SCROLL
         *
         *
         */
        handleScroll: useCallback(
            async (
                mainRef: RefObject<HTMLElement>,
                currentIndex: number,
                setBgColor: (color: INavigationState) => void,
                setScroll: (scroll: IScrollState) => void,
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
                await functions.scrolling(currentIndex * innerHeight);
                /*
			
					Changing nav color
			
				*/
                setBgColor(currentChild.getAttribute("data-color") ?? "");
                setScroll({
                    ...scroll,
                    currentIndex,
                    length: functions.scrollIndicatorLength(),
                    caller: "event",
                });
                /*
			
					Removing classes
			
				*/
                await new Promise((r) => setTimeout(r, 200));

                children.forEach((child) => {
                    child.classList.remove(SCROLLING_CLASS);
                });
            },
            [scroll],
        ),
        /**
         *
         *
         * HANDLE KEY
         *
         *
         */
        handleKey: useCallback(
            async (event: KeyboardEvent) => {
                if (window.innerWidth <= MIN_WIDTH || !scroll.enabled) return;

                window.removeEventListener("keydown", functions.handleKey);

                const { key } = event;

                if (key !== "ArrowDown" && key !== "ArrowUp") return;

                let currentIndex = currentIndexRef.current;

                if (key === "ArrowDown") currentIndex++;
                if (key === "ArrowUp") currentIndex--;

                currentIndexRef.current = currentIndex;

                await functions.handleScroll(mainRef, currentIndex, setBgColor, setScroll);

                window.addEventListener("keydown", functions.handleKey);
            },
            [scroll.enabled],
        ),
        /**
         *
         *
         * HANDLE WHEEL
         *
         *
         */
        handleWheel: useCallback(
            async (event: WheelEvent) => {
                if (window.innerWidth <= MIN_WIDTH || !scroll.enabled) return;

                window.removeEventListener("wheel", functions.handleWheel);

                const { deltaY } = event;

                if (deltaY === 0 || deltaY === -0) {
                    await new Promise((r) => setTimeout(r, 100));
                    window.addEventListener("wheel", functions.handleWheel);
                    return;
                }

                const scrollAmount = Math.round(deltaY) * 10;

                let currentIndex = currentIndexRef.current;

                if (scrollAmount >= 0) currentIndex++;
                if (scrollAmount <= 0) currentIndex--;

                currentIndexRef.current = currentIndex;

                await new Promise((r) => setTimeout(r, 100));

                await functions.handleScroll(mainRef, currentIndex, setBgColor, setScroll);

                await new Promise((r) => setTimeout(r, 100));

                window.addEventListener("wheel", functions.handleWheel);
            },
            [scroll.enabled],
        ),
        /**
         *
         *
         * HANDLE Touch Start
         *
         *
         */
        handleTouchStart: useCallback(
            async (event: TouchEvent) => {
                if (window.innerWidth <= MIN_WIDTH || !scroll.enabled) return;

                window.removeEventListener("touchstart", functions.handleTouchStart);

                touchStartRef.current = event.touches[0].clientY;

                window.addEventListener("touchstart", functions.handleTouchStart);
            },
            [scroll.enabled],
        ),
        /**
         *
         *
         * HANDLE Touch Start
         *
         *
         */
        handleTouchMove: useCallback(
            async (event: TouchEvent) => {
                if (window.innerWidth <= MIN_WIDTH || !scroll.enabled) return;

                window.removeEventListener("touchmove", functions.handleTouchMove);

                const { clientY } = event.touches[0];
                const direction = touchStartRef.current - clientY > 0;

                let currentIndex = currentIndexRef.current;

                if (direction) currentIndex++;
                if (!direction) currentIndex--;

                currentIndexRef.current = currentIndex;

                await new Promise((r) => setTimeout(r, 100));

                await functions.handleScroll(mainRef, currentIndex, setBgColor, setScroll);

                await new Promise((r) => setTimeout(r, 100));

                window.addEventListener("touchmove", functions.handleTouchMove);
            },
            [scroll.enabled],
        ),
    };

    /**
     *
     * Setting GSAP ScrollTo Plugin
     *
     */
    useEffect(() => {
        const ScrollToPlugin = require("gsap/ScrollToPlugin");
        gsap.registerPlugin(ScrollToPlugin);
    }, []);
    /**
     *
     *
     * On route change
     *
     */
    useEffect(() => {
        functions.setInitial();
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
        functions.handleScroll(mainRef, scroll.currentIndex, setBgColor, () => {});
    }, [scroll]);
    /**
     *
     *
     * EVENTS
     *
     *
     */
    useEffect(() => {
        window.addEventListener("keydown", functions.handleKey);

        window.addEventListener("wheel", functions.handleWheel);

        window.addEventListener("touchstart", functions.handleTouchStart);
        window.addEventListener("touchmove", functions.handleTouchMove);

        return () => {
            window.removeEventListener("keydown", functions.handleKey);
            window.removeEventListener("wheel", functions.handleWheel);
            window.removeEventListener("touchstart", functions.handleTouchStart);
            window.removeEventListener("touchmove", functions.handleTouchMove);
        };
    }, [
        functions.handleKey,
        functions.handleWheel,
        functions.handleTouchStart,
        functions.handleTouchMove,
    ]);
}

/**
 *
 *
 * Scroll Indicator Length
 *
 */
// const scrollIndicatorLength = useCallback(() => {
// 	const allChildren = [...((mainRef.current?.childNodes as any) ?? [])];
// 	const children = allChildren.filter(
// 		(child: HTMLElement) => child.getAttribute("data-visibility") !== "hidden"
// 	);
// 	return children.length;
// }, [mainRef]);

import gsap from "gsap";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { bgColorState } from "../states/bgColor";

export function useScroll() {
  const router = useRouter();
  const mainRef = useRef<HTMLElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [_, setBgColor] = useRecoilState(bgColorState);
  const [childrenLength, setChildrenLength] = useState(0);

  /**
   * Get the child nodes
   * @param
   * @returns child nodes
   */
  const getChildNodes = useCallback(() => {
    const childNodes = mainRef.current?.childNodes || [];
    return [...(childNodes as any)].filter(
      (child: HTMLElement) => child.getAttribute("data-visibility") !== "hidden",
    );
  }, [mainRef]);

  /**
   * Scroll to
   * @param
   * @returns
   */
  const scrolling = useCallback(async (to: number) => {
    await gsap.to(window, {
      duration: 1,
      scrollTo: to,
      ease: "power2.inOut",
    });
  }, []);

  /**
   * Hannle scroll
   * @param index
   * @returns boolean
   */
  const handleScroll = useCallback(
    async (index: number) => {
      const childNodes = getChildNodes();
      const currentChild = childNodes[index];

      if (!currentChild) return false;

      childNodes.forEach((child: any) => child.classList.add("scrolling-section"));
      await new Promise((r) => setTimeout(r, 200));

      await scrolling(index * window.innerHeight);

      setBgColor((currentChild as any).getAttribute("data-color") ?? "");
      setCurrentIndex(index);

      childNodes.forEach((child: any) => child.classList.remove("scrolling-section"));

      return true;
    },
    [getChildNodes, setBgColor, scrolling, setCurrentIndex],
  );

  /**
   * Set initial
   * @param
   * @returns
   */
  const setInitial = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    scrolling(0);
    setCurrentIndex(0);
    setBgColor("dark");
    setChildrenLength(getChildNodes().length || 0);
  }, [setBgColor, scrolling, setChildrenLength, getChildNodes]);

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
    setInitial();
  }, [router, setInitial]);

  return {
    ref: mainRef,
    scrollToIndex: handleScroll,
    currentIndex,
    childrenLength,
  };
}

// export function useScroll(mainRef: RefObject<HTMLElement>) {
//   const router = useRouter();

//   const currentIndexRef = useRef<number>(0);

//   const touchStartRef = useRef<number>(0);

//   const [bgColor, setBgColor] = useRecoilState(bgColorState);
//   const [scroll, setScroll] = useRecoilState(scrollState);

//   /**
//    *
//    *
//    * Scroll Indicator Length
//    *
//    */
//   const scrollIndicatorLength = useCallback(() => {
//     const allChildren = [...((mainRef.current?.childNodes as any) ?? [])];
//     const children = allChildren.filter(
//       (child: HTMLElement) => child.getAttribute("data-visibility") !== "hidden",
//     );
//     return children.length;
//   }, [mainRef]);
//   /**
//    *
//    *
//    *
//    *  SCROLLING
//    *
//    *
//    */
//   const scrolling = useCallback(async (to: string | number) => {
//     await gsap.to(window, {
//       duration: 0.7,
//       scrollTo: to,
//       ease: "power1.out",
//     });
//   }, []);

//   /**
//    *
//    *
//    *
//    *  HANDLE SCROLL
//    *
//    *
//    */
//   const handleScroll = useCallback(
//     async (
//       mainRef: RefObject<HTMLElement>,
//       currentIndex: number,
//       setBgColor: (color: INavigationState) => void,
//       setScroll: (scroll: IScrollState) => void,
//     ) => {
//       const { innerHeight } = window;
//       /*

//         Children of the mainRef
//       */
//       const main = mainRef.current;
//       const children = [...((main?.childNodes as any) ?? [])];
//       /*

//         Check if the current index is valid

//         */
//       if (!children[currentIndex]) {
//         console.info("NO MORE CHILDREN");
//         return;
//       }
//       /*

//         CurrenChild

//       */
//       const currentChild = children[currentIndex];
//       /*

//         Adding classes

//       */
//       children.forEach((child) => child.classList.add(SCROLLING_CLASS));

//       await new Promise((r) => setTimeout(r, 200));
//       /*

//         Scrolling

//       */
//       await scrolling(currentIndex * innerHeight);
//       /*

//         Changing nav color

//       */
//       setBgColor(currentChild.getAttribute("data-color") ?? "");
//       setScroll({
//         ...scroll,
//         currentIndex,
//         length: scrollIndicatorLength(),
//         caller: "event",
//       });
//       /*

//         Removing classes

//       */
//       await new Promise((r) => setTimeout(r, 200));

//       children.forEach((child) => {
//         child.classList.remove(SCROLLING_CLASS);
//       });
//     },
//     [scroll],
//   );
//   /**
//    *
//    *
//    * HANDLE KEY
//    *
//    *
//    */
//   const handleKey = useCallback(
//     async (event: KeyboardEvent) => {
//       if (window.innerWidth <= MIN_WIDTH || !scroll.enabled) return;

//       window.removeEventListener("keydown", handleKey);

//       const { key } = event;

//       if (key !== "ArrowDown" && key !== "ArrowUp") return;

//       let currentIndex = currentIndexRef.current;

//       if (key === "ArrowDown") currentIndex++;
//       if (key === "ArrowUp") currentIndex--;

//       currentIndexRef.current = currentIndex;

//       await handleScroll(mainRef, currentIndex, setBgColor, setScroll);

//       window.addEventListener("keydown", handleKey);
//     },
//     [scroll.enabled],
//   );
//   /**
//    *
//    *
//    * HANDLE WHEEL
//    *
//    *
//    */
//   const handleWheel = useCallback(
//     async (event: WheelEvent) => {
//       if (window.innerWidth <= MIN_WIDTH || !scroll.enabled) return;

//       window.removeEventListener("wheel", handleWheel);

//       const { deltaY } = event;

//       if (deltaY === 0 || deltaY === -0) {
//         await new Promise((r) => setTimeout(r, 100));
//         window.addEventListener("wheel", handleWheel);
//         return;
//       }

//       const scrollAmount = Math.round(deltaY) * 10;

//       let currentIndex = currentIndexRef.current;

//       if (scrollAmount >= 0) currentIndex++;
//       if (scrollAmount <= 0) currentIndex--;

//       currentIndexRef.current = currentIndex;

//       await new Promise((r) => setTimeout(r, 100));

//       await handleScroll(mainRef, currentIndex, setBgColor, setScroll);

//       await new Promise((r) => setTimeout(r, 100));

//       window.addEventListener("wheel", handleWheel);
//     },
//     [scroll.enabled],
//   );
//   /**
//    *
//    *
//    * HANDLE Touch Start
//    *
//    *
//    */
//   const handleTouchStart = useCallback(
//     async (event: TouchEvent) => {
//       if (window.innerWidth <= MIN_WIDTH || !scroll.enabled) return;

//       window.removeEventListener("touchstart", handleTouchStart);

//       touchStartRef.current = event.touches[0].clientY;

//       window.addEventListener("touchstart", handleTouchStart);
//     },
//     [scroll.enabled],
//   );
//   /**
//    *
//    *
//    * HANDLE Touch Start
//    *
//    *
//    */
//   const handleTouchMove = useCallback(
//     async (event: TouchEvent) => {
//       if (window.innerWidth <= MIN_WIDTH || !scroll.enabled) return;

//       window.removeEventListener("touchmove", handleTouchMove);

//       const { clientY } = event.touches[0];
//       const direction = touchStartRef.current - clientY > 0;

//       let currentIndex = currentIndexRef.current;

//       if (direction) currentIndex++;
//       if (!direction) currentIndex--;

//       currentIndexRef.current = currentIndex;

//       await new Promise((r) => setTimeout(r, 100));

//       await handleScroll(mainRef, currentIndex, setBgColor, setScroll);

//       await new Promise((r) => setTimeout(r, 100));

//       window.addEventListener("touchmove", handleTouchMove);
//     },
//     [scroll.enabled],
//   );
//   /**
//    *
//    *
//    * Set initial
//    *
//    *
//    */
//   const setInitial = useCallback(async () => {
//     await new Promise((resolve) => setTimeout(resolve, 100));

//     scrolling(0);
//     currentIndexRef.current = 0;

//     setScroll({
//       ...scroll,
//       currentIndex: currentIndexRef.current,
//       length: scrollIndicatorLength(),
//       caller: "event",
//     });

//     setBgColor("dark");
//   }, [scroll, setBgColor, setScroll, scrolling, scrollIndicatorLength]);
//   /**
//    *
//    * Setting GSAP ScrollTo Plugin
//    *
//    */
//   useEffect(() => {
//     const ScrollToPlugin = require("gsap/ScrollToPlugin");
//     gsap.registerPlugin(ScrollToPlugin);
//   }, []);
//   /**
//    *
//    *
//    * On route change
//    *
//    */
//   useEffect(() => {
//     setInitial();
//   }, [router]);
//   /**
//    *
//    *
//    *
//    *  SCROLL INDICATOR HANDLER
//    *
//    *
//    */
// //   useEffect(() => {
// //     if (scroll.caller === "event") return;

// //     currentIndexRef.current = scroll.currentIndex;
// //     handleScroll(mainRef, scroll.currentIndex, setBgColor, () => {});
// //   }, [scroll]);
//   /**
//    *
//    *
//    * EVENTS
//    *
//    *
//    */
//   useEffect(() => {
//     window.addEventListener("keydown", handleKey);

//     window.addEventListener("wheel", handleWheel);

//     window.addEventListener("touchstart", handleTouchStart);
//     window.addEventListener("touchmove", handleTouchMove);

//     return () => {
//       window.removeEventListener("keydown", handleKey);
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, [handleKey, handleWheel, handleTouchStart, handleTouchMove]);
// }

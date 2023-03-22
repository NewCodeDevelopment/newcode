import { DESKTOP_MIN_WIDTH } from "@/utils/const";
import { useScroll } from "@/utils/hooks/scroll";
import { overflowHiddenState } from "@/utils/states/overflow";
import { HTMLAttributes, useCallback, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import SectionIndicator from "../common/SectionIndicator";

type ScrollLayoutProps = HTMLAttributes<HTMLElement> & {
  children: any;
  enableScroll?: boolean;
};

export default function ScrollLayout({
  children,
  enableScroll = true,
  ...props
}: ScrollLayoutProps) {
  const [overflowHidden] = useRecoilState(overflowHiddenState);
  const { ref, scrollToIndex, currentIndex, childrenLength } = useScroll();

  const eventIsActive = useRef(false);
  const touchStartRef = useRef<number>(0);
  /**
   *
   *
   * Handle Wheel
   *
   *
   */
  const handleKey = useCallback(
    async ({ key }: KeyboardEvent) => {
      if (window.innerWidth <= DESKTOP_MIN_WIDTH) return;
      window.removeEventListener("keydown", handleKey);

      if (key !== "ArrowDown" && key !== "ArrowUp") return;

      const newIndex = currentIndex + (key === "ArrowDown" ? 1 : 0) + (key === "ArrowUp" ? -1 : 0);

      await new Promise((r) => setTimeout(r, 100));
      const succes = await scrollToIndex(newIndex);

      if (!succes) window.addEventListener("keydown", handleKey);
    },
    [currentIndex, scrollToIndex],
  );
  /**
   *
   *
   * Handle Wheel
   *
   *
   */
  const handleWheel = useCallback(
    async ({ deltaY }: WheelEvent) => {
      if (window.innerWidth <= DESKTOP_MIN_WIDTH) return;
      window.removeEventListener("wheel", handleWheel);

      if (deltaY === 0 || deltaY === -0) {
        await new Promise((r) => setTimeout(r, 100));
        window.addEventListener("wheel", handleWheel);
        return;
      }

      const scrollAmount = Math.round(deltaY) * 10;

      let newIndex = currentIndex;

      if (scrollAmount >= 0) newIndex++;
      if (scrollAmount <= 0) newIndex--;

      await new Promise((r) => setTimeout(r, 100));
      const succes = await scrollToIndex(newIndex);

      if (!succes) window.addEventListener("wheel", handleWheel);
    },
    [currentIndex, scrollToIndex],
  );
  /**
   *
   *
   * Handle Touch
   *
   *
   */
  const handleTouchStart = useCallback(async ({ touches }: TouchEvent) => {
    if (window.innerWidth <= DESKTOP_MIN_WIDTH) return;
    touchStartRef.current = touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback(
    async ({ touches }: TouchEvent) => {
      if (window.innerWidth <= DESKTOP_MIN_WIDTH) return;
      window.removeEventListener("touchmove", handleTouchMove);

      const direction = touchStartRef.current - touches[0].clientY > 0;

      let newIndex = currentIndex;

      if (direction) newIndex++;
      if (!direction) newIndex--;

      await new Promise((r) => setTimeout(r, 100));
      const succes = await scrollToIndex(newIndex);

      if (!succes) window.addEventListener("touchmove", handleTouchMove);
    },
    [currentIndex, scrollToIndex],
  );

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
  }, [handleKey, handleWheel, handleTouchStart, handleTouchMove]);

  return (
    <>
      <SectionIndicator
        length={childrenLength}
        scrollToIndex={scrollToIndex}
        currentIndex={currentIndex}
      />

      <main {...props} ref={ref}>
        {children}
      </main>

      {overflowHidden && (
        <style jsx global>
          {`
            body,
            html {
              overflow: hidden !important;
            }
          `}
        </style>
      )}
    </>
  );
}

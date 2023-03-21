import { DESKTOP_MIN_WIDTH } from "@/utils/const";
import { useScroll } from "@/utils/hooks/scroll";
import { overflowHiddenState } from "@/utils/states/overflow";
import { HTMLAttributes, TouchEvent, useCallback, useRef, WheelEvent } from "react";
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
  const { ref, currentIndex, setCurrentIndex, childrenLength } = useScroll();

  const eventIsActive = useRef(false);
  const touchStartRef = useRef<number>(0);
  /**
   *
   *
   * Handle Wheel
   *
   *
   */
  const handleWheel = useCallback(
    async ({ deltaY }: WheelEvent<HTMLElement>) => {
      if (window.innerWidth <= DESKTOP_MIN_WIDTH) return;
      eventIsActive.current = true;

      if (deltaY === 0 || deltaY === -0) return;

      const scrollAmount = Math.round(deltaY) * 10;

      if (scrollAmount >= 0) setCurrentIndex(currentIndex + 1);
      if (scrollAmount <= 0) setCurrentIndex(currentIndex - 1);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      eventIsActive.current = false;
    },
    [setCurrentIndex, currentIndex],
  );
  /**
   *
   *
   * Handle Touch
   *
   *
   */
  const handleTouchStart = useCallback(async ({ touches }: TouchEvent<HTMLElement>) => {
    if (window.innerWidth <= DESKTOP_MIN_WIDTH || eventIsActive) return;
    touchStartRef.current = touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback(
    async ({ touches }: TouchEvent<HTMLElement>) => {
      if (window.innerWidth <= DESKTOP_MIN_WIDTH) return;
      eventIsActive.current = true;

      const direction = touchStartRef.current - touches[0].clientY > 0;

      if (direction) setCurrentIndex(currentIndex + 1);
      if (!direction) setCurrentIndex(currentIndex - 1);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      eventIsActive.current = false;
    },
    [setCurrentIndex, currentIndex],
  );

  return (
    <>
      <SectionIndicator
        length={childrenLength}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      <main
        {...props}
        ref={ref}
        onWheel={(e) => !eventIsActive.current && handleWheel(e)}
        onTouchMove={(e) => !eventIsActive.current && handleTouchMove(e)}
        onTouchStart={handleTouchStart}
      >
        {children}
      </main>

      {overflowHidden && (
        <style
          // @ts-ignore
          jsx
          global
        >
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

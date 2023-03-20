import { usePathHook, usePaths } from "@/config/paths";
import { useScroll } from "@/utils/hooks/scroll";
import { HTMLAttributes, useRef } from "react";
import { twMerge } from "tailwind-merge";
import Popup from "../actions/Popup";
import SectionIndicator from "../common/SectionIndicator";
import Footer from "../footer/Footer";
import { Navigation } from "../navigation/Navigation";

export type MainLayoutProps = HTMLAttributes<HTMLElement> & {
  px?: boolean;
  py?: boolean;
  pt?: boolean;
  pb?: boolean;
  pl?: boolean;
  pr?: boolean;
  children: any;
  navigation?: boolean;
  footer?: boolean;
  pathsHook?: () => usePathHook;
  scroll?: boolean;
  scrollIndicator?: boolean;
};

export default function MainLayout({
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  children,
  navigation = true,
  footer = true,
  pathsHook = usePaths,
  scroll = true,
  scrollIndicator = true,
  className,
  ...props
}: MainLayoutProps) {
  const mainRef = useRef<HTMLElement>(null);

  // scroll && useScroll(mainRef);
  useScroll(mainRef);

  return (
    <>
      {navigation && <Navigation pathsHook={pathsHook} />}
      {scrollIndicator && <SectionIndicator />}

      <Popup />

      <main
        {...props}
        ref={mainRef}
        className={twMerge(
          //  y-axis
          py && "py-page",
          pt && "pt-page",
          pb && "pb-page",
          // x -axis
          px && "px-page",
          pl && "pl-page",
          pr && "pr-page",
          "bg-red-500",
          // other
          className,
        )}
      >
        {children}

        {footer && <Footer />}
      </main>
    </>
  );
}

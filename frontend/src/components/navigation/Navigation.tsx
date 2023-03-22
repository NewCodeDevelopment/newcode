import { Symbol } from "@/icons/brand/Symbol";
import { bgColorState } from "@/utils/states/bgColor";
import { overflowHiddenState } from "@/utils/states/overflow";
import Link from "next/link";
import { useRouter } from "next/router";
import { HTMLAttributes, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { twMerge } from "tailwind-merge";
import { usePathHook } from "../../config/paths";
import { Menu } from "./Menu";

type NavigationProps = HTMLAttributes<HTMLElement> & {
  pathsHook: () => usePathHook;
};

export function Navigation({ pathsHook, className, ...props }: NavigationProps) {
  const router = useRouter();

  const [currentRoute, setCurrentRoute] = useState("");

  const [open, setOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(true);

  const { mainRoutes } = pathsHook();

  const [bgColor, setBgColor] = useRecoilState(bgColorState);
  const [oldBgColor, setOldBgColor] = useState(bgColor);
  const [_, setOverflowHidden] = useRecoilState(overflowHiddenState);

  const cycleMenu = () => {
    // If the menu is open, we want to close it
    if (open) {
      setBgColor(oldBgColor);
      setOverflowHidden(false);
    }

    // If the menu is closed, we want to open it
    if (!open) {
      setOldBgColor(bgColor);
      setBgColor("dark");
      setOverflowHidden(true);
    }

    if (!animationComplete) return;
    setAnimationComplete(false);
    setOpen(!open);
  };

  function currentRouteHandler(path: string) {
    const currentPath = router.route.split("/").slice(0, 2).join("/");
    return currentPath === path;
  }

  useEffect(() => {
    setCurrentRoute(router.pathname);
  }, [router.pathname]);

  return (
    <header
      {...props}
      className={twMerge(
        "fixed left-0 top-0 z-40 w-full transform transition-all duration-200 ease-in-out",
        className,
      )}
    >
      {/* 
            
            
                Mobile Menu container
            */}
      <Menu
        routes={mainRoutes}
        currentRoute={currentRoute}
        open={open}
        cycleMenuCallback={cycleMenu}
        animationCompleteCallback={setAnimationComplete}
      />

      {/* 
            
            
            
            
                Navigation Bar 
            */}
      <div
        className={twMerge(
          "px-page bg-dark-700 flex flex-row items-center justify-between bg-opacity-20 py-4 backdrop-blur-xl backdrop-filter lg:bg-transparent lg:backdrop-blur-0 xl:py-12",
          open && "bg-transparent",
        )}
      >
        {/* 



                    Shared Components
                */}
        <Link
          href="/"
          className="z-10 flex flex-row items-center gap-3"
          onClick={open ? cycleMenu : undefined}
        >
          <Symbol
            className={twMerge(
              "text-light-500 w-6  xl:w-12",
              bgColor === "dark" && "fill-red-500",
              bgColor === "light" && "fill-red-500",
              bgColor === "red" && "fill-dark-500",
              open && "fill-light-500",
            )}
          />
          <span
            className={twMerge(
              "text-lg font-extrabold xl:text-3xl",
              "transition-all duration-1000 ease-in-out",
              bgColor === "light" && "text-dark-500",
              bgColor === "dark" && "text-light-500",
              bgColor === "red" && "text-dark-500",
              open && "text-light-500",
            )}
          >
            NewCode
          </span>
        </Link>

        {/* 



                    Mobile
                */}
        <a
          className={twMerge(
            "text-light-500 text-md z-10 font-bold xl:hidden",
            "transition-all duration-1000 ease-in-out",
            bgColor === "light" && "text-dark-500",
            bgColor === "dark" && "text-light-500",
            bgColor === "red" && "text-dark-500",
          )}
          onClick={cycleMenu}
        >
          {open ? "Close" : "Navigate"}_
        </a>

        {/* 



                    Desktop
                */}
        <div className="hidden xl:flex xl:flex-row xl:gap-16">
          {mainRoutes.map(({ name, path }, index) => (
            <Link
              key={index}
              href={path}
              className={twMerge(
                "font-bold transition-all duration-1000 ease-in-out xl:text-xl",
                bgColor === "light" && "navigation-link-red text-dark-500",
                bgColor === "dark" && "navigation-link-red text-light-500",
                bgColor === "red" && "navigation-link-dark text-dark-500",

                currentRouteHandler(path) &&
                  bgColor === "light" &&
                  "navigation-currentRoute-red text-red-500",
                currentRouteHandler(path) &&
                  bgColor === "dark" &&
                  "navigation-currentRoute-red text-red-500",
                currentRouteHandler(path) &&
                  bgColor === "red" &&
                  "navigation-currentRoute-light text-light-500",
              )}
            >
              {name}_
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

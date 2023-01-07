import classNames from "classnames";
import { HTMLAttributes, useRef } from "react";
import { useScroll } from "utils";
import { Footer, Navigation, Popup, SectionIndicator } from "..";
import { usePathHook, usePaths } from "../..";

export interface MainLayoutProps extends HTMLAttributes<HTMLElement> {
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
}

export function MainLayout({
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
    {
        scroll && useScroll(mainRef);
    }

    return (
        <>
            {navigation && <Navigation pathsHook={pathsHook} />}
            {scrollIndicator && <SectionIndicator />}

            <Popup />

            <main
                {...props}
                ref={mainRef}
                className={classNames(
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

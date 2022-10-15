import Head from "next/head";
import { HTMLAttributes, useRef } from "react";
import classNames from "classnames";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import { usePathHook, usePaths } from "../config/paths";
import { useScroll } from "utils";

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
}

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
	className,
	...props
}: MainLayoutProps) {
	const mainRef = useRef<HTMLElement>(null);
	useScroll(mainRef);

	return (
		<>
			<Head>
				<title>NewCode</title>
			</Head>

			{navigation && <Navigation pathsHook={pathsHook} />}

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
					className
				)}
			>
				{children}

				{footer && <Footer pathsHook={pathsHook} />}
			</main>
		</>
	);
}
{
	/* <div className="fixed right-0 top-[50%] z-50 flex flex-col gap-4">
				<Button shape="square" onClick={() => setScroll("up")}>
					<Angle className="rotate-180 w-5 fill-light-300" />
				</Button>
				<Button shape="square" onClick={() => setScroll("down")}>
					<Angle className="w-5 fill-light-300" />
				</Button>
			</div> */
}

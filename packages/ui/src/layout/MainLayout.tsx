import Head from "next/head";
import { HTMLAttributes } from "react";
import classNames from "classnames";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import { usePathHook, usePaths } from "../config/paths";

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
	return (
		<>
			<Head>
				<title>NewCode</title>
			</Head>

			{navigation && <Navigation pathsHook={pathsHook} />}

			<main
				{...props}
				className={classNames(
					//  y-axis
					py && "py-page",
					pt && "pt-page",
					pb && "pb-page",
					// x -axis
					px && "px-page",
					pl && "pl-page",
					pr && "pr-page",
					className
				)}
			>
				{children}
			</main>

			{/* {footer && <Footer pathsHook={pathsHook} />} */}
		</>
	);
}

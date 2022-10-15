import classNames from "classnames";
import { HTMLAttributes } from "react";
import { Color } from "../config/colors";

interface Props extends HTMLAttributes<HTMLElement> {
	children: any;
	px?: boolean;
	py?: boolean;
	pt?: boolean;
	pb?: boolean;
	pl?: boolean;
	pr?: boolean;
	bg?: Color;
	align?: "left" | "center" | "right";
}

export default function Section({
	children,
	px = true,
	py = true,
	pt,
	pb,
	pl,
	pr,
	bg = "dark",
	align = "left",
	className,
	...props
}: Props) {
	const bgColors: { [key in Color]: string } = {
		red: "bg-red-500",
		dark: "bg-dark-700",
		light: "bg-light-500",
		transparent: "bg-transparent",
	};

	const navigationColors: { [key in Color]: string } = {
		red: "dark",
		dark: "light",
		light: "dark",
		transparent: "dark",
	};

	const alignItems = {
		left: "place-items-start",
		center: "place-items-center",
		right: "place-items-end",
	};

	return (
		<section
			{...props}
			data-color={navigationColors[bg]}
			className={classNames(
				"relative h-screen grid grid-cols-1 grid-rows-1 transform transition-all duration-200 ease-in-out",
				bgColors[bg],
				alignItems[align],
				"border-red-500",
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
		</section>
	);
}

import classNames from "classnames";
import { HTMLAttributes } from "react";
import { useWindow } from "utils";
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
	style,
	...props
}: Props) {
	const { height, width } = useWindow();

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

	console.log("Sectionnnn", height, width);

	return (
		<section
			{...props}
			data-color={navigationColors[bg]}
			className={classNames(
				"grid grid-cols-1 grid-rows-1 transform transition-all duration-200 ease-in-out lg:relative lg:h-screen",
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
			style={{
				height: width > 1024 ? height : "auto",
				...style,
			}}
		>
			{children}
		</section>
	);
}

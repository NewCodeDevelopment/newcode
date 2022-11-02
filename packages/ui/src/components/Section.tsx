import classNames from "classnames";
import { forwardRef } from "react";
import { DESKTOP_MIN_WIDTH, useWindow } from "utils";
import { Color } from "../config/colors";
import { motion, HTMLMotionProps } from "framer-motion";

interface Props extends HTMLMotionProps<"section"> {
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

const Section = forwardRef<HTMLElement, Props>(
	(
		{
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
		},
		ref
	) => {
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

		return (
			<motion.section
				{...props}
				ref={ref}
				data-color={navigationColors[bg]}
				className={classNames(
					"z-0 grid grid-cols-1 grid-rows-1 transition-all duration-200 ease-in-out lg:relative lg:h-screen",
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
					height: width > DESKTOP_MIN_WIDTH ? height : "auto",
					...style,
				}}
			>
				{children}
			</motion.section>
		);
	}
);

export default Section;

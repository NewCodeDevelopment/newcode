import { forwardRef } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import classNames from "classnames";
import { Color } from "..";
import Link from "next/link";
import {
	buttonColors,
	buttonShape,
	buttonShapes,
	buttonSize,
	buttonVariant,
} from "../config/button";

interface Props extends HTMLMotionProps<"a"> {
	children: any;
	href: string;
	color?: Color;
	variant?: buttonVariant;
	size?: buttonSize;
	shape?: buttonShape;
}

const HyperLink = forwardRef<HTMLAnchorElement, Props>(
	(
		{
			href,
			size = "medium",
			color = "red",
			shape = "pill",
			variant = "filled",
			target,
			children,
			className,
			...props
		},
		ref
	) => {
		const animation = {
			initial: {
				scale: 1,
				opacity: 1,
			},
			clicked: {
				scale: [0.9, 1],
				transition: {
					duration: 0.2,
					stiffness: 10,
					type: "spring",
				},
			},
			hover: {
				scale: 1.05,
				transition: {
					duration: 0.2,
					type: "ease-in-out",
				},
			},
		};

		return (
			<Link href={href} target={target}>
				<motion.a
					{...props}
					ref={ref}
					className={classNames(
						buttonColors(variant, color),
						buttonShapes(shape, size),
						"font-semibold w-fit h-fit",
						className
					)}
					variants={animation}
					initial="initial"
					whileTap="clicked"
					whileHover="hover"
				>
					{children}
				</motion.a>
			</Link>
		);
	}
);

export default HyperLink;

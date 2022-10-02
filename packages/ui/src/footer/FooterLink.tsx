import Link from "next/link";
import { HTMLMotionProps, motion } from "framer-motion";
import classNames from "classnames";
import {
	Color,
	hoverTextColors,
	textColors,
} from "../config/colors";

interface Props extends HTMLMotionProps<"a"> {
	children: any;
	href: string;
	color?: Color;
	target?: string;
}

export default function FooterLink({
	children,
	href,
	className,
	color = "light",
	target,
	...props
}: Props) {
	return (
		<Link href={href} passHref>
			<motion.a
				{...props}
				className={classNames(
					"font-medium hover:underline cursor-pointer",
					"text-3xl md:text-4xl lg:text-2xl xl:text-2xl",
					textColors[color][500],
					hoverTextColors[color][600],
					className
				)}
				target={target}
			>
				{children}
			</motion.a>
		</Link>
	);
}

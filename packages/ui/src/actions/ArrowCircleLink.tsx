import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { CircleArrow, Color, fillColors } from "..";
import classNames from "classnames";

interface Props extends HTMLMotionProps<"a"> {
	description: string;
	path: string;
	inner?: boolean;
	variants?: any;
	onClick?: any;
	bgColor?: "light" | "dark" | "red";
}

export default function ArrowCircleLink({
	description,
	path,
	variants,
	onClick,
	bgColor = "dark",
	className,
}: Props) {
	const bgColors = {
		dark: "fill-dark-700",
		red: "fill-red-500",
		light: "fill-red-500",
	};

	return (
		<Link href={path} passHref>
			<motion.a
				className={classNames("flex flex-row items-center gap-4", className)}
				variants={variants}
				onClick={onClick}
			>
				<CircleArrow className={classNames("w-12 xl:w-16", bgColors[bgColor])} />
				<span className="text-light-500 font-black text-2xl lg:text-3xl">
					{description}
				</span>
			</motion.a>
		</Link>
	);
}

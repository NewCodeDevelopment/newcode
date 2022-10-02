import { motion } from "framer-motion";
import { HTMLAttributes } from "react";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLElement> {}

export default function Scroll({ className, ...props }: Props) {
	return (
		<svg {...props} viewBox="0 0 19 27" className={cn("w-8", className)}>
			<path
				d="M9.5,2A7.5,7.5,0,0,0,2,9.5v8a7.5,7.5,0,0,0,15,0v-8A7.5,7.5,0,0,0,9.5,2m0-2A9.5,9.5,0,0,1,19,9.5v8a9.5,9.5,0,0,1-19,0v-8A9.5,9.5,0,0,1,9.5,0Z"
				fill="#d3d3d3"
			/>
			<motion.circle
				animate={{ y: [0, 10], opacity: [1, 0] }}
				transition={{
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				cx="9.5"
				cy="8.5"
				r="1.5"
				fill="#d8d8d8"
			/>
		</svg>
	);
}

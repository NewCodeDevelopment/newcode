import { motion } from "framer-motion";
import Link from "next/link";
import { CircleArrow } from "..";

interface Props {
	description: string;
	path: string;
	inner?: boolean;
	variants?: any;
	onClick?: any;
}

export default function ArrowCircleLink({
	description,
	path,
	variants,
	onClick,
}: Props) {
	return (
		<Link href={path} passHref>
			<motion.a
				className="flex flex-row items-center gap-4"
				variants={variants}
				onClick={onClick}
			>
				<CircleArrow className="w-12" />
				<span className="text-light-500 font-black text-2xl">
					{description}
				</span>
			</motion.a>
		</Link>
	);
}

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { HTMLAttributes } from "react";
import { PlusIcon } from "..";

interface Props extends HTMLAttributes<HTMLElement> {
	opened: boolean;
	setOpened: (opened: boolean) => void;
	children: any;
	title: string;
	titleClassName?: string;
	childrenClassName?: string;
}

export default function Dropdown({
	opened,
	setOpened,
	title,
	children,
	className,
	onClick,
	titleClassName,
	childrenClassName,
	...props
}: Props) {
	const linksVariants = {
		initial: {
			opacity: 0,
			y: 0,
			height: 0,
			border: 0,
		},
		enter: {
			opacity: 1,
			y: 0,
			height: "auto",
		},
	};

	const angleVariants = {
		initial: {
			rotate: 0,
		},
		enter: {
			rotate: 135,
		},
	};

	return (
		<div {...props} className={classNames("flex flex-col gap-4", className)}>
			<motion.div
				className={classNames(
					"flex flex-row justify-between items-center gap-4 cursor-pointer",
					titleClassName
				)}
				onClick={(e) => {
					setOpened(!opened);
					onClick && onClick(e);
				}}
			>
				<span className="text-xl font-bold">{title}</span>

				<PlusIcon
					className="w-4 hidden lg:block"
					initial="initial"
					animate={opened ? "enter" : "initial"}
					variants={angleVariants}
				/>
			</motion.div>

			<AnimatePresence>
				{opened && (
					<motion.div
						className={childrenClassName}
						initial="initial"
						animate={opened ? "enter" : "initial"}
						variants={linksVariants}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

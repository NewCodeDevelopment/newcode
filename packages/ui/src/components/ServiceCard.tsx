import { HTMLAttributes } from "react";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import Dropdown from "./Dropdown";
import classNames from "classnames";
import CloseIcon from "../icons/actions/CloseIcon";
import { motion, AnimatePresence } from "framer-motion";

interface Props extends HTMLAttributes<HTMLElement> {
	title: string;
	description: any;
	id: string;
	open: string;
	setOpen: (id: string) => void;
}

export default function ServiceCard({
	title,
	description,
	id,
	open,
	setOpen,
}: Props) {
	function handleOpen() {
		setOpen(id);
	}

	function handleClose() {
		setOpen(id === open ? "" : id);
	}

	const animations = {
		popup: {
			initial: {
				opacity: 0,
				scale: 0,
			},
			enter: {
				opacity: 1,
				scale: 1,
			},
		},
		background: {
			initial: {
				opacity: 0,
			},
			enter: {
				opacity: 1,
			},
		},
	};

	return (
		<>
			<Dropdown
				opened={id === open}
				setOpened={handleClose}
				title={title}
				className="hidden lg:flex bg-light-400 p-5 rounded-xl h-min"
			>
				<Paragraph size="small" color="dark" maxCharacters={50}>
					{description}
				</Paragraph>
			</Dropdown>

			<div className="lg:hidden">
				<Heading
					color="dark"
					type="h4"
					className="bg-light-400 p-5 rounded-xl h-min"
					onClick={handleOpen}
				>
					{title}
				</Heading>

				<AnimatePresence mode="wait">
					{open === id && (
						<motion.div
							className="lg:hidden absolute left-0 right-0 top-0 bottom-0 px-page py-page grid grid-cols-1 place-items-center bg-dark-700 bg-opacity-20 backdrop-filter backdrop-blur-xl"
							variants={animations.background}
							initial="initial"
							animate="enter"
							exit="initial"
						>
							<div
								className="absolute -z-10 left-0 right-0 top-0 bottom-0"
								onClick={handleClose}
							/>
							<motion.div
								className="bg-light-300 p-8 rounded-3xl flex flex-col gap-6"
								variants={animations.popup}
								initial="initial"
								animate="enter"
								exit="initial"
							>
								<span className="flex flex-row justify-between">
									<Heading color="red" type="h3">
										{title}
									</Heading>

									<CloseIcon className="w-4" onClick={handleClose} />
								</span>
								<div>
									<Paragraph size="small" color="dark" maxCharacters={50}>
										{description}
									</Paragraph>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
}

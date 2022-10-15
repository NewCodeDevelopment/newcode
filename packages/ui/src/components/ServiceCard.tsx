import { HTMLAttributes } from "react";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import Dropdown from "./Dropdown";
import CloseIcon from "../icons/actions/CloseIcon";
import { motion } from "framer-motion";
import { popupState } from "utils";
import { useRecoilState } from "recoil";

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
	const [_, setPopup] = useRecoilState(popupState);

	function handleOpen() {
		setOpen(id);
		setPopup({
			show: true,
			children: (
				<motion.div
					className="bg-light-300 p-8 rounded-3xl flex flex-col gap-6"
					initial={{
						opacity: 0,
						scale: 0,
					}}
					animate={{
						opacity: 1,
						scale: 1,
					}}
					exit={{
						opacity: 0,
						scale: 0,
					}}
				>
					<span className="flex flex-row justify-between">
						<Heading color="red" type="h3">
							{title}
						</Heading>

						<CloseIcon
							className="w-4"
							onClick={() => setPopup({ show: false, children: null })}
						/>
					</span>
					<div>
						<Paragraph size="small" color="dark" maxCharacters={50}>
							{description}
						</Paragraph>
					</div>
				</motion.div>
			),
		});
	}

	return (
		<>
			<Dropdown
				opened={id === open}
				setOpened={() => setOpen(id === open ? "" : id)}
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
			</div>
		</>
	);
}

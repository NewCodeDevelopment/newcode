import { HTMLAttributes } from "react";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import Dropdown from "./Dropdown";
import CloseIcon from "../icons/actions/CloseIcon";
import { motion } from "framer-motion";
import { popupState } from "utils";
import { useRecoilState } from "recoil";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLElement> {
	title: string;
	description: any;
	id: string;
	open: string;
	setOpen: (id: string) => void;
	theme: "light" | "dark";
}

export default function ServiceCard({
	title,
	description,
	id,
	open,
	setOpen,
	theme,
}: Props) {
	const [_, setPopup] = useRecoilState(popupState);

	function handleOpen() {
		setOpen(id);
		setPopup({
			show: true,
			children: (
				<motion.div
					className={classNames(
						"flex flex-col gap-6 rounded-3xl p-8",
						theme === "light" && "bg-light-300",
						theme === "dark" && "bg-dark-500"
					)}
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
					<span className="flex flex-row items-center justify-between">
						<Heading color="red" type="h3">
							{title}
						</Heading>

						<CloseIcon
							className={classNames(
								"w-4",
								theme === "light" && "fill-dark-500",
								theme === "dark" && "fill-light-300"
							)}
							onClick={() => setPopup({ show: false, children: null })}
						/>
					</span>
					<div>
						<Paragraph
							size="small"
							color={theme === "light" ? "dark" : "light"}
							maxCharacters={50}
						>
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
				theme={theme}
				opened={id === open}
				setOpened={() => setOpen(id === open ? "" : id)}
				title={title}
				className={classNames(
					"hidden h-min rounded-xl px-5 py-6 xl:flex",
					theme === "light" && "bg-light-400 text-dark-500",
					theme === "dark" && "bg-dark-500 text-light-300"
				)}
			>
				<Paragraph
					size="small"
					color={theme === "light" ? "dark" : "light"}
					maxCharacters={50}
				>
					{description}
				</Paragraph>
			</Dropdown>

			<div className="xl:hidden">
				<Heading
					color={theme === "light" ? "dark" : "light"}
					type="h4"
					className={classNames(
						"h-min rounded-xl p-5",
						theme === "light" && "bg-light-400",
						theme === "dark" && "bg-dark-500"
					)}
					onClick={handleOpen}
				>
					{title}
				</Heading>
			</div>
		</>
	);
}

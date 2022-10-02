import { HTMLAttributes, useState } from "react";
import Paragraph from "../typography/Paragraph";
import Dropdown from "./Dropdown";

interface Props extends HTMLAttributes<HTMLElement> {
	title: string;
	description: any;
}

export default function ServiceCard({ title, description }: Props) {
	const [open, setOpen] = useState(false);

	return (
		<Dropdown
			opened={open}
			setOpened={setOpen}
			title={title}
			className="bg-light-400 p-5 rounded-xl"
		>
			<Paragraph size="small" color="dark">
				{description}
			</Paragraph>
		</Dropdown>
	);
}

import Heading from "../typography/Heading";
import classNames from "classnames";
import { HTMLAttributes } from "react";
import RobotIcon from "../icons/actions/RobotIcon";

interface Props extends HTMLAttributes<HTMLDivElement> {
	statusCode?: number;
	title: string;
}

export default function Error({
	title,
	statusCode,
	className,
	...props
}: Props) {
	return (
		<div
			{...props}
			className={classNames(
				"w-full flex flex-col justify-center items-center text-center gap-12 md:gap-16",
				className
			)}
		>
			<RobotIcon className="fill-red-500 w-1/2 xl:w-1/5" />

			{statusCode && (
				<Heading type="h2" color="red">
					{statusCode}
				</Heading>
			)}
			<Heading type="h3">{title}</Heading>
		</div>
	);
}

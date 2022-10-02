import { HTMLAttributes } from "react";
import { LandingLogo, Heading } from "..";
import Scroll from "./Scroll";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLElement> {
	title: string;
}

export default function Landing({ title, className, ...props }: Props) {
	return (
		<section
			{...props}
			className={classNames(
				"relative h-screen px-page grid grid-cols-1 grid-rows-1 place-items-center",
				className
			)}
		>
			<Heading
				type="h1"
				color="light"
				className="col-start-1 row-start-1 xl:text-center"
			>
				{title}_
			</Heading>

			<LandingLogo className="-z-10 col-start-1 row-start-1" />

			<Scroll className="absolute left-0 right-0 mx-auto bottom-12" />
		</section>
	);
}

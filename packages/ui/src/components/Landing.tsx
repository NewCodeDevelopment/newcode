import { HTMLAttributes } from "react";
import { useWindow } from "utils";
import { LandingLogo, Heading, Section } from "..";
import Scroll from "./Scroll";

interface Props extends HTMLAttributes<HTMLElement> {
	title: string;
}

export default function Landing({ title, className, ...props }: Props) {
	const { height } = useWindow();

	return (
		<Section
			{...props}
			bg="dark"
			className="relative"
			align="center"
			style={{ height: height }}
		>
			<Heading
				type="h1"
				color="light"
				className="col-start-1 row-start-1 lg:text-center"
				maxCharacters={10}
			>
				{title}
				<span className="text-red-500">_</span>
			</Heading>

			<LandingLogo className="-z-10 col-start-1 row-start-1 lg:w-3/4 2xl:w-1/2" />

			<Scroll className="absolute left-0 right-0 mx-auto bottom-10" />
		</Section>
	);
}

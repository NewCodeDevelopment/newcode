import { HTMLAttributes, useEffect, useState } from "react";
import { LandingLogo, Heading, Section } from "..";
import Scroll from "./Scroll";

interface Props extends HTMLAttributes<HTMLElement> {
	title: string;
}

export default function Landing({ title, className, ...props }: Props) {
	const [height, setHeight] = useState(0);

	useEffect(() => {
		setHeight(window.innerHeight);
	}, []);

	return (
		<Section
			{...props}
			bg="dark"
			className="relative"
			style={{
				height: height,
			}}
			align="center"
		>
			<Heading
				type="h1"
				color="light"
				className="col-start-1 row-start-1 xl:text-center"
				maxCharacters={10}
			>
				{title}
				<span className="text-red-500">_</span>
			</Heading>

			<LandingLogo className="-z-10 col-start-1 row-start-1 xl:w-2/3" />

			<Scroll className="absolute left-0 right-0 mx-auto bottom-10 lg:bottom-12" />
		</Section>
	);
}

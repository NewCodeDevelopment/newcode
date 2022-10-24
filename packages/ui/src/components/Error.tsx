import Heading from "../typography/Heading";
import RobotIcon from "../icons/actions/RobotIcon";
import Section from "./Section";
import { useRecoilState } from "recoil";
import { loadingState, useWindow } from "utils";
import { useEffect } from "react";

interface Props {
	statusCode?: number;
	title: string;
}

export default function Error({ title, statusCode }: Props) {
	const [_, setLoading] = useRecoilState(loadingState);
	const { height } = useWindow();

	useEffect(() => {
		setLoading(false);
	});

	return (
		<Section
			bg="dark"
			align="center"
			style={{
				height: height ? height : "100vh",
			}}
		>
			<div className="flex flex-col justify-center items-center text-center gap-12 md:gap-16">
				<RobotIcon className="fill-red-500 w-1/2 xl:w-full" />

				<span className="flex flex-col gap-4">
					{statusCode && (
						<Heading type="h2" color="red">
							{statusCode}
						</Heading>
					)}
					<Heading type="h3">{title}</Heading>
				</span>
			</div>
		</Section>
	);
}

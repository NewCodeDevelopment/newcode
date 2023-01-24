import { Section, Heading, Paragraph } from "..";
import { motion } from "framer-motion";
import { Color } from "../..";

interface Props {
	bg: "light" | "dark";
	title: string;
	items: {
		title: string;
		description: string;
	}[];
	styles: {
		title: Color;
		items: {
			title: Color;
			description: Color;
		};
	};
}

export default function GridSection({ bg, title, items, styles }: Props) {
	return (
		<Section bg={bg} align="center">
			<div className="flex w-full flex-col gap-6 self-center lg:gap-10">
				<Heading type="h3" color={styles.title} className="max-w-fit">
					{title + "_"}
				</Heading>

				<div className="grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2">
					{items.map((item, index) => (
						<motion.div
							key={index}
							className="flex min-w-fit flex-col gap-3"
							whileInView={{
								opacity: [0, 1],
								y: [-20, 0],
								transition: {
									delay: index * 0.1,
								},
							}}
						>
							<Heading
								type="h3"
								color={styles.items.title}
								className="max-w-fit"
							>
								{`${index + 1}. ` + item.title + "_"}
							</Heading>
							<Paragraph color={styles.items.description} maxCharacters={50}>
								{item.description}
							</Paragraph>
						</motion.div>
					))}
				</div>
			</div>
		</Section>
	);
}

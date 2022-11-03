import { Section, Heading, Paragraph, HyperLink } from "..";

interface Props {
	bg: "light" | "dark";
	title: string;
	description: string;
	link?: {
		href: string;
		text: string;
	};
}

export default function DescriptionSection({
	bg,
	title,
	description,
	link,
}: Props) {
	return (
		<Section bg={bg} align="center">
			<div className="flex flex-col gap-6 self-center xl:py-[20%]">
				<Heading type="h3" color="red">
					{title}_
				</Heading>
				<Paragraph
					size="large"
					color={bg === "light" ? "dark" : "light"}
					maxCharacters={45}
					weight="bold"
				>
					{description}
				</Paragraph>

				{link && <HyperLink href={link.href}>{link.text}</HyperLink>}
			</div>
		</Section>
	);
}

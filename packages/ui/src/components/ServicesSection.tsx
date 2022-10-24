import { useState } from "react";
import Heading from "../typography/Heading";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
	const [open, setOpen] = useState<string>("");

	return (
		<div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-20">
			<div className="flex flex-col gap-4 lg:grow">
				<Heading type="h4" color="red">
					NewCode_
				</Heading>

				<ServiceCard
					title="Web & App"
					description="Wil je graag je onderneming automatiseren of een interactief platform
					maken dat kan allemaal met behulp van webapplicaties. Zo kan je overal
					ter wereld je applicatie bereiken met slechts enkele klikken."
					id={"1"}
					open={open}
					setOpen={setOpen}
				/>

				<ServiceCard
					title="Software"
					description="Zijn webapplicaties niet je ding? Heb je liever een mobiele oplossing
					om het gebruiksgemak te verbeteren? Dan zijn mobiele applicaties
					misschien iets voor jou. Mobiele applicaties zijn zoals webapplicaties
					binnen handbereik en gebruiksvriendelijk."
					id={"2"}
					open={open}
					setOpen={setOpen}
				/>

				<ServiceCard
					title="Automation"
					description="Ben je van plan om je onderneming digitaal te transformeren of wil je
					een proces automatiseren? Dat kan allemaal met behulp van software
					systemen. Zo kan je je onderneming transformeren hoe je het maar ook
					wilt."
					id={"3"}
					open={open}
					setOpen={setOpen}
				/>
			</div>

			<div className="flex flex-col gap-4 lg:grow">
				<Heading type="h4" color="red">
					Existing Code_
				</Heading>

				<ServiceCard
					title="E-commerce"
					description="Heb je een populair probleem dat veel terugkomt? Dan hebben we
					misschien al een oplossing klaar staan. Zo kunnen we je probleem veel
					sneller oplossen."
					id={"4"}
					open={open}
					setOpen={setOpen}
				/>

				<ServiceCard
					title="Payment gateway"
					description="Heb je een populair probleem dat veel terugkomt? Dan hebben we
					misschien al een oplossing klaar staan. Zo kunnen we je probleem veel
					sneller oplossen."
					id={"5"}
					open={open}
					setOpen={setOpen}
				/>
			</div>
		</div>
	);
}

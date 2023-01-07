import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Heading } from "..";
import { ServiceCard } from "./ServiceCard";

type ServiceItem = {
    title: string;
    description: string;
};

interface Props {
    theme: "light" | "dark";
}

export function ServicesSection({ theme }: Props) {
    const [open, setOpen] = useState<string>("");

    const { t } = useTranslation("services");

    const newItems = t("new.items", { returnObjects: true }) as ServiceItem[];
    const existingItems = t("existing.items", {
        returnObjects: true,
    }) as ServiceItem[];

    return (
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-20">
            <div className="flex flex-col gap-4 lg:grow">
                <Heading type="h4" color="red">
                    {t("new.title")}_
                </Heading>

                {newItems.map((item, index) => (
                    <ServiceCard
                        key={index}
                        id={index.toString()}
                        title={item.title}
                        description={item.description}
                        theme={theme}
                        open={open}
                        setOpen={setOpen}
                    />
                ))}
            </div>

            <div className="flex flex-col gap-4 lg:grow">
                <Heading type="h4" color="red">
                    {t("existing.title")}_
                </Heading>

                {existingItems.map((item, index) => (
                    <ServiceCard
                        key={index}
                        id={(index + newItems.length).toString()}
                        title={item.title}
                        description={item.description}
                        theme={theme}
                        open={open}
                        setOpen={setOpen}
                    />
                ))}
            </div>
        </div>
    );
}

{
    /* <ServiceCard
					title="Web & App"
					description="Wil je graag je onderneming automatiseren of een interactief platform
					maken dat kan allemaal met behulp van webapplicaties. Zo kan je overal
					ter wereld je applicatie bereiken met slechts enkele klikken."
					id={"1"}
					open={open}
					setOpen={setOpen}
					theme={theme}
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
					theme={theme}
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
					theme={theme}
				/> */
}

{
    /* 
				<ServiceCard
					title="E-commerce"
					description="Heb je een populair probleem dat veel terugkomt? Dan hebben we
					misschien al een oplossing klaar staan. Zo kunnen we je probleem veel
					sneller oplossen."
					id={"4"}
					open={open}
					setOpen={setOpen}
					theme={theme}
				/>

				<ServiceCard
					title="Payment gateway"
					description="Heb je een populair probleem dat veel terugkomt? Dan hebben we
					misschien al een oplossing klaar staan. Zo kunnen we je probleem veel
					sneller oplossen."
					id={"5"}
					open={open}
					setOpen={setOpen}
					theme={theme}
				/> */
}

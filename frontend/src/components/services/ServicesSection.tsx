import { useState } from "react";
import { ServiceGroup } from "schema";
import Heading from "../typography/Heading";
import ServiceCard from "./ServiceCard";

type ServicesSectionProps = {
  serviceGroups: ServiceGroup[];
  theme: "light" | "dark";
};

export default function ServicesSection({ serviceGroups, theme }: ServicesSectionProps) {
  const [open, setOpen] = useState<string>("");

  return (
    <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-20">
      {serviceGroups.map(({ title, services }, index) => (
        <div key={index} className="flex flex-col gap-4 lg:grow">
          <Heading type="h4" color="red">
            {title}_
          </Heading>

          {services?.map((service, index) => (
            <ServiceCard
              key={index}
              id={service?._id || ""}
              title={service?.title || ""}
              description={service?.description || ""}
              theme={theme}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

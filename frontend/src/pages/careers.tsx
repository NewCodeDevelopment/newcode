import HyperLink from "@/components/actions/HyperLink";
import MainLayout from "@/components/layouts/MainLayout";
import Section from "@/components/sections/Section";
import Heading from "@/components/typography/Heading";
import { useDevice } from "@/utils/hooks/device";
import Image from "next/image";
import { ReactElement } from "react";

export default function CareersPage() {
  const device = useDevice();

  return (
    <>
      <Section bg="dark" align="center" className="text-center" mobileScreen>
        <Image
          src={device === "mobile" ? "/images/background/1x.jpg" : "/images/background/2x.jpg"}
          alt="footer background"
          width={3840}
          height={2160}
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-center"
        />

        <Heading element="h1" type="h2">
          Ben jij een enthousiaste developer?
        </Heading>
      </Section>

      <Section bg="dark" align="center" className="text-center" mobileScreen>
        <Image
          src={device === "mobile" ? "/images/background/1x.jpg" : "/images/background/2x.jpg"}
          alt="footer background"
          width={3840}
          height={2160}
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-center"
        />

        <Heading element="h2" type="h2">
          Zoek je een stageplaats waar je volop kunt groeien?
        </Heading>
      </Section>

      <Section bg="dark" align="center" className="text-center" mobileScreen>
        <Image
          src={device === "mobile" ? "/images/background/1x.jpg" : "/images/background/2x.jpg"}
          alt="footer background"
          width={3840}
          height={2160}
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-center"
        />

        <div className="flex flex-col items-center space-y-10">
          <Heading element="h2" type="h2">
            Zoek niet verder!
          </Heading>

          <HyperLink href="mailto:careers@newcode.be">Stuur ons een mailtje</HyperLink>
        </div>
      </Section>
    </>
  );
}
/**
 *
 *
 *
 *
 *
 */
CareersPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

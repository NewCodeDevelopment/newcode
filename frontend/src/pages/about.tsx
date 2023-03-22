import { client } from "@/utils/api/client";
import { TESTIMONIALS_QUERY } from "@/utils/api/testimonials";
import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import { ReactElement } from "react";
import { Testimonial, TestimonialsQuery } from "schema";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"));
const Heading = dynamic(() => import("@/components/typography/Heading"));
const GridSection = dynamic(() => import("@/components/sections/GridSection"));
const Scroll = dynamic(() => import("@/components/common/Scroll"));
const Testimonials = dynamic(() => import("@/components/common/Testimonials"));
const DescriptionSection = dynamic(() => import("@/components/sections/DescriptionSection"));
const Section = dynamic(() => import("@/components/sections/Section"));
const ToolGrid = dynamic(() => import("@/components/tools/ToolGrid"));
const Seo = dynamic(() => import("@/components/common/Seo"));
/**
 *
 *
 *
 *
 *
 */
type AboutPageProps = {
  testimonials: Testimonial[];
};

type NatureItem = {
  title: string;
  values: string[];
};

export default function AboutPage({ testimonials }: AboutPageProps) {
  return (
    <>
      <Seo
        pageTitle="About - NewCode"
        metaTitle="Onze Backend - NewCode"
        description="Benieuwd naar wie wij zijn? Bekijk hier onze missie en visie en leer ons kennen."
        canonical="/about"
      />

      {/* 
				*
				*
				Landing
				*
			 */}
      <Section bg="dark" align="center" className="relative h-screen pb-52" mobileScreen>
        <Image
          src="/images/about/landing.jpg"
          alt="Landing"
          layout="fill"
          objectFit="cover"
          className="-z-10"
          priority
        />

        <div className="bg-dark-700 absolute top-0 left-0 -z-10 h-full w-full bg-opacity-30 backdrop-blur-[6px] backdrop-filter" />

        <Heading
          type="h1"
          color="light"
          className="col-start-1 row-start-1 lg:text-center"
          maxCharacters={10}
        >
          Onze Backend
          <span className="text-red-500">_</span>
        </Heading>

        <Scroll className="absolute left-0 right-0 bottom-40 mx-auto lg:bottom-20" />
      </Section>
      {/* 
                *
                *
                Nature of the company
                *
                *
            */}
      <Section bg="light" align="center">
        <div className="flex w-full flex-col justify-evenly gap-16 md:flex-row">
          <div className="flex flex-col gap-3">
            <Heading element="h2" type="h3" color="red">
              Our nature_
            </Heading>

            <ul className="text-2xl font-bold lg:text-3xl">
              {["Krachtig", "Sterk", "Dynamisch", "Klasse", "Simplistisch", "Structuur"].map(
                (value, index) => (
                  <li key={index}>{value}</li>
                ),
              )}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <Heading element="h2" type="h3" color="red">
              Nature of our partner_
            </Heading>

            <ul className="text-2xl font-bold lg:text-3xl">
              {[
                "Innovatief",
                "Ambitieus",
                "Groeimindset",
                "Authentiek",
                "Enthousiast",
                "Praktisch",
              ].map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      {/* 
        *
        *
        Vision
        *
        *
      */}
      <DescriptionSection
        bg="dark"
        title="Our Vision"
        description="Iedereen vooruit helpen en positieve verandering teweegbrengen. Vergemakkelijken, vereenvoudigen en optimaliseren"
      />
      {/* 
                *
                *
                Values
                *
            */}
      <GridSection
        bg="light"
        title="Values"
        items={[
          {
            title: "Accessible",
            description:
              "API, HTML, CSS en Javascript. Voor veel mensen zijn dit abstracte termen. Wij helpen je met plezier door dit doolhof van vaktermen zodat je ook begrijpt wat we doen. Wij vertalen het allemaal naar mensentaal.",
          },
          {
            title: "Surprising",
            description: "Wij onderscheiden ons, zowel in aanpak als eindresultaat.",
          },
          {
            title: "Made easy",
            description:
              "De wereld is al moeilijk genoeg, daarom maken wij het graag makkelijk voor je. Zo kan je gefocust blijven op de fundamentele onderdelen van je onderneming.",
          },
          {
            title: "Mindful",
            description: "Wij begrijpen waar jij als bedrijf naartoe wilt.",
          },
        ]}
        styles={{
          title: "red",
          items: {
            title: "dark",
            description: "dark",
          },
        }}
      />
      {/* 
                *
                *
                Tools
                *
            */}
      <ToolGrid />
      {/* 
                *
                *
                Testimonials
                *
            */}
      <Testimonials testimonials={testimonials} />
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
AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
/**
 *
 *
 *
 *
 *
 */
export async function getStaticProps() {
  const { allTestimonial } = await client.request<TestimonialsQuery>(TESTIMONIALS_QUERY);

  return {
    props: {
      testimonials: allTestimonial,
    },
  };
}

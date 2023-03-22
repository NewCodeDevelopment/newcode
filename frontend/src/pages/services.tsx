import { client } from "@/utils/api/client";
import { SERVICES_QUERY } from "@/utils/api/services";
import { TESTIMONIALS_QUERY } from "@/utils/api/testimonials";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { ServiceGroup, ServicesQuery, Testimonial, TestimonialsQuery } from "schema";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"));
const Heading = dynamic(() => import("@/components/typography/Heading"));
const Section = dynamic(() => import("@/components/sections/Section"));
const GridSection = dynamic(() => import("@/components/sections/GridSection"));
const ServicesSection = dynamic(() => import("@/components/services/ServicesSection"));
const Testimonials = dynamic(() => import("@/components/common/Testimonials"));
const Seo = dynamic(() => import("@/components/common/Seo"));
/**
 *
 *
 *
 *
 *
 */
type ServicesPageProps = {
  serviceGroups: ServiceGroup[];
  testimonials: Testimonial[];
};

export default function ServicesPage({ serviceGroups, testimonials }: ServicesPageProps) {
  return (
    <>
      <Seo
        pageTitle="Services - NewCode"
        metaTitle="Onze Services - NewCode"
        description="Benieuwd naar onze diensten? Bekijk hier onze diensten en ontdek wat wij voor jou kunnen betekenen."
        canonical="/services"
      />
      {/* 
    
    
        Services
        
      */}
      <Section
        bg="dark"
        style={{
          position: "unset",
          height: "100vh",
        }}
      >
        <div className="flex w-full flex-col gap-6 self-center lg:gap-10">
          <h1 className="hidden">Onze Services</h1>

          <Heading element="h2" type="h3" color="light">
            Services_
          </Heading>

          <ServicesSection theme="dark" serviceGroups={serviceGroups} />
        </div>
      </Section>
      {/* 
        
        
        Approach
        
        */}
      <GridSection
        bg="light"
        title="Onze aanpak"
        items={[
          {
            title: "Analysis",
            description:
              "We starten met een grondige analyse van je huidige problemen en passen onze aanpak hierop aan. Naast de technische implementatie, wordt er in deze fase ook al bekeken hoe we het meest aangename gebruiksgemak kunnen aanbieden.",
          },
          {
            title: "Strategy",
            description:
              "In deze fase definiëren we doelstellingen voor/op tijd en kwaliteit. Zo kunnen we je een doordacht product opleveren waarop je kan rekenen. Dit wordt zowel technisch als visueel voorgesteld zodat het resultaat perfect plaats kan nemen in je ecosysteem.",
          },
          {
            title: "Creation",
            description:
              "Na een uitgebreide onderzoeksfase zijn we voldoende voorbereid om met/aan de implementatie te starten. Aan het einde van deze fase realiseren we je oplossing.",
          },
          {
            title: "Polishing",
            description:
              "In deze laatste fase testen, optimaliseren en herevalueren we het product uitvoerig. We polijsten de imperfecties en creëren een product dat van hoogste kwaliteit is.",
          },
        ]}
        styles={{
          title: "dark",
          items: {
            title: "red",
            description: "dark",
          },
        }}
      />
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
ServicesPage.getLayout = function getLayout(page: ReactElement) {
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
  const { allServiceGroup } = await client.request<ServicesQuery>(SERVICES_QUERY);
  const { allTestimonial } = await client.request<TestimonialsQuery>(TESTIMONIALS_QUERY);

  return {
    props: {
      testimonials: allTestimonial,
      serviceGroups: allServiceGroup,
    },
  };
}

import { CASE_QUERY } from "@/utils/api/case";
import { CASES_QUERY } from "@/utils/api/cases";
import { client } from "@/utils/api/client";
import { checkImage } from "@/utils/checkers/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import { Fragment, ReactElement } from "react";
import { Case, CaseQuery, CasesQuery } from "schema";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"));
const Heading = dynamic(() => import("@/components/typography/Heading"));
const HyperLink = dynamic(() => import("@/components/actions/HyperLink"));
const Paragraph = dynamic(() => import("@/components/typography/Paragraph"));
const DescriptionSection = dynamic(() => import("@/components/sections/DescriptionSection"));
const Section = dynamic(() => import("@/components/sections/Section"));
const Arrow = dynamic(() => import("@/icons/actions/Arrow"));
const Seo = dynamic(() => import("@/components/common/Seo"));
/**
 *
 *
 *
 *
 *
 */
interface Props {
  handle: string;
  data: Case;
  left: Case | null;
  right: Case | null;
}

export default function CasePage({
  handle,
  data: {
    title,
    short,
    main,
    problem,
    solution,
    client,
    sector,
    service,
    type,
    year,
    productUrl,
    images,
    bannerImage,
  },
  left,
  right,
}: Props) {
  return (
    <>
      <Seo
        pageTitle={title + " - NewCode"}
        metaTitle={title + " - NewCode"}
        description={short || ""}
        canonical={`/case/${handle}`}
      />
      {/* 
            
            
                Landing
            
            */}
      <Section bg="dark">
        <div className="flex w-full flex-col gap-20 pt-12 lg:h-full lg:justify-between lg:pt-32 2xl:pt-64">
          <div className="flex flex-col gap-6 lg:w-full lg:flex-row lg:justify-between lg:gap-20">
            <Heading element="h1" type="h2">
              {title}
              <span className="text-red-500">_</span>
            </Heading>
            <Paragraph size="large" weight="bold" maxCharacters={30}>
              {main}
            </Paragraph>
          </div>

          <h2 className="hidden">Praktische Info</h2>
          <div className="grid-rows-[min-content_ min-content_ min-content_ min-content_ min-content_max-content] grid w-full gap-y-3 lg:grid-cols-6 lg:grid-rows-1 lg:gap-y-0 lg:gap-x-8">
            {[
              {
                title: "Klant",
                value: client,
              },
              {
                title: "Sector",
                value: sector?.title,
              },
              {
                title: "Service",
                value: service?.title,
              },
              {
                title: "Type",
                value: type,
              },
              {
                title: "Jaar",
                value: year,
              },
            ].map(({ title, value }, index) => (
              <div
                key={index}
                className="grid h-min grid-cols-2 lg:grid-cols-1 lg:grid-rows-[min-content_1fr] lg:gap-y-3"
              >
                <Heading element="h3" type="h4" weight="extrabold">
                  {title}
                </Heading>
                <Heading element="h4" type="h4" weight="normal">
                  {value}
                </Heading>
              </div>
            ))}

            {productUrl && (
              <div className="py-10 lg:flex lg:flex-col lg:justify-center lg:p-0">
                <HyperLink href={productUrl} target="_blank">
                  Lanceer Site
                </HyperLink>
              </div>
            )}
          </div>
        </div>
      </Section>
      {/* 
            
            
                Banner
            
            */}
      <Section bg="dark" className="relative">
        <Image
          {...checkImage(bannerImage)}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="bg-dark-700 absolute top-0 left-0 z-10 h-full w-full bg-opacity-40" />
      </Section>
      {/* 
            
            
                Problem & Solution
            
            */}
      {[
        {
          title: "Het probleem",
          description: problem,
        },
        {
          title: "De oplossing",
          description: solution,
        },
      ].map(({ title, description }, index) => (
        <Fragment key={index}>
          <DescriptionSection bg="dark" title={title} description={description || ""} />

          <Section bg="dark" className="relative">
            <Image
              {...(images ? checkImage(images[index]) : checkImage(null))}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="bg-dark-700 absolute top-0 left-0 z-10 h-full w-full bg-opacity-40" />
          </Section>
        </Fragment>
      ))}
      {/* 
                    
                    
                Call to action
            
            
            */}
      <Section bg="red" align="center" className="relative" mobileScreen>
        <div className="flex h-full w-full flex-col justify-evenly">
          <div className="flex flex-row items-center justify-between">
            {right ? (
              <HyperLink
                href={`/case/${right.slug?.current}`}
                className="flex flex-row gap-4"
                variant="text"
                shape="none"
              >
                <Arrow direction="right-to-left" className="fill-light-500 w-8" />
                <Heading element="span" type="h4">
                  {right.title}
                </Heading>
              </HyperLink>
            ) : (
              <div>&nbsp;</div>
            )}
            {left ? (
              <HyperLink
                href={`/case/${left.slug?.current}`}
                className="flex flex-row gap-4"
                variant="text"
                shape="none"
              >
                <Heading type="h4">{left.title}</Heading>
                <Arrow direction="left-to-right" className="fill-light-500 w-8" />
              </HyperLink>
            ) : (
              <div>&nbsp;</div>
            )}
          </div>

          <div className="flex  flex-col items-center justify-center gap-12 text-center">
            <Heading type="h2">Lets get this code going_</Heading>

            <HyperLink href="/connect" target="_blank" color="dark" size="large">
              Start een project
            </HyperLink>
          </div>

          <div>&nbsp;</div>
        </div>
        {/* 
                <div className="absolute left-0 right-0 bottom-20 mx-auto flex flex-col items-center justify-center gap-4 lg:bottom-20">
                    <Heading type="h4">{t("connect.scroll")}</Heading>
                    <Scroll />
                </div> */}
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
CasePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout footer={false}>{page}</MainLayout>;
};
/**
 *
 *
 *
 *
 *
 */
export async function getStaticProps({ params, locale }: Params) {
  const { handle } = params;
  const { allCase } = await client.request<CaseQuery>(CASE_QUERY, { handle });

  const data = allCase && allCase[0];
  if (!data) return { notFound: true };

  const cases = await client.request<CasesQuery>(CASES_QUERY, { limit: 20 });
  const caseIndex = cases.allCase.findIndex((item) => item._id === data._id);
  const left = cases.allCase[caseIndex - 1];
  const right = cases.allCase[caseIndex + 1];

  return {
    props: {
      handle,
      data,
      left: left || null,
      right: right || null,
    },
  };
}

export async function getStaticPaths() {
  const { allCase } = await client.request<CasesQuery>(CASES_QUERY, { limit: 100 });

  const paths = allCase.map(({ slug }) => ({
    params: { handle: slug?.current },
  }));

  return {
    paths,
    fallback: false,
  };
}

// export async function getServerSideProps({ params, locale, res }: Params) {
//     const { allCase } = await client.request<CaseQuery>(CASE_QUERY, { handle: params.handle });

//     const data = allCase && allCase[0];
//     if (!data) return { notFound: true };

//     const cases = await client.request<CasesQuery>(CASES_QUERY, { limit: 20 });
//     const caseIndex = cases.allCase.findIndex((item) => item._id === data._id);
//     const left = cases.allCase[caseIndex - 1];
//     const right = cases.allCase[caseIndex + 1];

//     // res.setHeader("Cache-Control", "public, s-maxage=59, stale-while-revalidate=299");

//     return {
//         props: {
//             data,
//             left: left || null,
//             right: right || null,
//             ...(await serverSideTranslations(locale || "nl", ["common", "pages", "cases"])),
//         },
//     };
// }

// export async function getStaticProps({ params, locale }: Params) {
//     const { handle } = params;

//     return {
//         props: {
//             ...(await serverSideTranslations(locale || "nl", ["common", "pages", "cases"])),
//             handle,
//         },
//     };
// }

// export async function getStaticPaths({ locales }: GetStaticPathsContext) {
//     if (!locales) throw new Error("No locales found");

//     const paths = locales.reduce(
//         (acc: { params: { handle: string }; locale: string }[], locale: string) => [
//             ...acc,
//             ...Object.keys(casesFile.cases).map((item) => {
//                 return {
//                     params: { handle: item },
//                     locale,
//                 };
//             }),
//         ],
//         [],
//     );

//     return {
//         paths,
//         fallback: false,
//     };
// }

// {[
//     {
//         title: t("content.problem"),
//         description: description.problem,
//     },
//     {
//         title: t("content.solution"),
//         description: description.solution,
//     },
// ].map(({ title, description }, index) => (
//     <Section bg="dark" align="center" key={index}>
//         <div className="flex h-full w-full flex-col gap-12 lg:gap-20">
//             <Image
//                 src={images[index].url}
//                 alt={images[index].alt}
//                 width={100}
//                 height={100}
//                 layout="responsive"
//                 objectFit="cover"
//             />

//             <div className="flex flex-col gap-6 lg:flex-row lg:gap-40">
//                 <Heading type="h3">
//                     {title}
//                     <span className="text-red-500">_</span>
//                 </Heading>

//                 <Paragraph size="large" weight="bold">
//                     {description}
//                 </Paragraph>
//             </div>
//         </div>
//     </Section>
// ))}

{
  /* <Section bg="dark" align="center">
                        <div className="flex w-1/2 flex-col gap-6 lg:flex-row lg:gap-40 lg:py-20">
                            <Heading type="h3">
                                {title}
                                <span className="text-red-500">_</span>
                            </Heading>

                            <Paragraph size="large" weight="bold">
                                {description}
                            </Paragraph>
                        </div>
                    </Section> */
}

{
  /* <Section bg="dark" py={false} px={false}>
    <div className="grid h-full w-full grid-cols-1 grid-rows-3 gap-y-12 gap-x-12 pt-8 lg:grid-cols-2 lg:grid-rows-2 lg:p-0">
        <Image
            {...checkImage(images[2])}
            width={100}
            height={100}
            objectFit="cover"
            layout="responsive"
        />
        <Image
            {...checkImage(images[3])}
            width={100}
            height={100}
            objectFit="cover"
            layout="responsive"
        />

        <span className="relative lg:col-span-2">
            <Image {...checkImage(images[4])} objectFit="cover" layout="fill" />
        </span>
    </div>
</Section>; */
}

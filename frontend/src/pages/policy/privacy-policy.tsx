import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"));
const Landing = dynamic(() => import("@/components/common/Landing"));
const DescriptionSection = dynamic(() => import("@/components/sections/DescriptionSection"));
const Seo = dynamic(() => import("@/components/common/Seo"));
/**
 *
 *
 *
 *
 *
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        pageTitle="Privacy Policy - NewCode"
        metaTitle="Privacy Policy - NewCode"
        description="Lees hier onze privacy policy."
        canonical="/privacy-policy"
      />
      {/* 
				*
				*
				Landing
				*
			 */}
      <Landing title="Privacy Policy" />
      {/* 
				*
				*
				Content
				*
			 */}
      {[
        {
          title: "1. Wat voor data verzamelen we?",
          description:
            "Wij verzamelen diverse informatie over websitebezoekers en hun interacties met onze website. Dit omvat informatie over je apparaat, zoals je IP-adres, browsertype en besturingssysteem. Het omvat ook informatie over je locatie, waaronder het land, de regio en de stad. \n \n Daarnaast verzamelt we informatie over de pagina's op de website die je bekijkt en de links waarop je klikt. We verzamelen ook informatie over de tijd die je doorbrengt op onze website en de acties die je onderneemt, zoals het invullen van een formulier of het doen van een aankoop. \n \n Het is belangrijk op te merken dat we geen persoonlijke informatie over je verzamelen, zoals je naam, e-mailadres of telefoonnummer, behalve wanneer je ons deze verstuurt in ons contact formulier. We verzamelen alleen anonieme gegevens over je interacties met onze website.",
        },
        {
          title: "2. Waarom verzamelen we deze data?",
          description:
            "We verzamelen deze data om u een beter en persoonlijker gebruikservaring te kunnen bieden op onze website. De data helpt ons ook om onze site te verbeteren door het bijhouden van hoe mensen onze site gebruiken. Verzamelde gegevens kunnen ook worden gebruikt om gerichte marketing- en advertentiecampagnes te creëren en om ons te helpen onze website beter af te stemmen op de behoeften van onze bezoekers. We zullen uw persoonlijke gegevens alleen gebruiken voor de doeleinden die hierboven zijn beschreven en zullen ze niet aan derden verkopen of op een andere manier verstrekken, tenzij dit wettelijk verplicht is.",
        },
        {
          title: "3. Wat doen we met deze data?",
          description:
            "We gebruiken de verzamelde data om onze website te verbeteren en te personaliseren voor onze bezoekers. We kunnen de gegevens ook gebruiken om gerichte marketing- en advertentiecampagnes te creëren en om ons te helpen onze website beter af te stemmen op de behoeften van onze bezoekers. In sommige gevallen kunnen we de verzamelde gegevens ook gebruiken om onze interne operationele doeleinden te vervullen, zoals het verbeteren van onze site en het beheren van onze activiteiten. We zullen uw persoonlijke gegevens nooit verkopen aan derden of op een andere manier verstrekken, tenzij dit wettelijk verplicht is.",
        },
        {
          title: "4. Hoe lang bewaren we deze data?",
          description:
            "We bewaren de verzamelde data voor zolang als nodig is om de doeleinden te realiseren waarvoor de gegevens zijn verzameld. Dit kan betekenen dat we de gegevens bewaren voor de duur van uw gebruik van onze website of voor zolang als nodig is om onze wettelijke of regelgevende verplichtingen na te leven. Als we de gegevens niet langer nodig hebben, zullen we ze op een veilige manier verwijderen of anonimiseren. Als u specifieke vragen heeft over hoe lang we bepaalde gegevens bewaren, neem dan gerust contact met ons op.",
        },
        {
          title: "5. Hoe beschermen we deze data?",
          description:
            "We nemen de bescherming van uw gegevens zeer serieus en hebben passende technische en organisatorische maatregelen getroffen om uw gegevens te beschermen tegen verlies, misbruik en onbevoegde toegang. We beveiligen bijvoorbeeld onze site met Secure Sockets Layer (SSL) om te voorkomen dat uw gegevens tijdens het verzenden over het internet worden geïntercepteerd. We hebben ook interne procedures ingevoerd om het gebruik en de bescherming van uw gegevens te reguleren. Als u specifieke vragen heeft over hoe we uw gegevens beschermen, neem dan gerust contact met ons op.",
        },
        {
          title: "6. Wat zijn je rechten?",
          description:
            "Op de privacy policy pagina van onze website willen we duidelijk maken wat uw rechten zijn in verband met het gebruik van uw persoonlijke gegevens. Zo heeft u het recht om te weten wat we met uw gegevens doen en voor welke doeleinden we ze gebruiken. Daarnaast heeft u het recht om uw gegevens te laten corrigeren als deze onjuist zijn, of om de verwerking van uw gegevens te beperken. Ook heeft u het recht om uw gegevens te laten verwijderen, of om bezwaar te maken tegen de verwerking ervan. Tot slot heeft u het recht om uw gegevens op te vragen en deze in een gestructureerd, gangbaar en machineleesbaar formaat te ontvangen, zodat u deze kunt overdragen aan een andere partij. Als u gebruik wilt maken van één van deze rechten, kunt u contact met ons opnemen via het op de website vermelde e-mailadres. Wij zullen uw verzoek zo snel mogelijk in behandeling nemen.",
        },
        {
          title: "7. Hoe kun je contact met ons opnemen?",
          description:
            "Als u vragen heeft over onze privacyverklaring of als u gebruik wilt maken van één van uw rechten, neem dan gerust contact met ons op via het onderstaande e-mailadres of adres: \n \n burak@newcode.be \n \n  We zullen ons best doen om zo snel mogelijk op uw verzoek te reageren en om aan uw verzoek te voldoen, binnen de wettelijke kaders. Als u het gevoel heeft dat we niet adequaat op uw verzoek hebben gereageerd, of als u andere klachten of bezwaren heeft over hoe we omgaan met uw gegevens, neem dan gerust contact met ons op zodat we samen naar een oplossing kunnen zoeken. U kunt ook altijd een klacht indienen bij de toezichthoudende autoriteit op het gebied van gegevensbescherming.",
        },
      ].map(({ title, description }, index) => (
        <DescriptionSection key={index} bg="dark" title={title} description={description} />
      ))}
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
PrivacyPolicyPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

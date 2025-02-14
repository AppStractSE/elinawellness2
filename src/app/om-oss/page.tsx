import ContactSection from "@/components/sections/ContactSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import TrainersSection from "@/components/sections/TrainersSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss",
  openGraph: {
    title: "Elina Wellness | Om oss",
    description:
      "Välkommen till Elina Wellness, vi är två systrar som brinner för hälsa och träning. Vi har båda en bakgrund inom idrott och hälsa och har en passion för att hjälpa andra att uppnå sina mål.",
    url: "/om-oss",
    siteName: "Elina Wellness",
    images: [
      {
        url: "/image006.webp",
        width: 1200,
        height: 630,
        alt: "Elina Wellness | Om oss",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    title: "Elina Wellness",
    images: [
      {
        url: "/image006.webp",
        width: 1200,
        height: 630,
        alt: "Elina Wellness - Om oss",
      },
    ],
    description:
      "Välkommen till Elina Wellness, vi är två systrar som brinner för hälsa och träning. Vi har båda en bakgrund inom idrott och hälsa och har en passion för att hjälpa andra att uppnå sina mål.",
  },
};

export default function Page() {
  return (
    <>
      <SubPageHeroSection
        image="/image006.webp"
        className="bg-white"
        title="Två systrar med en passion för hälsa"
        text="Vi är två systrar som brinner för hälsa och träning. Vi har båda en bakgrund inom idrott och hälsa och har en passion för att hjälpa andra att uppnå sina mål."
      />
      <TrainersSection className="bg-white" />
      <TwoPaneSection
        button={{
          href: "/vart-utbud/kostradgivning",
          text: "Läs mer om kostrådgivning",
        }}
        className="bg-white"
        image="/118.JPG"
        title="Hållbar viktbalansering"
        text={`Vi hjälper dig att nå din målvikt utan strikta dieter eller snabba lösningar. Fokus ligger på långsiktiga vanor anpassade efter din vardag.\n\nMed rätt balans av kost, rörelse och återhämtning skapar vi en hållbar plan som ger dig energi, välmående och resultat som varar.`}
      />
      <TwoPaneSection
        button={{
          href: "/kom-igang",
          text: "Kom igång!",
        }}
        rtl
        className="bg-white"
        image="/image008.webp"
        title="Träning mot specifika mål"
        text={`Oavsett om du siktar på ett lopp, en tävling eller vill slå personliga rekord, skapar vi en plan som hjälper dig att nå dit – med rätt träning och strategi. Vi fokuserar på din utgångspunkt och dina mål, kombinerar styrka, uthållighet och teknik samt anpassar träningen för att maximera din prestation och motivation.`}
      />
      <TwoPaneSection
        button={{
          href: "/vart-utbud/traeningsupplaegg",
          text: "Läs mer om träningsupplägg",
        }}
        className="bg-white"
        image="/IMG_8627.webp"
        title="Styrke- & konditionsträning"
        text={`Vill du bli starkare, snabbare eller mer uthållig? Vi hjälper dig att utvecklas inom både styrke- och konditionsträning med en anpassad och hållbar träningsplan. Oavsett om du är nybörjare eller erfaren ser vi till att du tränar effektivt, minimerar skaderisker och får resultat som håller över tid.`}
      />
      <TwoPaneSection
        button={{
          href: "/kom-igang",
          text: "Kom igång!",
        }}
        rtl
        className="bg-white"
        image="/image007.webp"
        title="Återhämtning & balans efter graviditet"
        text={`Att hitta tillbaka till träning och välmående efter en graviditet kan kännas utmanande. Vi stöttar dig i att bygga upp styrka, energi och balans – i din egen takt. Med fokus på skonsam träning, hållbara rutiner och individanpassade övningar hjälper vi dig att återfå stabilitet och trygghet i din kropp.`}
      />
      <ServicesSection className="bg-background" />
      <ContactSection className="bg-white" />
    </>
  );
}

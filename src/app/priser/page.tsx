import ContactSection from "@/components/sections/ContactSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { content } from "@/data/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priser",
  openGraph: {
    title: "Elina Wellness | Priser",
    description:
      "Välkommen till Elina Wellness, vi är två systrar som brinner för hälsa och träning. Vi har båda en bakgrund inom idrott och hälsa och har en passion för att hjälpa andra att uppnå sina mål.",
    url: "/priser",
    siteName: "Elina Wellness",
    images: [
      {
        url: "/image006.webp",
        width: 1200,
        height: 630,
        alt: "Elina Wellness | Priser",
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
        alt: "Elina Wellness - Priser",
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
        className="bg-white"
        title="Priser"
        text="Här hittar du priser på våra tjänster."
      />
      <section>
        <div className="mx-auto flex max-w-screen-md flex-col gap-12 px-4 py-12 md:py-24">
          {content.services.map((service, index) => (
            <div key={index} className="flex flex-col gap-12">
              <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-medium tracking-wide sm:text-4xl md:text-5xl">
                  {service.title}
                </h2>
              </div>

              <div className="flex flex-col gap-8">
                <ul className="flex flex-col gap-4">
                  {service.price.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-lg">{point.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ServicesSection className="bg-white" />
      <ContactSection className="bg-background" />
    </>
  );
}

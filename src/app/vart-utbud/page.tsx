import ContactSection from "@/components/sections/ContactSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vårt utbud",
  openGraph: {
    title: "Elina Wellness | Vårt utbud",
    description:
      "Vill du komma igång med träning och hälsa? Här hittar du vårt utbud som är anpassat för dig.",
    url: "/vart-utbud",
    siteName: "Elina Wellness",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Elina Wellness | Vårt utbud",
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
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Elina Wellness - Vårt utbud",
      },
    ],
    description:
      "Vill du komma igång med träning och hälsa? Här hittar du vårt utbud som är anpassat för dig.",
  },
};

export default function Page() {
  return (
    <>
      <SubPageHeroSection
        className="border-b bg-white"
        title="Vårt utbud"
        text="Upptäck Elina Wellness utbud och hitta det som passar dig bäst."
      />
      <ServicesSection className="bg-white" />
      <ContactSection />
    </>
  );
}

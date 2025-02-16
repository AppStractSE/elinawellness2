import ContactSection from "@/components/sections/ContactSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kom igång",
  openGraph: {
    title: "Elina Wellness | Kom igång",
    description:
      "Är du redo för en förändring? Låt oss komma igång redan idag!",
    url: "/kom-igang",
    siteName: "Elina Wellness",
    images: [
      {
        url: "/ready-for-change.webp",
        width: 1200,
        height: 630,
        alt: "Elina Wellness | Kom igång",
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
        url: "/ready-for-change.webp",
        width: 1200,
        height: 630,
        alt: "Elina Wellness - Kom igång",
      },
    ],
    description:
      "Är du redo för en förändring? Låt oss komma igång redan idag!",
  },
};

export default function Page() {
  return (
    <>
      <SubPageHeroSection
        title="Kom igång"
        text="Är du redo för en förändring? Låt oss komma igång redan idag!"
        className="bg-white"
      />
      <ContactSection />
    </>
  );
}

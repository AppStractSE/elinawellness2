import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Våra tjänster",
  openGraph: {
    title: "Elina Wellness | Våra tjänster",
    description:
      "Vill du komma igång med träning och hälsa? Här hittar du våra tjänster som är anpassade för dig.",
    url: "/vara-tjanster",
    siteName: "Elina Wellness",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Elina Wellness | Våra tjänster",
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
        alt: "Elina Wellness - Våra tjänster",
      },
    ],
    description:
      "Vill du komma igång med träning och hälsa? Här hittar du våra tjänster som är anpassade för dig.",
  },
};

export default function Page() {
  return <></>;
}

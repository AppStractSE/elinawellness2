import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import InitializeTheme from "@/components/InitializeTheme";
import { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.scss";

const DMSans = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dev.elinawellness.se'),
  title: {
    template: "%s | Elina Wellness",
    default: "Elina Wellness | Titel",
  },
  openGraph: {
    title: "Elina Wellness",
    description:
      "Upplev hälsa och välbefinnande med Elina Wellness - anpassat för dig. Få personlig vägledning och smakrika recept för dina hälsomål, oavsett din träningsnivå.",
    url: "/",
    siteName: "Elina Wellness",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Elina Wellness - Hälsa och välbefinnande",
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
        alt: "Elina Wellness - Hälsa och välbefinnande",
      },
    ],
    description:
      "Upplev hälsa och välbefinnande med Elina Wellness - anpassat för dig. Få personlig vägledning och smakrika recept för dina hälsomål, oavsett din träningsnivå.",
  },
  robots: "max-image-preview:large",
};

export const viewport: Viewport = {
  themeColor: "#f1ffeb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${DMSans.className} bg-background text-primary antialiased`}
      >
        <InitializeTheme />
        <Toaster />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

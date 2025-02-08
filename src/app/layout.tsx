import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import InitializeTheme from "@/components/InitializeTheme";
import { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.scss";

const DMSans = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
        url: "/IMG_6980.JPG",
        width: 800,
        height: 600,
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
        url: "/IMG_6980.JPG",
        width: 800,
        height: 600,
        alt: "Elina Wellness - Hälsa och välbefinnande",
      },
    ],
    description:
      "Upplev hälsa och välbefinnande med Elina Wellness - anpassat för dig. Få personlig vägledning och smakrika recept för dina hälsomål, oavsett din träningsnivå.",
  },
  robots: "max-image-preview:large",
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

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import InitializeTheme from "@/components/InitializeTheme";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.scss";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${montserrat.className} bg-background text-primary antialiased`}
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

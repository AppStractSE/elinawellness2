import { Smooch_Sans } from "next/font/google";
// const garamond = localFont({
//   src: "../../public/fonts/GaramondPremrPro.otf",
// });

const smoochSans = Smooch_Sans({
  variable: "--font-smooch-sans",
  subsets: ["latin"],
});

export { smoochSans };

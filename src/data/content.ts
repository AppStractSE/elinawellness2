import { hexToRgb } from "@/util/hexToRGB";

export const content = {
  theme: {
    primaryColor: "#1b1b1b",
    secondaryColor: "#353535",
    backgroundColor: "#F4FCF0",
    foregroundColor: "#171717",
    accentColor: "#2EB800",
    maxPageWidth: "92rem",
  },

  applyTheme(theme: Record<string, string>) {
    const root = document.documentElement;

    Object.entries(theme).forEach(([key, value]) => {
      const cssVar = `--${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}`;
      console.log("asd", cssVar);
      if (value.startsWith("#")) value = hexToRgb(value);
      root.style.setProperty(cssVar, value);
    });
  },
  company: {
    name: "ElinaWellness",
    email: "info@elinawellness.se",
    phone: "+46 70 707 07 07",
    address: "Södra Strandgatan 15, 503 34 Skövde",
  },
  followUs: "Följ oss",
  homePage: {
    title: "Förverkliga din sanna potential",
    subtitle: "Vad behöver du hjälp med?",
    description:
      "Upplev hälsa och välbefinnande med oss - anpassat för dig. Få personlig vägledning och smakrika recept för dina hälsomål, oavsett din träningsnivå. Kom igång idag genom att fylla i formuläret nedan!",
    button: "Get started",
  },
  contactSection: {
    title: "Kom i kontakt med oss",
    description:
      "Vill du komma igång med ett hälsosammare välbefinnande? Vi kan till exempel hjälpa dig med att",
    points: [
      "Gå ner eller upp i vikt",
      "Uppnå ett specifikt mål, t ex ett lopp eller en tävling",
      "Progressera i din styrketräning eller konditionsträning",
      "Hitta tillbaka till dig själv efter graviditet",
    ],
    contact: "Kontaktuppgifter",
    contactFormTitle: "Fyll i formuläret så återkommer vi så fort vi kan!",
  },
  services: [
    {
      id: "web-development",
      title: "Kost- och träningsupplägg",
      description:
        "Ta din träning och kost till nästa nivå med ett individanpassat program.",
      image: "/image004.jpg",
      points: [
        {
          title: "Uppstartsamtal: Vi lär känna dina mål och förutsättningar.",
        },
        {
          title:
            "Träningsprogram: Nya upplägg varje vecka för att hålla motivationen uppe.",
        },
        {
          title:
            "Kostupplägg: Smarta recept och anpassad kost för att passa din vardag.",
        },
        {
          title:
            "Uppföljning: Veckovisa avstämningar för att säkerställa framsteg.",
        },
        {
          title:
            "Tillgänglighet: Vi finns här för dig - chattsupport alla dagar i veckan.",
        },
      ],
    },
    {
      id: "mobile-development",
      title: "Träningsupplägg",
      description:
        "We create mobile apps for Android and iOS that provide value to your customers.",
      image: "/image004.jpg",
      points: [
        { title: "Individanpassat" },
        { title: "Uppstartsamtal" },
        { title: "Nya träningsprogram varje vecka" },
        { title: "Uppföljning varje vecka" },
        { title: "Tillgängliga via chatt alla dagar i veckan" },
      ],
    },
    {
      id: "design",
      title: "Kostrådgivning",
      description:
        "We design user interfaces and user experiences that are intuitive and delightful.",
      image: "/113.JPG",
      points: [
        {
          title: "Individanpassat",
        },
        {
          title: "Uppstartsamtal",
        },
        {
          title: "Kostupplägg med recept",
        },
        {
          title: "Uppföljning varje vecka",
        },
        {
          title: "Tillgängliga via chatt alla dagar i veckan",
        },
      ],
    },
    {
      id: "seo",
      title: "Kostrådgivarsamtal",
      description:
        "Ett fokuserat samtal för att ge dig konkreta råd och strategier för din kost och hälsa.",
      image: "/image005.webp",
      points: [
        { title: "Personligt rådgivarsamtal (1 timme)." },
        { title: "Sammanfattning och handlingsplan via mejl." },
        { title: "Praktiska tips för att nå dina mål." },
        { title: "Rekommendationer baserade på dina preferenser." },
        {
          title:
            "Möjlighet till uppföljande samtal för att justera planen efter dina framsteg.",
        },
      ],
    },
  ],
};

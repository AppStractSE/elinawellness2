import { hexToRgb } from "@/util/hexToRGB";

export const content = {
  theme: {
    primaryColor: "#1b1b1b",
    secondaryColor: "#353535",
    backgroundColor: "#F1FFEB",
    foregroundColor: "#171717",
    accentColor: "#2EB800",
    maxPageWidth: "1460px",
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
    title: "Kom igång med oss",
    description:
      "Vill du komma igång med ett hälsosammare välbefinnande? Vi kan till exempel hjälpa dig med att",
    points: [
      "Kostrådgivning",
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
      id: "traeningsupplaegg",
      title: "Träningsupplägg",
      secondary_title: "Stärk kroppen med ett genomtänkt program",
      strong_description:
        "Oavsett om du vill bygga muskler, förbättra din kondition eller få en starkare kropp, får du ett anpassat träningsupplägg som ger dig struktur och motivation.",
      paragraph:
        "Vi tar fram ett träningsprogram baserat på din nuvarande nivå, dina mål och din träningshistorik. Under åtta veckor får du en tydlig plan att följa, med övningar och progression som hjälper dig utvecklas på ett hållbart sätt. Programmet kan genomföras på gym eller hemma, beroende på dina preferenser.",
      description:
        "Få ett strukturerat träningsprogram som hjälper dig att bygga styrka, förbättra konditionen och skapa en långsiktig träningsrutin. Oavsett om du tränar på gym eller hemma anpassas upplägget efter din nivå och dina mål. Vi ger dig verktygen du behöver för att hålla motivationen uppe och utvecklas över tid.",
      image: "/IMG_8627.webp",
      points: [
        { title: "Individanpassat" },
        { title: "Uppstartsamtal" },
        { title: "Nya träningsprogram varje vecka" },
        { title: "Uppföljning varje vecka" },
        { title: "Tillgängliga via chatt alla dagar i veckan" },
      ],
      price: [
        {
          title: "1 månad: 900 kr/månad",
        },
        {
          title: "3 månader: 800 kr/månad",
        },
        {
          title: "6 månader: 700 kr/månad",
        },
      ],
    },
    {
      id: "kostradgivning",
      title: "Kostrådgivning",
      secondary_title: "Hitta en kosthållning som fungerar för dig",
      strong_description:
        "Med individuell rådgivning får du stöd att skapa en balanserad och hållbar kosthållning som passar din livsstil och dina mål.",
      paragraph:
        "Under åtta veckor arbetar vi tillsammans för att hitta en koststrategi som fungerar för dig. Du får konkreta råd och verktyg för att göra medvetna val kring mat, utan att behöva följa strikta dieter. Vi fokuserar på helheten – näring, balans och vanor som håller i längden.",

      description:
        "Hitta en kosthållning som fungerar för just dig, utan strikta dieter eller kortsiktiga lösningar. Vi analyserar dina matvanor och ger dig konkreta råd och verktyg för att göra medvetna val i vardagen. Målet är att skapa en balanserad och hållbar strategi som ger dig energi och välmående på lång sikt.",
      image: "/113.webp",
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
      price: [
        {
          title: "1 månad: 900 kr/månad",
        },
        {
          title: "3 månader: 800 kr/månad",
        },
        {
          title: "6 månader: 700 kr/månad",
        },
      ],
    },
    {
      id: "kost-och-traeningsupplaegg",
      title: "Kost- och träningsupplägg",
      secondary_title: "En balanserad väg till dina mål",
      strong_description:
        "Få ett individanpassat upplägg där kost och träning samverkar för att optimera dina resultat. Vi tar hänsyn till dina förutsättningar och mål för att skapa en hållbar livsstil.",
      paragraph:
        "Under åtta veckor får du ett skräddarsytt program med både kost- och träningsplan, anpassat efter dina behov och preferenser. Vi fokuserar på långsiktiga resultat genom hållbara rutiner och tydlig vägledning. Med kontinuerlig uppföljning och justeringar säkerställer vi att du når dina mål på ett tryggt och effektivt sätt.",
      description:
        "En helhetslösning där kost och träning samverkar för att ge dig de bästa förutsättningarna att nå dina mål. Vi skapar ett individanpassat upplägg som passar din livsstil och dina behov, med fokus på hållbara resultat. Genom uppföljning och anpassningar säkerställer vi att du utvecklas på ett tryggt och effektivt sätt.",
      image: "/image004.webp",
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
      price: [
        {
          title: "1 månad: 2200 kr/månad",
        },
        {
          title: "3 månader: 2000 kr/månad",
        },
        {
          title: "6 månader 1800 kr/månad",
        },
      ],
    },
    {
      id: "kostradgivarsamtal",
      title: "Kostrådgivarsamtal",
      secondary_title: "Personlig rådgivning för bättre matvanor",
      strong_description:
        "Få vägledning och konkreta råd kring din kost, oavsett om du vill förbättra dina matvanor, gå ner i vikt eller få mer energi i vardagen.",
      paragraph:
        "I ett individuellt samtal går vi igenom dina nuvarande matvanor och identifierar möjliga förbättringar. Du får praktiska tips och en plan som hjälper dig att göra hållbara förändringar. Fokus ligger på att skapa en sund relation till mat och hitta lösningar som passar din vardag.",
      description:
        "Ett personligt samtal där vi går igenom dina matvanor och identifierar förbättringsmöjligheter utifrån dina mål och behov. Du får konkreta råd och en tydlig handlingsplan för att göra hälsosamma förändringar som håller över tid. Perfekt för dig som vill ha stöd att skapa en bättre balans i din kost och vardag.",
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
      price: [
        {
          title: "1 timme: 495 kr",
        },
      ],
    },
  ],
};

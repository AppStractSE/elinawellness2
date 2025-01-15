import { hexToRgb } from "@/util/hexToRGB";

export const content = {
  theme: {
    primaryColor: "#1b1b1b",
    secondaryColor: "#353535",
    backgroundColor: "#FDFAEF",
    foregroundColor: "#171717",
    accentColor: "#e25706",
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
    name: "Appstract",
    email: "info@appstract.se",
    phone: "+46 70 707 07 07",
    address: "Södra Strandgatan 15, 503 34 Borås",
  },
  followUs: "Följ oss",
  homePage: {
    title: "The future of\nthe past is here",
    description: "Discover the safest custom made experience with Appstract.",
    button: "Get started",
  },
  contactSection: {
    title: "We'd love to hear from you!",
    description: "Welcome to contact us at Appstract Webbyrå in Borås.",
    points: [
      "We’re design specialists who can handle anything.",
      "Our startup and delivery times are lightning fast.",
      "Plus, we offer a no-risk trial period.",
    ],
    contact: "Kontaktuppgifter",
    contactFormTitle:
      "Fill out the form and we'll get back to you as soon as we can!",
  },
  services: [
    {
      id: "web-development",
      title: "Web development",
      description:
        "We build custom websites and web applications that are fast, secure, and scalable.",
      image: "/images/services/web-development.jpg",
    },
    {
      id: "mobile-development",
      title: "Mobile development",
      description:
        "We create mobile apps for Android and iOS that provide value to your customers.",
      image: "/images/services/mobile-development.jpg",
    },
    {
      id: "design",
      title: "Design",
      description:
        "We design user interfaces and user experiences that are intuitive and delightful.",
      image: "/images/services/design.jpg",
    },
    {
      id: "seo",
      title: "SEO",
      description:
        "We optimize websites for search engines to help you rank higher and get more traffic.",
      image: "/images/services/seo.jpg",
    },
    {
      id: "consulting",
      title: "Consulting",
      description:
        "We provide expert advice on how to improve your digital products and services.",
      image: "/images/services/consulting.jpg",
    },
  ],
};

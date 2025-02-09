import { content } from "@/data/content";

export interface DrawerLink {
  href: string;
  label: string;
  externalLink?: boolean;
  image?: string;
  sublinks?: DrawerLink[];
}

const mainLinks: DrawerLink[] = [
  { href: "/", label: "Hem" },
  { href: "/om-oss", label: "Om oss" },
  {
    href: "/vart-utbud",
    label: "Vårt utbud",
  },
  { href: "/kom-igang", label: "Kom igång" },
];

const serviceLinks = content.services.map((service) => ({
  href: `/vart-utbud/${service.id}`,
  label: service.title,
  image: service.image,
}));

export { mainLinks, serviceLinks };

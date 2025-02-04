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
    href: "/vara-tjanster",
    label: "Våra tjänster",
  },
  { href: "/kontakt", label: "Kontakt" },
];

const serviceLinks = content.services.map((service) => ({
  href: `/vara-tjanster/${service.id}`,
  label: service.title,
  image: service.image,
}))

export { mainLinks, serviceLinks };

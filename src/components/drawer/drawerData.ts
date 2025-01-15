import { content } from "@/data/content";

export interface DrawerLink {
  href: string;
  label: string;
  externalLink?: boolean;
  sublinks?: DrawerLink[];
}

const mainLinks: DrawerLink[] = [
  { href: "/", label: "Hem" },
  { href: "/om-oss", label: "Om oss" },
  {
    href: "/vara-tjanster",
    label: "Våra tjänster",
    sublinks: content.services.map((service) => ({
      href: `/vara-tjanster/${service.id}`,
      label: service.title,
    })),
  },
  { href: "/kontakt", label: "Kontakt" },
];

export { mainLinks };

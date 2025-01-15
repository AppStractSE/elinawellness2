import { content } from "@/data/content";
import { socials } from "@/data/socials";
import Link from "next/link";

const Footer = () => {
  const ICON_SIZE = 24;
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-background">
      <div className="max-page-width space-y-8 px-4 pb-8 pt-12">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="flex flex-1 flex-col gap-4">
            <h3 className="text-balance text-2xl font-bold uppercase">
              WE GOT something cooking. Reach out to us!
            </h3>
          </div>
          <div className="flex min-w-fit flex-1 flex-col gap-4">
            <h5 className="text-lg font-semibold">Info</h5>
            <div className="flex flex-col gap-2">
              <Link className="w-fit hover:underline" href="/om-oss">
                Om oss
              </Link>
              <Link className="w-fit hover:underline" href="/kontakt">
                Kontakt
              </Link>
              <Link className="w-fit hover:underline" href="/vara-tjanster">
                Vara tjänster
              </Link>
            </div>
          </div>
          <div className="flex min-w-fit flex-1 flex-col gap-4">
            <h5 className="text-lg font-semibold">Info</h5>
            <div className="flex flex-col gap-2">
              <Link className="w-fit hover:underline" href="/om-oss">
                Om oss
              </Link>
              <Link className="w-fit hover:underline" href="/kontakt">
                Kontakt
              </Link>
              <Link className="w-fit hover:underline" href="/vara-tjanster">
                Vara tjänster
              </Link>
            </div>
          </div>
          <div className="flex min-w-fit flex-1 flex-col gap-4">
            <h5 className="text-lg font-semibold">Info</h5>
            <div className="flex flex-col gap-2">
              <Link className="w-fit hover:underline" href="/om-oss">
                Om oss asdasd
              </Link>
              <Link className="w-fit hover:underline" href="/kontakt">
                Kontakt
              </Link>
              <Link className="w-fit hover:underline" href="/vara-tjanster">
                Vara tjänster
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-background/25" />
        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full bg-background/50 p-2 hover:bg-background"
            >
              <img src={social.icon} width={ICON_SIZE} height={ICON_SIZE} />
            </a>
          ))}
        </div>
        <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs font-semibold uppercase text-background/50">
            © {currentYear} {content.company.name}. All rights reserved.
          </p>
          <a
            href="https://www.appstract.se"
            target="_blank"
            className="text-xs font-semibold uppercase text-background/50 hover:underline"
          >
            Web design by Appstract
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

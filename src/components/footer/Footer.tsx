import { content } from "@/data/content";
import { socials } from "@/data/socials";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary px-4 py-8 text-background">
      <div className="max-page-width space-y-8 md:space-y-16">
        <div></div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4">
          <div className="col-span-2 w-fit">
            <Link
              href="/"
              className="relative h-full w-32 md:w-48 block"
            >
              <Image
                className="!relative fill-white text-background invert"
                quality={100}
                fill
                alt="Logo"
                src="/logo.svg"
              />
            </Link>
          </div>
          <div className="flex min-w-fit flex-col gap-4">
            <div className="flex flex-col gap-2 text-xl font-light md:text-3xl">
              <Link className="w-fit hover:underline" href="/om-oss">
                Om oss
              </Link>
              <Link className="w-fit hover:underline" href="/kontakt">
                Kontakt
              </Link>
              <Link className="w-fit hover:underline" href="/vara-tjanster">
                Våra tjänster
              </Link>
            </div>
          </div>
          <div className="flex min-w-fit flex-col gap-4">
            <h5 className="text-base font-semibold md:text-lg">Följ oss</h5>
            <div className="flex flex-col gap-2">
              {socials.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  className="flex w-fit items-center gap-2 text-sm hover:underline md:text-base"
                >
                  <ArrowUpRight size={16} />
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-background/25" />
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs font-semibold text-background/50">
            © {currentYear} {content.company.name}. All rights reserved.
          </p>
          <a
            href="https://www.appstract.se"
            target="_blank"
            className="text-xs font-semibold text-background/50 hover:underline"
          >
            Web design by Appstract
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

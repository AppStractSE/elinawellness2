"use client";
import { content } from "@/data/content";
import { socials } from "@/data/socials";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { DrawerLink, mainLinks, serviceLinks } from "./drawerData";
interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface MainLinksProps {
  currentPath: string;
}

const MainLinks = ({ currentPath }: MainLinksProps) => {
  return (
    <nav className="flex flex-col gap-4 text-2xl font-semibold tracking-widest md:text-3xl">
      {mainLinks.map((mainLink: DrawerLink) => {
        const isHome = mainLink.href === "/" && currentPath === `/`;
        const isMainActive = isHome || currentPath === mainLink.href;
        const isSublinkActive = (sublinkHref: string) =>
          sublinkHref === currentPath;

        const baseClassNames =
          " block transition-all duration-100 ease-in-out flex items-center hover:text-secondary hover:underline hover:text-primary/50 hover:underline-offset-4";

        const { isActiveClassNames: mainActiveClass } =
          isActiveLink(isMainActive);

        return (
          <React.Fragment key={mainLink.label}>
            <Link
              href={mainLink.href}
              className={twMerge(baseClassNames, mainActiveClass)}
            >
              <span>{mainLink.label}</span>
            </Link>
            {mainLink.sublinks && (
              <div className="grid grid-cols-2 gap-2">
                {mainLink.sublinks.map((sublink) => {
                  const { isActiveClassNames: sublinkActiveClass } =
                    isActiveLink(isSublinkActive(sublink.href));

                  return (
                    <Link
                      key={sublink.label}
                      href={sublink.href}
                      className={twMerge(
                        baseClassNames,
                        sublinkActiveClass,
                        "group relative block overflow-hidden rounded-md text-sm",
                      )}
                    >
                      <Image
                        fill
                        priority
                        src={sublink.image || "/placeholder.png"}
                        alt={sublink.label}
                        className="!relative aspect-square w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50">
                        <div className="flex h-full w-full items-center justify-center">
                          <div className="text-center text-base text-background">
                            {sublink.label}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

function isActiveLink(isActive: boolean) {
  const isActiveClassNames = isActive
    ? "text-secondary underline underline-offset-4 gap-4"
    : "";
  return { isActiveClassNames };
}

const Drawer = ({ isOpen, setIsOpen }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    scrollLock(isOpen);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollLock = (isOpen: boolean) => {
    if (mounted) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
  };

  return (
    <aside className="relative">
      <div
        className={twMerge(
          "fixed inset-0 z-50 h-screen w-screen transform overflow-hidden backdrop-blur-sm transition-all duration-500 ease-in-out",
          !isOpen ? "invisible opacity-0 delay-200" : "visible opacity-100",
        )}
      >
        <div
          className={twMerge(
            "h-full w-screen overflow-hidden bg-black transition-all duration-500",
            isOpen ? "opacity-50" : "opacity-0",
          )}
          onClick={handleToggle}
        />
        <div
          className={twMerge(
            "absolute left-0 top-0 flex h-full w-screen max-w-screen-sm transform flex-col space-y-8 overflow-auto bg-background px-4 py-4 shadow-xl transition-all duration-500 ease-in-out md:border-r md:px-12 md:py-12 lg:bg-opacity-90 lg:py-24",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className={twMerge("text-2xl font-bold tracking-wider")}
            >
              {content.company.name}
            </Link>
            <button
              onClick={handleToggle}
              className="rounded-full border border-primary p-1"
            >
              <X size={28} />
            </button>
          </div>
          <hr className="border-primary/25" />
          <MainLinks currentPath={pathname} />
          <hr className="border-primary/25" />
          <h6 className="text-base font-semibold tracking-wide text-black">
            Upptäck våra tjänster
          </h6>
          <div className="grid grid-cols-2 gap-2">
            {serviceLinks.map((serviceLink) => (
              <Link
                key={serviceLink.label}
                href={serviceLink.href}
                className={twMerge(
                  "group relative block overflow-hidden rounded-md",
                )}
              >
                <Image
                  fill
                  priority
                  src={serviceLink.image || "/placeholder.png"}
                  alt={serviceLink.label}
                  className="!relative aspect-square w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-all duration-1000 ease-in-out group-hover:bg-black/10">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-sm text-center text-background md:text-base p-2">
                      {serviceLink.label}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <hr className="border-primary/25" />
          <div className="flex flex-col gap-4">
            <h6 className="text-base font-semibold tracking-wide text-black">
              {content.followUs}
            </h6>
            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-fit items-center gap-2 font-medium hover:text-primary/50"
                >
                  <ArrowUpRight />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Drawer;

"use client";
import { smoochSans } from "@/util/fonts";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Drawer from "../drawer/Drawer";

const Header = () => {
  const ICON_SIZE = 24;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const buttonBaseClasses = "px-3 py-2 text-xs  font-semibold";
  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 text-primary backdrop-blur-md">
        <div className="max-page-width px-4 py-1 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                <MenuIcon size={ICON_SIZE} />
              </button>
              <div className="h-6 min-w-[1.5px] bg-primary/50" />
              <Link href="/" className="">
                <Image width={54} height={54} quality={100} alt="Logo" src="/logo.svg" />
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/om-oss"
                className={twMerge(buttonBaseClasses, "hidden sm:block")}
              >
                Om oss
              </Link>
              <Link
                href="/vara-tjanster"
                className={twMerge(buttonBaseClasses, "hidden sm:block")}
              >
                Våra tjänster
              </Link>
              <Link
                href="/kontakt"
                className={twMerge(
                  buttonBaseClasses,
                  "rounded-full bg-accent/90 hover:bg-accent",
                )}
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};

export default Header;

"use client";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Drawer from "../drawer/Drawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const ICON_SIZE = 24;
  const pathname = usePathname();
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);
  const buttonBaseClasses = "px-3 py-2 text-xs font-semibold";
  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 text-primary shadow-md backdrop-blur-md">
        <div className="max-page-width px-4 py-2.5 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                <MenuIcon size={ICON_SIZE} />
              </button>
              <div className="h-6 min-w-[1.5px] bg-primary/50" />
              <Link href="/" className="">
                <Image
                  quality={100}
                  width={54}
                  height={54}
                  alt="Logo"
                  src="/logo.svg"
                />
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
                href="/vart-utbud"
                className={twMerge(buttonBaseClasses, "hidden sm:block")}
              >
                Vårt utbud
              </Link>
              <Link
                href="/kom-igang"
                className={twMerge(
                  buttonBaseClasses,
                  "rounded-full bg-accent/90 hover:bg-accent",
                )}
              >
                Kom igång
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

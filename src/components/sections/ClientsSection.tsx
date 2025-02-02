"use client";
import { content } from "@/data/content";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/react-splide/css";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Options {
  type: string;
  gap: string;
  pauseOnHover: boolean;
  resetProgress: boolean;
  height: string;
  pagination: boolean;
  arrows: boolean;
  perPage: number;
  dragFree: boolean;
  focus: number;
  breakpoints: {
    768: {
      autoPlay: boolean;
      interval: number;
      speed: number;
      perPage: number;
      gap: number;
      autoplay: boolean;
      pauseOnHover: boolean;
      resetProgress: boolean;
      height: string;
      pagination: boolean;
      arrows: boolean;
    };
  };
  autoScroll?: {
    speed: number;
    dragFree: boolean;
  };
}
const ClientsSection = () => {
  const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

  const options: Options = {
    type: "loop",
    gap: "1rem",
    pauseOnHover: true,
    resetProgress: false,
    height: "auto",
    pagination: true,
    arrows: true,
    perPage: 4,
    dragFree: true,
    focus: 0,
    breakpoints: {
      768: {
        autoPlay: true,
        interval: 5000,
        speed: 1000,
        perPage: 1,
        gap: 0,
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        height: "auto",

        pagination: true,
        arrows: true,
      },
    },
  };

  if (!isMobile) {
    options.autoScroll = {
      speed: 0.33,
      dragFree: true,
    };
  }
  const extensions = !isMobile ? { AutoScroll } : {};
  return (
    <section className="bg-white">
      <div className="space-y-12 py-8 md:py-24">
        <div
          className={twMerge(
            "max-page-width flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-8",
          )}
        >
          <h2 className="text-3xl font-medium tracking-wider sm:text-4xl md:text-5xl">
            Våra klienters fantastiska resultat
          </h2>
          <p className="whitespace-pre-line text-balance leading-relaxed tracking-wider md:w-1/2">
            Se några av våra klienters fantastiska resultat och läs om deras
            resa. Vi är stolta över att ha fått vara en del av deras resa mot en
            hälsosammare livsstil!
          </p>
        </div>
        <Splide
          extensions={extensions}
          options={options}
          aria-labelledby="autoplay-example-heading"
          hasTrack={false}
        >
          <div className="splide__wrapper bg-gradient-to-b from-transparent via-accent/15 to-transparent">
            <SplideTrack>
              {content.services.map((service, index) => (
                <SplideSlide key={index}>
                  <div className="splide-slide px-2 md:px-0">
                    <div className="max-page-width">
                      <div className="relative aspect-square w-full max-w-full">
                        <Image
                          src="/before-after001.webp"
                          alt=""
                          fill
                          className="rounded-xl object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </div>
          <div className="mx-auto mt-8 flex max-w-fit">
            <div className="splide__pagination"></div>
            <div className="splide__arrows hidden lg:block">
              <button className="splide__arrow splide__arrow--prev !bg-primary text-background">
                <ChevronRight size={32} />
              </button>
              <button className="splide__arrow splide__arrow--next !bg-primary text-background">
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </Splide>
      </div>
    </section>
  );
};

export default ClientsSection;

"use client";
import { content } from "@/data/content";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const FullwidthCarousel = () => {
  const rtl = false;
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: false,
    pauseOnHover: true,
    resetProgress: false,
    height: "auto",
    interval: 10000,
    speed: 500,
    pagination: true,
    arrows: true,
  };
  return (
    <Splide
      options={options}
      aria-labelledby="autoplay-example-heading"
      hasTrack={false}
    >
      <div className="splide__wrapper">
        <SplideTrack>
          {content.services.map((service, index) => (
            <SplideSlide key={index}>
              <div className="splide-slide">
                <div className="max-page-width grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 lg:gap-24">
                  <div className="relative aspect-video w-full max-w-full md:aspect-square">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="rounded-xl object-cover object-center"
                    />
                  </div>
                  <div
                    className={twMerge(
                      "flex flex-col gap-4 md:gap-8",
                      rtl ? "md:order-[-1]" : "",
                    )}
                  >
                    <div className="mx-auto flex max-w-screen-md flex-col gap-4 md:px-4">
                      <h3
                        className={twMerge(
                          "text-2xl font-medium leading-relaxed md:text-3xl",
                        )}
                      >
                        {service.title}
                      </h3>
                      <h5 className="text-xl font-medium">
                        {service.description}
                      </h5>
                      <ul className="mt-4 space-y-2">
                        <li className="text-lg font-medium">Vad ingår?</li>
                        {service.points.map((point, index) => (
                          <li key={index} className="flex gap-2">
                            <Check
                              className="my-auto min-h-[20px] min-w-[20px]"
                              size={20}
                            />
                            <span className="md:text-lg">{point.title}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex flex-col gap-2">
                        <Link
                          href="/"
                          className="flex w-fit items-center gap-2 hover:underline"
                        >
                          <span>Till anmälan</span>
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
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
          <button className="splide__arrow splide__arrow--prev !bg-transparent">
            <ChevronRight size={32} />
          </button>
          <button className="splide__arrow splide__arrow--next !bg-transparent">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </Splide>
  );
};

export default FullwidthCarousel;

"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../buttons/Button";
import Script from "next/script";

const ReviewSection = () => {
  const quotes = [
    "Det jag kände var roligast var att jag kunde känna efter bara tre veckor att jag blivit starkare och starkare i min träning.",
    "Jag tycker jag har nått mitt mål. Mitt mål var att komma igång och hitta hälsosamma rutiner och det tycker jag att jag har fått. Hittills har jag gått ner ca 6 kg.",
    "Jag är extremt tacksam över dem extra instruktioner och anpassning efter mina önskemål och svårigheter jag har fått.",
    "Jag är otroligt glad för den utveckling jag gjort i min överkroppsträning och jag är glad att jag idag vågar mer och vågar ta i mer. Förut har jag varit väldigt bra på att fastna i samma övningar och vikter men nu vågar jag testa på nya saker. Jag är nu mer envis och driven i att nå mina mål än vad jag var innan.",
    "Jag tycker perioden har varit lärorik och givande på många plan. Min mage som jag har haft problem med tidigare har mått bra av maten. Jag har tappat 6 cm runt både mage och midja.",
    "Det bästa med onlinecoachning är att jag har fått färdiga övningar så jag vet vad jag ska göra på gymmet! Det har gjort att jag har vågat, blivit mer självsäker och lärt mig mer.",
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mainRef = useRef<any>(null);
  const [, setCurrentReview] = useState(0);

  useEffect(() => {
    if (!mainRef.current) return;
    mainRef.current.go(1);
    mainRef.current.go(0);
  }, []);

  const handlePrevEvent = () => {
    setCurrentReview((prev) => {
      const newIndex = prev === 0 ? quotes.length - 1 : prev - 1;
      mainRef.current.go(newIndex);
      return newIndex;
    });
  };

  const handleNextEvent = () => {
    setCurrentReview((prev) => {
      const newIndex = prev === quotes.length - 1 ? 0 : prev + 1;
      mainRef.current.go(newIndex);
      return newIndex;
    });
  };

  const options = {
    type: "loop",
    gap: ".75rem",
    pauseOnHover: false,
    pauseOnFocus: false,
    resetProgress: false,
    height: "auto",
    pagination: true,
    arrows: false,
    width: "100%",
    autoplay: true,
    interval: 10000,
    focus: 0,
    start: 0,
    speed: 1000,
    perPage: 1,
    classes: {
      pagination: "splide__pagination custom__pagination",
      progress: "splide__progress custom__progress",
    },
  };
  return (
    <section className="bg-primary text-background">
      <div className="max-page-width grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:gap-24 md:py-24">
        <div className={twMerge("flex w-full flex-1 flex-col gap-4 md:gap-8")}>
          <h2 className="text-3xl font-semibold tracking-wide sm:text-4xl md:text-5xl">
            Vad våra klienter har att säga
          </h2>
          <p className="whitespace-pre-line leading-relaxed tracking-wider">
            Vi är stolta över att ha fått vara en del av våra klienters resa mot
            en hälsosammare livsstil! Här är några ord från våra klienter.
          </p>

          <Button
            href="/kom-igang"
            text="Kom igång du med!"
            icon={<ArrowRight size={18} />}
            className="border border-background bg-inherit text-background hover:border-transparent hover:bg-background hover:text-primary/90"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex items-center justify-end gap-4">
            <div
              onClick={handlePrevEvent}
              className="md:hover:cursor-pointer md:hover:opacity-50"
            >
              <MoveLeft size={32} />
            </div>
            <div
              onClick={handleNextEvent}
              className="md:hover:cursor-pointer md:hover:opacity-50"
            >
              <MoveRight size={32} />
            </div>
          </div>
          <Splide
            ref={mainRef}
            options={options}
            aria-labelledby=""
            hasTrack={false}
          >
            <div className="splide__wrapper [&>*:first-child]:rounded-xl">
              <SplideTrack>
                {quotes.map((quote, index) => (
                  <SplideSlide key={index}>
                    <div className="splide-slide flex h-full flex-col items-center justify-center rounded-xl bg-background px-2 text-primary">
                      <div className="flex flex-col gap-4 p-4 md:p-12">
                        <p className="text-6xl md:text-7xl">“</p>
                        <p className="text-lg md:text-xl">{quote}</p>
                        {/* <p className="mt-4 text-base md:mt-8 md:text-lg">
                          - Victor Johansson
                        </p> */}
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4 md:mt-8 md:gap-12">
              <div className="custom__pagination splide__pagination"></div>
              <div className="custom__progress splide__progress flex-1">
                <div className="splide__progress__bar" />
              </div>
            </div>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;

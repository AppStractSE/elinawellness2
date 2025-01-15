import { content } from "@/data/content";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="relative mb-4 flex min-h-screen items-center justify-center">
        <video
          autoPlay
          src="https://videos.pexels.com/video-files/4488715/4488715-uhd_2732_1440_25fps.mp4"
          muted
          playsInline
          loop
          id="myVideo"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative">
          <div className="flex flex-col items-center justify-center gap-12 px-4 py-24">
            <h1 className="whitespace-pre-line text-balance text-center text-4xl uppercase text-background sm:text-6xl md:text-7xl lg:text-8xl">
              {content.homePage.title}
            </h1>
            <h2 className="text-center text-xl text-background md:text-2xl lg:text-3xl">
              {content.homePage.description}
            </h2>
            <Link
              href="/"
              className="mt-12 flex w-fit items-center justify-center rounded-full bg-accent/90 px-6 py-2.5 text-base text-background hover:bg-accent md:text-lg lg:text-xl"
            >
              <span>{content.homePage.button}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

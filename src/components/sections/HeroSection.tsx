import { content } from "@/data/content";
import MiniContactForm from "../forms/MiniContactForm";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/IMG_6980.JPG)",
        backgroundPosition: "50% 25%",
      }}
    >
      <div className="relative flex min-h-[120dvh] flex-col justify-end border-b border-primary/50">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-hero-width relative z-10 w-full px-4 py-12 lg:gap-8 lg:py-24 xl:py-32">
          <div className="flex flex-col gap-6 md:w-1/2">
            <h1 className="whitespace-pre-line text-balance text-3xl font-medium text-background sm:text-4xl md:text-5xl lg:text-6xl">
              {content.homePage.title}
            </h1>
            <h2 className="whitespace-pre-line text-lg font-medium text-background sm:text-balance md:text-xl">
              {`Upplev hälsa och välbefinnande med oss - anpassat för dig. Få personlig vägledning och smakrika recept för dina hälsomål, oavsett din träningsnivå.`}
            </h2>
            <div className="w-full md:w-2/3">
              <MiniContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { content } from "@/data/content";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/IMG_6980.JPG)",
        backgroundPosition: "50% 25%",
      }}
    >
      <div className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden border-b border-primary/50 md:justify-end">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-page-width relative z-10 flex w-full flex-col gap-4 px-4 py-24 lg:gap-8">
          <h1 className="w-1/2 whitespace-pre-line text-balance text-3xl font-medium text-background sm:text-4xl md:text-5xl lg:text-6xl">
            {content.homePage.title}
          </h1>
          <h2 className="hidden text-xl font-medium text-background md:block md:w-1/2 md:text-2xl lg:text-3xl">
            {content.homePage.subtitle}
          </h2>
          <h2 className="whitespace-pre-line text-balance text-lg text-background md:w-1/2 md:text-2xl lg:text-xl">
            {`Upplev hälsa och välbefinnande med oss - anpassat för dig. Få personlig vägledning och smakrika recept för dina hälsomål, oavsett din träningsnivå.`}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

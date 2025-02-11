import CenteredSection from "@/components/sections/CenteredSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import ReviewSection from "@/components/sections/ReviewSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrainersSection from "@/components/sections/TrainersSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <TwoPaneSection
        button={{
          href: "/kom-igang",
          text: "Kom igång!",
        }}
        className="bg-background"
        images={["/food001.jpg", "/IMG_6818.JPG", "/IMG_3526.jpg", "/118.JPG"]}
        title="Vår filosofi"
        text={`Vi anpassar alla våra basprogram för att passa just dig, din kropp och din livsstil. Vi strävar alltid efter att erbjuda personlig vägledning för att optimera din resa mot en hälsosammare livsstil.\n\nVi tror på en holistisk approach där mat, träning och vila samverkar för att främja välbefinnande. Oavsett om du är nybörjare eller har en etablerad träningsrutin anpassar vi träningen efter dig och din situation. \n\nVi erbjuder flexibla träningsalternativ, antingen på gym, hemma eller på  andra platser. Oavsett om du föredrar kroppsviktsträning hemma eller mer avancerad träningsplanering på gymmet, så skapar vi en plan som passar just dig och ditt liv.`}
      />
      <ReviewSection />
      <TrainersSection showMoreButton />
      <ServicesSection showAll />
      <CenteredSection
        image="/ready-for-change.webp"
        title="Redo för förändring?"
        button={{
          href: "/kom-igang",
          text: "Jag är redo!",
        }}
        text="Låt oss komma igång redan idag!"
      />
      <ContactSection />
      <FAQSection />
    </>
  );
}

import { content } from "@/data/content";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/Button";

interface Props {
  className?: string;
  showAll?: boolean;
}

const ServicesSection = ({ className, showAll }: Props) => {
  return (
    <section className={className}>
      <div className="max-page-width flex flex-col items-center gap-4 px-4 py-12 md:gap-8 md:py-24">
        <h2 className="text-balance text-center text-3xl font-semibold tracking-wide sm:text-4xl md:text-5xl">
          Allt för din hälsa & ditt välmående
        </h2>
        <p className="max-w-3xl text-balance text-center text-lg leading-loose tracking-wider md:text-xl">
          Vårt utbud är unikt anpassat för att passa dig, din kropp och
          livspussel. Vi erbjuder alltid personlig guidning för att optimera din
          väg mot en hälsosammare livsstil.
        </p>
        <div className="mt-4 grid w-full grid-cols-1 gap-x-4 gap-y-12 md:grid-cols-2">
          {content.services.map((service, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="relative aspect-[2/1] md:aspect-[1.75/1]">
                <Image
                  quality={100}
                  fill
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full rounded-lg object-cover object-center"
                />
              </div>
              <div className="mb-auto flex flex-col gap-2">
                <h3 className="text-balance text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="text-base md:pr-4 md:text-lg">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button href={`/vart-utbud/${service.id}`} text="Läs mer" />
                <Button
                  href="/kom-igang"
                  text="Till anmälan"
                  icon={<ArrowRight size={18} />}
                  className="border border-primary bg-inherit text-primary hover:border-transparent hover:bg-primary/90 hover:text-background"
                />
              </div>
            </div>
          ))}
        </div>
        {showAll ? (
          <Link
            href="/vart-utbud"
            className="mt-12 flex w-fit items-center gap-2 font-medium hover:underline"
          >
            <span>Se hela vårt utbud</span>
            <ArrowRight size={18} />
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default ServicesSection;

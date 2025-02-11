import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import TrainerCard from "../cards/TrainerCard";

interface Props {
  className?: string;
  showMoreButton?: boolean;
}

const TrainersSection = ({ className, showMoreButton }: Props) => {
  return (
    <section className={twMerge("bg-white", className)}>
      <div className="max-page-width flex flex-col items-center gap-8 px-4 py-12 md:gap-12 md:py-24">
        <h2 className="text-2xl font-semibold tracking-wide sm:text-3xl md:text-5xl">
          Det här är Elina Wellness
        </h2>
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-8">
          <TrainerCard
            title="Lina"
            image="/IMG_8625.webp"
            description={`Lina är utbildad till personlig tränare och fysioterapeut och brinner för en hälsosam livsstil där rörelseglädje står i fokus. Hon fick sin PT-licens år 2019 och är legitimerad fysioterapeut sedan 2020. Förutom att jobba som coach på ElinaWellness jobbar Lina också som fysioterapeut där hon dagligen rehabiliterat patienter som har ont i muskler och leder.`}
            email="lina@elinawellness.se"
            instagram="/"
          />
          <TrainerCard
            title="Elin"
            image="/IMG_8626.webp"
            description={`Elin är utbildad inom kostventenskap som kostvetare. Hon tog examen 2018 och har sedan dess jobbat inom hälsobranchen på olika sätt, både som anställd och egenföretagare. Elin brinner för att hjälpa andra till en hållbar och bättre livsstil genom en bra och hälsosamt kost och rörelse. Förutom som coach på ElinaWellness driver Elin eget inom hälsokost och skönhet.`}
            email="elin@elinawellness.se"
            instagram="/"
          />
        </div>
        {showMoreButton ? (
          <Link
            href="/om-oss"
            className="mt-12 flex w-fit items-center gap-2 font-medium hover:underline"
          >
            <span>Läs mer om oss</span>
            <ArrowRight size={18} />
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default TrainersSection;

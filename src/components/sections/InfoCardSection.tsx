import Link from "next/link";
import SmallInfoCard from "../cards/SmallInfoCard";

const InfoCardSection = () => {
  return (
    <section>
      <div className="max-page-width flex flex-col items-center justify-center gap-12 px-4 py-12 md:py-24">
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
          <SmallInfoCard
            topText="CUSTOMER SATISFACTION"
            middleText="4.8/5"
            bottomText="We offer top-notch quality in every project"
          />
          <SmallInfoCard
            topText="CUSTOMER SATISFACTION"
            middleText="4.8/5"
            bottomText="We offer top-notch quality in every project"
          />
          <SmallInfoCard
            topText="CUSTOMER SATISFACTION"
            middleText="4.8/5"
            bottomText="We offer top-notch quality in every project"
          />
          <SmallInfoCard
            topText="CUSTOMER SATISFACTION"
            middleText="4.8/5"
            bottomText="We offer top-notch quality in every project"
          />
        </div>
        <Link
          href="/"
          className="flex w-fit items-center justify-center rounded-full border px-6 py-2.5 hover:border-primary"
        >
          <span>View all references</span>
        </Link>
      </div>
    </section>
  );
};

export default InfoCardSection;

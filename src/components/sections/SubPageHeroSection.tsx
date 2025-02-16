import Image from "next/image";
import Button from "../buttons/Button";

interface Props {
  title: string;
  text?: string;
  image?: string;
  button?: {
    href: string;
    text: string;
  };
  className?: string;
}

const SubPageHeroSection = ({
  title,
  text,
  button,
  image,
  className,
}: Props) => {
  return (
    <section className={className}>
      <div className="max-page-width flex flex-col items-center justify-center gap-8 px-4 py-12 md:gap-12 md:py-24">
        <h2 className="max-w-screen-lg hyphens-auto whitespace-pre-line text-balance break-words text-center text-4xl font-medium sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {image ? (
          <Image
            quality={100}
            fill
            alt={title}
            src={image}
            className="!relative aspect-[1.75/1] h-auto w-full rounded-xl object-cover object-center"
          />
        ) : null}
        <p className="max-w-3xl text-balance text-center text-lg leading-loose tracking-wider md:text-xl">
          {text}
        </p>
        {button ? (
          <Button href="/kom-igang" text="Till anmälan" className="text-lg" />
        ) : null}
      </div>
    </section>
  );
};

export default SubPageHeroSection;

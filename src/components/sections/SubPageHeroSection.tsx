import Link from "next/link";

interface Props {
  title: string;
  text: string;
  button?: {
    href: string;
    text: string;
  };
}

const SubPageHeroSection = ({ title, text, button }: Props) => {
  return (
    <section>
      <div className="max-page-width my-24 flex flex-col items-center justify-center gap-8 px-4 py-12 md:gap-12 md:py-24">
        <h2 className="whitespace-pre-line text-balance text-center text-4xl font-medium sm:text-5xl md:text-6xl">
          {title}
        </h2>
        <p className="max-w-3xl text-balance text-center text-lg leading-loose tracking-wider md:text-xl lg:text-2xl">
          {text}
        </p>
        {button && (
          <Link
            href={button.href}
            className="flex w-fit items-center justify-center rounded-full bg-primary/90 px-6 py-2.5 text-background hover:bg-primary"
          >
            <span>{button.text}</span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default SubPageHeroSection;

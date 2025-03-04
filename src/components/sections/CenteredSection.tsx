import Link from "next/link";

interface Props {
  title: string;
  text: string;
  button?: {
    href: string;
    text: string;
  };
}

const CenteredSection = ({ title, text, button }: Props) => {
  return (
    <section className="bg-white">
      <div className="max-page-width relative flex flex-col items-center justify-center gap-8 px-4 py-8 md:gap-12 md:py-24 lg:py-48">
        <h2 className="max-w-3xl whitespace-pre-line text-balance text-center text-2xl font-medium sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="max-w-3xl text-balance text-center text-lg leading-loose tracking-wider md:text-xl lg:text-2xl">
          {text}
        </p>
        {button && (
          <Link
            href={button.href}
            className="flex w-fit items-center justify-center rounded-full bg-accent/90 px-6 py-2.5 hover:bg-accent"
          >
            <span>{button.text}</span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default CenteredSection;

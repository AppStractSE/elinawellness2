import Link from "next/link";

interface Props {
  image?: string;
  title: string;
  text: string;
  button?: {
    href: string;
    text: string;
  };
}

const CenteredSection = ({ image, title, text, button }: Props) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/25" />
      <div className="max-page-width relative flex flex-col items-center justify-center gap-8 px-4 py-8 md:gap-12 md:py-24 lg:py-48">
        <h2 className="max-w-3xl whitespace-pre-line text-balance text-center text-4xl font-medium text-background sm:text-5xl md:text-6xl">
          {title}
        </h2>
        <p className="max-w-3xl text-balance text-center text-lg leading-loose tracking-wider text-background md:text-xl lg:text-2xl">
          {text}
        </p>
        {button && (
          <Link
            href={button.href}
            className="flex w-fit items-center justify-center rounded-full bg-accent/90 px-6 py-2.5 text-background hover:bg-accent"
          >
            <span>{button.text}</span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default CenteredSection;

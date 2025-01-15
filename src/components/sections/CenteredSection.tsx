import Image from "next/image";
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
    <section>
      <div className="max-page-width flex flex-col items-center justify-center gap-8 px-4 py-8 md:gap-12 md:py-12">
        <h2 className="max-w-3xl whitespace-pre-line text-balance text-center text-4xl font-medium uppercase sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {image && (
          <div className="w-full max-w-full">
            <Image
              quality={100}
              src={image}
              alt=""
              height={1080}
              width={1920}
              className="relative aspect-video max-h-[600px] rounded-xl object-cover object-center"
            />
          </div>
        )}
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

export default CenteredSection;

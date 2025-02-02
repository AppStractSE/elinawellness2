import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  image?: string;
  images?: string[];
  title: string;
  text: string;
  rtl?: boolean;
  className?: string;
  button?: {
    href: string;
    text: string;
  };
}
const TwoPaneSection = ({
  image,
  images,
  title,
  text,
  rtl,
  button,
  className,
}: Props) => {
  return (
    <section className={className}>
      <div className="max-page-width grid grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:gap-24 md:py-24">
        {image && (
          <div>
            <Image
              src={image}
              alt=""
              height={1080}
              width={1920}
              className="aspect-video w-full max-w-full rounded-xl object-cover object-center md:aspect-square"
            />
          </div>
        )}
        {images && (
          <div className="grid grid-cols-2 gap-2">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt=""
                height={1080}
                width={1920}
                className="aspect-square w-full max-w-full rounded-xl object-cover object-center"
              />
            ))}
          </div>
        )}
        <div
          className={twMerge(
            "flex flex-col gap-4 md:gap-8",
            rtl ? "md:order-[-1]" : "",
          )}
        >
          <h2 className="text-3xl font-semibold tracking-wide sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="whitespace-pre-line leading-relaxed tracking-wider">
            {text}
          </p>
          <div>
            {button && (
              <Link
                href={button.href}
                className="flex w-fit items-center gap-2 hover:underline"
              >
                <span>{button.text}</span>
                <ArrowRight size={18} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoPaneSection;

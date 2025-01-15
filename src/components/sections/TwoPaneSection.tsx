import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  image: string;
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
  title,
  text,
  rtl,
  button,
  className,
}: Props) => {
  return (
    <section className={className}>
      <div className="max-page-width grid grid-cols-1 items-center gap-8 px-4 py-8 md:grid-cols-2 md:gap-24 md:py-12">
        <div>
          <Image
            src={image}
            alt=""
            height={1080}
            width={1920}
            className="aspect-video w-full max-w-full rounded-xl object-cover object-center md:aspect-square"
          />
        </div>
        <div
          className={twMerge(
            "flex flex-col gap-8 md:gap-12",
            rtl ? "md:order-[-1]" : "",
          )}
        >
          <h2 className="text-3xl font-medium uppercase tracking-wider sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="leading-relaxed tracking-wider">{text}</p>
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

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Button from "../buttons/Button";

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
      <div className="max-page-width grid grid-cols-1 items-center gap-6 px-4 py-12 md:grid-cols-2 md:gap-24 md:py-24">
        {image && (
          <div>
            <Image
              quality={100}
              src={image}
              alt=""
              height={1080}
              width={1920}
              className={twMerge(
                "aspect-[1.25/1] h-auto w-full max-w-full rounded-xl object-cover object-center md:aspect-auto",
              )}
            />
          </div>
        )}
        {images && (
          <div className="grid grid-cols-2 gap-2">
            {images.map((image, index) => (
              <Image
                quality={100}
                key={index}
                src={image}
                alt=""
                height={1080}
                width={1920}
                className={twMerge(
                  "aspect-square w-full max-w-full rounded-xl object-cover object-center",
                )}
              />
            ))}
          </div>
        )}
        <div
          className={twMerge(
            "flex flex-col gap-6 md:gap-8",
            rtl ? "md:order-[-1]" : "",
          )}
        >
          <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="whitespace-pre-line text-base md:text-lg">{text}</p>
          {button && (
            <Button
              href={button.href}
              text={button.text}
              icon={<ArrowRight size={18} />}
              className="border border-primary bg-inherit text-primary hover:border-transparent hover:bg-primary/90 hover:text-background"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TwoPaneSection;

import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  text: string;
  children: React.ReactNode;
  className?: string;
}
const TitleWithContentSection = ({
  title,
  text,
  children,
  className,
}: Props) => {
  return (
    <section className={className}>
      <div className="space-y-12 py-8 md:py-24">
        <div
          className={twMerge(
            "max-page-width flex flex-col gap-8 px-4 md:gap-12",
          )}
        >
          <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="whitespace-pre-line leading-relaxed tracking-wider md:w-1/2">
            {text}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default TitleWithContentSection;

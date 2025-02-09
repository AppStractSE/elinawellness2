import { Instagram, Send } from "lucide-react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  instagram: string;
  email: string;
}
const TrainerCard = ({
  title,
  description,
  image,
  instagram,
  email,
}: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-full w-full">
        <Image
          quality={100}
          priority
          src={image}
          fill
          alt="Trainer image"
          className="!relative h-full max-h-[650px] w-full rounded-md object-cover object-center md:max-h-[700px]"
        />
      </div>
      <div className="flex flex-col gap-4 px-2.5">
        <h2 className="mt-4 text-2xl font-medium tracking-wider sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="whitespace-pre-line leading-relaxed tracking-wider md:text-balance">
          {description}
        </p>
        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="flex w-fit items-center gap-4 font-medium hover:text-primary/50"
        >
          <Instagram size={20} />
          <span>Instagram</span>
        </a>
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noreferrer"
          className="flex w-fit items-center gap-4 font-medium hover:text-primary/50"
        >
          <Send size={20} />
          <span>{email}</span>
        </a>
      </div>
    </div>
  );
};

export default TrainerCard;

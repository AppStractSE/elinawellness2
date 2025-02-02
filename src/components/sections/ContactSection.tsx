import { content } from "@/data/content";
import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Send,
  Smartphone,
} from "lucide-react";
import ContactForm from "../forms/ContactForm";

interface Props {
  className?: string;
}

const ContactSection = ({ className }: Props) => {
  return (
    <section className={className}>
      <div className="max-page-width flex justify-center px-4 py-12 md:py-24">
        <div className="flex w-full flex-col justify-between gap-12 md:flex-row md:gap-8">
          <div className="flex flex-col gap-4 md:max-w-[32rem]">
            <h2 className="text-3xl font-medium tracking-wider sm:text-4xl md:text-5xl">
              {content.contactSection.title}
            </h2>
            <p className="text-balance text-2xl">
              {content.contactSection.description}
            </p>
            <div className="mt-4 flex flex-col gap-4">
              {content.contactSection.points.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check size={20} className="min-h-[20px] min-w-[20px]" />
                  <span className="md:text-lg">{point}</span>
                </div>
              ))}
            </div>
            {(content.company.phone ||
              content.company.email ||
              content.company.address) && (
              <div className="mt-4 flex flex-col gap-4">
                <h5 className="text-2xl">{content.contactSection.contact}</h5>
                <div className="flex flex-col gap-2">
                  {content.company.phone && (
                    <p className="w-fit text-lg underline underline-offset-4">
                      <a
                        href={`tel:${content.company.phone}`}
                        className="flex items-center gap-4"
                      >
                        <Smartphone size={20} />
                        {content.company.phone}
                      </a>
                    </p>
                  )}
                  {content.company.email && (
                    <p className="w-fit text-lg underline underline-offset-4">
                      <a
                        href={`mailto:${content.company.email}`}
                        className="flex items-center gap-4"
                      >
                        <Mail size={20} />
                        {content.company.email}
                      </a>
                    </p>
                  )}
                  {content.company.address && (
                    <p className="w-fit text-lg underline underline-offset-4">
                      <a
                        href={`mailto:${content.company.address}`}
                        className="flex items-center gap-4"
                      >
                        <MapPin size={20} />
                        {content.company.address}
                      </a>
                    </p>
                  )}
                </div>
                <div className="mt-4 grid grid-cols-2 items-start justify-between gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="h-full w-full">
                      <img
                        src="/IMG_8625.webp"
                        className="h-full w-full rounded-md object-cover object-center"
                      />
                    </div>
                    <h2 className="text-xl font-medium tracking-wider md:text-2xl">
                      Lina
                    </h2>
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-fit items-center gap-2 font-medium hover:underline"
                    >
                      <ArrowUpRight />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="mailto:lina@elinawellness.se"
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-fit items-center gap-2 font-medium hover:underline"
                    >
                      <Send size={20} />
                      <span>Mejla Lina!</span>
                    </a>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="h-full w-full">
                      <img
                        src="/IMG_8626.webp"
                        className="h-full w-full rounded-md object-cover object-center"
                      />
                    </div>
                    <h2 className="text-xl font-medium tracking-wider md:text-2xl">
                      Elin
                    </h2>
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-fit items-center gap-2 font-medium hover:underline"
                    >
                      <ArrowUpRight />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="mailto:elin@elinawellness.se"
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-fit items-center gap-2 font-medium hover:underline"
                    >
                      <Send size={20} />
                      <span>Mejla Elin!</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex w-full flex-col gap-4 md:min-w-96 md:max-w-lg">
            {content.contactSection.contactFormTitle && (
              <p className="text-balance text-2xl">
                {content.contactSection.contactFormTitle}
              </p>
            )}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { content } from "@/data/content";
import { Check, Mail, MapPin, Smartphone } from "lucide-react";
import ContactForm from "../forms/ContactForm";

interface Props {
  className?: string;
}

const ContactSection = ({ className }: Props) => {
  return (
    <section className={className}>
      <div className="max-page-width flex justify-center px-4 py-8 md:py-12">
        <div className="flex w-full flex-col justify-between gap-12 md:flex-row md:gap-8">
          <div className="flex max-w-[32rem] flex-col gap-4">
            <h2 className="text-3xl font-medium uppercase tracking-wider sm:text-4xl md:text-5xl">
              {content.contactSection.title}
            </h2>
            <p className="text-balance text-2xl">
              {content.contactSection.description}
            </p>
            <div className="mt-4 flex flex-col gap-4">
              {content.contactSection.points.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check size={20} />
                  <span className="text-lg">{point}</span>
                </div>
              ))}
            </div>
            {(content.company.phone ||
              content.company.email ||
              content.company.address) && (
              <div className="mt-4 flex flex-col gap-4">
                <h5 className="text-2xl">{content.contactSection.contact}</h5>
                <div className="flex flex-col gap-1">
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
              </div>
            )}
          </div>
          <div className="flex w-full flex-col gap-4 md:min-w-96 md:max-w-lg">
            {content.contactSection.contactFormTitle && (
              <p className="text-lg">
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

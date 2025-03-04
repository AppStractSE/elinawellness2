import Button from "@/components/buttons/Button";
import ContactSection from "@/components/sections/ContactSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import { content } from "@/data/content";
import { Check } from "lucide-react";
// import { Metadata } from "next";
import { redirect } from "next/navigation";
export async function generateStaticParams() {
  return content.services.map((service) => ({
    id: service.id,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any) {
  const service = content.services.find((service) => service.id === params.id);
  if (!service) redirect("/404");
  return {
    title: service.title,
    openGraph: {
      title: `Elina Wellness | ${service.title}`,
      description: service.description,
      url: `/vart-utbud/${service.id}`,
      siteName: "Elina Wellness",
      images: [
        {
          url: `/${service.image}`,
          width: 1200,
          height: 630,
          alt: `Elina Wellness | ${service.title}`,
        },
      ],
      locale: "sv_SE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@",
      title: "Elina Wellness",
      images: [
        {
          url: `/${service.image}`,
          width: 1200,
          height: 630,
          alt: `Elina Wellness | ${service.title}`,
        },
      ],
      description: service.description,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({ params }: any) {
  const service = content.services.find((service) => service.id === params.id);
  if (!service) redirect("/404");

  return (
    <>
      <SubPageHeroSection
        image={service.image}
        button={{
          href: "/kom-igang",
          text: "Till anmälan",
        }}
        title={service.title}
        text={service.description}
        className="bg-white"
      />
      <section>
        <div className="mx-auto max-w-screen-md justify-center px-4 py-12 md:py-24">
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-24">
              <div className="flex flex-col gap-8">
                <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl">
                  {service.secondary_title}
                </h2>
                <div className="text-lg font-medium">
                  {service.strong_description}
                </div>
                <div className="text-lg">{service.paragraph}</div>
              </div>

              <div className="flex flex-col gap-8">
                <h2 className="text-xl font-medium tracking-wide sm:text-2xl md:text-3xl">
                  Vad ingår?
                </h2>
                <ul className="flex flex-col gap-4">
                  {service.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="min-h-[20px] min-w-[20px]" />
                      <span className="text-lg">{point.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <Button href="/kom-igang" text="Till anmälan" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection className="bg-white" />
      <ContactSection className="bg-primary text-background" />
    </>
  );
}

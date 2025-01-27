import ContactSection from "@/components/sections/ContactSection";
import SubPageHeroSection from "@/components/sections/SubPageHeroSection";
import TwoPaneSection from "@/components/sections/TwoPaneSection";
import { content } from "@/data/content";
// import { Metadata } from "next";
import { redirect } from "next/navigation";
export async function generateStaticParams() {
  return content.services.map((service) => ({
    id: service.id,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({ params }: any) {
  const service = content.services.find((service) => service.id === params.id);
  if (!service) redirect("/404");

  return (
    <>
      <SubPageHeroSection
        // image="/image001.jpeg"
        button={{
          href: "/kontakt",
          text: "Jag vill veta mer",
        }}
        title={service.title}
        text={service.description}
      />
      <TwoPaneSection
        image="/image002.jpeg"
        title="Title one"
        text="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
      />
      <TwoPaneSection
        rtl
        image="/image001.jpeg"
        title="Title two"
        text="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
      />
      <ContactSection className="border-b/50 border-b bg-primary text-background" />
    </>
  );
}

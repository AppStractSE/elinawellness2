"use client";
import FAQItem from "../faq/FAQItem";

interface Props {
  className?: string;
}

const FAQSection = ({className}: Props) => {
  const questionsAndAnswers = [
    {
      question: "Måste jag träna på gymmet?",
      answer:
        "Nej, vi anpassar alltid programmen efter dig och din situation, så att du kan nå dina mål på ett sätt som passar dig. Vi erbjuder flexibla träningsalternativ, antingen på gym, hemma eller på andra platser.",
    },
    {
      question: "Hur lång tid tar det?",
      answer:
        "Det beror helt på dig och dina mål. Vi anpassar alltid programmen efter dig och din situation, så att du kan nå dina mål på ett sätt som passar dig.",
    },
    {
      question: "Hur ofta behöver jag träna?",
      answer:
        "Det beror på dina mål och din situation. Vi anpassar alltid programmen efter dig och din situation, så att du kan nå dina mål på ett sätt som passar dig.",
    },
    {
      question: "Kan jag använda friskvårdsbidraget?",
      answer: "Ja, det kan du.",
    },
    {
      question:
        "Kan jag äta samma mat som övriga i familjen även om jag vill gå ner i vikt?",
      answer: "Självklart!",
    },
    {
      question: "Får jag färdiga recept när jag anlitar er?",
      answer: "Ja, om du önskar det.",
    },
    {
      question: "Hur ser kontakten ut när man anlitar er?",
      answer:
        "Kontakten sker via det sätt som passar dig bäst. Det kan t.ex. vara SMS, Instagram, mejl eller telefon. Vi svarar alltid inom 24h!",
    },
  ];
  return (
    <section className={className}>
      <div className="mx-auto flex max-w-screen-sm justify-center px-4 py-12 md:max-w-screen-lg md:py-24">
        <div className="flex flex-col gap-8 transition-all duration-200 ease-in-out md:gap-12 lg:gap-24">
          <h2 className="text-center text-3xl font-medium tracking-wider sm:text-4xl md:text-5xl">
            Vanliga frågor och svar
          </h2>
          <div className="space-y-8">
            {questionsAndAnswers.map((qa, index) => (
              <FAQItem key={index} question={qa.question} answer={qa.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

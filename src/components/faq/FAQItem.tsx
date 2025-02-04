"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="cursor-pointer border-b border-gray-300 pb-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex w-full items-center justify-between focus:outline-none">
        <span className="md:text-xl font-medium">{question}</span>
        <ChevronDown
          className={twMerge(
            "h-5 w-5 transform transition-transform duration-200",
            isOpen ? "rotate-180" : "",
          )}
        />
      </div>
      <div
        className={twMerge(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen
            ? "visible h-full max-h-[1000px] opacity-100"
            : "invisible h-0 max-h-0 opacity-0",
        )}
      >
        <div className="mt-4 md:px-2">
          <p className="text-sm md:text-lg">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;

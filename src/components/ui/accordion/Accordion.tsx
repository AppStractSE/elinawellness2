"use client";
import { ChevronDown } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Accordion = ({ title, children, setIsOpen, isOpen }: AccordionProps) => {
  return (
    <div className="border-b border-gray-300 pb-4">
      <button
        className="flex w-full items-center justify-between focus:outline-none"
        onClick={setIsOpen}
      >
        <span className="text-base font-medium">{title}</span>
        <ChevronDown
          className={twMerge(
            "h-5 w-5 transform transition-transform duration-200",
            isOpen ? "rotate-180" : "",
          )}
        />
      </button>
      <div
        className={twMerge(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen
            ? "visible h-full max-h-[1000px] opacity-100"
            : "invisible h-0 max-h-0 opacity-0",
        )}
      >
        <div className="px-2 text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;

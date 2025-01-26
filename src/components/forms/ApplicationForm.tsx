"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="mb-4">
      <div className="relative h-2 w-full overflow-hidden rounded-sm bg-gray-300">
        <div
          className="inset-0 h-2 animate-pulse bg-primary transition-all duration-500 ease-in-out"
          style={{ width: `calc(${currentStep} / ${totalSteps} * 100%)` }}
        ></div>
      </div>
    </div>
  );
};

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: "",
    gender: "",
    age: "",
    about: "",
    contact: {
      name: "",
      phone: "",
      email: "",
    },
  });

  const totalSteps = 2;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value,
      },
    }));
  };

  const handleTextareaChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      about: value,
    }));
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col space-y-2">
            <textarea
              className="h-42 w-full resize-none rounded-md p-4 outline outline-1 outline-primary/50 hover:outline-0"
              rows={4}
              placeholder="Målsättning. Vad behöver du hjälp med?"
              value={formData.about}
              onChange={(e) => handleTextareaChange(e.target.value)}
            ></textarea>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col space-y-2">
            <input
              className="w-full rounded-md p-4 outline outline-1 outline-primary/50 hover:outline-0"
              type="text"
              placeholder="Namn"
              value={formData.contact.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
            <input
              className="w-full rounded-md p-4 outline outline-1 outline-primary/50"
              type="tel"
              placeholder="Telefonnummer"
              value={formData.contact.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
            <input
              className="w-full rounded-md p-4 outline outline-1 outline-primary/50"
              type="email"
              placeholder="E-post"
              value={formData.contact.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-[320px] md:h-[275px]">
      <ProgressBar currentStep={step} totalSteps={totalSteps} />
      {renderStepContent()}
      <div
        className={twMerge(
          "mt-4 flex justify-between",
          step === 1 && "justify-end",
        )}
      >
        {step > 1 && (
          <button className="rounded-md border px-4 py-2" onClick={prevStep}>
            Tillbaka
          </button>
        )}
        {step < totalSteps && (
          <button className="rounded-md border px-4 py-2" onClick={nextStep}>
            Nästa
          </button>
        )}
        {step === totalSteps && (
          <button
            className="rounded-md border px-4 py-2"
            onClick={() => console.log("Form Data:", formData)}
          >
            {isSubmitting ? (
              <Spinner
                primaryColor="text-primary"
                secondaryColor="text-background"
                strokeWidth={4}
                height={24}
                width={24}
              />
            ) : (
              "Skicka"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default ApplicationForm;

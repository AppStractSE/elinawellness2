"use client";
import { IContactForm } from "@/types/IContactForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import Spinner from "../loaders/Spinner";

const ProgressBar = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
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

const MiniContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 2;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm({
    defaultValues: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      Message: "",
    },
    mode: "onTouched",
  });

  function generateEmailHTML(data: IContactForm) {
    const formattedMessage = data.Message.replace(/\n/g, "<br>");
    return `<div><p><strong>Namn:</strong></p><p>${data.FullName}</p><p><strong>Email:</strong></p><p><a href="mailto:${data.Email}">${data.Email}</a></p><p><strong>Telefon:</strong></p><p><a href="tel:${data.PhoneNumber}">${data.PhoneNumber}</a></p><p><strong>Meddelande:</strong></p><p>${formattedMessage}</p></div>`;
  }

  const onSubmit = async (data: IContactForm) => {
    const formData = {
      name: data.FullName,
      email: data.Email,
      subject: `Kontaktformulär - ${data.FullName}`,
      message: data.Message,
      messageHtml: generateEmailHTML(data),
    };
    toast
      .promise(
        fetch("/api/contact-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }),
        {
          loading: "Skickar meddelande...",
          success: "Meddelande skickat!",
          error: "Ett fel uppstod.",
        },
        {
          style: {
            minWidth: "250px",
          },
          position: "bottom-center",
          className: "!bg-primary !text-background",
          success: {
            duration: 8000,
          },
        },
      )
      .catch((error) => {
        console.log(error.message);
      })
      .then(() => {
        setFormSubmitted(true);
        setTimeout(() => {
          reset();
          setStep(1);
        }, 250);
      });
  };

  const baseClasses =
    "w-full p-4 shadow-sm rounded-md focus:outline-none border tracking-widest ring-0 focus:outline-1 focus:border-primary focus-visible:outline-offset-0 transition-all duration-500 ease-in-out";

  const errorClass =
    "outline outline-1 outline-offset-0 outline-red-500 placeholder:text-red-500";
  const errorTextBaseClass =
    "text-red-500 text-xs font-medium tracking-widest transition-all duration-500 ease-in-out";
  const errorTextHiddenClasses = "opacity-0 max-h-0 ";
  const errorTextVisibleClasses = "my-2 opacity-100 max-h-full";

  const nextStep = async () => {
    if (step === 1) {
      const isValid = await trigger("Message");
      if (!isValid) return; // Stop here if validation fails
    }
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <textarea
              maxLength={500}
              placeholder="Målsättning. Vad behöver du hjälp med?*"
              className={twMerge(
                "h-48 resize-none whitespace-pre-line",
                baseClasses,
                errors["Message"] ? errorClass : "",
              )}
              {...register("Message", {
                required: "Fyll i målsättning",
                minLength: {
                  value: 10,
                  message: "Minst 10 tecken",
                },
                maxLength: {
                  value: 500,
                  message: "Max 500 tecken",
                },
              })}
            ></textarea>
            <p
              role="alert"
              className={twMerge(
                errorTextBaseClass,
                errors["Message"]
                  ? errorTextVisibleClasses
                  : errorTextHiddenClasses,
              )}
            >
              {errors.Message?.message}
            </p>
          </div>
        );
      case 2:
        return (
          <>
            <div>
              <input
                className={twMerge(
                  baseClasses,
                  errors["FullName"] ? errorClass : "",
                )}
                type="text"
                placeholder="För- och efternamn*"
                {...register("FullName", {
                  required: "Fyll i namn",
                  minLength: {
                    value: 2,
                    message: "Minst 2 tecken",
                  },
                  maxLength: {
                    value: 50,
                    message: "Max 50 tecken",
                  },
                })}
              />
              <p
                role="alert"
                className={twMerge(
                  errorTextBaseClass,
                  errors["FullName"]
                    ? errorTextVisibleClasses
                    : errorTextHiddenClasses,
                )}
              >
                {errors.FullName?.message}
              </p>
            </div>
            <div>
              <input
                className={twMerge(
                  baseClasses,
                  errors["Email"] ? errorClass : "",
                )}
                type="email"
                placeholder="Email*"
                {...register("Email", {
                  required: "Fyll i email",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Ogiltig emailadress",
                  },
                })}
              />
              <p
                role="alert"
                className={twMerge(
                  errorTextBaseClass,
                  errors["Email"]
                    ? errorTextVisibleClasses
                    : errorTextHiddenClasses,
                )}
              >
                {errors.Email?.message}
              </p>
            </div>
            <div>
              <input
                className={twMerge(
                  baseClasses,
                  errors["PhoneNumber"] ? errorClass : "",
                )}
                type="tel"
                placeholder="Telefonnummer*"
                {...register("PhoneNumber", {
                  onChange: (e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  },
                  required: "Fyll i telefonnummer",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Ogiltigt telefonnummer",
                  },
                  minLength: {
                    value: 10,
                    message: "Minst 10 siffror",
                  },
                  maxLength: {
                    value: 15,
                    message: "Max 15 siffror",
                  },
                })}
              />
              <p
                role="alert"
                className={twMerge(
                  errorTextBaseClass,
                  errors["PhoneNumber"]
                    ? errorTextVisibleClasses
                    : errorTextHiddenClasses,
                )}
              >
                {errors.PhoneNumber?.message}
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative transition-all duration-1000 ease-in-out">
      <ProgressBar currentStep={step} totalSteps={totalSteps} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex flex-col gap-3"
        name="contact-form"
      >
        <input type="hidden" name="required-field" value="contact-form" />
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
              disabled={isSubmitting || formSubmitted}
              type="submit"
              className="rounded-md border px-4 py-2"
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
      </form>

      <div
        className={twMerge(
          "absolute inset-0 left-0 top-0 -m-2 overflow-hidden backdrop-blur-sm transition-all delay-75 duration-500 ease-in-out lg:backdrop-blur-sm",
          formSubmitted ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div
          className={twMerge(
            "flex h-full transform flex-col items-center justify-center space-y-4 transition-all duration-500 ease-in-out",
            formSubmitted ? "translate-y-0" : "translate-y-[125%]",
          )}
        >
          <h6 className="text-3xl lg:text-center lg:text-2xl">
            Meddelande skickat!
          </h6>
          <p className="whitespace-pre-line text-balance text-xl lg:text-center lg:text-xl">
            Tack! Vi återkommer så fort vi kan.
          </p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="inline-block rounded-full bg-primary p-2 px-4 text-center text-xs text-background transition-all duration-200 ease-in-out"
          >
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniContactForm;

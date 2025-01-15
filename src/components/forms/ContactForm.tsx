"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import Spinner from "../loaders/Spinner";

interface IContactForm {
  FullName: string;
  Email: string;
  BusinessName: string;
  PhoneNumber: string;
  Message: string;
}

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      FullName: "",
      Email: "",
      BusinessName: "",
      PhoneNumber: "",
      Message: "",
    },
    mode: "onTouched",
  });

  function generateEmailHTML(data: IContactForm) {
    const formattedMessage = data.Message.replace(/\n/g, "<br>");
    return `<div><p><strong>Namn:</strong></p><p>${data.FullName}</p><p><strong>Email:</strong></p><p><a href="mailto:${data.Email}">${data.Email}</a></p><p><strong>Telefon:</strong></p><p><a href="tel:${data.PhoneNumber}">${data.PhoneNumber}</a></p><p><strong>Företag:</strong></p><p>${data.BusinessName}</p><p><strong>Meddelande:</strong></p><p>${formattedMessage}</p></div>`;
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
          loading: "Sending message...",
          success: "Message has been sent!",
          error: "An error occured.",
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

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex flex-col gap-3"
        name="contact-form"
      >
        <input type="hidden" name="required-field" value="contact-form" />
        <div>
          <input
            className={twMerge(
              baseClasses,
              errors["FullName"] ? errorClass : "",
            )}
            type="text"
            placeholder="FullName*"
            {...register("FullName", {
              required: "FullName is required",
              minLength: {
                value: 2,
                message: "FullName must be at least 2 characters",
              },
              maxLength: {
                value: 50,
                message: "FullName can at most be 50 characters",
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
            className={twMerge(baseClasses, errors["Email"] ? errorClass : "")}
            type="email"
            placeholder="Email*"
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Email is not valid",
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
        <div className="flex gap-3">
          <div>
            <input
              type="text"
              className={baseClasses}
              placeholder="Business name"
              {...register("BusinessName", {})}
            />
            <p
              role="alert"
              className={twMerge(
                errorTextBaseClass,
                errors["BusinessName"]
                  ? errorTextVisibleClasses
                  : errorTextHiddenClasses,
              )}
            >
              {errors.BusinessName?.message}
            </p>
          </div>
          <div>
            <input
              className={twMerge(
                baseClasses,
                errors["PhoneNumber"] ? errorClass : "",
              )}
              type="tel"
              placeholder="PhoneNumber*"
              {...register("PhoneNumber", {
                onChange: (e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                },
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone number is not valid",
                },
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
                maxLength: {
                  value: 15,
                  message: "Phone number can at most be 15 digits",
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
        </div>
        <div>
          <textarea
            maxLength={500}
            placeholder="Message*"
            className={twMerge(
              "h-64 resize-none whitespace-pre-line",
              baseClasses,
              errors["Message"] ? errorClass : "",
            )}
            {...register("Message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
              maxLength: {
                value: 500,
                message: "Message can at most be 500 characters",
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
        <button
          disabled={isSubmitting || formSubmitted}
          type="submit"
          className="flex w-full items-center justify-center rounded-md bg-primary p-4 text-center text-base uppercase leading-normal tracking-[0.15em] text-background outline outline-1 transition-all duration-200 ease-in-out hover:bg-accent"
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
            "Submit"
          )}
        </button>
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
          <h6 className="text-3xl lg:text-center lg:text-2xl">Message sent</h6>
          <p className="whitespace-pre-line text-balance text-xl lg:text-center lg:text-xl">
            We&apos;ll get in touch with you as soon as possible.
          </p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="inline-block rounded-md bg-primary p-2 px-4 text-center text-xs text-background transition-all duration-200 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

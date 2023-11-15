"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import { cn } from "utils/cn";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactInfo.email.text);
    setIsEmailCopied(true);
    setTimeout(() => {
      setIsEmailCopied(false);
    }, 3000); // Reset the copied state after 3 seconds
  };

  const contactInfo: Record<string, { text: string; type?: "link" }> = {
    name: { text: "Adam M" },
    email: { text: "adamuhh.dev@gmail.com" },
    github: { text: "https://github.com/AdamUhh", type: "link" },
  };

  return (
    <div className="flex h-full w-full items-center justify-center text-white ">
      <div className="flex min-h-[50%] min-w-[50%] gap-10 2xl:my-auto 2xl:flex-col 2xl:p-6 ">
        <div className="flex w-fit flex-col rounded-xl bg-gray-700 p-6  2xl:w-full">
          <h2 className="mb-4 text-3xl font-bold">Contact Information</h2>
          <pre className="mb-2 text-green-400">
            <code className="font-jetBrains ">
              <span className="text-contactme-CLASS ">contact_info</span>
              <span className="ml-2 text-blue-500">&#123;</span>
              <br />
              {Object.entries(contactInfo).map(([key, value]) => (
                <React.Fragment key={key}>
                  <span className="text-contactme-PROPERTY ml-4">{key}:</span>{" "}
                  {value.type === "link" ? (
                    <Link href={value.text} target="_blank">
                      &apos;{value.text}&apos;
                    </Link>
                  ) : (
                    <span className="text-contactme-VALUE">
                      &apos;{value.text}&apos;
                    </span>
                  )}
                  ;
                  <br />
                </React.Fragment>
              ))}
              <span className="text-blue-500">&#125;</span>
            </code>
          </pre>
          <div
            onClick={copyEmailToClipboard}
            className="mt-auto cursor-pointer rounded-lg bg-tab p-1 px-3 text-center hover:bg-tab-ACTIVE"
          >
            <span
              className={cn(
                "text-lg hover:text-yellow-300",
                isEmailCopied && "text-green-500",
              )}
            >
              {isEmailCopied ? "Email copied to clipboard!" : "Copy Email"}
            </span>
          </div>
          <Link
            onClick={copyEmailToClipboard}
            href={"https://mail.google.com/mail"}
            target="_blank"
            className="mt-2 cursor-pointer rounded-lg bg-tab p-1 px-3 text-center hover:bg-tab-ACTIVE"
          >
            <span
              className={cn(
                "text-lg hover:text-yellow-300",
                isEmailCopied && "text-green-500",
              )}
            >
              {isEmailCopied
                ? "Email copied to clipboard!"
                : "Copy Email and Go To Gmail"}
            </span>
          </Link>
        </div>
        <ContactForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      </div>
    </div>
  );
}

function FormLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <form className="w-fit min-w-[500px] rounded-xl bg-gray-700 p-6">
      {children}
    </form>
  );
}

function ContactForm({ handleSubmit, onSubmit, register, errors }: Props) {
  return (
    <FormLayout>
      <h2 className="mb-4 text-3xl font-bold">Or Drop Me a Note</h2>
      <Field
        label="Name"
        type="text"
        id="name"
        register={register}
        errors={errors}
      />
      <Field
        label="Email"
        type="email"
        id="email"
        register={register}
        errors={errors}
      />
      <Field
        label="Message"
        type="textarea"
        id="message"
        register={register}
        errors={errors}
      />
      <button
        type="submit"
        className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
      >
        Submit
      </button>
    </FormLayout>
  );
}

interface FieldProps {
  label: string;
  type: string;
  id: "name" | "email" | "message";
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

function Field({ label, type, id, register, errors }: FieldProps) {
  return (
    <div className="mb-4">
      <label
        className="mb-2 block text-sm font-bold text-yellow-300"
        htmlFor={id}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          {...register(id, { required: `${label} is required` })}
          className="w-full rounded-md border border-gray-600 bg-gray-800 p-2"
        />
      ) : (
        <input
          type={type}
          id={id}
          {...register(id, { required: `${label} is required` })}
          className="w-full rounded-md border border-gray-600 bg-gray-800 p-2"
        />
      )}
      <p className="text-xs mt-1 text-red-500">{errors[id]?.message}</p>
    </div>
  );
}

interface Props {
  handleSubmit: UseFormHandleSubmit<FormData, undefined>;
  onSubmit: SubmitHandler<FormData>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

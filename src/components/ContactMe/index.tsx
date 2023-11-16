"use client";

import Link from "next/link";
import React, { useState } from "react";
import { cn } from "utils/cn";
import ContactForm from "./Form";

export default function ContactMe() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

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
                  <span className="ml-4 text-contactme-PROPERTY">{key}:</span>{" "}
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
        <ContactForm />
      </div>
    </div>
  );
}

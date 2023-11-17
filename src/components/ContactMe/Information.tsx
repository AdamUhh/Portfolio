"use client";

import { Fragment, MouseEvent, useState } from "react";
import { cn } from "utils/cn";
import { contactInfo, gmailUrl } from "./constants";
import Link from "next/link";

export default function ContactInformation() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const copyEmailToClipboard = async (
    event: MouseEvent<HTMLButtonElement>,
    url?: string | undefined,
  ) => {
    event.preventDefault();
    await navigator.clipboard.writeText(contactInfo.email.text);

    if (url) window.open(url, "_blank");

    setIsEmailCopied(true);
    setTimeout(() => {
      setIsEmailCopied(false);
    }, 3000);
  };

  return (
    <div className="flex w-fit flex-col rounded-xl bg-gray-700 p-6  2xl:w-full">
      <h2 className="mb-4 text-3xl font-bold">Contact Information</h2>
      <pre className="mb-2 text-green-400">
        <code className="font-jetBrains ">
          <span className="text-contactme-CLASS ">contact_info</span>
          <span className="ml-2 text-blue-500">&#123;</span>
          <br />
          {Object.entries(contactInfo).map(([key, value]) => (
            <Fragment key={key}>
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
            </Fragment>
          ))}
          <span className="text-blue-500">&#125;</span>
        </code>
      </pre>
      <button
        type="button"
        onClick={(e) => copyEmailToClipboard(e)}
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
      </button>
      <button
        type="button"
        onClick={(e) => copyEmailToClipboard(e, gmailUrl)}
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
      </button>
    </div>
  );
}

"use client";

import { mdiContentCopy } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { cn } from "utils/cn";
import { contactInfo, gmailUrl } from "./constants";

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
    <div className="flex w-fit flex-col rounded-xl border-4 border-main-FOREGROUND/20 p-6 2xl:w-full sm:p-4">
      <h2 className="text-3xl font-bold">Contact Information</h2>
      <pre className="mb-2 text-contactme-ALT-VALUE sm:text-ms">
        <code className="font-jetBrains ">
          {/* <span className="text-contactme-CLASS ">.contact_info</span> */}
          <span className=" text-blue-500">&#123;</span>
          <br />
          {Object.entries(contactInfo).map(([key, value]) => (
            <div key={key} className="sm:flex sm:flex-col">
              <span className="ml-4 text-contactme-PROPERTY">{key}:</span>{" "}
              {value.type === "link" ? (
                <Link href={value.text} target="_blank">
                  &apos;{value.text}&apos;;
                </Link>
              ) : (
                <span className="text-contactme-VALUE">
                  &apos;{value.text}&apos;;
                </span>
              )}
            </div>
          ))}
          <span className="text-blue-500">&#125;</span>
        </code>
      </pre>
      <div className="ml-auto mt-auto flex gap-2 text-ms">
        <button
          type="button"
          title="Copy Email"
          onClick={(e) => copyEmailToClipboard(e)}
          className={cn(
            "mt-auto flex w-fit cursor-pointer items-center gap-2 rounded bg-common-HOVER px-3 py-2 text-center hover:bg-common-HOVER/80",
            isEmailCopied && "bg-green-500 text-black/90 hover:bg-green-500",
          )}
          disabled={isEmailCopied}
        >
          <Icon path={mdiContentCopy} size={0.8} />
          <span>Email</span>
        </button>
        <button
          type="button"
          title="Copy Email & Redirect To Gmail"
          onClick={(e) => copyEmailToClipboard(e, gmailUrl)}
          className={cn(
            "mt-auto flex w-fit cursor-pointer items-center gap-2 rounded bg-common-HOVER px-3 py-2 text-center hover:bg-common-HOVER/80",
            isEmailCopied && "bg-green-500 text-black/90 hover:bg-green-500",
          )}
          disabled={isEmailCopied}
        >
          <Icon path={mdiContentCopy} size={0.8} />
          <span>Email & Go to Gmail</span>
        </button>
      </div>
      {/* <button
        type="button"
        onClick={(e) => copyEmailToClipboard(e)}
        className={cn(
          "bg-common-HOVER hover:bg-common-HOVER/80 mt-auto cursor-pointer rounded-lg p-1 px-3 text-center",
          isEmailCopied && "bg-green-500 text-white/90 hover:bg-green-500",
        )}
      >
        <span className="text-lg  sm:text-md">
          {isEmailCopied ? "Email copied to clipboard!" : "Copy Email"}
        </span>
      </button> */}
      {/* <button
        type="button"
        onClick={(e) => copyEmailToClipboard(e, gmailUrl)}
        className={cn(
          "bg-common-HOVER hover:bg-common-HOVER/80 mt-2 cursor-pointer rounded-lg p-1 px-3 text-center",
          isEmailCopied && "bg-green-500 text-white/90 hover:bg-green-500",
        )}
      >
        <span className="text-lg  sm:text-md">
          {isEmailCopied
            ? "Email copied to clipboard!"
            : "Copy Email and Go To Gmail"}
        </span>
      </button> */}
    </div>
  );
}

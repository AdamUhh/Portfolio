"use client";

import { mdiAlertCircle } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import FormButton from "./FormButton";
import sendEmail from "./action";
import { FormLayoutProps } from "./types";

export default function FormLayout({ children }: FormLayoutProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, onFormSubmit] = useFormState(sendEmail, {
    status: "default",
    returnMessage: "",
  } as {
    status: "default" | "true" | "false";
    returnMessage: string;
  });

  useEffect(() => {
    if (formState.status === "true") {
      formRef.current?.reset();
    }
  }, [formState.status]);

  return (
    <form
      className="w-full min-w-[500px] rounded-xl border-4 border-main-FOREGROUND/20 p-6 sm:min-w-fit sm:p-4"
      ref={formRef}
      action={onFormSubmit}
    >
      <fieldset
        disabled={formState.status === "true"}
        style={formState.status === "true" ? { display: "none" } : {}}
      >
        {children}
      </fieldset>
      <FormButton isSuccessful={formState.status === "true"} />
      {formState.status === "false" && (
        <div className="mt-2 flex items-center gap-1">
          <Icon path={mdiAlertCircle} size={0.8} color={"#ff0000"} />
          <p className="text-red-500">
            {formState.returnMessage || "Failed to send email"}
          </p>
        </div>
      )}
    </form>
  );
}

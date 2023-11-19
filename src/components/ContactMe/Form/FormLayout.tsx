"use client";

import { mdiAlertCircle } from "@mdi/js";
import Icon from "@mdi/react";
import { useFormState, useFormStatus } from "react-dom";
import sendEmail from "./action";
import { FormLayoutProps, T_formState } from "./types";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="mt-4 w-full rounded-md bg-blue-600/80 p-2 font-semibold text-white hover:bg-blue-500"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? "Submitting" : "Submit"}
    </button>
  );
}

export default function FormLayout({ children }: FormLayoutProps) {
  const [formState, formAction] = useFormState(sendEmail, null);

  return (
    <form
      className="w-full min-w-[500px] rounded-xl border-4 border-main-FOREGROUND/20 p-6 sm:min-w-fit"
      action={formAction}
    >
      {children}
      <FormButton />
      {formState !== null && (formState as unknown as T_formState)?.success && (
        <p>{(formState as unknown as T_formState)?.message || "Email Sent!"}</p>
      )}
      {formState !== null &&
        (formState as unknown as T_formState)?.success === false && (
          <div className="mt-2 flex items-center gap-1">
            <Icon path={mdiAlertCircle} size={0.8} color={"#ff0000"} />
            <p className="text-red-500">
              {(formState as unknown as T_formState)?.message ||
                "Failed to send email"}
            </p>
          </div>
        )}
    </form>
  );
}

"use client";

import { mdiAlertCircle } from "@mdi/js";
import Icon from "@mdi/react";
import { ReactNode } from "react";
import { useFormState, useFormStatus } from "react-dom";
import sendEmail from "./action";

interface FormLayoutProps {
  children: ReactNode;
}

interface FieldProps {
  label: string;
  type: string;
  id: any;
}

interface T_formState {
  success?: boolean;
  message?: string;
}

export function Field({ label, type, id }: FieldProps) {
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
          name={id}
          className="w-full rounded-md border border-gray-600 bg-gray-800 p-2"
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          className="w-full rounded-md border border-gray-600 bg-gray-800 p-2"
          required
        />
      )}
    </div>
  );
}

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
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
      className="w-full min-w-[500px] rounded-xl bg-gray-700 p-6"
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

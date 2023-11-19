import { mdiCheck, mdiLoading } from "@mdi/js";
import Icon from "@mdi/react";
import { useFormStatus } from "react-dom";
import { cn } from "utils/cn";
import { FormButtonProps } from "./types";

export default function FormButton({ isSuccessful }: FormButtonProps) {
  const { pending } = useFormStatus();

  const commonClassNames =
    "mt-4 flex w-full items-center justify-center gap-2 rounded-md p-2 font-semibold text-white";

  if (isSuccessful)
    return (
      <button
        type="submit"
        className={cn("bg-green-700", commonClassNames)}
        aria-disabled={true}
        disabled={true}
      >
        <Icon path={mdiCheck} size={1} />
        Email Sent!
      </button>
    );

  return (
    <button
      type="submit"
      className={cn("bg-blue-600/80  hover:bg-blue-500", commonClassNames)}
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? (
        <>
          <Icon path={mdiLoading} size={1} className="animate-spin"></Icon>
          <span>Submitting...</span>
        </>
      ) : (
        "Submit"
      )}
    </button>
  );
}

import Link from "next/link";
import { cn } from "utils/cn";
import { ActionButtonsProps } from "./types";

export default function ActionButtons({
  isExtra,
  sourceCodeUrl,
  viewDemoUrl,
  handleReadMore,
  showReadMore,
}: ActionButtonsProps) {
  const commonClassNames =
    "mt-auto h-fit sm:h-full w-fit font-medium tracking-wide cursor-pointer rounded border-2 border-sky-600 px-2 py-1";

  return (
    <div className="flex flex-grow items-center gap-2 text-ms font-bold sm:text-sm">
      {isExtra && (
        <button
          type="button"
          className={cn("hover:bg-sky-600", commonClassNames)}
          onClick={handleReadMore}
        >
          {showReadMore ? "Hide" : "Read More..."}
        </button>
      )}
      {sourceCodeUrl && (
        <Link
          href={sourceCodeUrl}
          target="_blank"
          className={cn("hover:bg-sky-600", commonClassNames)}
        >
          View Source Code
        </Link>
      )}
      {viewDemoUrl && (
        <Link
          href={viewDemoUrl}
          target="_blank"
          className={cn("hover:bg-sky-600", commonClassNames)}
        >
          View Live Site
        </Link>
      )}
    </div>
  );
}

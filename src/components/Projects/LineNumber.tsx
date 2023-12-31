import React from "react";
import { cn } from "utils/cn";
import { NumberedListProps } from "./types";

export default function NumberedList({ children }: NumberedListProps) {
  return (
    <div className="flex h-full w-full py-3">
      <div className="flex h-full w-full flex-col gap-1 pr-4 sm:pr-2">
        {React.Children.map(children, (child, index) => (
          <div className="relative flex items-center gap-6 text-lg sm:gap-4">
            <div
              className={cn(
                "min-w-[50px] sm:min-w-[20px] text-right font-medium text-main-FOREGROUND/30",
                index === 1 && "mb-5",
              )}
            >
              {index + 1}
            </div>
            <div className="flex h-full w-full flex-grow flex-col">{child}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

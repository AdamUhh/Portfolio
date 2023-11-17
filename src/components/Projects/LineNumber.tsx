import React from "react";
import { NumberedListProps } from "./types";

export default function NumberedList({ children }: NumberedListProps) {
  return (
    <div className="flex h-full w-full py-3">
      <div className="flex h-full w-full flex-col gap-1 pr-4">
        {React.Children.map(children, (child, index) => (
          <div className="relative flex items-center gap-6 text-lg">
            <div className="min-w-[50px] text-right font-medium text-faded">
              {index + 1}
            </div>
            <div className="flex h-full w-full flex-grow flex-col">{child}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

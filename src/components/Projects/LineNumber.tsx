// NumberedList.tsx

import React from "react";

interface NumberedListProps {
  children: React.ReactNode;
}

export default function NumberedList({ children }: NumberedListProps) {
  return (
    <div className="flex w-full h-full py-3">
      <div className="flex flex-col gap-1 pr-4 w-full h-full">
        {React.Children.map(children, (child, index) => (
          <div className="flex items-center gap-6 text-lg relative">
            <div className="min-w-[50px] text-right font-medium text-faded">
              {index + 1}
            </div>
            <div className="flex flex-grow flex-col w-full h-full">{child}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// NumberedList.tsx

import React from "react";

interface NumberedListProps {
  children: React.ReactNode;
}

const NumberedList: React.FC<NumberedListProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex flex-shrink-0 flex-col pr-4">
        {React.Children.map(children, (child, index) => (
          <div className="mb-2 text-right">{index + 1}</div>
        ))}
        <div className="flex flex-grow flex-col">{children}</div>
      </div>
    </div>
  );
};

export default NumberedList;

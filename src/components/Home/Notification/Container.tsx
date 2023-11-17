"use client";

import { ReactNode, useRef } from "react";
import Draggable from "react-draggable";
import { cn } from "utils/cn";

interface NotificationContainerProps {
  isOpen: boolean;
  children: ReactNode;
}

export default function NotificationContainer({
  isOpen,
  children,
}: NotificationContainerProps) {
  const nodeRef = useRef(null);

  return (
    <Draggable handle=".draggable-handle" nodeRef={nodeRef}>
      <div
        className={cn(
          "left-[30%] top-[25%] h-fit min-h-[250px] w-[40%] min-w-[300px] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-2xl  bg-gradient-to-r  from-[#e0edf8] to-[#d6deef] shadow-lg shadow-black ",
          isOpen ? "fixed" : "hidden",
        )}
        ref={nodeRef}
      >
        {children}
      </div>
    </Draggable>
  );
}

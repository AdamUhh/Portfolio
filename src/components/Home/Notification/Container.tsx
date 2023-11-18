"use client";

import { useRef } from "react";
import Draggable from "react-draggable";
import { cn } from "utils/cn";
import { NotificationContainerProps } from "./types";

export default function NotificationContainer({
  isOpen,
  children,
}: NotificationContainerProps) {
  const nodeRef = useRef(null);

  return (
    <Draggable handle=".draggable-handle" nodeRef={nodeRef}>
      <div
        className={cn(
          "left-[35%] top-[15%] h-fit min-h-[250px] w-[40%] min-w-[300px] max-w-[500px]  rounded-2xl bg-gradient-to-r from-[#e0edf8] to-[#d6deef]  shadow-lg  shadow-black sm:left-[5%] lg:w-[60%]",
          isOpen ? "fixed" : "hidden",
        )}
        ref={nodeRef}
      >
        {children}
      </div>
    </Draggable>
  );
}

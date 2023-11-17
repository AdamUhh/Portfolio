"use client";

import { useRef } from "react";
import Draggable from "react-draggable";
import { cn } from "utils/cn";
import { HomeTerminalContainerProps } from "./types";

export default function HomeTerminalContainer({
  isOpen,
  children,
}: HomeTerminalContainerProps) {
  const nodeRef = useRef(null);

  return (
    <Draggable handle=".draggable-handle" nodeRef={nodeRef}>
      <div
        className={cn(
          "left-[30%] top-[20%] h-[60%] min-h-[300px] w-[40%] min-w-[300px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-[#151515] shadow-[0_0_10px_2px_rgba(0,0,0,1)] ",
          isOpen ? "fixed" : "hidden",
        )}
        ref={nodeRef}
      >
        {children}
      </div>
    </Draggable>
  );
}

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
    <Draggable handle=".draggable_handle" nodeRef={nodeRef}>
      <div
        className={cn(
          "left-[35%] top-[8%] h-[60%] min-h-[300px] w-[40%] min-w-[300px] max-w-[500px] rounded-2xl bg-[#151515] shadow-[0_0_2px] shadow-white lg:w-[60%] sm:left-[5%] ",
          isOpen ? "fixed" : "hidden",
        )}
        ref={nodeRef}
      >
        {children}
      </div>
    </Draggable>
  );
}

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
    <Draggable handle=".draggable_handle" nodeRef={nodeRef}>
      <div
        className={cn(
          "left-[35%] top-[15%] h-fit min-h-[200px] w-[40%] min-w-[300px] max-w-[500px] rounded-lg  bg-gradient-to-r from-[#e9f4ff] to-[#d6deef] shadow-lg  shadow-black lg:w-[60%] sm:left-[5%] sm:min-h-[200px]",
          isOpen ? "fixed" : "hidden",
        )}
        // className={cn(
        //   "left-[35%] top-[15%] h-fit min-h-[250px] sm:min-h-[350px] w-[40%] min-w-[300px] max-w-[500px]  rounded-2xl bg-gradient-to-r from-[#e0edf8] to-[#d6deef]  shadow-lg shadow-black lg:w-[60%] sm:left-[5%]",
        //   isOpen ? "fixed" : "hidden",
        // )}
        ref={nodeRef}
      >
        {children}
      </div>
    </Draggable>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";
import { handleCommand } from "./commandHandler";
import { TerminalProps } from "./types";

export default function Terminal({ isTerminalOpen }: TerminalProps) {
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const terminalContainerRef = useRef<HTMLDivElement>(null);

  const handleTerminalClick = (): void => {
    const selection = window.getSelection();

    // ? Prevent onclick from running when text is selected inside terminal
    if (
      selection?.anchorNode &&
      !selection.toString() &&
      terminalContainerRef.current?.contains(selection.anchorNode.parentElement)
    ) {
      inputRef.current?.focus();
    }
  };

  const handleCommandWrapper = (command: string): void => {
    const result = handleCommand(command);
    if (result === "") setOutput([]);
    else setOutput((prevOutput) => [...prevOutput, result]);
  };

  useEffect(() => {
    if (inputRef.current && isTerminalOpen) {
      inputRef.current.focus();
    }
  }, [isTerminalOpen]);

  return (
    <div
      ref={terminalContainerRef}
      className="h-full"
      onClick={handleTerminalClick}
    >
      <TerminalOutput output={output} />
      <TerminalInput inputRef={inputRef} onEnter={handleCommandWrapper} />
    </div>
  );
}

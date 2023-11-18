import { RefObject } from "react";

interface TerminalInputProps {
  onEnter: (command: string) => void;
  inputRef: RefObject<HTMLInputElement>;
}

interface TerminalOutputProps {
  output: string[];
}

interface TerminalProps {
  isTerminalOpen: boolean;
}

export type { TerminalInputProps, TerminalOutputProps, TerminalProps };


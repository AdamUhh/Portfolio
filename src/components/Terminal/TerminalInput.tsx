import { KeyboardEvent } from "react";
import { TerminalInputProps } from "./types";

export default function TerminalInput({
  inputRef,
  onEnter,
}: TerminalInputProps) {
  const handleInputChange = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      onEnter(e.currentTarget.value);
      e.currentTarget.value = "";
    }
  };

  return (
    <div className="flex items-center">
      <span className="pb-5">►</span>
      <input
        ref={inputRef}
        className="w-full bg-transparent pl-2 pb-5 text-white outline-none sm:whitespace-pre-wrap"
        type="text"
        placeholder="Type help for a list of commands..."
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleInputChange(e)}
      />
    </div>
  );
}

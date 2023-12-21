import { ChangeEvent, KeyboardEvent, useState } from "react";
import { TerminalInputProps } from "./types";
import { cn } from "utils/cn";

export default function TerminalInput({
  inputRef,
  onEnter,
}: TerminalInputProps) {
  const [inputText, setInputText] = useState("");
  const [focused, setFocused] = useState(false);

  const handleInputEnter = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      onEnter(e.currentTarget.value);
      e.currentTarget.value = "";
      setInputText("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  return (
    <div className="mt-1 flex items-center">
      <span className="">►</span>
      <span className=" pl-2">
        {!!inputText.length ? inputText : <span className="opacity-75">Type help for a list of commands...</span>}
      </span>
      <div
        className={cn(
          "mb-auto h-5 w-1.5 ",
          focused && "animate-blink bg-white",
        )}
      />
      <input
        ref={inputRef}
        className="absolute w-full bg-transparent  pl-2 opacity-0 outline-none sm:whitespace-pre-wrap"
        type="text"
        autoComplete="off"
        placeholder="Type help for a list of commands..."
        onChange={handleInputChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleInputEnter(e)}
      />
    </div>
  );
}

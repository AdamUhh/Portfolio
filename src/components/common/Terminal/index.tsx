"use client";

import { KeyboardEvent, useEffect, useRef, useState } from "react";

export default function Terminal({isTerminalOpen}: {isTerminalOpen: boolean}) {
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (command: string): void => {
    let result: string;

    const commandOutput = `► ${command}`;

    switch (command.split(" ")[0]) {
      case "help":
        result =
          "List of commands:\n- help\n- echo [message]\n- clear\n- date\n- greet [name]";
        break;
      case "echo":
        const [, message] = command.split(" ");
        result = message ? `Echo: ${message}` : "Usage: echo [message]";
        break;
      case "clear":
        setOutput([]);
        result = "";
        break;
      case "date":
        result = new Date().toLocaleString();
        break;
      case "greet":
        const [, name] = command.split(" ");
        result = name ? `Hello, ${name}!` : "Usage: greet [name]";
        break;
      default:
        result = `Unknown command: ${command}`;
    }

    setOutput((prevOutput) => [...prevOutput, commandOutput, result]);
  };

  useEffect(() => {
    // Scroll to the input when it overflows
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [output]);

  useEffect(() => {
    // Scroll to the input when it overflows
    if (inputRef.current && isTerminalOpen) {
      inputRef.current.focus();
    }
  }, [isTerminalOpen]);

  const handleInputChange = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleCommand(e.currentTarget.value);
      e.currentTarget.value = "";
    }
  };



  const handleTerminalClick = (): void => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="h-full" onClick={handleTerminalClick}>
      <div className="whitespace-pre-line text-white">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div className="flex items-center">
        ►
        <input
          ref={inputRef}
          className="w-full bg-transparent p-1 text-white outline-none"
          type="text"
          placeholder="Type help for a list of commands..."
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
            handleInputChange(e)
          }
        />
      </div>
    </div>
  );
}
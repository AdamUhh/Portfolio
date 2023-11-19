import { TerminalOutputProps } from "./types";

export default function TerminalOutput({ output }: TerminalOutputProps) {
  return (
    <div className="whitespace-pre-line pt-2">
      {output.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
}

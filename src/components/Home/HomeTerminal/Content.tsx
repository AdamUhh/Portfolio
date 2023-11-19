import Terminal from "components/Terminal";
import { HomeTerminalContentProps } from "./types";

export default function HomeTerminalContent({
  isOpen,
}: HomeTerminalContentProps) {
  return (
    <div className="h-[calc(100%-40px)] sm:text-ms sm:whitespace-pre-wrap overflow-y-auto overflow-x-hidden px-4 py-2 text-white/90">
      <Terminal isTerminalOpen={isOpen} />
    </div>
  );
}

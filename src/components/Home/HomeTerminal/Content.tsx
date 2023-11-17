import Terminal from "components/common/Terminal";
import { HomeTerminalContentProps } from "./types";

export default function HomeTerminalContent({
  isOpen,
}: HomeTerminalContentProps) {
  return (
    <div className="h-[calc(100%-40px)] overflow-y-auto overflow-x-hidden px-4 py-2">
      <Terminal isTerminalOpen={isOpen} />
    </div>
  );
}

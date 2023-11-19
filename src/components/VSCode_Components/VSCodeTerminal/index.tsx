import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import Terminal from "components/Terminal";
import { cn } from "utils/cn";
import { I_Terminal } from "./types";

export default function VSCodeTerminal({
  showTerminal,
  setShowTerminal,
}: I_Terminal) {
  return (
    <div
      className={cn(
        "bottom-6 right-0 z-50 h-[40%] w-[calc(100vw-50px-256px)] border-l-2 border-t-2 border-l-accent border-t-accent bg-terminal px-4 py-3 lg:w-[calc(100vw-50px)]",
        showTerminal ? "fixed" : "hidden",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="w-fit border-b-2 border-b-accent pb-1 text-sm">
          TERMINAL
        </div>
        <button
          type="button"
          className="hover:bg-common-HOVER"
          onClick={() => setShowTerminal(false)}
        >
          <Icon path={mdiClose} size={1} />
        </button>
      </div>
      <div className="h-[calc(100%-20px)] w-full overflow-auto py-2 text-main-FOREGROUND/90">
        <Terminal isTerminalOpen={showTerminal} />
      </div>
    </div>
  );
}

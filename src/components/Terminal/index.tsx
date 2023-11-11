import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { cn } from "utils/cn";

export interface I_Terminal {
  showTerminal: boolean;
  setShowTerminal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Terminal({
  showTerminal,
  setShowTerminal,
}: I_Terminal) {
  return (
    <div
      className={cn(
        "terminal-placement bg-terminal px-4 py-3",
        showTerminal ? "fixed" : "hidden",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="w-fit border-b-2 border-b-accent pb-1 text-sm">
          TERMINAL
        </div>
        <button
          type="button"
          className="hover:bg-tab-ACTIVE"
          onClick={() => setShowTerminal(false)}
        >
          <Icon path={mdiClose} size={1} />
        </button>
      </div>
      <div className="h-[calc(100%-20px)] w-full overflow-auto py-2">
        Terminal
      </div>
    </div>
  );
}

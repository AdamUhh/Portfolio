import Icon from "@mdi/react";
import { ActionButtonItemProps } from "./types";
import { cn } from "utils/cn";

export default function ActionButtonItem({
  title,
  icon,
  isActive,
  setShowTerminal,
}: ActionButtonItemProps) {
  return (
    <button
      type="button"
      title={title}
      onClick={() =>
        setShowTerminal && setShowTerminal((prev: boolean) => !prev)
      }
    >
      <Icon
        path={icon}
        size={2.3}
        className={cn(
          "cursor-pointer px-3 brightness-75 hover:bg-actionbar-HOVER hover:brightness-105",
          isActive ? "actionbar-border brightness-100" : "",
        )}
      />
    </button>
  );
}

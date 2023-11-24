import Icon from "@mdi/react";
import { cn } from "utils/cn";
import { ThemeOptionProps } from "./types";

export default function ThemeOption({
  theme,
  onClick,
  isActive,
}: ThemeOptionProps) {
  return (
    <button
      type="button"
      className="flex min-h-[200px] min-w-[250px] cursor-pointer flex-col items-center justify-evenly rounded-md bg-accent/10 p-5 shadow shadow-accent/70 hover:bg-accent/5 "
      onClick={onClick}
    >
      <Icon path={theme.icon} size={3} color={theme.color} />
      <span className="text-lg">{theme.name}</span>
      <div
        className={cn(
          "rounded px-5 py-0.5 text-ms text-main",
          isActive
            ? "bg-green-700 text-white/90 hover:bg-green-600"
            : "bg-main-FOREGROUND/80 hover:bg-main-FOREGROUND",
        )}
      >
        {isActive ? "Current Theme" : "Set Theme"}
      </div>
    </button>
  );
}

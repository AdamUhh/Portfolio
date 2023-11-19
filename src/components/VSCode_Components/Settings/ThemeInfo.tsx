import Icon from "@mdi/react";
import { cn } from "utils/cn";
import { ThemeOptionProps } from "./types";

export default function ThemeOption({
  theme,
  onClick,
  isActive,
}: ThemeOptionProps) {
  return (
    <div
      className="flex min-h-[200px] min-w-[250px] cursor-pointer flex-col items-center justify-evenly rounded-md bg-main-FOREGROUND/10 p-5 shadow-md shadow-black"
      onClick={onClick}
    >
      <Icon path={theme.icon} size={3} color={theme.color} />
      <span className="text-lg">{theme.name}</span>
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "rounded px-5 py-0.5 text-ms text-main",
          isActive
            ? "bg-green-700 text-white/90 hover:bg-green-600"
            : "bg-main-FOREGROUND hover:bg-main-FOREGROUND/70",
        )}
      >
        {isActive ? "Current Theme" : "Set Theme"}
      </button>
    </div>
  );
}

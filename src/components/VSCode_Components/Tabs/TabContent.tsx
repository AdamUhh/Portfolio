import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";
import { cn } from "utils/cn";
import { getColorFromFileExt, getIconFromFileExt } from "utils/getFromExt";
import { TabContentProps } from "./types";

export default function TabContent({
  isActive,
  name,
  handleClick,
}: TabContentProps) {
  return (
    <>
      <div className="flex items-center gap-1">
        <Icon
          path={getIconFromFileExt(name)}
          size={1}
          color={getColorFromFileExt(name)}
        />
        <span>{name}</span>
      </div>
      <button
        className={cn(
          "rounded-md p-1 brightness-75 hover:bg-tab/70 hover:brightness-100 group-hover:visible",
          isActive ? "visible" : "invisible",
        )}
        title="Decorative close icon :D"
        onMouseDown={(e) => {
          if (e.button === 1) {
            e.preventDefault();
            if (handleClick) handleClick();
          }
        }}
        onClick={handleClick}
      >
        <Icon path={mdiWindowClose} size={0.8} />
      </button>
    </>
  );
}

import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "utils/cn";
import { getColorFromFileExt, getIconFromFileExt } from "utils/getFromExt";
import { TabProps } from "./types";

export default function Tab({ isActive, route, name }: TabProps) {
  const activeTabRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (activeTabRef.current && isActive) {
      activeTabRef.current.scrollIntoView();
    }
  }, [isActive]);

  return (
    <Link
      href={route}
      className={cn(
        "group flex h-[45px] w-fit min-w-[180px] items-center justify-between gap-4 border-b-2 border-b-transparent px-2 py-2 hover:bg-common-HOVER",
        isActive ? "border-b-accent bg-common-HOVER/80" : "bg-tab",
      )}
      title={name}
      ref={activeTabRef}
    >
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
      >
        <Icon path={mdiWindowClose} size={0.8} />
      </button>
    </Link>
  );
}

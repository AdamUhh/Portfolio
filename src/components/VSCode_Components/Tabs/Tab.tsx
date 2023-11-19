import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { cn } from "utils/cn";
import { getColorFromFileExt, getIconFromFileExt } from "utils/getFromExt";
import { TabProps } from "./types";

export default function Tab({ pathname, route, name }: TabProps) {
  return (
    <Link
      href={route}
      className={cn(
        "hover:bg-common-HOVER group flex h-[45px] w-fit min-w-[180px] items-center justify-between gap-4 px-2 py-2 border-b-2 border-b-transparent",
        route === pathname
          ? "bg-common-HOVER/80 border-b-accent"
          : "bg-tab",
      )}
      title={name}
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
          "hover:bg-tab/70 rounded-md p-1 brightness-75 hover:brightness-100 group-hover:visible",
          route === pathname ? "visible" : "invisible",
        )}
        title="Decorative close icon :D"
      >
        <Icon path={mdiWindowClose} size={0.8} />
      </button>
    </Link>
  );
}

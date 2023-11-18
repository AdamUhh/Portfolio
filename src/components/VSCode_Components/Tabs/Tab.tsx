import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { getColorFromFileExt, getIconFromFileExt } from "utils/getFromExt";
import { TabProps } from "./types";

export default function Tab({ pathname, route, name }: TabProps) {
  return (
    <Link
      href={route}
      className={`group flex h-[45px] w-fit min-w-[180px] items-center justify-between gap-4 bg-tab px-2 py-2 hover:bg-tab-ACTIVE
          ${route === pathname ? "tab-active bg-tab-ACTIVE" : ""}`}
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
        className={`rounded-md p-1 brightness-75 hover:bg-explorer-HOVER hover:brightness-100 group-hover:visible
            ${route === pathname ? "visible" : "invisible"}`}
        title="Decorative close icon :D"
      >
        <Icon path={mdiWindowClose} size={0.8} />
      </button>
    </Link>
  );
}

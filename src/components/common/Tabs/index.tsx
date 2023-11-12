"use client";

import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getColorFromFileExt, getIconFromFileExt } from "utils/getFromExt";
import { explorerList } from "utils/lists";

interface TabProps {
  route: string;
  name: string;
}

function Tab({ route, name }: TabProps) {
  const pathname = usePathname();

  return (
    <Link
      href={route}
      className={`group flex h-full min-w-[115px] items-center justify-between gap-4 bg-tab px-2 hover:bg-tab-ACTIVE
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

export default function Tabs() {
  const pathname = usePathname();

  return (
    <>
      <div className="titlebar-height no-scrollbar text-xs flex overflow-auto bg-tab">
        {explorerList
          .filter((t) => !t.hideInTabs)
          .map((t) => (
            <Tab key={t.route} route={t.route} name={t.name} />
          ))}
        {pathname === "/settings" && (
          <Tab key="/settings" route="/settings" name="settings.json" />
        )}
      </div>
    </>
  );
}

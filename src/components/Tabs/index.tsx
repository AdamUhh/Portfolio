// Assuming types for explorerList, usePathname, getColorFromFileExt, and getIconFromFileExt are defined

import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getColorFromFileExt, getIconFromFileExt } from "utils/getFromExt";
import { explorerList } from "utils/pageLists";

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
        {explorerList.map((t) => (
          <Tab key={t.route} route={t.route} name={t.name} />
        ))}
        {pathname === "/settings" && (
          <Tab key="/settings" route="/settings" name="settings.json" />
        )}
      </div>
      {/* <Breadcrumbs /> */}
    </>
  );
}

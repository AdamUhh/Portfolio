import React, { useState } from "react";
import { mdiChevronDown, mdiDotsHorizontal } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "utils/cn";
import Projects from "./projects";
import { getColorFromFileExt, getIconFromFileExt } from "utils/getFromExt";
import { explorerList } from "utils/pageLists";

interface ExplorerItemProps {
  route: string;
  name: string;
  isActive?: boolean;
}

function ExplorerItem({ route, name, isActive }: ExplorerItemProps) {
  return (
    <Link href={route} key={name}>
      <div
        className={cn(
          "mb-1 flex items-center gap-1 px-2 py-[1px] hover:bg-explorer-HOVER",
          isActive ? "bg-explorer-HOVER" : "",
        )}
      >
        <Icon
          path={getIconFromFileExt(name)}
          size={1}
          color={getColorFromFileExt(name)}
        />
        <span>{name}</span>
      </div>
    </Link>
  );
}

export default function Explorer() {
  const pathname = usePathname();
  const [showFolder, setShowFolder] = useState<boolean>(true);

  return (
    <div className="w-64 bg-explorer pt-2">
      <div className="flex items-center justify-between pl-6 pr-4 text-sm">
        <h4 className="tracking-tight brightness-75">EXPLORER</h4>
        <button className="rounded-md p-1 brightness-75 hover:bg-explorer-HOVER hover:brightness-100">
          <Icon path={mdiDotsHorizontal} size={0.9} />
        </button>
      </div>
      <button
        className="flex items-center pb-1 pr-2 pt-3 text-sm font-semibold tracking-wide"
        onClick={() => setShowFolder((prev) => !prev)}
      >
        <Icon
          path={mdiChevronDown}
          size={1}
          className={showFolder ? "" : "-rotate-90"}
        />
        VSCODE-PORTFOLIO
      </button>
      <div className={cn("text-ms", showFolder ? "" : "hidden")}>
        {explorerList.map((e) => (
          <ExplorerItem key={e.name} isActive={e.route === pathname} {...e} />
        ))}
        <Projects />
      </div>
    </div>
  );
}

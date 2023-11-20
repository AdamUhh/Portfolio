"use client";

import { mdiChevronDown, mdiDotsHorizontal } from "@mdi/js";
import Icon from "@mdi/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "utils/cn";
import { explorerList } from "utils/lists";
import ExplorerItem from "./Item";
import Projects from "./projects";

export default function Explorer() {
  const pathname = usePathname();
  const [showFolder, setShowFolder] = useState<boolean>(true);

  return (
    <div className=" w-64 min-w-[256px] bg-explorer pt-2 lg:hidden ">
      <div className="flex items-center justify-between pl-6 pr-4 text-sm">
        <h4 className="tracking-tight brightness-75">EXPLORER</h4>
        <button className="rounded-md p-1 brightness-75 hover:bg-common-HOVER hover:brightness-100">
          <Icon path={mdiDotsHorizontal} size={0.9} />
        </button>
      </div>
      <button
        className="flex items-center pb-1 pr-2 pt-3 text-sm font-bold tracking-wide"
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

"use client";

import { mdiChevronDown, mdiFolder, mdiFolderOpen } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "utils/cn";
import { getColorFromFileExt, getIconFromFileExt } from "utils/getFromExt";
import { projectExplorerList } from "utils/lists";
import { ProjectProps } from "./types";

function ProjectLink({ route, name, isActive, isProjectUrl }: ProjectProps) {
  return (
    <Link
      href={`/projects${route}`}
      key={name}
      scroll={isProjectUrl ? true : false}
    >
      <div
        className={cn(
          "mb-1  flex items-center gap-1 px-2 py-[1px] hover:bg-explorer-HOVER",
          isActive ? "bg-explorer-HOVER" : "",
        )}
      >
        <Icon
          path={getIconFromFileExt(name)}
          size={1}
          color={getColorFromFileExt(name)}
          className="ml-6"
        />
        <span>{name}</span>
      </div>
    </Link>
  );
}

export default function Projects() {
  const pathname = usePathname();
  const params = useParams();

  const [showFolder, setShowFolder] = useState<boolean>(true);
  const [urlHash, setUrlHash] = useState<string>("");

  useEffect(() => {
    setUrlHash(window.location.hash);
  }, [params]);

  return (
    <div className="mt-4 flex flex-col gap-1">
      <button
        className="flex w-full items-center text-sm font-semibold tracking-wide hover:bg-explorer-HOVER"
        onClick={() => setShowFolder((prev) => !prev)}
      >
        <Icon
          path={mdiChevronDown}
          size={1}
          className={showFolder ? "" : "-rotate-90"}
        />
        <Icon
          path={showFolder ? mdiFolderOpen : mdiFolder}
          size={0.9}
          color={"#F7C427"}
        />
        <span className="ml-1">Projects</span>
      </button>
      <div className={cn("", showFolder ? "block" : "hidden")}>
        {projectExplorerList.map((e) => (
          <ProjectLink
            key={e.name}
            isActive={urlHash === e.route}
            isProjectUrl={pathname === "/projects"}
            {...e}
          />
        ))}
      </div>
    </div>
  );
}

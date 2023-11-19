import Icon from "@mdi/react";
import Link from "next/link";
import { cn } from "utils/cn";
import { getColorFromFileExt, getIconFromFileExt } from "utils/getFromExt";
import { ExplorerItemProps } from "./types";

export default function ExplorerItem({
  route,
  name,
  isActive,
}: ExplorerItemProps) {
  return (
    <Link href={route} key={name} title={name}>
      <div
        className={cn(
          "mb-[1px] flex items-center gap-1 px-2 py-[1px] hover:bg-common-HOVER",
          isActive ? "bg-common-HOVER" : "",
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

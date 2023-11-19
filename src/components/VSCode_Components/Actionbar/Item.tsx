import Icon from "@mdi/react";
import Link from "next/link";
import { cn } from "utils/cn";
import { ActionItemProps } from "./types";

export default function ActionItem({
  route,
  title,
  icon,
  external,
  isActive,
}: ActionItemProps) {
  return (
    <Link href={route} target={external ? "_blank" : "_self"} title={title}>
      <Icon
        path={icon}
        size={2.3}
        className={cn(
          "cursor-pointer px-3 brightness-75 hover:bg-common-HOVER hover:brightness-105",
          isActive ? "actionbar-active-shadow brightness-100" : "",
        )}
      />
    </Link>
  );
}

import Icon from "@mdi/react";
import Link from "next/link";
import { cn } from "utils/cn";
import { ActionButtonItemProps, ActionItemProps } from "./types";

function ActionItem({
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

function ActionButtonItem({
  title,
  icon,
  isActive,
  setShowTerminal,
}: ActionButtonItemProps) {
  return (
    <button
      type="button"
      title={title}
      onClick={() =>
        setShowTerminal && setShowTerminal((prev: boolean) => !prev)
      }
    >
      <Icon
        path={icon}
        size={2.3}
        className={cn(
          "cursor-pointer px-3 brightness-75 hover:bg-common-HOVER hover:brightness-105",
          isActive ? "actionbar-active-shadow brightness-100" : "",
        )}
      />
    </button>
  );
}

export { ActionButtonItem, ActionItem };

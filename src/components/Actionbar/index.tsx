import React from "react";
import Icon from "@mdi/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "utils/cn";
import { actionbarList, actionbarBottomList } from "utils/pageLists";
import { I_Terminal } from "components/Terminal";

interface ActionItemProps {
  route: string;
  title: string;
  icon: string;
  external?: boolean;
  isActive?: boolean;
  setShowTerminal?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ActionButtonItem({
  title,
  icon,
  isActive,
  setShowTerminal,
}: ActionItemProps) {
  return (
    <button
      type="button"
      onClick={() =>
        setShowTerminal && setShowTerminal((prev: boolean) => !prev)
      }
    >
      <Icon
        title={title}
        path={icon}
        size={2.3}
        className={cn(
          "cursor-pointer px-3 brightness-75 hover:bg-actionbar-HOVER hover:brightness-105",
          isActive ? "actionbar-border brightness-100" : "",
        )}
      />
    </button>
  );
}

function ActionItem({
  route,
  title,
  icon,
  external,
  isActive,
}: ActionItemProps) {
  return (
    <Link href={route} target={external ? "_blank" : "_self"}>
      <Icon
        title={title}
        path={icon}
        size={2.3}
        className={cn(
          "cursor-pointer px-3 brightness-75 hover:bg-actionbar-HOVER hover:brightness-105",
          isActive ? "actionbar-border brightness-100" : "",
        )}
      />
    </Link>
  );
}

export default function Actionbar({
  showTerminal,
  setShowTerminal,
}: I_Terminal) {
  const pathname = usePathname();

  return (
    <div className="middle-height flex flex-col items-center bg-actionbar">
      {actionbarList.map((a) => (
        <ActionItem key={a.route} isActive={pathname === a.route} {...a} />
      ))}
      <div className="mt-auto">
        {actionbarBottomList.map((a) =>
          a.title === "Terminal" ? (
            <ActionButtonItem
              key={a.route}
              isActive={showTerminal}
              {...a}
              setShowTerminal={setShowTerminal}
            />
          ) : (
            <ActionItem
              key={a.route}
              isActive={pathname === a.route}
              {...a}
              setShowTerminal={setShowTerminal}
            />
          ),
        )}
      </div>
    </div>
  );
}

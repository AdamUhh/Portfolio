"use client";

import { usePathname } from "next/navigation";
import { actionbarBottomList, actionbarTopList } from "utils/lists";
import { I_Terminal } from "../VSCodeTerminal/types";
import { ActionButtonItem, ActionItem } from "./Item";

export default function Actionbar({
  showTerminal,
  setShowTerminal,
}: I_Terminal) {
  const pathname = usePathname();

  return (
    <div className="w-[50px] h-[calc(100vh-2.75rem-21px)] ml-1 flex flex-col items-center bg-actionbar">
      {actionbarTopList.map((a) => (
        <ActionItem key={a.route} isActive={pathname === a.route} {...a} />
      ))}
      <div className="mt-auto">
        {actionbarBottomList.map((a) =>
          a.title === "Terminal" ? (
            <ActionButtonItem
              key={a.route}
              isActive={showTerminal}
              setShowTerminal={setShowTerminal}
              {...a}
            />
          ) : (
            <ActionItem key={a.route} isActive={pathname === a.route} {...a} />
          ),
        )}
      </div>
    </div>
  );
}

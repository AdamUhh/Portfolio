"use client";

import { usePathname } from "next/navigation";
import { explorerList } from "utils/lists";
import Tab from "./Tab";

export default function Tabs() {
  const pathname = usePathname();

  return (
    <div className="titlebar-height no-scrollbar text-xs flex overflow-auto bg-tab font-poppins">
      {explorerList
        .filter((t) => !t.hideInTabs)
        .map((t) => (
          <Tab
            key={t.route}
            route={t.route}
            name={t.name}
            pathname={pathname}
          />
        ))}
      {pathname === "/settings" && (
        <Tab
          key="/settings"
          route="/settings"
          name="settings.json"
          pathname={pathname}
        />
      )}
    </div>
  );
}

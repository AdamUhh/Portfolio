"use client";

import { usePathname, useRouter } from "next/navigation";
import { explorerList } from "utils/lists";
import Tab from "./Tab";

export default function Tabs() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="drop-shadow titlebar-height text-xs flex overflow-x-auto bg-tab font-poppins sm:tab-fade">
      {explorerList
        .filter((t) => !t.hideInTabs)
        .map((t) => (
          <Tab
            key={t.route}
            route={t.route}
            name={t.name}
            isActive={t.route === pathname}
          />
        ))}
      {pathname === "/settings" && (
        <Tab
          key="/settings"
          route="/settings"
          name="settings.json"
          isActive={"/settings" === pathname}
          onClick={router.back}
        />
      )}
    </div>
  );
}

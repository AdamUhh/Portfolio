"use client";

import Titlebar from "components/Titlebar";
import Tabs from "components/Tabs";
import Statusbar from "components/Statusbar";
import Actionbar from "components/Actionbar";
import Explorer from "components/Explorer";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { ReactNode, useState } from "react";
import Terminal from "components/Terminal";

export default function AppLayout({ children }: { children: ReactNode }) {
  const handle = useFullScreenHandle();

  const [showTerminal, setShowTerminal] = useState<boolean>(false);

  return (
    <FullScreen handle={handle} className="h-screen w-screen">
      <Titlebar handle={handle} />
      <div className="flex">
        <Actionbar showTerminal={showTerminal} setShowTerminal={setShowTerminal} />
        <Explorer />
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <Tabs />
          <main className="px-1">{children}</main>
        </div>
      </div>
      <Statusbar />
      <Terminal showTerminal={showTerminal} setShowTerminal={setShowTerminal} />
    </FullScreen>
  );
}

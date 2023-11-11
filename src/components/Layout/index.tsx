"use client";

import Actionbar from "components/Actionbar";
import Explorer from "components/Explorer";
import Statusbar from "components/Statusbar";
import Tabs from "components/Tabs";
import Terminal from "components/Terminal";
import Titlebar from "components/Titlebar";
import { ReactNode, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function AppLayout({ children }: { children: ReactNode }) {
  const handle = useFullScreenHandle();

  const [showTerminal, setShowTerminal] = useState<boolean>(false);

  return (
    <FullScreen handle={handle} className="h-screen w-screen overflow-hidden">
      <Titlebar handle={handle} />
      <div className="flex">
        <Actionbar
          showTerminal={showTerminal}
          setShowTerminal={setShowTerminal}
        />
        <Explorer />
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <Tabs />
          <main className="main-height w-full overflow-y-auto px-1">
            {children}
          </main>
        </div>
      </div>
      <Statusbar />
      <Terminal showTerminal={showTerminal} setShowTerminal={setShowTerminal} />
    </FullScreen>
  );
}

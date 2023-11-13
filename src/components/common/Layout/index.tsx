"use client";

import Actionbar from "components/common/Actionbar";
import Explorer from "components/common/Explorer";
import Statusbar from "components/common/Statusbar";
import Tabs from "components/common/Tabs";
import Titlebar from "components/common/Titlebar";
import VSCodeTerminal from "components/common/VSCodeTerminal";
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
      <VSCodeTerminal showTerminal={showTerminal} setShowTerminal={setShowTerminal} />
    </FullScreen>
  );
}

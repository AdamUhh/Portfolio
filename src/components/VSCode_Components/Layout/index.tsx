"use client";

import Actionbar from "components/VSCode_Components/Actionbar";
import Explorer from "components/VSCode_Components/Explorer";
import Statusbar from "components/VSCode_Components/Statusbar";
import Tabs from "components/VSCode_Components/Tabs";
import Titlebar from "components/VSCode_Components/Titlebar";
import VSCodeTerminal from "components/VSCode_Components/VSCodeTerminal";
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
          <main className="h-[calc(100vh-110px)] w-full overflow-y-auto px-1">
            {children}
          </main>
        </div>
      </div>
      <Statusbar />
      <VSCodeTerminal showTerminal={showTerminal} setShowTerminal={setShowTerminal} />
    </FullScreen>
  );
}

"use client";

import { mdiBadgeAccount, mdiConsole, mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { vscodeIcon } from "../../assets";
import { DesktopItem, DesktopLink } from "./CommonButtons";
import HomeTerminal from "./HomeTerminal";
import Notification from "./Notification";
import Taskbar from "./Taskbar";
import VSCodeLoading from "./VSCodeLoading";

export default function Home() {
  const [isVSCodeOpen, setIsVSCodeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const router = useRouter();

  const handleVSCodeClick = () => {
    router.replace("/about");
    setIsVSCodeOpen(true);
  };

  const handleTerminalClick = () => {
    setIsTerminalOpen((prev) => !prev);
  };

  return (
    <div
      className="home-wallpaper relative h-screen w-screen p-2"
      style={{
        backgroundImage: `url('/home_screen.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ul className="grid list-none grid-cols-[90px] gap-3 grid-rows-[90px_90px_90px] font-medium">
        <DesktopItem
          onClick={handleVSCodeClick}
          name="Portfolio"
          title="Go To Portfolio"
          size={1}
        >
          <Image src={vscodeIcon} alt="VSCode Portfolio" width={35} />
        </DesktopItem>
        <DesktopLink
          href="https://github.com/AdamUhh"
          target="_blank"
          name="Github"
          title="Go To AdamUhh's Github"
        >
          <Icon path={mdiGithub} size={2} />
        </DesktopLink>
        <DesktopItem
          path={mdiConsole}
          size={2}
          title="Open Terminal"
          name="Terminal"
          onClick={handleTerminalClick}
        />
        <DesktopLink
          href="/cv"
          target="_blank"
          name="CV"
          title="View My CV"
        >
          <Icon path={mdiBadgeAccount} size={2} />
        </DesktopLink>
      </ul>
      {isVSCodeOpen && <VSCodeLoading />}
      <HomeTerminal
        handleClose={handleTerminalClick}
        isTerminalOpen={isTerminalOpen}
      />
      <Notification />
      <Taskbar />
    </div>
  );
}

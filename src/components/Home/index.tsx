"use client";

import { mdiBadgeAccount, mdiConsole, mdiEmailEdit, mdiGithub, mdiHumanGreeting } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { vscodeIcon } from "../../assets";
import { DesktopItem, DesktopLink } from "./CommonButtons";
import HomeTerminal from "./HomeTerminal";
import Notification from "./Notification";
import Taskbar from "./Taskbar";
import VSCodeLoading from "./VSCodeLoading";

export default function Home() {
  const [isVSCodeOpen, setIsVSCodeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isWelcomeGreetingOpen, setIsWelcomeGreetingOpen] = useState(true);
  const router = useRouter();

  const handleVSCodeClick = () => {
    router.replace("/about");
    setIsVSCodeOpen(true);
  };

  const handleContactClick = () => {
    router.replace("/contact");
    setIsVSCodeOpen(true);
  };

  const handleTerminalClick = () => {
    setIsTerminalOpen((prev) => !prev);
  };

  const handleWelcomeGreetingClick = () => {
    setIsWelcomeGreetingOpen((prev) => {
      sessionStorage.setItem(
        "vscode-portfolio-adamuhh-home-help-modal",
        prev ? "false" : "true",
      );
      return !prev;
    });
  };

  useEffect(() => {
    const storedValue = sessionStorage.getItem(
      "vscode-portfolio-adamuhh-home-help-modal",
    );
    setIsWelcomeGreetingOpen(storedValue !== "false" ?? true);
  }, []);

  return (
    <div
      className="relative h-screen w-screen p-2"
      style={{
        backgroundImage: `url('/wallpaper.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ul className="grid list-none grid-cols-[90px] grid-rows-[repeat(5,90px)] gap-3 font-medium">
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
          <Icon path={mdiGithub} size={1.8} color={"#ddd"} />
        </DesktopLink>
        <DesktopItem
          path={mdiConsole}
          size={1.7}
          title="Open Terminal"
          name="Terminal"
          onClick={handleTerminalClick}
        />

        <DesktopLink href="https://cv.adamuhh.dev/" target="_blank" name="CV" title="View My CV">
          <Icon color={"#ddd"} path={mdiBadgeAccount} size={2} />
        </DesktopLink>

        <DesktopItem
          onClick={handleContactClick}
          name="Contact"
          title="Contact Me"
          path={mdiEmailEdit}
          size={1.6}
        />
        <DesktopItem
          path={mdiHumanGreeting}
          size={1.8}
          title="Open Help/Greeting Popup"
          name="Help"
          onClick={handleWelcomeGreetingClick}
        />
      </ul>
      {isVSCodeOpen && <VSCodeLoading />}
      <HomeTerminal isOpen={isTerminalOpen} handleClose={handleTerminalClick} />
      <Notification
        isOpen={isWelcomeGreetingOpen}
        handleClose={handleWelcomeGreetingClick}
        handleVSCodeClick={handleVSCodeClick}
      />
      <Taskbar />
    </div>
  );
}

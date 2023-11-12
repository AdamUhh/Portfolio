import { mdiConsole, mdiConsoleLine, mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { vscodeIcon } from "../../assets";
import Taskbar from "./Taskbar";
import Notification from "./Notification";

interface DesktopIconProps {
  path: string;
  size: number;
  title: string;
  rotate?: boolean;
  children?: ReactNode;
}

function DesktopIcon({
  path,
  size,
  title,
  children,
  rotate,
}: DesktopIconProps) {
  return (
    <li
      className="cursor-pointer flex h-20 w-20 items-center justify-center hover:bg-[#83c3ff3d]"
      title={title}
    >
      {children ? (
        children
      ) : (
        <Icon path={path} size={size} className={rotate ? "rotate-90" : ""} />
      )}
    </li>
  );
}

interface DesktopLinkProps {
  href: string;
  target?: string;
  title: string;
  children?: ReactNode;
}

function DesktopLink({
  href,
  target = "_self",
  children,
  title,
}: DesktopLinkProps) {
  return (
    <li className="h-20 w-20 hover:bg-[#83c3ff3d]">
      <Link
        href={href}
        target={target}
        title={title}
        className="flex h-full w-full items-center justify-center"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Home() {
  return (
    <div
      className="home-wallpaper relative h-screen w-screen"
      style={{
        backgroundImage: `url('/home_screen.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ul className="h-[calc(100%-56px)] w-fit list-none p-3">
        <DesktopLink href="/about" title="Go To Portfolio">
          <Image src={vscodeIcon} alt="VSCode Portfolio" width={35} />
        </DesktopLink>
        <DesktopLink
          href="https://github.com/AdamUhh"
          target="_blank"
          title="Go To AdamUhh's Github"
        >
          <Icon path={mdiGithub} size={2} />
        </DesktopLink>
        <DesktopIcon path={mdiConsole} size={2} title="Open Terminal" />
      </ul>
      <Notification />
      <Taskbar />
    </div>
  );
}

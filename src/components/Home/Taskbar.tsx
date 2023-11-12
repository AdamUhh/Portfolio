import {
  mdiBattery90,
  mdiCheckboxMultipleBlankOutline,
  mdiChevronUp,
  mdiConsole,
  mdiFolderHome,
  mdiGithub,
  mdiMicrosoft,
  mdiVolumeHigh,
  mdiWifi,
} from "@mdi/js";
import Icon from "@mdi/react";
import Time from "components/common/Statusbar/Time";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { vscodeIcon } from "../../assets";

interface TaskbarIconProps {
  path: string;
  size: number;
  title: string;
  rotate?: boolean;
  children?: ReactNode;
}

function TaskbarIcon({
  path,
  size,
  title,
  children,
  rotate,
}: TaskbarIconProps) {
  return (
    <div
      className="flex h-full w-full cursor-pointer items-center justify-center px-2"
      title={title}
    >
      {children ? (
        children
      ) : (
        <Icon path={path} size={size} className={rotate ? "rotate-90" : ""} />
      )}
    </div>
  );
}

interface TaskbarLinkProps {
  href: string;
  target?: string;
  title: string;
  children?: ReactNode;
}

function TaskbarLink({
  href,
  target = "_self",
  children,
  title,
}: TaskbarLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      title={title}
      className="flex h-full w-full cursor-pointer items-center justify-center px-2"
    >
      {children}
    </Link>
  );
}

function Taskbar() {
  return (
    <footer className="taskbar-bg absolute bottom-0 left-0 grid h-16 w-screen grid-cols-3 ">
      <div></div>
      <div className="mx-auto grid h-full grid-cols-4">
        <TaskbarIcon path={mdiMicrosoft} size={1.7} title="Microsoft" />
        <TaskbarIcon
          path={mdiCheckboxMultipleBlankOutline}
          size={1.7}
          title="Checkbox"
        />
        <TaskbarLink href="/about" title="Go To Portfolio">
          <Image src={vscodeIcon} alt="VSCode Portfolio" width={30} />
        </TaskbarLink>
      </div>
      <div className="ml-auto grid h-full grid-cols-[1fr_1fr_1fr_1fr_100px] ">
        <TaskbarIcon path={mdiChevronUp} size={1} title="Tasks" />
        <TaskbarIcon path={mdiBattery90} size={1} title="Battery" rotate />
        <TaskbarIcon path={mdiWifi} size={0.7} title="Wifi" />
        <TaskbarIcon path={mdiVolumeHigh} size={1} title="Volume" />
        <TaskbarIcon path={mdiVolumeHigh} size={1} title="Time">
          <Time isHome />
        </TaskbarIcon>
      </div>
    </footer>
  );
}

export default Taskbar;

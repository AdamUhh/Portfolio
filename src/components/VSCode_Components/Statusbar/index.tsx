"use client";

import {
  mdiAlertOutline,
  mdiBellOutline,
  mdiCheckAll,
  mdiCloseCircleOutline,
  mdiCodeBraces,
  mdiCodeTags,
  mdiGit,
  mdiHistory,
} from "@mdi/js";
import Icon from "@mdi/react";
import { usePathname } from "next/navigation";
import { cn } from "utils/cn";
import { getFullExtensionFromName } from "utils/getFromExt";
import Time from "./Time";
import TimeOnApp from "./TimeOnApp";
import { StatusbarButtonProps } from "./types";

function StatusbarButton({
  icon,
  size = 1,
  text,
  children,
  extendClassName,
  hideOnSmallViewport,
}: StatusbarButtonProps) {
  return (
    <div
      className={cn(
        "flex h-full cursor-pointer items-center gap-1 px-3 text-sm hover:bg-common-HOVER",
        extendClassName && extendClassName,
        hideOnSmallViewport && "sm:hidden",
      )}
    >
      {icon && <Icon path={icon} size={size} />}
      {text && <span>{text}</span>}
      {children}
    </div>
  );
}

export default function Statusbar() {
  const pathname = usePathname();

  return (
    <footer className="flex h-[21px] w-screen items-center bg-statusbar">
      <StatusbarButton
        icon={mdiCodeTags}
        size={0.8}
        extendClassName="bg-statusbar-REMOTE px-2"
      />
      <StatusbarButton icon={mdiGit} size={0.8} text="main*" />
      <StatusbarButton icon={mdiCloseCircleOutline} size={0.8} hideOnSmallViewport>
        <span>0</span>
        <Icon path={mdiAlertOutline} size={0.8} />
        <span>0</span>
      </StatusbarButton>
      <StatusbarButton icon={mdiHistory} size={0.7} hideOnSmallViewport>
        <TimeOnApp />
      </StatusbarButton>
      <div className="ml-auto flex h-full items-center">
        <StatusbarButton
          icon={mdiCodeBraces}
          size={0.7}
          text={getFullExtensionFromName(pathname)}
          hideOnSmallViewport
        />
        <StatusbarButton icon={mdiCheckAll} size={0.8} text="Prettier" hideOnSmallViewport/>
        <StatusbarButton >
          <Time />
        </StatusbarButton>
        <StatusbarButton icon={mdiBellOutline} size={0.8} />
      </div>
    </footer>
  );
}

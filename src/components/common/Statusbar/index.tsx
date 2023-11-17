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
import React from "react";
import { getFullExtensionFromName } from "utils/getFromExt";
import Time from "./Time";
import TimeOnApp from "./TimeOnApp";
import { StatusbarButtonProps } from "./types";

function StatusbarButton({
  icon,
  size = 1,
  text,
  children,
}: StatusbarButtonProps) {
  return (
    <div className="statusbar-button">
      {icon && <Icon path={icon} size={size} />}
      {text && <span>{text}</span>}
      {children}
    </div>
  );
}

export default function Statusbar() {
  const pathname = usePathname();

  return (
    <footer className="statusbar-height flex w-screen items-center bg-statusbar">
      <div className="statusbar-button bg-statusbar-REMOTE px-2">
        <Icon path={mdiCodeTags} size={0.8} />
      </div>
      <StatusbarButton icon={mdiGit} size={0.8} text="main*" />
      <StatusbarButton icon={mdiCloseCircleOutline} size={0.8}>
        <span>0</span>
        <Icon path={mdiAlertOutline} size={0.8} />
        <span>0</span>
      </StatusbarButton>
      <StatusbarButton icon={mdiHistory} size={0.7}>
        <TimeOnApp />
      </StatusbarButton>
      <div className="ml-auto flex h-full items-center">
        <StatusbarButton
          icon={mdiCodeBraces}
          size={0.7}
          text={getFullExtensionFromName(pathname)}
        />
        <StatusbarButton icon={mdiCheckAll} size={0.8} text="Prettier" />
        <StatusbarButton>
          <Time />
        </StatusbarButton>
        <StatusbarButton icon={mdiBellOutline} size={0.8} />
      </div>
    </footer>
  );
}

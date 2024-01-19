import { ReactNode } from "react";

interface DesktopProps {
  title: string;
  name?: string;
  children?: ReactNode;
}

interface DesktopIconProps extends DesktopProps {
  path?: string;
  size: number;
  rotate?: boolean;
  onClick?: () => void;
  hideOnMobile?:boolean;
}

interface DesktopLinkProps extends DesktopProps {
  href: string;
  target?: string;
}

export type { DesktopProps, DesktopIconProps, DesktopLinkProps };

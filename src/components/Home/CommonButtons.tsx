import Icon from "@mdi/react";
import Link from "next/link";
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
}

interface DesktopLinkProps extends DesktopProps {
  href: string;
  target?: string;
}

const DesktopItemBase = ({ children, title, name }: DesktopProps) => (
  <div
    className="flex flex-col items-center justify-center gap-1"
    title={title}
  >
    {children}
    {name && <p>{name}</p>}
  </div>
);

export const DesktopItem = ({
  children,
  onClick,
  title,
  name,
  path,
  size,
  rotate,
}: DesktopIconProps) => (
  <li
    className="flex h-full w-full cursor-pointer items-center justify-center hover:bg-[#83c3ff3d]"
    title={title}
    onClick={onClick}
  >
    {path && (
      <DesktopItemBase title={title} name={name}>
        <Icon path={path} size={size} className={rotate ? "rotate-90" : ""} />
      </DesktopItemBase>
    )}
    {children && (
      <DesktopItemBase title={title} name={name}>
        {children}
      </DesktopItemBase>
    )}
  </li>
);

export const DesktopLink = ({
  href,
  target = "_self",
  children,
  name,
  title,
}: DesktopLinkProps) => (
  <li className="h-full w-full hover:bg-[#83c3ff3d]">
    <Link
      href={href}
      target={target}
      title={title}
      className="flex h-full w-full flex-col items-center justify-center gap-1"
    >
      {children && (
        <DesktopItemBase title={title} name={name}>
          {children}
        </DesktopItemBase>
      )}
    </Link>
  </li>
);

import Icon from "@mdi/react";
import Link from "next/link";
import { DesktopIconProps, DesktopLinkProps, DesktopProps } from "./types";

const DesktopItemBase = ({ children, title, name }: DesktopProps) => (
  <div
    className="flex flex-col text-ms items-center justify-center gap-1 text-white/80 sm:bg-black/60"
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
    className="flex h-full px-1 w-full cursor-pointer items-center justify-center rounded-md hover:bg-[#83c3ff3d]"
    title={title}
    onClick={onClick}
  >
    {path && (
      <DesktopItemBase title={title} name={name}>
        <Icon
          color={"#ddd"}
          path={path}
          size={size}
          className={rotate ? "rotate-90" : ""}
        />
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
  <li className="h-full w-full rounded-md hover:bg-[#83c3ff3d]">
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

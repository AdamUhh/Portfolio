import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "utils/cn";
import TabContent from "./TabContent";
import { TabProps } from "./types";

export default function Tab({ isActive, route, name, onClick }: TabProps) {
  const activeTabRef = useRef<HTMLAnchorElement & HTMLDivElement>(null);

  useEffect(() => {
    if (activeTabRef.current && isActive) {
      activeTabRef.current.scrollIntoView();
    }
  }, [isActive]);

  function handleClick() {
    if (onClick) onClick();
  }

  if (onClick) {
    return (
      <div
        className={cn(
          "group flex h-[45px] w-fit min-w-[180px] cursor-pointer items-center justify-between gap-4 border-b-2 border-b-transparent px-2 py-2 hover:bg-common-HOVER",
          isActive ? "border-b-accent bg-common-HOVER/80" : "bg-tab",
        )}
        title={name}
        ref={activeTabRef}
        onMouseDown={(e) => {
          if (e.button === 1) {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        <TabContent isActive={isActive} name={name} handleClick={handleClick} />
      </div>
    );
  }

  return (
    <Link
      href={route}
      className={cn(
        "group flex h-[45px] w-fit min-w-[180px] items-center justify-between gap-4 border-b-2 border-b-transparent px-2 py-2 hover:bg-common-HOVER",
        isActive ? "border-b-accent bg-common-HOVER/80" : "bg-tab",
      )}
      title={name}
      ref={activeTabRef}
    >
      <TabContent isActive={isActive} name={name} handleClick={handleClick} />
    </Link>
  );
}

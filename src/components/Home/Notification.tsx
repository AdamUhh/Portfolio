"use client";
import { mdiClose, mdiHelp } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "utils/cn";
import { vscodeIcon } from "../../assets";

export default function Notification({
  handleVSCodeClick,
}: {
  handleVSCodeClick: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const storedValue = sessionStorage.getItem(
      "vscode-portfolio-adamuhh-home-help-modal",
    );
    setIsVisible(storedValue !== "false" ?? true);
  }, []);

  function handleOpen() {
    sessionStorage.setItem("vscode-portfolio-adamuhh-home-help-modal", "true");
    setIsVisible(true);
  }

  function handleClose() {
    sessionStorage.setItem("vscode-portfolio-adamuhh-home-help-modal", "false");
    setIsVisible(false);
  }

  return (
    <div>
      <button
        className={cn(
          " bottom-20 right-4 flex cursor-pointer rounded-lg bg-gradient-to-r  from-[#e0edf8] to-[#d6deef] p-3 shadow-lg shadow-black hover:brightness-90",
          !isVisible ? "fixed" : "hidden",
        )}
        title="Help"
        onClick={handleOpen}
      >
        <Icon path={mdiHelp} size={1} color={"#000"} />
      </button>
      <div
        className={cn(
          "  bottom-20 right-4 flex h-fit min-w-[400px] rounded-lg bg-gradient-to-r  from-[#e0edf8] to-[#d6deef] shadow-lg shadow-black",
          isVisible ? "fixed" : "hidden",
        )}
      >
        <div className="h-full w-full px-6 py-4">
          <div className="flex h-full flex-col text-black">
            <div className="flex items-center font-bold">
              <span className="text-2xl">👋</span>
              <h1 className="pl-1 text-xl">Welcome to my Portfolio!</h1>
              <button
                type="button"
                onClick={handleClose}
                className="ml-auto rounded-md p-1 hover:bg-statusbar-HOVER/20"
              >
                <Icon path={mdiClose} size={0.8} color={"#000"} />
              </button>
            </div>
            <div className="mt-2 text-lg">
              <div className="flex items-center">
                <span>To continue, click on the VSCode Icon</span>
                <Link
                  href={"/about"}
                  className=" ml-8 hover:brightness-95"
                  title="Go To Portfolio"
                >
                  <Image
                    src={vscodeIcon}
                    alt="VSCode Icon"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
              <p>or click the below</p>
            </div>
            <div className="mt-6 flex flex-col justify-evenly gap-3 text-center font-medium">
              <Link
                href={"/about"}
                onClick={handleVSCodeClick}
                className="flex-grow rounded-md bg-white py-1.5 drop-shadow-md hover:brightness-95"
                title="Go To Portfolio"
              >
                Go To Portfolio
              </Link>
              <Link
                href={"/cv"}
                className="flex-grow rounded-md bg-white py-1.5 drop-shadow-md hover:brightness-95"
                title="View My CV"
              >
                View CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

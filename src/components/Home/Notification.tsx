"use client";
import { mdiClose, mdiHelp } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "utils/cn";

export default function Notification() {
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
          "  bottom-20 right-4 flex h-44 w-96 rounded-lg bg-gradient-to-r  from-[#e0edf8] to-[#d6deef] shadow-lg shadow-black",
          isVisible ? "fixed" : "hidden",
        )}
      >
        <div className="h-full w-full px-6 py-4">
          <div className="flex h-full flex-col text-black">
            <div className=" flex items-center font-bold">
              <span className="text-2xl">👋</span>
              <h1 className="text-lg">Welcome to my Portfolio!</h1>
              <button
                type="button"
                onClick={handleClose}
                className="hover:bg-statusbar-HOVER/20 ml-auto rounded-md p-1"
              >
                <Icon path={mdiClose} size={0.8} color={"#000"} />
              </button>
            </div>
            <div>
              <p>To continue, click on the VSCode Icon</p>
              <p>or click the below</p>
            </div>
            <div className="mt-auto flex justify-evenly gap-6 text-center font-medium">
              <Link
                href={"/about"}
                className="flex-grow rounded-md bg-white py-1.5 drop-shadow-md hover:brightness-95"
                title="Go To Portfolio"
              >
                Go To Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

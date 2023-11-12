import Image from "next/image";
import Link from "next/link";
import { FullScreenHandle } from "react-full-screen";
import { closeTab } from "utils/window";
import { vscodeIcon } from "../../../assets";
const fileList = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];

interface TitlebarProps {
  handle: FullScreenHandle;
}

export default function Titlebar({ handle }: TitlebarProps) {
  return (
    <div className="titlebar-height flex items-center justify-center border-b-2 border-b-black bg-titlebar p-2 pl-3 text-md">
      <Image src={vscodeIcon} alt="VS Code Icon" width={20} />
      <div className="ml-2 flex flex-1 gap-1 ">
        {fileList.map((f) => (
          <p
            key={f}
            className="cursor-pointer rounded-md bg-titlebar px-2 py-[2px] text-sm hover:bg-titlebar-HOVER"
          >
            {f}
          </p>
        ))}
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg bg-titlebar-HOVER px-6 text-center text-ms font-semibold text-main-FOREGROUND/75 ">
        <span>AdamUhh - VSCode Portfolio</span>
      </div>
      <div className="ml-auto flex flex-1 items-center">
        <Link
          href={"/"}
          className="ml-auto flex h-[14px] w-[14px] cursor-pointer  rounded-full bg-[#ff5f57] hover:brightness-90"
        />
        <button
          className="ml-2 h-[14px] w-[14px] cursor-pointer rounded-full bg-[#febc2e] hover:brightness-90"
          type="button"
          onClick={handle.active ? handle.exit : handle.enter}
        ></button>
        <button
          className="ml-2 flex h-[14px] w-[14px] cursor-pointer items-center justify-center rounded-full bg-[#28c840] hover:brightness-90"
          type="button"
          onClick={closeTab}
        >
          <span className="mt-[-1px] h-[11px] w-[11px] animate-custom-ping rounded-full bg-[#28c840]" />
        </button>
      </div>
    </div>
  );
}

import { HomeTerminalTitlebarProps } from "./types";

export default function HomeTerminalTitlebar({
  handleClose,
}: HomeTerminalTitlebarProps) {
  return (
    <div className="flex h-10 w-full cursor-grab items-center justify-between rounded-tl-2xl rounded-tr-2xl bg-[#373737] ">
      <div className="draggable_handle flex-1 px-4 py-2">
        <h1 className="text-ms font-medium text-white/80">Terminal</h1>
      </div>
      <div className="flex px-4 py-2">
        <button
          className="ml-2 flex h-[14px] w-[14px] cursor-pointer items-center justify-center rounded-full bg-[#ff5f57] hover:brightness-90"
          type="button"
          onClick={handleClose}
        ></button>
      </div>
    </div>
  );
}

import { NotificationTitlebarProps } from "./types";

export default function NotificationTitlebar({
  handleClose,
}: NotificationTitlebarProps) {
  return (
    <div className="draggable-handle flex h-10 w-full cursor-grab items-center justify-between rounded-tl-2xl rounded-tr-2xl border-b border-b-black/40 bg-gradient-to-r from-[#87a7ec] to-[#a6d0f0] px-4 py-2">
      <h1 className="text-md font-medium text-black/80 ">Notification</h1>
      <div className="flex">
        <button
          className="ml-2 flex h-[14px] w-[14px] cursor-pointer items-center justify-center rounded-full bg-[#ff5f57] hover:brightness-90"
          type="button"
          onClick={handleClose}
        />
      </div>
    </div>
  );
}

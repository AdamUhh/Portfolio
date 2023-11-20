import { NotificationTitlebarProps } from "./types";

export default function NotificationTitlebar({
  handleClose,
}: NotificationTitlebarProps) {
  return (
    <div className=" flex h-10 w-full cursor-grab items-center justify-between rounded-tl-2xl rounded-tr-2xl">
      <div className="flex-1 draggable_handle px-4 py-2">
        <h1 className="text-md font-medium text-black/80">Notification</h1>
      </div>
      <div className="flex px-4 py-2">
        <button
          className="ml-2 flex h-[14px] w-[14px] cursor-pointer items-center justify-center rounded-full bg-[#ff5f57] hover:brightness-90"
          type="button"
          onClick={handleClose}
        />
      </div>
    </div>
  );
}

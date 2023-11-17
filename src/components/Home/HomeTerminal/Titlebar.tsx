interface HomeTerminalTitlebarProps {
  handleClose: () => void;
}

export default function HomeTerminalTitlebar({
  handleClose,
}: HomeTerminalTitlebarProps) {
  return (
    <div className="draggable-handle flex h-10 w-full cursor-grab items-center justify-between rounded-tl-2xl rounded-tr-2xl bg-[#373737] px-4 py-2">
      <h1 className="text-md font-medium text-white/80">Terminal</h1>
      <div className="flex">
        <button
          className="ml-2 flex h-[14px] w-[14px] cursor-pointer items-center justify-center rounded-full bg-[#ff5f57] hover:brightness-90"
          type="button"
          onClick={handleClose}
        ></button>
      </div>
    </div>
  );
}

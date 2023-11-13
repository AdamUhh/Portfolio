import Terminal from "components/common/Terminal";
import { cn } from "utils/cn";

interface HomeTerminalProps {
  handleClose: () => void;
  isTerminalOpen: boolean;
}

export default function HomeTerminal({
  isTerminalOpen,
  handleClose,
}: HomeTerminalProps) {
  return (
    <div
      className={cn(
        "left-[50%] top-[50%] h-[60%] min-h-[300px] w-[40%] min-w-[300px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-[#151515] shadow-[0_0_10px_2px_rgba(0,0,0,1)] ",
        isTerminalOpen ? "fixed" : "hidden",
      )}
    >
      <div className="relative h-full w-full">
        <div className="flex h-10 w-full items-center justify-between rounded-tl-2xl rounded-tr-2xl bg-[#373737] px-4 py-2">
          <h1 className="text-md font-medium text-white/80">Terminal</h1>
          <div className="flex">
            <button
              className="ml-2 h-[14px] w-[14px] cursor-pointer rounded-full bg-[#febc2e] hover:brightness-90"
              type="button"
              onClick={handleClose}
            ></button>
            <button
              className="ml-2 flex h-[14px] w-[14px] cursor-pointer items-center justify-center rounded-full bg-[#28c840] hover:brightness-90"
              type="button"
              onClick={handleClose}
            ></button>{" "}
            <button
              className="ml-2 flex h-[14px] w-[14px] cursor-pointer items-center justify-center rounded-full bg-[#ff5f57] hover:brightness-90"
              type="button"
              onClick={handleClose}
            ></button>
          </div>
        </div>
        <div className="h-[calc(100%-40px)] overflow-y-auto overflow-x-hidden px-4 py-2">
          <Terminal isTerminalOpen={isTerminalOpen} />
        </div>
      </div>
    </div>
  );
}

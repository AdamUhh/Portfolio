import Image from "next/image";
import Link from "next/link";
import Draggable from "react-draggable";
import { cn } from "utils/cn";
import { vscodeIcon } from "../../assets";

interface NotificationProps {
  handleClose: () => void;
  isOpen: boolean;
  handleVSCodeClick: () => void;
}

export default function Notification({
  isOpen,
  handleClose,
  handleVSCodeClick,
}: NotificationProps) {
  return (
    <Draggable handle=".draggable-handle">
      <div
        className={cn(
          "shadow-black] left-[30%] top-[25%] h-fit min-h-[250px] w-[40%] min-w-[300px] max-w-[500px] translate-x-[-50%] translate-y-[-50%]  rounded-2xl  bg-gradient-to-r from-[#e0edf8] to-[#d6deef] shadow-lg ",
          isOpen ? "fixed" : "hidden",
        )}
      >
        <div className="relative h-full w-full">
          <div className="draggable-handle flex h-10 w-full cursor-grab items-center justify-between rounded-tl-2xl rounded-tr-2xl bg-gradient-to-r from-[#e0edf8] to-[#d6deef] px-4 py-2 shadow-sm shadow-black">
            <h1 className="text-md font-medium text-black/80 ">Notification</h1>
            <div className="flex">
              <button
                className="ml-2 flex h-[14px] w-[14px] cursor-pointer items-center justify-center rounded-full bg-[#ff5f57] hover:brightness-90"
                type="button"
                onClick={handleClose}
              ></button>
            </div>
          </div>
          <div className="h-[calc(100%-40px)] overflow-y-auto overflow-x-hidden px-4 py-2 text-black">
            <div className="flex items-center font-bold">
              <span className="text-2xl">👋</span>
              <h1 className="pl-1 text-xl">Welcome to my Portfolio!</h1>
            </div>
            <div className="mt-2 text-lg">
              <div className="flex items-center">
                <span>To continue, click on the VSCode Icon</span>
                <button
                  type="button"
                  onClick={handleVSCodeClick}
                  className=" ml-auto hover:brightness-95"
                  title="Go To Portfolio"
                >
                  <Image
                    src={vscodeIcon}
                    alt="VSCode Icon"
                    width={40}
                    height={40}
                  />
                </button>
              </div>
              <p>or click the below</p>
            </div>
            <div className="mt-6 flex flex-col justify-evenly gap-3 text-center font-medium">
              <button
                type="button"
                onClick={handleVSCodeClick}
                className="flex-grow rounded-md bg-white py-1.5 drop-shadow-md hover:brightness-95"
                title="Go To Portfolio"
              >
                Go To Portfolio
              </button>
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
    </Draggable>
  );
}

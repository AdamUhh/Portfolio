import Image from "next/image";
import Link from "next/link";
import { vscodeIcon } from "../../../assets";

interface NotificationContentProps {
  handleVSCodeClick: () => void;
}

export default function NotificationContent({
  handleVSCodeClick,
}: NotificationContentProps) {
  return (
    <div className="h-[calc(100%-40px)] overflow-y-auto overflow-x-hidden px-4 py-2 text-black">
      <div className="flex items-center font-bold">
        <span className="text-2xl">👋</span>
        <h1 className="pl-1 text-2xl">Welcome to my Portfolio!</h1>
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
            <Image src={vscodeIcon} alt="VSCode Icon" width={40} height={40} />
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
  );
}
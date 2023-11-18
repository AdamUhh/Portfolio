import Image from "next/image";
import Link from "next/link";
import { calculateAge } from "utils/calculateAge";
import { selfLogo } from "../../assets";

export default function Header() {
  return (
    <div className="grid grid-cols-[12rem_auto] px-5 pb-4 pt-2 lg:grid-rows-[1fr_auto] sm:grid-cols-[1fr] sm:grid-rows-[1fr_auto_auto] ">
      <div className="col-start-1 row-span-2 flex h-48 w-48 flex-shrink-0 items-center justify-center rounded bg-white p-2 sm:row-span-1 sm:row-start-1 sm:mb-4">
        <Image src={selfLogo} alt="AdamUhh Logo" />
      </div>
      <div className="flex flex-col justify-center gap-1 pl-4 sm:row-start-2 sm:pl-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-jet text-3xl font-semibold">AdamUhh</h4>
          <code className="h-6 bg-[#4b4b4b] px-2 py-[1px] font-jetBrains text-white/50">
            full_stack.developer
          </code>
        </div>
        <div className="flex flex-wrap text-lg font-medium text-white/60 sm:mt-4 gap-1">
          <div className="flex flex-wrap gap-1">
            <h5 className="border-accent pr-4 lg:border-l-2 lg:pl-4">
              Adam M.
            </h5>
            <h5 className="border-l-2 border-accent pl-4 pr-4">Male</h5>
          </div>
          <div className="flex flex-wrap gap-1">
            <h5 className="border-l-2 border-accent pl-4 pr-4">
              v{calculateAge()}.0.0 (Years Old)
            </h5>
            <h5 className="border-l-2 border-accent pl-4 pr-4">
              Dubai (GMT+4)
            </h5>
          </div>
        </div>
      </div>
      <div className="col-start-2 row-start-2 flex flex-col gap-2 pl-4 lg:col-span-2 lg:row-start-auto lg:pl-0 lg:pt-4">
        <p>
          Hi there! I&apos;m Adam, a full-stack web developer with expertise in
          front-end and back-end technologies.
        </p>
        <div className="flex gap-3 text-sm font-semibold">
          <Link
            href={"/cv"}
            className="rounded-sm bg-sky-600 px-1.5 py-0.5 hover:bg-sky-600/90"
          >
            View CV
          </Link>
          <Link
            href={"/projects"}
            className="rounded-sm bg-sky-700 px-1.5 py-0.5 hover:bg-sky-700/90"
          >
            View Projects
          </Link>
          <Link
            href={"https://github.com/AdamUhh"}
            className="rounded-sm bg-sky-800 px-1.5 py-0.5 hover:bg-sky-800/90"
            target="_blank"
          >
            View Github
          </Link>
        </div>
      </div>
    </div>
  );
}

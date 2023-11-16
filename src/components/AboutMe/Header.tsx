import Link from "next/link";
import { calculateAge } from "utils/calculateAge";
import { selfLogo } from "../../assets";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex px-5 pb-4 pt-2">
        <div className="min-w-48 min-h-48 flex h-48 w-48 flex-shrink-0 items-center justify-center rounded-md bg-white p-2">
          <Image src={selfLogo} alt="AdamUhh Logo" />
        </div>
        <div className="flex flex-col justify-center gap-3 pl-4">
          <div className="flex items-center gap-2">
            <h4 className="font-jet h-11 text-3xl font-semibold">AdamUhh</h4>
            <code className="h-6 rounded-md bg-[#4b4b4b] px-2 py-[1px] font-jetBrains text-white/50">
              full_stack.developer
            </code>
          </div>
          <div className="flex text-lg font-medium text-white/60">
            <h5 className="pr-4">Adam M.</h5>
            <h5 className="border-l-2 border-l-accent px-4">Male</h5>
            <h5 className="border-x-2 border-x-accent px-4">
              v{calculateAge()}.0.0 (Years Old)
            </h5>
            <h5 className="pl-4">Dubai (GMT+4)</h5>
          </div>
          <p>
            Hi there! I&apos;m Adam, a full-stack web developer with expertise
            in front-end and back-end technologies.
          </p>
          <div className="flex gap-3 text-sm font-semibold">
            <Link
              href={"/cv"}
              className="rounded-[2px] bg-sky-600 px-1.5 py-0.5 hover:bg-sky-600/90"
            >
              View CV
            </Link>
            <Link
              href={"/projects"}
              className="rounded-[2px] bg-sky-700 px-1.5 py-0.5 hover:bg-sky-700/90"
            >
              View Projects
            </Link>
            <Link
              href={"https://github.com/AdamUhh"}
              className="rounded-[2px] bg-sky-800 px-1.5 py-0.5 hover:bg-sky-800/90"
              target="_blank"
            >
              View Github
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
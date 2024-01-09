import Image from "next/image";
import Link from "next/link";
import { calculateAge } from "utils/calculateAge";
import { selfLogo } from "../../assets";

export default function Header() {
  return (
    <div className="grid grid-cols-[12rem_auto] px-5 pb-4 pt-2 lg:grid-rows-[1fr_auto] sm:grid-cols-[1fr] sm:grid-rows-[1fr_auto_auto] sm:px-2 ">
      <div className="col-start-1 row-span-2 flex h-48 w-48 flex-shrink-0 items-center justify-center rounded bg-white p-2 sm:row-span-1 sm:row-start-1 sm:mb-4">
        <Image src={selfLogo} alt="AdamUhh Logo" />
      </div>
      <section className="flex flex-col justify-center gap-1 pb-2 pl-4 lg:pb-0 sm:row-start-2 sm:pl-0">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="font-jet text-3xl font-bold">AdamUhh</h1>
          <code className="h-6 rounded bg-[#4b4b4b] px-2 py-[1px] font-jetBrains text-white/50">
            full_stack.developer
          </code>
        </div>
        <div className="flex flex-wrap gap-1 text-lg font-medium text-main-FOREGROUND/80 sm:mt-4 sm:text-md">
          <div className="flex flex-wrap gap-1">
            <span className="border-accent pr-4 md:border-l-2 md:pl-4">
              Adam M.
            </span>
            <span className="border-l-2 border-accent pl-4 pr-4">Male</span>
          </div>
          <div className="flex flex-wrap gap-1">
            <span className="border-l-2 border-accent pl-4 pr-4">
              v{calculateAge()}.0.0 (Years Old)
            </span>
            <span className="border-l-2 border-accent pl-4 pr-4">
              Dubai (GMT+4)
            </span>
          </div>
        </div>
      </section>
      <section className="col-start-2 row-start-2 flex flex-col gap-2 pl-4 lg:col-span-2 lg:row-start-auto lg:pl-0 lg:pt-4">
        <p>
          Hi there! I&apos;m Adam, a full-stack web developer with expertise in
          front-end and back-end technologies.
        </p>
        <div className="flex gap-3 text-sm tracking-wide font-medium text-white/80">
          <Link
            href={"https://cv.adamuhh.dev/"}
            className="rounded bg-sky-600 px-1.5 py-0.5 hover:bg-sky-600/90"
          >
            View CV
          </Link>
          <Link
            href={"/projects"}
            className="rounded bg-sky-700 px-1.5 py-0.5 hover:bg-sky-700/90"
          >
            View Projects
          </Link>
          <Link
            href={"https://github.com/AdamUhh"}
            className="rounded bg-sky-800 px-1.5 py-0.5 hover:bg-sky-800/90"
            target="_blank"
          >
            View Github
          </Link>
        </div>
      </section>
    </div>
  );
}

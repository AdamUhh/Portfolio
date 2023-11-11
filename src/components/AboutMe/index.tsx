"use client";

import Image from "next/image";
import Link from "next/link";
import { calculateAge } from "utils/calculateAge";
import { skillDict } from "utils/pageLists";
import { selfLogo } from "../../assets";

export default function AboutMe() {
  return (
    <div className="h-full w-full overflow-y-auto overflow-x-hidden py-5">
      <div className="flex px-5 pb-4 pt-2">
        <div className="min-w-48 min-h-48 flex h-48 w-48 flex-shrink-0 items-center justify-center rounded-md bg-white p-2">
          <Image src={selfLogo} alt="AdamUhh Logo" />
        </div>
        <div className="flex flex-col justify-center gap-3 pl-4">
          <div className="flex items-center gap-2">
            <h4 className="h-11 text-3xl font-semibold">AdamUhh</h4>
            <code className="h-6 rounded-md bg-[#4b4b4b] px-2 py-[1px] text-white/50">
              full_stack.developer
            </code>
          </div>
          <div className="flex text-lg font-medium">
            <h5 className="pr-4">Adam M.</h5>
            <h5 className="border-l-2 border-l-accent px-4">Male</h5>
            <h5 className="border-x-2 border-x-accent px-4">
              v{calculateAge()}.0.0 (Years Old)
            </h5>
            <h5 className="pl-4">Dubai (GMT+4)</h5>
          </div>
          <p>
            Hi there! I&apos;m Adam, a full-stack web developer with pretty
            decent expertise in front-end and back-end technologies.
          </p>
          <div className="flex gap-3 text-sm font-semibold">
            <Link
              href={"/cv"}
              className="rounded-[2px] bg-sky-600 px-1 py-[1px]"
            >
              View CV
            </Link>
            <Link
              href={"/projects"}
              className="rounded-[2px] bg-sky-700 px-1 py-[1px]"
            >
              View Projects
            </Link>
            <Link
              href={"https://github.com/AdamUhh"}
              className="rounded-[2px] bg-sky-800 px-1 py-[1px]"
              target="_blank"
            >
              View Github
            </Link>
          </div>
        </div>
      </div>
      <div className="flex border-b-2 border-b-white/30 px-5">
        <div className=" mb-[-2px] border-b-2 pb-2 text-xl font-bold">
          Details
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col px-5 py-2">
        <h4 className="text-3xl font-semibold">Introduction</h4>
        <p>
          Hi there! I&apos;m Adam, a full stack developer based in Dubai. My
          coding journey revolves around turning coffee into code, and
          transforming ideas into elegant solutions. I thrive on the thrill of
          problem-solving and the joy of clean code. When I&apos;m not immersed
          in the world of programming, you&apos;ll find me exploring new tech
          stacks, contributing to open source projects, or embarking on
          spontaneous adventures. Let&apos;s build something amazing together!
        </p>

        {/* <h4 className="text-3xl font-semibold pt-4">🔧 Skills</h4> */}
        <h4 className="pt-4 text-3xl font-semibold">Skills</h4>
        <div className="mx-auto grid w-fit grid-cols-3 gap-4 lg:grid-cols-1 xl:grid-cols-2">
          {Object.entries(skillDict).map(([category, skills]) => (
            <div
              key={category}
              className="relative w-fit min-w-[300px] rounded-lg border-[3px] border-white/30 p-4 lg:min-w-[200px] lg:min-w-full"
            >
              <div className="absolute right-1 top-[-5px] flex w-fit items-center gap-1 bg-main px-2">
                <div className="h-[10px] w-[10px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#ff5f57] hover:brightness-90" />
                <div className="h-[10px] w-[10px] flex-shrink-0 cursor-pointer rounded-full bg-[#febc2e] hover:brightness-90" />
                <div className="h-[10px] w-[10px] flex-shrink-0 cursor-pointer rounded-full bg-[#28c840] hover:brightness-90" />
              </div>
              <h5 className="w-full pt-2 text-md font-semibold">
                <span className="text-[#69BE7D]">.{category}</span> {"{"}
              </h5>
              <ul className="list-none pl-5">
                {skills.map(({ name, experience }) => (
                  <li key={name}>
                    {/* <span className="text-[#45ccf5]">{name}</span>: <span className="text-[#C1C1D8]">&quot;{experience}&quot;;</span> */}
                    <span className="text-[#45ccf5]">{name}</span>:{" "}
                    <span className="text-[#A676E0]">
                      &quot;{experience}&quot;;
                    </span>
                  </li>
                ))}
              </ul>
              {"}"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

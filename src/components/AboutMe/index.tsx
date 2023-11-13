"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { calculateAge } from "utils/calculateAge";
import { Skill, SkillExperience, skillDict, skillList } from "utils/lists";
import { selfLogo } from "../../assets";
import { cn } from "utils/cn";

type ExperienceFilterOptions = SkillExperience | "Show All";

const SkillCategory = ({
  category,
  skills,
  experienceFilter,
}: {
  category: string;
  skills: Skill[];
  experienceFilter: ExperienceFilterOptions;
}) => (
  <div className="relative w-fit min-w-[300px] rounded-lg border-[3px] border-faded p-4 pb-6 lg:min-w-full">
    <div className="absolute right-1 top-[-5px] flex w-fit items-center gap-1 bg-main px-2">
      <div className="h-[10px] w-[10px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#ff5f57] hover:brightness-90" />
      <div className="h-[10px] w-[10px] flex-shrink-0 cursor-pointer rounded-full bg-[#febc2e] hover:brightness-90" />
      <div className="h-[10px] w-[10px] flex-shrink-0 cursor-pointer rounded-full bg-[#28c840] hover:brightness-90" />
    </div>
    <h5 className="w-full pt-2 text-md font-semibold">
      <span className="text-aboutme-CLASS">.{category}</span> {"{"}
    </h5>
    <ul className="list-none pl-5 font-medium">
      {skills.map(({ name, experience }) => (
        <li
          key={name}
          className={
            experienceFilter === "Show All" || experience === experienceFilter
              ? ""
              : "opacity-40"
          }
        >
          <span className="text-aboutme-PROPERTY">{name}</span>:{" "}
          <span className="text-aboutme-VALUE">&quot;{experience}&quot;;</span>
        </li>
      ))}
    </ul>
    {"}"}
  </div>
);

export default function AboutMe() {
  const [experienceFilter, setExperienceFilter] =
    useState<ExperienceFilterOptions>("Show All");

  return (
    <div className="h-full w-full overflow-y-auto overflow-x-hidden py-5">
      <div className="flex px-5 pb-4 pt-2">
        <div className="min-w-48 min-h-48 flex h-48 w-48 flex-shrink-0 items-center justify-center rounded-md bg-white p-2">
          <Image src={selfLogo} alt="AdamUhh Logo" />
        </div>
        <div className="flex flex-col justify-center gap-3 pl-4">
          <div className="flex items-center gap-2">
            <h4 className="h-11 text-3xl font-semibold font-jet">AdamUhh</h4>
            <code className="h-6 rounded-md bg-[#4b4b4b] px-2 py-[1px] text-white/50 font-jetBrains">
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
      <div className="mb-3 flex border-b-2 border-b-faded px-5">
        <div className="mb-[-2px] border-b-2 pb-2 text-xl font-bold">
          Details
        </div>
      </div>
      <Sections>
        <DetailHeader name="👋 Introduction" />
        <p>
          Hello! I&apos;m Adam, a Full Stack Developer who&apos;s into creating
          practical applications. I&apos;m proficient in building responsive,
          user-friendly web applications. My overall approach to problem-solving
          and adaptability to new technologies makes me an asset in dynamic
          development environments - Change this its rubbish.
        </p>
        <p>
          Explore my
          <Link
            href={"/projects"}
            className="mx-1 rounded-[2px] bg-sky-700 px-1.5 py-0.5 text-ms font-semibold hover:bg-sky-700/90"
          >
            Projects
          </Link>
          and let&apos;s collaborate to turn your ideas into reality!
        </p>
      </Sections>
      <Sections>
        <DetailHeader name="💡Interests" />
        <p>
          In terms of development, my interests are centered around creating
          practical applications and websites. I have had a lot of fun
          developing desktop applications using Electron and am exploring
          cross-platform apps with AvaloniaUI. Additionally, I have a keen
          interest in design, using tools like Photoshop and Figma. Game
          development is on my radar too, as I am also slowly learning more
          about Unity, Unreal Engine 4, and Blender.
        </p>
      </Sections>
      <Sections>
        <DetailHeader name="🛠️What it's like to work with me" />
        <p>
          Working with me is like having a helpful teammate who&apos;s great at
          solving problems and learning new things fast. However, I&apos;m
          working on getting better at talking with others and gaining more
          experience in teamwork. The tech world is changing a lot, so I&apos;m
          staying on my toes to keep up with an open mind. While I might not be
          a networking pro yet, I&apos;m determined to grow and be a valuable
          part of the team.
        </p>
      </Sections>
      <Sections>
        <DetailHeader name="Skills" />
        <div className="relative flex flex-col items-center">
          <div className="skill-bar relative flex w-full flex-wrap justify-center space-x-4">
            <button
              className={cn(
                "z-10  flex h-8 w-fit items-center justify-center rounded-md bg-main px-4 text-center text-white/60",
                experienceFilter === "Show All" && "text-main-FOREGROUND",
              )}
              onClick={() => setExperienceFilter("Show All")}
            >
              Show All
            </button>
            {Object.values(skillList).map((experience) => (
              <button
                key={experience}
                type="button"
                className={cn(
                  "z-10 flex h-8 w-fit items-center justify-center rounded-md bg-main px-4 text-center text-white/60",
                  experienceFilter === experience && "text-main-FOREGROUND",
                )}
                onClick={() => setExperienceFilter(experience)}
              >
                {experience}
              </button>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-6 grid w-fit grid-cols-4 gap-4 2xl:grid-cols-3 xl:grid-cols-2 md:grid-cols-1">
          {Object.entries(skillDict).map(([category, skills]) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skills}
              experienceFilter={experienceFilter}
            />
          ))}
        </div>
      </Sections>
    </div>
  );
}

function DetailHeader({ name = "Introduction" }: { name: string }) {
  return <h4 className={"text-3xl font-semibold"}>{name}</h4>;
}

function Sections({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto flex w-full flex-col px-5 py-3">
      {children}
    </section>
  );
}
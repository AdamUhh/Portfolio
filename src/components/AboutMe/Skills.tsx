"use client";

import { useState } from "react";
import { cn } from "utils/cn";
import { skillDict, skillList } from "utils/lists";
import { DetailHeader, Sections } from ".";
import {
  ExperienceFilterOptions,
  FilterButtonProps,
  SkillCategoryProps,
  SkillItemProps,
} from "./types";

function SkillItem({ name, experience, experienceFilter }: SkillItemProps) {
  return (
    <li
      className={
        experienceFilter === "Show All" || experience === experienceFilter
          ? ""
          : "opacity-40"
      }
    >
      <span className="text-aboutme-PROPERTY">{name}</span>:{" "}
      <span className="text-aboutme-VALUE">&quot;{experience}&quot;;</span>
    </li>
  );
}

function SkillCategory({
  category,
  skills,
  experienceFilter,
}: SkillCategoryProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapsedClick = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "relative w-full min-w-[300px] rounded-lg border-[3px] border-main-FOREGROUND/10 p-4 pb-6 font-jetBrains lg:min-w-full",
        isCollapsed && "flex h-fit border-main-FOREGROUND/5",
      )}
    >
      <div className="absolute right-1 top-[-10px] flex w-fit items-center gap-1 bg-main px-2 text-sm text-main-FOREGROUND/50 ">
        <button
          type="button"
          onClick={handleCollapsedClick}
          className="flex cursor-pointer items-center opacity-60"
        >
          [ {isCollapsed ? "show" : "hide"} ]
        </button>
      </div>
      <div
        className={cn("text-md sm:text-ms", isCollapsed && "flex items-end")}
      >
        <h5 className="w-full pt-2 ">
          <span
            className={cn(
              "font-normal text-aboutme-CLASS",
              isCollapsed && "opacity-60",
            )}
          >
            .{category}
          </span>
          <span className="ml-2">&#123;</span>
        </h5>
        <ul
          className={cn(
            "h-fit list-none  pl-5 font-medium text-main-FOREGROUND/40",
            isCollapsed && "pl-0",
          )}
        >
          {isCollapsed
            ? "..."
            : skills.map(({ name, experience }) => (
                <SkillItem
                  key={name}
                  name={name}
                  experience={experience}
                  experienceFilter={experienceFilter}
                />
              ))}
        </ul>
        <span>&#125;</span>
      </div>
    </div>
  );
}

function FilterButton({ label, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      className={cn(
        "z-10 flex h-8 w-fit items-center justify-center bg-main px-4 text-center text-main-FOREGROUND/60 hover:text-main-FOREGROUND/90",
        isActive && "text-main-FOREGROUND ",
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          "flex h-full w-fit items-center border-b border-transparent hover:border-b-main-FOREGROUND/90 hover:text-main-FOREGROUND/90",
          isActive && "border-b-main-FOREGROUND/60",
        )}
      >
        {label}
      </span>
    </button>
  );
}

export default function Skills() {
  const [experienceFilter, setExperienceFilter] =
    useState<ExperienceFilterOptions>("Show All");

  return (
    <Sections>
      <DetailHeader name="Skills" />
      <div className="relative flex flex-col items-center">
        <div className="about-me-skill-bar relative flex w-full flex-wrap justify-center space-x-4">
          <FilterButton
            label="Show All"
            isActive={experienceFilter === "Show All"}
            onClick={() => setExperienceFilter("Show All")}
          />
          {Object.values(skillList).map((experience) => (
            <FilterButton
              key={experience}
              label={experience}
              isActive={experienceFilter === experience}
              onClick={() => setExperienceFilter(experience)}
            />
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
  );
}

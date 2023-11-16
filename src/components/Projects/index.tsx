"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cn } from "utils/cn";
import { I_ProjectList, projectList } from "utils/lists";
import NumberedList from "./LineNumber";

export default function Projects() {
  const params = useParams();
  const [urlHash, setUrlHash] = useState<string>("");

  useEffect(() => {
    setUrlHash(window.location.hash);

    const timeout = setTimeout(() => {
      setUrlHash("");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [params]);

  return (
    <NumberedList>
      <h1
        id="overview"
        className="border-b-1 border-white text-3xl font-medium"
      >
        Personal Projects
      </h1>
      <p className="mb-5 text-xl text-faded">
        These are some of the projects I have worked on:
      </p>
      {projectList.map((project) => (
        <div key={project.name}>
          <ProjectTemplate isActive={urlHash === project.route} {...project} />
          <br />
        </div>
      ))}
    </NumberedList>
  );
}

function ProjectTemplate({
  route,
  title,
  description,
  imgSrc,
  languagesUsed,
  sourceCodeUrl,
  viewDemoUrl,
  isActive,
}: I_ProjectList & { isActive?: boolean }) {
  return (
    <div
      id={route.replace("#", "")}
      className={cn(
        "grid grid-cols-[300px_1fr_1fr] gap-4 border-x-4 border-x-transparent px-1 py-2 transition-all duration-1000 xl:grid-cols-1",
        isActive
          ? " border-x-accent bg-explorer-HOVER duration-0"
          : "bg-transparent",
      )}
    >
      <Image src={imgSrc} alt="Lo-Flo Image" width={300} />
      <div className="col-span-2 flex flex-col text-md">
        <h1 id="#lo-flo" className="text-2xl font-semibold">
          {title}
        </h1>
        <h4 className="text-md text-white/50">{description}</h4>
        <div className="mb-3 mt-2 flex h-fit flex-wrap items-center gap-2 text-md font-medium">
          {languagesUsed.map((l) => (
            <div
              key={l.name}
              style={{
                backgroundColor: l.color || "",
                color: l.text || "inherit",
              }}
              className="h-fit w-fit rounded-md px-2 py-1 drop-shadow-md"
            >
              {l.name}
            </div>
          ))}
        </div>
        <div className="flex flex-grow gap-2 font-semibold">
          {sourceCodeUrl && (
            <Link
              href={sourceCodeUrl}
              className="mt-auto h-fit w-fit cursor-pointer border-2 border-sky-600 px-2 py-1 drop-shadow-md hover:bg-sky-600"
            >
              View Source Code
            </Link>
          )}
          {viewDemoUrl && (
            <Link
              href={viewDemoUrl}
              target="_blank"
              className="mt-auto h-fit w-fit cursor-pointer border-2 border-sky-600 px-2 py-1 drop-shadow-md hover:bg-sky-600"
            >
              View Live Site
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import ContactSection from "components/VSCode_Components/ContactSection";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projectList } from "utils/lists";
import NumberedList from "./LineNumber";
import ProjectTemplate from "./ProjectTemplate";

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
        className="border-b border-main-FOREGROUND text-3xl font-medium sm:text-2xl"
        id="overview"
      >
        Personal Projects
      </h1>
      <p className="mb-5 sm:mb-10 text-xl text-main-FOREGROUND/40 sm:text-md">
        These are some of the projects I have worked on:
      </p>
      {projectList.map((project) => (
        <ProjectTemplate
          key={project.name}
          isActive={urlHash === project.route}
          {...project}
        />
      ))}
      <ContactSection />
      <br />
    </NumberedList>
  );
}

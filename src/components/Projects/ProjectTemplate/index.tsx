import Image from "next/image";
import { useState } from "react";
import { cn } from "utils/cn";
import ActionButtons from "./ActionButtons";
import ProjectHeader from "./Header";
import LanguagesUsedSection from "./LanguagesUsed";
import ReadMoreSection from "./ReadMore";
import { ProjectTemplateProps } from "./types";

export default function ProjectTemplate({
  route,
  title,
  description,
  imgSrc,
  languagesUsed,
  sourceCodeUrl,
  viewDemoUrl,
  isActive,
  extra,
}: ProjectTemplateProps) {
  const [showReadMore, setShowReadMore] = useState(false);

  const handleReadMore = () => {
    setShowReadMore((prev) => !prev);
  };

  return (
    <div
      id={route.replace("#", "")}
      className={cn(
        "mb-16 grid grid-cols-[300px_1fr_1fr] gap-4 border-x-4 border-x-transparent px-1 py-2 transition-all duration-1000 xl:grid-cols-1 sm:mb-20",
        isActive
          ? "border-x-accent bg-common-HOVER duration-0"
          : "bg-transparent",
      )}
    >
      <Image src={imgSrc} alt={`${title} Image`} width={300} />
      <div className="col-span-2 flex flex-col text-md">
        <ProjectHeader title={title} description={description} />
        <ReadMoreSection showReadMore={showReadMore} extra={extra} />
        <LanguagesUsedSection languagesUsed={languagesUsed} />
        <ActionButtons
          isExtra={!!(extra && extra.length > 0)}
          sourceCodeUrl={sourceCodeUrl}
          viewDemoUrl={viewDemoUrl}
          handleReadMore={handleReadMore}
          showReadMore={showReadMore}
        />
      </div>
    </div>
  );
}

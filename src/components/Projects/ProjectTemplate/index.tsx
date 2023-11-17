import Image from "next/image";
import { useState } from "react";
import { cn } from "utils/cn";
import { I_ProjectList } from "utils/lists";
import ActionButtons from "./ActionButtons";
import ProjectHeader from "./Header";
import LanguagesUsedSection from "./LanguagesUsed";
import ReadMoreSection from "./ReadMore";

interface ProjectTemplateProps extends I_ProjectList {
  isActive?: boolean;
}

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
        "grid grid-cols-[300px_1fr_1fr] gap-4 border-x-4 border-x-transparent px-1 py-2 transition-all duration-1000 xl:grid-cols-1",
        isActive
          ? " border-x-accent bg-explorer-HOVER duration-0"
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

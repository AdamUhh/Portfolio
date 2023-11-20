import { ProjectHeaderProps } from "./types";

export default function ProjectHeader({
  title,
  description,
}: ProjectHeaderProps) {
  return (
    <>
      <h1 id="#lo-flo" className="text-2xl font-bold sm:mb-2 sm:mt-1">
        {title}
      </h1>
      <h4 className="text-md text-main-FOREGROUND/50">{description}</h4>
    </>
  );
}

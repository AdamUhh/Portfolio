import { ProjectHeaderProps } from "./types";

export default function ProjectHeader({
  title,
  description,
}: ProjectHeaderProps) {
  return (
    <>
      <h1 id="#lo-flo" className="text-2xl font-semibold">
        {title}
      </h1>
      <h4 className="text-md text-white/50">{description}</h4>
    </>
  );
}

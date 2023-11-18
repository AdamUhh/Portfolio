import { I_LanguagesUsed } from "utils/lists/projectsList";

export default function LanguagesUsedSection({
  languagesUsed,
}: I_LanguagesUsed) {
  return (
    <div className="mb-3 mt-2 flex h-fit flex-wrap items-center gap-2 text-ms font-jetBrains font-medium ">
      {languagesUsed.map((l: any) => (
        <div
          key={l.name}
          style={{
            backgroundColor: l.bgColor || "",
            color: l.color || "inherit",
          }}
          className="h-fit w-fit rounded px-2 py-1"
        >
          {l.name}
        </div>
      ))}
    </div>
  );
}

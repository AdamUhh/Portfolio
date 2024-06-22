import { Fragment } from "react";
import { ReadMoreSectionProps } from "./types";

export default function ReadMoreSection({
  extra,
}: ReadMoreSectionProps) {
  if (extra && extra.length > 0)
    return (
      <div className="flex flex-col">
        {extra.map((e: any) => (
          <Fragment key={e.title}>
            <h2 className="mt-2 text-2xl font-bold">{e.title}</h2>
            {e.description.map((d: string) => (
              <p key={d} className="mb-1 text-md text-main-FOREGROUND/50">
                {d}
              </p>
            ))}
          </Fragment>
        ))}
      </div>
    );

  return <></>;
}

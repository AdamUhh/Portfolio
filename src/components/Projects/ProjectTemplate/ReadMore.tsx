import { Fragment } from "react";
import { ReadMoreSectionProps } from "./types";

export default function ReadMoreSection({
  showReadMore,
  extra,
}: ReadMoreSectionProps) {
  if (showReadMore && extra && extra.length > 0)
    return (
      <>
        {extra.map((e: any) => (
          <Fragment key={e.title}>
            <h2 className="mt-2 text-2xl font-semibold">{e.title}</h2>
            {e.description.map((d: string) => (
              <p key={d} className="mb-1 text-md text-main-FOREGROUND/50">
                {d}
              </p>
            ))}
          </Fragment>
        ))}
      </>
    );

  return <></>;
}

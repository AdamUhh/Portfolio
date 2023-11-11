"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const params = useParams();

  const [urlHash, setUrlHash] = useState<string>("");

  useEffect(() => {
    setUrlHash(window.location.hash);
  }, [params]);

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb">
        {pathSegments.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            <span>
              Portfolio &gt; {item} {urlHash && "> " + urlHash.replace("#", "")}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}

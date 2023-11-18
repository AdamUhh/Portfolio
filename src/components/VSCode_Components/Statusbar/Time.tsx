"use client";

import { useEffect, useState } from "react";

export default function Time({ isHome = false }: { isHome?: boolean }) {
  const [formattedTime, setFormattedTime] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const _date = new Date();
      setFormattedTime(_date.toLocaleTimeString());
      setFormattedDate(_date.toLocaleDateString());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  if (isHome)
    return (
      <div className="text-right text-sm">
        {formattedTime} <br />
        {formattedDate}
      </div>
    );

  return <span>{formattedTime}</span>;
}

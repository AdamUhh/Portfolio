"use client";

import { useEffect, useState } from "react";

export default function Time() {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const _date = new Date();
      setFormattedTime(_date.toLocaleTimeString());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return <span>{formattedTime}</span>;
}

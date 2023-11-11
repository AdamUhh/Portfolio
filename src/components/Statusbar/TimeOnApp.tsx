import React, { useState, useEffect } from "react";

export default function TimeOnApp() {
  const [startTime] = useState<Date>(new Date());
  const [timeOnSite, setTimeOnSite] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const elapsedTime = Math.floor(
        (new Date().getTime() - startTime.getTime()) / 1000,
      ); // in seconds
      setTimeOnSite(elapsedTime);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [startTime]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  };

  return (
      <span>{formatTime(timeOnSite)}</span>
  );
}

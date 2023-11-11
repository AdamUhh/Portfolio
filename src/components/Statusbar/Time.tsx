import { useEffect, useState } from "react";

export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="statusbar-button">
      <span>{formattedTime}</span>
    </div>
  );
}

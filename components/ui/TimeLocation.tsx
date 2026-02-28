"use client";

import { memo, useEffect, useState } from "react";

function TimeLocation() {
  const [time, setTime] = useState("");
  const location = "Bangalore, India";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-1 py-0 text-foreground/50 sm:text-base">
      <span>{time}</span>
      <span className="opacity-40">•</span>
      <span>{location}</span>
    </div>
  );
}

export default memo(TimeLocation);

"use client";

import { useEffect, useState } from "react";

export const GMT_OFFSET = 3;

export default function FooterClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-US", {
        timeZone: `Etc/GMT-${GMT_OFFSET}`,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    const tick = () => setTime(fmt());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="text-2xl">
      GMT+{GMT_OFFSET}
      {time ? ` → ${time}` : ""}
    </span>
  );
}

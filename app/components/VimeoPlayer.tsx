"use client";

import { useEffect, useRef, useState } from "react";

export default function VimeoPlayer({
  videoId,
  videoHash,
}: {
  videoId: number;
  videoHash?: string;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const src = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=1&autoplay=1&muted=0&player_id=0&app_id=58479${videoHash ? `&h=${videoHash}` : ""}`;

  return (
    <div
      ref={ref}
      style={{ paddingBottom: "56.25%", position: "relative" }}
      className="rounded-xl overflow-hidden"
    >
      {visible && (
        <iframe
          src={src}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="Vimeo video"
        />
      )}
    </div>
  );
}

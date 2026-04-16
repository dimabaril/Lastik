"use client";

import { useEffect, useRef } from "react";

export default function VimeoPlayer({
  videoId,
  videoHash,
}: {
  videoId: number;
  videoHash?: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let inView = false;

    const send = (method: string, value?: unknown) => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ method, value }),
        "https://player.vimeo.com",
      );
    };

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "https://player.vimeo.com") return;
      try {
        const data = JSON.parse(e.data as string);
        if (data.event === "ready") {
          send("setVolume", 1);
          if (inView) send("play");
        }
      } catch {}
    };

    window.addEventListener("message", handleMessage);

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        send(inView ? "play" : "pause");
      },
      { threshold: 0.3 },
    );

    observer.observe(iframe);
    return () => {
      observer.disconnect();
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const src = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&autoplay=0&muted=1&player_id=0&app_id=58479&api=1${videoHash ? `&h=${videoHash}` : ""}`;

  return (
    <div
      style={{ paddingBottom: "56.25%", position: "relative" }}
      className="rounded-xl overflow-hidden"
    >
      <iframe
        ref={iframeRef}
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
    </div>
  );
}

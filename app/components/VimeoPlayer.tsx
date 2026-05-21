"use client";

import { useEffect, useRef } from "react";

import { Vimeo } from "@/lib/projects";

const ASPECT_RATIO = 16 / 9;

export default function VimeoPlayer({
  id,
  hash,
  aspectRatio = ASPECT_RATIO,
}: Vimeo) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let ready = false;
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
          ready = true;
          send("setVolume", 1);
          if (inView) send("play");
        }
      } catch {}
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (ready) send(inView ? "play" : "pause");
      },
      { threshold: 0.8 },
    );

    window.addEventListener("message", handleMessage);
    observer.observe(iframe);

    return () => {
      window.removeEventListener("message", handleMessage);
      observer.disconnect();
    };
  }, [id, hash]);

  const src = `https://player.vimeo.com/video/${id}?muted=1&loop=1&autopause=0&api=1${hash ? `&h=${hash}` : ""}`;

  return (
    <div
      style={{ paddingBottom: `${100 / aspectRatio}%`, position: "relative" }}
      className="w-full overflow-hidden lg:rounded-xl"
    >
      <iframe
        ref={iframeRef}
        src={src}
        allow="autoplay; fullscreen; picture-in-picture"
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

"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Vimeo: {
      Player: new (iframe: HTMLIFrameElement) => {
        setVolume: (volume: number) => Promise<void>;
        on: (event: string, callback: () => void) => void;
      };
    };
  }
}

export default function VimeoPlayer({ videoId }: { videoId: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const tryUnmute = () => {
      if (!window.Vimeo) return;
      const player = new window.Vimeo.Player(iframe);
      player.on("play", () => {
        player.setVolume(1).catch(() => {});
      });
    };

    if (window.Vimeo) {
      tryUnmute();
    } else {
      const interval = setInterval(() => {
        if (window.Vimeo) {
          tryUnmute();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div
      style={{ paddingBottom: "56.25%", position: "relative" }}
      className="rounded-xl overflow-hidden"
    >
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&autoplay=1&muted=1&player_id=0&app_id=58479`}
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

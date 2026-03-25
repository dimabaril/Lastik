"use client";

import { useEffect, useRef } from "react";

interface ProjectCardProps {
  title: string;
  span: string;
  videoId: string;
}

interface VimeoPlayer {
  play: () => Promise<void>;
  pause: () => Promise<void>;
}

declare global {
  interface Window {
    Vimeo: {
      Player: new (iframe: HTMLIFrameElement) => VimeoPlayer;
    };
  }
}

export default function ProjectCard({
  title,
  span,
  videoId,
}: ProjectCardProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // const player = new (window as any).Vimeo.Player(iframe);
    const player = new window.Vimeo.Player(iframe);
    const container = iframe.parentElement?.parentElement;

    const handleMouseEnter = () => player.play();
    const handleMouseLeave = () => player.pause();
    const handleTouchStart = () => player.play();
    const handleTouchEnd = () => player.pause();

    // pc
    container?.addEventListener("mouseenter", handleMouseEnter);
    container?.addEventListener("mouseleave", handleMouseLeave);

    // mobile
    container?.addEventListener("touchstart", handleTouchStart);
    container?.addEventListener("touchend", handleTouchEnd);

    return () => {
      container?.removeEventListener("mouseenter", handleMouseEnter);
      container?.removeEventListener("mouseleave", handleMouseLeave);
      container?.removeEventListener("touchstart", handleTouchStart);
      container?.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      className={`${span} relative rounded-2xl p-[10_10_48_10] border border-dashed border-transparent hover:border-white/70 overflow-hidden`}
    >
      <span className="absolute bottom-3 left-3 text-white/90 underline underline-offset-4">
        {title}
      </span>
      <div
        style={{
          paddingBottom: "56.25%",
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&controls=0&player_id=0&app_id=58479`}
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
          title={title}
        />
      </div>
    </div>
  );
}

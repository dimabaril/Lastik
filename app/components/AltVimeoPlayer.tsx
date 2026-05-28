"use client";

import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

import { Vimeo } from "@/lib/projects";

const ASPECT_RATIO = 16 / 9;

export default function VimeoPlayer({
  id,
  hash,
  aspectRatio = ASPECT_RATIO,
}: Vimeo) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const player = new Player(container, {
      url: `https://vimeo.com/${id}${hash ? `/${hash}` : ""}`,
      muted: true,
      loop: true,
      autopause: false,
      responsive: true,
    });

    player.setVolume(1).catch(() => {});
    // player.ready().then(() => {
    //   player.setMuted(false).catch(() => {});
    // });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) player.play().catch(() => {});
        else player.pause().catch(() => {});
      },
      { threshold: 0.8 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      player.destroy();
    };
  }, [id, hash]);

  return (
    <div
      ref={containerRef}
      style={{ aspectRatio: String(aspectRatio) }}
      className="w-full overflow-hidden lg:rounded-xl"
    />
  );
}

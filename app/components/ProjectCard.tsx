"use client";

import Link from "next/link";
import { useRef } from "react";

interface ProjectCardProps {
  title: string;
  thumbVideo: string;
  slug: string;
}

export default function ProjectCard({
  title,
  thumbVideo,
  slug,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <Link
      href={`/projects/${slug}`}
      className="w-full h-full relative rounded-2xl border border-dashed border-transparent hover:border-white/70 overflow-hidden cursor-pointer block p-[12_12_40_12]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={thumbVideo}
        loop
        muted
        playsInline
        className="w-full h-full rounded-lg"
      />

      <span className="absolute bottom-3 left-3 text-white/90 underline underline-offset-4">
        {title}
      </span>
    </Link>
  );
}

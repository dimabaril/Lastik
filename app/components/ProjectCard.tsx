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
      className="flex flex-col rounded-2xl border border-dashed border-transparent hover:border-white/70 overflow-hidden cursor-pointer p-3"
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
        className="rounded-lg"
      />

      <span className="text-white/90 underline underline-offset-4 pt-2">
        {title}
      </span>
    </Link>
  );
}

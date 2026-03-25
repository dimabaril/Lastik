"use client";

import Link from "next/link";
import { useRef } from "react";

interface ProjectCardProps {
  title: string;
  span: string;
  thumbVideo: string;
  slug: string;
}

export default function ProjectCard({
  title,
  span,
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
      className={`${span} relative rounded-2xl p-[10_10_48_10] border border-dashed border-transparent hover:border-white/70 overflow-hidden cursor-pointer hover:scale-105 transition-transform ease-in-out duration-500 block`}
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
        className="w-full h-full rounded-lg object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
      <span className="absolute bottom-3 left-3 text-white/90 underline underline-offset-4">
        {title}
      </span>
    </Link>
  );
}

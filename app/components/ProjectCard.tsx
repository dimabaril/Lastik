"use client";

import Link from "next/link";
import { useRef } from "react";

interface ProjectCardProps {
  title: string;
  thumbVideo: string;
  slug: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  thumbVideo,
  slug,
  tags = [],
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
      className="group flex flex-col rounded-2xl border border-dashed border-transparent hover:border-white/70 overflow-hidden p-3 cursor-pointer"
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

      <div className="flex items-center justify-between pt-2">
        <div className="shrink-0">{title}</div>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border rounded-full px-2 py-0.5 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

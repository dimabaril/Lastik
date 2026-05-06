"use client";

import Link from "next/link";
import { useRef } from "react";

import { Thumb } from "@/lib/projects";
import { useIsMobile } from "./MobileProvider";

interface ProjectPreviewCardProps {
  title: string;
  thumb: Thumb;
  slug: string;
  tags?: readonly string[];
}

export default function ProjectPreviewCard({
  title,
  thumb,
  slug,
  tags = [],
}: ProjectPreviewCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  const gifPath = thumb.video?.replace(".webm", ".gif");

  const handlePlay = () => {
    videoRef.current?.play().catch(() => {});
  };

  const handlePause = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    // video.currentTime = 0;
  };

  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-dashed border-transparent p-3 sm:hover:border-(--fade-color)"
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
      // onTouchStart={handlePlay}
      // onTouchEnd={handlePause}
    >
      {isMobile && gifPath ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={gifPath} alt={title} className="w-full rounded-lg" />
      ) : (
        <video
          ref={videoRef}
          src={thumb.video}
          poster={thumb.poster}
          preload="metadata"
          loop
          muted
          playsInline
          className="w-full rounded-lg"
        />
      )}

      <div className="flex flex-wrap justify-between pt-2">
        <div className="font-unbounded shrink-0 gap-2 text-base font-light">
          {title}
        </div>
        <div className="font-unbounded flex divide-x text-base font-light text-(--fade-color) transition-all duration-300 md:opacity-0 md:group-hover:opacity-100">
          {tags.map((tag) => (
            <span key={tag} className="px-1.5 whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

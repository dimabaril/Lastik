"use client";

import Link from "next/link";
import { useRef } from "react";

import { Thumb } from "@/lib/projects";

// Global: only one video playing at a time to prevent mobile crashes
let activeVideo: HTMLVideoElement | null = null;

// Hard release of memory buffer for iOS Safari
function releaseVideo(video: HTMLVideoElement) {
  video.pause();
  video.removeAttribute("src");
  video.load();
}

interface ProjectPreviewCardProps {
  title: string;
  thumb: Thumb;
  slug: string;
  tags?: readonly string[];
  size?: number;
}

export default function ProjectPreviewCard({
  title,
  thumb,
  slug,
  tags = [],
  size,
}: ProjectPreviewCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    // Only for desktop
    if (window.matchMedia("(hover: none)").matches) return;
    const video = videoRef.current;
    if (!video) return;

    if (!video.src && thumb.video) video.src = thumb.video;
    if (activeVideo && activeVideo !== video) releaseVideo(activeVideo);

    activeVideo = video;
    video.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    // Only for desktop
    if (window.matchMedia("(hover: none)").matches) return;
    const video = videoRef.current;
    if (video) {
      releaseVideo(video);
      if (activeVideo === video) activeVideo = null;
    }
  };

  const handleTouchStart = () => {
    const video = videoRef.current;
    if (!video) return;

    // Load src on demand
    if (!video.src && thumb.video) video.src = thumb.video;

    // Clear previous video from memory so browser doesn't crash!
    if (activeVideo && activeVideo !== video) releaseVideo(activeVideo);

    activeVideo = video;
    video.play().catch(() => {});
  };

  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-dashed border-transparent p-3 sm:hover:border-(--fade-color)"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      {/* poster as img holds the block height — no layout jumps */}
      <div className="relative w-full overflow-hidden rounded-lg">
        {thumb.poster && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb.poster}
            alt={title}
            className="block w-full rounded-lg"
          />
        )}
        {thumb.video && (
          <video
            ref={videoRef}
            poster={thumb.poster}
            preload="none"
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full rounded-lg object-cover"
          />
        )}
      </div>

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

"use client";

import Link from "next/link";
import { useRef } from "react";

import { Thumb } from "@/lib/projects";

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
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    // video.currentTime = 0;
  };

  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-dashed border-transparent p-3 sm:hover:border-(--fade-color)"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      {thumb.video ? (
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
      ) : thumb.poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={thumb.poster} alt={title} className="w-full rounded-lg" />
      ) : null}

      <div className="flex flex-wrap justify-between pt-2">
        <div className="font-unbounded shrink-0 gap-2 text-base font-light">
          {title}
          {/* size for debug */}
          {size && <span className="absolute top-4 right-5">{size}</span>}
        </div>
        <div className="font-unbounded flex divide-x text-base font-light text-(--fade-color) transition-all duration-300 md:opacity-0 md:group-hover:opacity-100">
          {/* <div className="flex gap-1 font-unbounded font-light text-base text-(--fade-color) transition-all duration-300"> */}
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

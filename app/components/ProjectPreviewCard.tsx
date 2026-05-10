"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { Thumb } from "@/lib/projects";
import { useIsTouch } from "./TouchProvider";

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
  const isTouch = useIsTouch();

  const videoRef = useRef<HTMLVideoElement>(null);

  // Mobile: autoplay when visible
  useEffect(() => {
    if (!isTouch) return;
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 1 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isTouch]);

  const handleMouseEnter = () => {
    if (isTouch) return;
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
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
    >
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

      <div className="flex flex-wrap justify-between pt-2">
        <div className="font-unbounded shrink-0 gap-2 text-base font-light">
          {title}
          {/* size for debug */}
          {/* {size && <span className="absolute top-4 right-5">{size}</span>} */}
        </div>
        <div
          className={`font-unbounded flex divide-x text-base font-light text-(--fade-color) transition-all duration-300 ${!isTouch ? "opacity-0 group-hover:opacity-100" : ""}`}
        >
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

"use client";

import Link from "next/link";
import { useRef } from "react";

interface ProjectPreviewCardProps {
  title: string;
  thumbVideo?: string;
  thumbVideoPosterImage?: string;
  slug: string;
  tags?: readonly string[];
  size?: number;
}

export default function ProjectPreviewCard({
  title,
  thumbVideo,
  thumbVideoPosterImage,
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
      className="relative group flex flex-col rounded-2xl border border-dashed border-transparent hover:border-(--fade-color) overflow-hidden p-3 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      {thumbVideo ? (
        <video
          ref={videoRef}
          src={thumbVideo}
          poster={thumbVideoPosterImage}
          loop
          muted
          playsInline
          className="rounded-lg"
        />
      ) : thumbVideoPosterImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbVideoPosterImage}
          alt={title}
          className="rounded-lg w-full object-cover"
        />
      ) : null}

      <div className="flex items-center justify-between pt-2">
        <div className="shrink-0 font-manrope text-xl flex items-center gap-2">
          {title}
          {/* size for debug */}
          {size && (
            <span className="text-(--fade-color) absolute top-4 right-5">
              debug block wide: {size}
            </span>
          )}
        </div>
        <div className="flex gap-1 font-victor-mono text-lg text-(--fade-color) opacity-0 group-hover:opacity-100 transition-all duration-300">
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

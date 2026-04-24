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
          preload="metadata"
          loop
          muted
          playsInline
          className="rounded-lg w-full"
        />
      ) : thumbVideoPosterImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbVideoPosterImage}
          alt={title}
          className="rounded-lg w-full"
        />
      ) : null}

      <div className="flex flex-wrap justify-between pt-2">
        <div className="shrink-0 font-unbounded font-light text-base  gap-2">
          {title}
          {/* size for debug */}
          {size && <span className="absolute top-4 right-5">{size}</span>}
        </div>
        <div className="flex gap-1 font-unbounded font-light text-base text-(--fade-color) md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
          {/* <div className="flex gap-1 font-unbounded font-light text-base text-(--fade-color) transition-all duration-300"> */}
          {tags.map((tag, i) => (
            <span key={tag} className="py-0.5 whitespace-nowrap">
              {i === 0 ? "#" : "/"}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

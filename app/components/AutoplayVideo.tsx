"use client";

import { useEffect, useRef } from "react";

export default function AutoplayVideo({
  src,
  className,
}: {
  src: string | undefined;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={ref} src={src} loop muted playsInline className={className} />
  );
}

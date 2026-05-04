import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Aside.module.css";

const asidePicksOriginal = [
  "/aside-pics/2 (3).png",
  "/aside-pics/Group 4.png",
  // "/aside-pics/SBER_DRUGS_16_v02.png",
  "/aside-pics/SBER_DRUGS_17_v02.png",
  "/aside-pics/bored_cat.png",
  "/aside-pics/d7a7e715-d3a5-49b7-8294-a0e3e21f1538.png",
  "/aside-pics/d7f721ca-d03a-4b37-9114-2a984b7a875f.png",
  "/aside-pics/ear copy.png",
  "/aside-pics/fire.png",
  // "/aside-pics/r-o-c-s- (1080p)_1_prob425.png",
  "/aside-pics/мобильник с кубом.png",
  "/aside-pics/осьминог.png",
  "/aside-pics/робот 1.png",
  "/aside-pics/Mask group (1).png",
  "/aside-pics/Mask group.png",
  "/aside-pics/Rectangle 18.png",
  "/aside-pics/Rectangle 19.png",
  "/aside-pics/Rectangle 32.png",
  "/aside-pics/SBER_DRUGS_11_v01 1.png",

  "/aside-pics/zub_soft_128.webm",
  "/aside-pics/tab_new_128.webm",
];

const asidePics = asidePicksOriginal.sort(() => Math.random() - 0.5);

const SPEED = 42; // px/sec

export default function Aside() {
  const images = [...asidePics, ...asidePics];
  const isVideo = (src: string) => /\.(webm|mp4|mov)$/i.test(src);
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    let cancelled = false;

    const waitForElement = (el: HTMLImageElement | HTMLVideoElement) =>
      new Promise<void>((resolve) => {
        if (el instanceof HTMLImageElement && el.complete) return resolve();
        if (el instanceof HTMLVideoElement && el.readyState >= 2)
          return resolve();
        const onDone = () => resolve();
        const event =
          el instanceof HTMLVideoElement ? "loadedmetadata" : "load";
        el.addEventListener(event, onDone, { once: true });
        el.addEventListener("error", onDone, { once: true });
      });

    const calculateDuration = () => {
      // Половина трека — это один полный цикл (массив задублирован)
      const halfHeight = track.scrollHeight / 2;
      setDuration(halfHeight / SPEED);
    };

    const elements = [
      ...track.querySelectorAll<HTMLImageElement>("img"),
      ...track.querySelectorAll<HTMLVideoElement>("video"),
    ];

    Promise.all(elements.map(waitForElement)).then(() => {
      if (cancelled) return;
      calculateDuration();
    });

    // Пересчитываем высоту когда элемент становится видимым
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && track.scrollHeight > 0) {
          calculateDuration();
          observer.disconnect();
        }
      });
    });

    observer.observe(track);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  return (
    <aside className="fixed top-0 right-0 z-30 w-38 overflow-hidden p-3">
      <div
        ref={trackRef}
        className={`flex flex-col gap-5 ${duration > 0 ? styles.track : ""}`}
        style={{ "--scroll-duration": `${duration}s` } as React.CSSProperties}
      >
        {images.map((src, i) =>
          isVideo(src) ? (
            <video key={i} src={src} width={128} autoPlay loop muted />
          ) : (
            <Image
              key={i}
              src={src}
              alt={`aside-pic-${i}`}
              width={128}
              height={128}
              loading="eager"
            />
          ),
        )}
      </div>
    </aside>
  );
}

import Image from "next/image";
import { useEffect, useRef } from "react";

const asidePicksOriginal = [
  "/aside-pics/2 (3).png",
  "/aside-pics/Group 4.png",
  "/aside-pics/SBER_DRUGS_16_v02.png",
  "/aside-pics/SBER_DRUGS_17_v02.png",
  "/aside-pics/bored_cat.png",
  "/aside-pics/d7a7e715-d3a5-49b7-8294-a0e3e21f1538.png",
  "/aside-pics/d7f721ca-d03a-4b37-9114-2a984b7a875f.png",
  "/aside-pics/ear copy.png",
  "/aside-pics/fire.png",
  "/aside-pics/r-o-c-s- (1080p)_1_prob425.png",
  "/aside-pics/мобильник с кубом.png",
  "/aside-pics/осьминог.png",
  "/aside-pics/робот 1.png",
  "/aside-pics/Mask group (1).png",
  "/aside-pics/Mask group.png",
  "/aside-pics/Rectangle 18.png",
  "/aside-pics/Rectangle 19.png",
  "/aside-pics/Rectangle 32.png",
  "/aside-pics/SBER_DRUGS_11_v01 1.png",

  "/aside-pics/zub2.webm",
  // "/aside-pics/TAB_16_v02 (3).webm",
];

const asidePics = asidePicksOriginal.sort(() => Math.random() - 0.5);

export default function Aside() {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemHeight = 128;
  const gap = 20; // gap-5 in pixels
  // высота считается не правильно потому что блоки не по 128 в высоту
  const totalHeight =
    asidePics.length * itemHeight + (asidePics.length - 1) * gap;

  const images = [...asidePics, ...asidePics];

  const isVideo = (src: string) => /\.(webm|mp4|mov)$/i.test(src);

  useEffect(() => {
    let offset = 0;
    let frame: number;
    function animate() {
      offset += 0.7;
      if (offset >= totalHeight) offset = 0;
      // Напрямую мутируем DOM — без ре-рендера React
      if (trackRef.current) {
        trackRef.current.style.transform = `translateY(-${offset}px)`;
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [totalHeight]);

  return (
    <aside className="fixed top-0 right-0 z-20 w-32 p-3">
      <div
        ref={trackRef}
        className="flex flex-col gap-5"
        style={{ willChange: "transform" }}
      >
        {images.map((src, i) =>
          isVideo(src) ? (
            <video
              key={i}
              src={src}
              width={128}
              height={128}
              autoPlay
              loop
              muted
              // className="h-32 w-32 object-cover"
            />
          ) : (
            <Image
              key={i}
              src={src}
              alt={`aside-pic-${i}`}
              width={128}
              height={128}
            />
          ),
        )}
      </div>
    </aside>
  );
}

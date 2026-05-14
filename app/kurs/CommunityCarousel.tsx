"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const IMAGES = [
  "/kurs/carousel/f82c6970100db66e561ab5285875782c8c23a8b9.png",
  "/kurs/carousel/254e3754f0c5b6e2535acb6b3496361cdb6fefb8.png",
  "/kurs/carousel/6d67669d46c14bcf12139a9d8afe04aeab775f3f.png",
  "/kurs/carousel/0ba81865b5c84cf85725f339bd7addb32acfd34d.png",
  "/kurs/carousel/412772cf54339219cd6315fbcf1c5cbedf8e0780.gif",
  "/kurs/carousel/a80ba7a74408420512aeb716449b9b87b373fb71.png",
  "/kurs/carousel/ea28985dd1e76de45941fb756685179fd5f02a26.jpg",
  "/kurs/carousel/a2dbc33d9bd164fb525b3b8e65db053701fd4cc7.png",
  "/kurs/carousel/59953051c5c565d084b7ccb0faee8d18f40a8f0f.jpg",
];

export default function CommunityCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSetApi = useCallback((api: CarouselApi) => {
    setApi(api);
    api?.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, []);

  return (
    <Carousel
      opts={{ align: "center", loop: true }}
      className="w-full"
      setApi={onSetApi}
    >
      <CarouselContent className="-ml-4">
        {IMAGES.map((src, i) => (
          <CarouselItem key={i} className="basis-auto pl-6">
            <div className="h-170 overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Работа участника ${i + 1}`}
                width={0}
                height={0}
                sizes="33vw"
                className="h-full w-auto object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 flex items-center justify-center gap-4">
        <CarouselPrevious className="static size-16 translate-y-0" />
        <div className="flex gap-2">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-white/60" : "w-2.5 bg-white/30"
              }`}
            />
          ))}
        </div>
        <CarouselNext className="static size-16 translate-y-0" />
      </div>
    </Carousel>
  );
}

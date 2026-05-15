"use client";
import { ReactNode } from "react";

export default function GongClickWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const playGong = () => {
    const audio = new Audio("/kurs/gong.mp3");
    audio
      .play()
      .catch((err) => console.error("Ошибка при воспроизведении звука:", err));
  };

  return (
    <div onClick={playGong} className={`cursor-pointer ${className}`}>
      {children}
    </div>
  );
}

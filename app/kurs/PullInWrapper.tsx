"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface PullInWrapperProps {
  children: ReactNode;
  pullOutDistance?: string; // px, %, calc(), etc.
}

export default function PullInWrapper({
  children,
  pullOutDistance = "150%",
}: PullInWrapperProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.6,
      },
    );

    observer.observe(trigger);

    return () => {
      observer.unobserve(trigger);
    };
  }, []);

  return (
    <>
      {/* Невидимый триггер для отслеживания видимости */}
      <div ref={triggerRef} />

      {/* Контейнер, который задвигается */}
      <div
        ref={containerRef}
        className="transition-transform duration-1500 ease-in-out"
        style={{
          transform: !isVisible
            ? `translateX(${pullOutDistance})`
            : "translateX(0)",
        }}
      >
        {children}
      </div>
    </>
  );
}

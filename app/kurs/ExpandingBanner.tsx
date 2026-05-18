"use client";

import { useEffect, useRef, useState } from "react";

export default function ExpandingBanner({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [maxWidth, setMaxWidth] = useState(1280);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      // progress: 0 когда элемент только появился снизу, 1 когда его центр в середине экрана
      const start = vh; // rect.top при первом появлении
      const end = vh / 3 - rect.height / 2; // rect.top когда центр элемента = 1/3 сверху экрана
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end)),
      );

      setMaxWidth(800 + (vw - 800) * progress);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div ref={ref} className="">
      <div
        className={`mx-auto ${className ?? ""}`}
        style={{
          maxWidth: `${maxWidth}px`,
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
}

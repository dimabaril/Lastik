"use client";

import { useState, useRef, useEffect } from "react";
import ProjectPreviewCard from "./ProjectPreviewCard";

const ROW_CAPACITY = 10;

interface Project {
  title: string;
  thumbVideo?: string;
  thumbVideoPosterImage?: string;
  slug: string;
  tags?: readonly string[];
  size?: number;
}

function buildRows(projects: Project[]): Project[][] {
  const rows: Project[][] = [];
  let current: Project[] = [];
  let currentWeight = 0;

  for (const project of projects) {
    const weight = project.size ?? 5;
    if (currentWeight + weight > ROW_CAPACITY && current.length > 0) {
      rows.push(current);
      current = [];
      currentWeight = 0;
    }
    current.push(project);
    currentWeight += weight;
  }

  if (current.length > 0) rows.push(current);
  return rows;
}

export default function ProjectsGridFlex({
  projects,
}: {
  projects: Project[];
}) {
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(
    null,
  );
  const gridRef = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState<number>(0);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      setMinHeight((prev) => Math.max(prev, el.scrollHeight));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const rows = buildRows(projects);

  return (
    <div
      ref={gridRef}
      className="flex flex-col gap-3"
      style={minHeight ? { minHeight } : undefined}
    >
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-start gap-3">
          {row.map((project, colIndex) => {
            const size = project.size ?? 5;
            const isHovered =
              hovered?.row === rowIndex && hovered?.col === colIndex;
            const grow = isHovered ? size * 2 : size;

            return (
              <div
                key={project.title}
                style={{
                  flex: `${grow} 1 0`,
                  transition: "flex 0.4s ease",
                }}
                onMouseEnter={() =>
                  setHovered({ row: rowIndex, col: colIndex })
                }
                onMouseLeave={() => setHovered(null)}
              >
                <ProjectPreviewCard
                  title={project.title}
                  thumbVideo={project.thumbVideo}
                  thumbVideoPosterImage={project.thumbVideoPosterImage}
                  slug={project.slug}
                  tags={project.tags}
                  size={size}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

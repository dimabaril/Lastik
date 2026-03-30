"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

const NUM_COLS = 3;

interface Project {
  title: string;
  thumbVideo: string;
  slug: string;
  tags?: string[];
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(
    null,
  );

  const rows: Project[][] = [];
  for (let i = 0; i < projects.length; i += NUM_COLS) {
    rows.push(projects.slice(i, i + NUM_COLS));
  }

  return (
    <div className="flex flex-col">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((project, colIndex) => (
            <div
              key={project.title}
              className=""
              style={{
                flex:
                  hovered?.row === rowIndex && hovered?.col === colIndex
                    ? 2
                    : 1,
                transition: "flex 0.5s ease",
              }}
              onMouseEnter={() => setHovered({ row: rowIndex, col: colIndex })}
              onMouseLeave={() => setHovered(null)}
            >
              <ProjectCard
                title={project.title}
                thumbVideo={project.thumbVideo}
                slug={project.slug}
                tags={project.tags}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
